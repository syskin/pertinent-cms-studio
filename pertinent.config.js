module.exports = {
    dashboard: {
        endpoints: {
            site: {},
            pages: {
                create: {
                    path: '/pertinent-pages/create',
                },
                getAll: {
                    path: '/pertinent-pages/meta',
                },
                getOneById: {
                    path: '/pertinent-pages/page/:id',
                },
                getOneBySlug: {
                    path: '/pertinent-pages/:slug',
                },
                updateOneById: {
                    path: '/pertinent-pages/page/:id',
                },
                deleteOneById: {
                    path: '/pertinent-pages/page/:id',
                },
            }
        }
    }
  }