// Conversion minimale du contenu riche Wix (Ricos) en HTML pour les articles de blog.
const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function text(node: any): string {
  let out = esc(node.textData?.text ?? '');
  for (const d of node.textData?.decorations ?? []) {
    if (d.type === 'BOLD') out = `<strong>${out}</strong>`;
    else if (d.type === 'ITALIC') out = `<em>${out}</em>`;
    else if (d.type === 'UNDERLINE') out = `<u>${out}</u>`;
    else if (d.type === 'LINK' && d.linkData?.link?.url) {
      const url = d.linkData.link.url;
      const safe = /^(https?:|mailto:|tel:|\/)/i.test(url) ? url : '#';
      out = `<a href="${esc(safe)}">${out}</a>`;
    }
  }
  return out;
}

function render(node: any): string {
  const kids = (node.nodes ?? []).map(render).join('');
  switch (node.type) {
    case 'TEXT':
      return text(node);
    case 'PARAGRAPH':
      return kids.trim() ? `<p>${kids}</p>` : '';
    case 'HEADING': {
      const level = Math.min(Math.max(node.headingData?.level ?? 2, 2), 4);
      return `<h${level}>${kids}</h${level}>`;
    }
    case 'BULLETED_LIST':
      return `<ul>${kids}</ul>`;
    case 'ORDERED_LIST':
      return `<ol>${kids}</ol>`;
    case 'LIST_ITEM':
      return `<li>${kids}</li>`;
    case 'BLOCKQUOTE':
      return `<blockquote>${kids}</blockquote>`;
    case 'DIVIDER':
      return '<hr>';
    case 'IMAGE': {
      const src = node.imageData?.image?.src;
      const url = src?.url ?? (src?.id ? `https://static.wixstatic.com/media/${src.id}` : '');
      return url ? `<img src="${esc(url)}" alt="${esc(node.imageData?.altText ?? '')}" loading="lazy">` : '';
    }
    default:
      return kids;
  }
}

export function ricosToHtml(content: any): string {
  return (content?.nodes ?? []).map(render).join('');
}
