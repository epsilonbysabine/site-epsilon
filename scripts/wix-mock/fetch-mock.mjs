// Remplace fetch par un faux serveur Wix pour tester l'intégration sans compte Wix.
// Chaque requête est notée dans WIX_MOCK_LOG (une ligne JSON par requête).
import { appendFileSync } from 'node:fs';

const log = process.env.WIX_MOCK_LOG;
const realFetch = globalThis.fetch;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const post = {
  id: '11111111-1111-4111-8111-111111111111',
  title: 'Article de test venu de Wix',
  slug: 'article-de-test-wix',
  excerpt: 'Extrait renvoyé par le faux serveur Wix.',
  firstPublishedDate: '2026-10-01T09:00:00.000Z',
  minutesToRead: 4,
  media: { wixMedia: { image: { id: 'a978eb_ddabe9a4e24546aa9c25279d6d0eb66f~mv2.jpg', url: 'https://static.wixstatic.com/media/a978eb_ddabe9a4e24546aa9c25279d6d0eb66f~mv2.jpg', width: 1200, height: 800 } }, displayed: true, custom: false },
  richContent: {
    nodes: [
      { type: 'HEADING', headingData: { level: 2 }, nodes: [{ type: 'TEXT', textData: { text: 'Titre de section Ricos', decorations: [] } }] },
      { type: 'PARAGRAPH', nodes: [
        { type: 'TEXT', textData: { text: 'Texte en gras', decorations: [{ type: 'BOLD' }] } },
        { type: 'TEXT', textData: { text: ' et un lien', decorations: [{ type: 'LINK', linkData: { link: { url: 'https://www.epsilonbysabine.com' } } }] } },
      ] },
      { type: 'BULLETED_LIST', nodes: [{ type: 'LIST_ITEM', nodes: [{ type: 'PARAGRAPH', nodes: [{ type: 'TEXT', textData: { text: 'Point de liste', decorations: [] } }] }] }] },
      { type: 'PARAGRAPH', nodes: [{ type: 'TEXT', textData: { text: '<script>alert(1)</script>', decorations: [] } }] },
    ],
  },
};

const service = {
  id: '22222222-2222-4222-8222-222222222222',
  name: 'Prestation de test venue de Wix',
  tagLine: 'Séance de 45 minutes',
  description: 'Description de la prestation.\n\n- Premier point\n- Second point',
  hidden: false,
  mainSlug: { name: 'prestation-test' },
  media: { mainMedia: { image: { id: 'a978eb_63543c59ad0c420c8dd6497f9a94ba11~mv2.jpg', url: 'https://static.wixstatic.com/media/a978eb_63543c59ad0c420c8dd6497f9a94ba11~mv2.jpg', width: 1200, height: 800 } } },
};

globalThis.fetch = async (input, init = {}) => {
  const url = typeof input === 'string' ? input : input.url ?? String(input);
  if (!/wixapis\.com|wix\.com/.test(url)) return realFetch(input, init);
  const method = init.method ?? (typeof input === 'object' && input.method) ?? 'GET';
  let body = init.body ?? null;
  if (body && typeof body !== 'string') body = String(body);
  if (log) appendFileSync(log, JSON.stringify({ method, url, body: body ? JSON.parse(body) : null }) + '\n');

  if (url.includes('/oauth2/token')) return json({ access_token: 'faux-jeton', refresh_token: 'faux-refresh', expires_in: 14400, token_type: 'Bearer' });
  if (url.includes('/posts/query')) return json({ posts: [post], pagingMetadata: { count: 1, cursors: {}, hasNext: false } });
  if (url.includes('/bookings/') && url.includes('/services')) return json({ services: [service], pagingMetadata: { count: 1, cursors: {}, hasNext: false } });
  return json({ message: 'route non simulée' }, 404);
};
