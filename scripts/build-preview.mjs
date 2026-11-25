// Assemble le site construit (dist/) en une seule page d'aperçu, navigable par ancres (#accueil, #blog…),
// pour une prévisualisation hors hébergement. Usage : npm run build && node scripts/build-preview.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync, cpSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';

// Usage : node scripts/build-preview.mjs [dossier construit] [dossier de sortie]
const dist = process.argv[2] ?? 'dist';
const out = process.argv[3] ?? 'dist-preview';
const ascii = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-zA-Z0-9-]/g, '-');

const routes = [];
function walk(dir, route) {
  for (const entry of readdirSync(join(dist, dir), { withFileTypes: true })) {
    if (entry.isDirectory() && !['_astro', 'images', 'logo'].includes(entry.name)) walk(join(dir, entry.name), `${route}/${entry.name}`);
    else if (entry.name === 'index.html') routes.push({ route: route || '/', file: join(dist, dir, 'index.html') });
  }
}
walk('', '');

const idOf = (route) => (route === '/' ? 'accueil' : ascii(route.slice(1).replace(/\//g, '-')));
const pages = routes
  .map((r) => ({ ...r, id: idOf(r.route), html: readFileSync(r.file, 'utf8') }))
  .filter((p) => p.html.includes('<main')); // ignore les pages de redirection
const ids = new Map(pages.map((p) => [p.route, p.id]));

let css = '';
const seen = new Set();
for (const p of pages) {
  for (const m of p.html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)) {
    if (!seen.has(m[1])) { seen.add(m[1]); css += readFileSync(join(dist, m[1]), 'utf8'); }
  }
  for (const m of p.html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) {
    if (!seen.has(m[1])) { seen.add(m[1]); css += m[1]; }
  }
}
css = css.replace(/@font-face\s*\{[^}]*\}/g, '');

const rewrite = (html) =>
  html
    .replace(/href="(\/[^"#]*)(#[^"]*)?"/g, (all, path, hash) => {
      const route = decodeURI(path).replace(/\/$/, '') || '/';
      if (ids.has(route)) return `href="#${ids.get(route)}${hash ? '--' + hash.slice(1) : ''}"`;
      return all;
    })
    .replace(/(src|href)="\/(images|logo)\//g, '$1="$2/')
    .replace(/<script type="module"[\s\S]*?<\/script>/g, '');

const pick = (html, re) => (html.match(re) ?? [''])[0];
const home = pages.find((p) => p.id === 'accueil').html;
const header = rewrite(pick(home, /<header class="site-header[\s\S]*?<\/header>/));
const contactRe = /<section class="contact-band[\s\S]*?<\/section>/;
const contact = rewrite(pick(home, contactRe));
// Les pages entreprises ont leur propre bloc contact (devis au lieu de l'entretien offert).
const proPage = pages.find((p) => p.id === 'coach-entreprise');
const contactPro = proPage ? rewrite(pick(proPage.html, contactRe)) : contact;
const isPro = (html) => html.includes('Demander un devis');
const footer = rewrite(pick(home, /<footer[\s\S]*?<\/footer>/));

const views = pages
  .map((p) => {
    const main = pick(p.html, /<main[^>]*>[\s\S]*<\/main>/).replace(/^<main[^>]*>/, '').replace(/<\/main>$/, '');
    const title = pick(p.html, /<title>[\s\S]*?<\/title>/).replace(/<\/?title>/g, '');
    const hasContact = p.html.includes('class="contact-band') ? (isPro(pick(p.html, contactRe)) ? 'pro' : 'true') : 'false';
    return `<div class="view" data-view="${p.id}" data-title="${title.replace(/"/g, '&quot;')}" data-contact="${hasContact}" hidden>${rewrite(main)}</div>`;
  })
  .join('\n');

const page = `<title>Epsilon by Sabine</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400..800&family=Figtree:wght@300..900&family=Archivo:wdth,wght@62..125,100..900&family=Source+Sans+3:wght@200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..800;1,8..60,300..800&display=swap">
<style>
${css}
body::before { content: ""; position: fixed; inset: 0 0 auto; height: env(safe-area-inset-top, 0px); z-index: 10; background: var(--paper); }
.preview-flag { background: var(--night); color: var(--on-dark); font-size: 0.85rem; font-weight: 600; text-align: center; padding-block: 0.4rem; }
</style>
<p class="preview-flag"><span class="wrap" style="display:block">Aperçu du nouveau site Epsilon. La réservation et le blog seront reliés à Wix une fois le site en ligne.</span></p>
${header}
<main id="contenu">
${views}
</main>
<div id="contact-slot">${contact}</div>
<div id="contact-slot-pro" hidden>${contactPro.replace('id="contact"', 'id="contact-pro"')}</div>
${footer}
<script>
(function () {
  var views = Array.prototype.slice.call(document.querySelectorAll('.view'));
  var slot = document.getElementById('contact-slot');
  var slotPro = document.getElementById('contact-slot-pro');
  var current = null;
  function show() {
    var raw = decodeURIComponent(location.hash.slice(1)) || 'accueil';
    var parts = raw.split('--');
    var name = parts[0];
    var anchor = parts[1] || '';
    var find = function (n) { return views.filter(function (v) { return v.dataset.view === n; })[0]; };
    var view = find(name);
    if (!view) {
      if (current) {
        var inPage = current.querySelector('[id="' + raw + '"]');
        if (inPage) { inPage.scrollIntoView(); return; }
      }
      view = find('accueil');
      anchor = '';
    }
    views.forEach(function (v) { v.hidden = v !== view; });
    slot.hidden = view.dataset.contact !== 'true';
    slotPro.hidden = view.dataset.contact !== 'pro';
    var changed = current !== null && current !== view;
    current = view;
    var menu = document.querySelector('.nav-mobile'); if (menu) menu.open = false;
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    if (anchor) {
      var el = view.querySelector('[id="' + anchor + '"]');
      if (el) { el.scrollIntoView(); return; }
    }
    if (changed) window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', show);
  show();
  document.addEventListener('click', function (event) {
    var button = event.target.closest && event.target.closest('[data-book]');
    if (!button) return;
    var status = document.getElementById('booking-status');
    if (status) status.textContent = "Dans cet aperçu, la réservation n'est pas encore reliée à Wix Bookings. Sur le site en ligne, ce bouton ouvre le calendrier.";
  });
})();
</script>
`;

// Variante : la classe posée sur <html> est reportée sur un conteneur dans l'aperçu.
const variantClass = (home.match(/<html[^>]*class="([^"]+)"/) ?? [])[1];
const finalPage = variantClass
  ? page.replace('<title>Epsilon by Sabine</title>', `<title>${{ 'variant-humain': 'Epsilon, version chaleureuse', 'variant-authentique': 'Epsilon, version épurée' }[variantClass] ?? 'Epsilon by Sabine'}</title>`).replace('<p class="preview-flag">', `<div class="${variantClass}">\n<p class="preview-flag">`) + '\n</div>\n'
  : page;

if (existsSync(out)) rmSync(out, { recursive: true });
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'index.html'), finalPage);
cpSync(join(dist, 'images'), join(out, 'images'), { recursive: true });
cpSync(join(dist, 'logo'), join(out, 'logo'), { recursive: true });
const files = {};
for (const dir of ['images', 'logo']) for (const f of readdirSync(join(out, dir))) files[`${dir}/${f}`] = `${dir}/${f}`;
writeFileSync(join(out, 'files.json'), JSON.stringify(files, null, 1));
console.log(`Aperçu${variantClass ? ' (' + variantClass + ')' : ''} : ${pages.length} pages, ${(finalPage.length / 1024).toFixed(0)} Ko, ${Object.keys(files).length} fichiers.`);
