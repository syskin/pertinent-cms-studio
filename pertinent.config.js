module.exports = {
    dashboard: {
        endpoints: {
            site: {},
            pages: {
                create: {
                    path: '/pertinent-pages',
                    method: 'post'
                },
                getAll: {
                    path: '/pertinent-pages/meta',
                    method: 'get'
                },
                getOneById: {
                    path: '/pertinent-pages/:id',
                    method: 'get'
                },
                getOneByPath: {
                    path: '/pertinent-pages/:path',
                    method: 'get'
                },
                updateOneById: {
                    path: '/pertinent-pages/:id',
                    method: 'put'
                },
                deleteOneById: {
                    path: '/pertinent-pages/:id',
                    method: 'delete'
                },
            }
        }
    }
  }