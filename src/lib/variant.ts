// Habillage choisi au moment de la construction (PUBLIC_VARIANT) : '' (d'origine), 'humain' ou 'authentique'.
export const variant = (import.meta.env.PUBLIC_VARIANT ?? '') as '' | 'humain' | 'authentique';

// Texte propre à la version « authentique » (titres plus directs), sinon texte d'origine.
export function pick(standard: string, authentique: string): string {
  return variant === 'authentique' ? authentique : standard;
}
