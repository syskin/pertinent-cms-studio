module.exports = {
    dashboard: {
        endpoints: {
            site: {},
            pages: {
                create: {
                    path: '/pertinent-pages',
                },
                getAll: {
                    path: '/pertinent-pages/meta',
                },
                getOneById: {
                    path: '/pertinent-pages/page/:id',
                },
                getOneByPath: {
                    path: '/pertinent-pages/:path',
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