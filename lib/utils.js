// Small utility helpers used across the app
// `cn` merges class names (simple alternative to classnames library)
export function cn(...inputs) {
  return inputs
    .flat()
    .filter(Boolean)
    .map(i => {
      if (typeof i === 'string') return i;
      if (typeof i === 'object') return Object.keys(i).filter(k => i[k]).join(' ');
      return '';
    })
    .filter(Boolean)
    .join(' ');
}

export default { cn };
