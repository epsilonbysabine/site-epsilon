// Accès aux contenus Wix Headless (blog, prestations Wix Bookings).
// Sans PUBLIC_WIX_CLIENT_ID, ou si Wix ne répond pas, le site utilise la copie locale
// du contenu (src/data), ce qui permet de construire et prévisualiser le site hors ligne.
import { createClient, OAuthStrategy, media } from '@wix/sdk';
import { posts } from '@wix/blog';
import { services } from '@wix/bookings';
import postsSnapshot from '../data/posts-snapshot.json';
import servicesSnapshot from '../data/services-snapshot.json';
import { ricosToHtml } from './ricos';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  minutesToRead: number | null;
  cover: string | null;
  excerpt: string;
  html: string;
}

export interface BookingService {
  slug: string;
  name: string;
  tagLine: string;
  description: string;
  image: string | null;
}

const clientId = import.meta.env.PUBLIC_WIX_CLIENT_ID;

export const wixEnabled = Boolean(clientId);

// Un seul client pour tout le build : un seul jeton visiteur est demandé à Wix.
let wixClient: ReturnType<typeof makeClient> | undefined;
function makeClient() {
  return createClient({
    modules: { posts, services },
    auth: OAuthStrategy({ clientId: clientId! }),
  });
}
function client() {
  wixClient ??= makeClient();
  return wixClient;
}

function imageUrl(wixImage: string | undefined | null, width = 1200, height = 800): string | null {
  if (!wixImage) return null;
  if (wixImage.startsWith('http')) return wixImage;
  try {
    return media.getScaledToFillImageUrl(wixImage, width, height, {});
  } catch {
    return null;
  }
}

let postsCache: Promise<BlogPost[]> | undefined;

export function getPosts(): Promise<BlogPost[]> {
  postsCache ??= loadPosts();
  return postsCache;
}

async function loadPosts(): Promise<BlogPost[]> {
  if (!wixEnabled) return postsSnapshot as BlogPost[];
  try {
    const { items } = await client()
      .posts.queryPosts({ fieldsets: ['RICH_CONTENT', 'CONTENT_TEXT'] as any })
      .descending('firstPublishedDate')
      .limit(100)
      .find();
    if (!items.length) return postsSnapshot as BlogPost[];
    return items.map((p: any) => ({
      slug: p.slug,
      title: p.title,
      date: p.firstPublishedDate ? new Date(p.firstPublishedDate).toISOString().slice(0, 10) : '',
      minutesToRead: p.minutesToRead ?? null,
      cover: imageUrl(p.media?.wixMedia?.image ?? p.heroImage),
      excerpt: p.excerpt ?? '',
      html: p.richContent ? ricosToHtml(p.richContent) : `<p>${escapeHtml(p.contentText ?? '')}</p>`,
    }));
  } catch (error) {
    console.warn('[wix] Blog indisponible, utilisation de la copie locale :', (error as Error).message);
    return postsSnapshot as BlogPost[];
  }
}

export async function getServices(): Promise<BookingService[]> {
  if (!wixEnabled) return servicesSnapshot as BookingService[];
  try {
    const { items } = await client().services.queryServices().find();
    const visible = items.filter((s: any) => !s.hidden);
    if (!visible.length) return servicesSnapshot as BookingService[];
    return visible.map((s: any) => ({
      slug: s.mainSlug?.name ?? s._id,
      name: s.name ?? '',
      tagLine: s.tagLine ?? '',
      description: s.description ?? '',
      image: imageUrl(s.media?.mainMedia?.image ?? s.media?.coverMedia?.image, 900, 600),
    }));
  } catch (error) {
    console.warn('[wix] Prestations indisponibles, utilisation de la copie locale :', (error as Error).message);
    return servicesSnapshot as BookingService[];
  }
}

export function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function formatDate(iso: string): string {
  if (!iso) return '';
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(iso + 'T00:00:00Z'),
  );
}

// Adresse d'un article : les slugs Wix contiennent des accents, on les garde tels quels.
export function postHref(slug: string): string {
  return `/post/${slug}`;
}
