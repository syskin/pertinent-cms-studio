module.exports = {
    dashboard: {
        endpoints: {
            site: {},
            pages: {
                create: {
                    path: '/pertinent/pages',
                },
                getAll: {
                    path: '/pertinent/pages/meta',
                },
                getOneById: {
                    path: '/pertinent/pages/:id',
                },
                getOneBySlug: {
                    path: '/pertinent/pages/:slug',
                },
                updateOneById: {
                    path: '/pertinent/pages/:id',
                },
                deleteOneById: {
                    path: '/pertinent/pages/:id',
                },
            },
            tags: {
                get: {
                    path: '/pertinent/tags',
                },
                create: {
                    path: '/pertinent/tags',
                },
                updateOneById: {
                    path: '/pertinent/tags/:id',
                },
                deleteOneById: {
                    path: '/pertinent/tags/:id',
                },
            }
        }
    }
  }