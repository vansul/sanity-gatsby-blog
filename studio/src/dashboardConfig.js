export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8d7d1dfe9a524a02b8f31b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cwnkqb4k',
                  apiId: '1e47ccee-102b-4fcd-9fb4-58046c3ef6cd'
                },
                {
                  buildHookId: '5f8d7d1dd8441840a146540f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zecjjgvx',
                  apiId: 'eb034e35-6c71-4d19-a6e1-827530c68971'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vansul/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zecjjgvx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
