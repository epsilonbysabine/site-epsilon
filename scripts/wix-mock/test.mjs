// Test d'intégration Wix sans compte : construit le site contre un faux serveur Wix
// et vérifie que le blog et les prestations venus de Wix apparaissent dans les pages.
// Usage : npm run test:wix
import { spawnSync } from 'node:child_process';
import { readFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const out = 'dist-wixtest';
const log = join(tmpdir(), `wix-mock-${process.pid}.log`);
const result = spawnSync('npx', ['astro', 'build', '--outDir', out], {
  stdio: 'inherit',
  env: {
    ...process.env,
    PUBLIC_WIX_CLIENT_ID: '00000000-0000-4000-8000-000000000000',
    PUBLIC_WIX_FORM_ID: '33333333-3333-4333-8333-333333333333',
    WIX_MOCK_LOG: log,
    NODE_OPTIONS: `${process.env.NODE_OPTIONS ?? ''} --import ./scripts/wix-mock/fetch-mock.mjs`,
  },
});
if (result.status !== 0) process.exit(result.status ?? 1);

const requests = readFileSync(log, 'utf8').trim().split('\n').map((l) => JSON.parse(l).url);
const read = (p) => readFileSync(join(out, p), 'utf8');
const checks = [
  ['Jeton visiteur Wix demandé', requests.some((u) => u.includes('/oauth2/token'))],
  ['Articles lus depuis Wix Blog', requests.some((u) => u.includes('/posts/query'))],
  ['Prestations lues depuis Wix Bookings', requests.some((u) => u.includes('/bookings/v2/services/query'))],
  ["Page de l'article Wix générée", existsSync(join(out, 'post/article-de-test-wix/index.html'))],
  ['Contenu riche converti', existsSync(join(out, 'post/article-de-test-wix/index.html')) && read('post/article-de-test-wix/index.html').includes('<h2>Titre de section Ricos</h2>')],
  ['Texte de l’article échappé', existsSync(join(out, 'post/article-de-test-wix/index.html')) && !read('post/article-de-test-wix/index.html').includes('<script>alert(1)</script>')],
  ['Image de couverture Wix', read('blog/index.html').includes('static.wixstatic.com/media/a978eb_ddabe9a4')],
  ['Prestation Wix affichée', read('book-online/index.html').includes('Prestation de test venue de Wix')],
  ['Formulaire de contact activé', read('index.html').includes('id="contact-form"')],
];
let failed = 0;
for (const [label, ok] of checks) {
  console.log(`${ok ? '✓' : '✗'} ${label}`);
  if (!ok) failed++;
}
rmSync(out, { recursive: true, force: true });
rmSync(log, { force: true });
process.exit(failed ? 1 : 0);
