export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f473502d8a73d7ab869371a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-preview-studio',
                  apiId: '6498cb91-dacf-44f7-9922-3a988b1dfe18'
                },
                {
                  buildHookId: '5f4735027689112500694831',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-preview',
                  apiId: '726e5000-1b7f-4cc4-a1ac-8ce0303658fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vivekneem/sanity-kitchen-sink-preview',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-preview.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
