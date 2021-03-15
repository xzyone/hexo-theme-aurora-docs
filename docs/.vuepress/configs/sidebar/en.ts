import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      isGroup: true,
      text: 'Guide',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
        '/guide/configuration.md',
        '/guide/menu.md',
        '/guide/theme.md',
        '/guide/social.md',
        '/guide/site-meta.md',
        '/guide/plugins.md',
      ],
    },
  ],
}