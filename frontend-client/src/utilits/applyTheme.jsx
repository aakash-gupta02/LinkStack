// export function applyTheme(theme) {
//   const root = document.documentElement;
//   root.style.setProperty('--primary', theme.primary);
//   root.style.setProperty('--secondary', theme.secondary);
//   root.style.setProperty('--text', theme.text);
// }


export function applyTheme(theme) {
  const root = document.documentElement;
  
  // Base colors
  root.style.setProperty('--bg-page', theme.bgPage || '#f9fafb');
  root.style.setProperty('--text-primary', theme.textPrimary || '#111827');
  root.style.setProperty('--text-secondary', theme.textSecondary || '#6b7280');
  root.style.setProperty('--text-tertiary', theme.textTertiary || '#4b5563');

  // Header
  root.style.setProperty('--header-gradient-start', theme.headerGradientStart || '#6366f1');
  root.style.setProperty('--header-gradient-end', theme.headerGradientEnd || '#8b5cf6');

  // Profile
  root.style.setProperty('--profile-border', theme.profileBorder || '#ffffff');
  root.style.setProperty('--profile-bg', theme.profileBg || '#ffffff');

  // Social Icons
  root.style.setProperty('--social-bg', theme.socialBg || '#ffffff');
  root.style.setProperty('--social-default', theme.socialDefault || '#6b7280');
  root.style.setProperty('--social-github', theme.socialGithub || '#181717');
  root.style.setProperty('--social-linkedin', theme.socialLinkedin || '#0a66c2');
  root.style.setProperty('--social-twitter', theme.socialTwitter || '#1da1f2');
  root.style.setProperty('--social-youtube', theme.socialYoutube || '#ff0000');
  root.style.setProperty('--social-instagram', theme.socialInstagram || '#e4405f');
  root.style.setProperty('--social-facebook', theme.socialFacebook || '#1877f2');

  // Link Cards
  root.style.setProperty('--link-card-bg', theme.linkCardBg || '#ffffff');
  root.style.setProperty('--link-card-text', theme.linkCardText || '#111827');
  root.style.setProperty('--link-card-text-secondary', theme.linkCardTextSecondary || '#6b7280');
  root.style.setProperty('--link-card-icon', theme.linkCardIcon || '#8b5cf6');
  root.style.setProperty('--link-card-radius', theme.linkCardRadius || '12px');
  root.style.setProperty('--link-thumbnail-bg', theme.linkThumbnailBg || '#f3f4f6');

  // Footer
  root.style.setProperty('--footer-text', theme.footerText || '#9ca3af');

  // Backward compatibility (optional)
  if (theme.primary) {
    root.style.setProperty('--header-gradient-start', theme.primary);
    root.style.setProperty('--link-card-icon', theme.secondary);
    root.style.setProperty('--text-primary', theme.text);
  }
}