import type {RouterConfig} from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
    routes: (_routes) => [,
        {
            name: 'agenda',
            path: '/agenda',
            meta: {
                title: 'Agenda'
            },
            component: () => import('~/pages/agendaList.vue')
        },
        {
            name: 'news',
            path: '/news',
            meta: {
                title: 'Actu'
            },
            component: () => import('~/pages/newsList.vue')
        },
        {
            name: 'draft',
            path: '/draft',
            meta: {
                layout: false,
            },
            component: () => import('~/pages/draft.vue')
        },
        {
            name: 'article',
            path: '/:siteSlug(administration|culture|economie|enfance|enfance-jeunesse|sante|social|sport|tourisme)/:categories([a-z-_]+)*\/:articleSlug([a-z0-9-_]+-):articleId(\\d+)',
            component: () => import('~/pages/article.vue')
        },
        {
            name: 'category',
            path: '/:siteSlug(administration|culture|economie|enfance|enfance-jeunesse|sante|social|sport|tourisme)/:categories([a-zA-Z0-9-_]+)*\/:categorySlug([a-zA-Z0-9-_]+)',
            component: () => import('~/pages/category.vue')
        },
        {
            name: 'siteIndex',
            path: '/:siteSlug(administration|culture|economie|enfance|enfance-jeunesse|sante|social|sport|tourisme)',
            component: () => import('~/pages/site.vue')
        },
        {
            name: 'citoyen-article',
            path: '/:categories([a-z-_]+)+\/:articleSlug([a-z-]+-):articleId(\\d+)',
            component: () => import('~/pages/article.vue')
        },
        {
            name: 'citoyen-category',
            middleware: ['first'],
            path: '/:categories([a-z-_]+)*\/:categorySlug([a-zA-Z0-9-_]+)',
            component: () => import('~/pages/category.vue'),
            children: [
                {
                    name: 'citoyen-category-children',
                    path: 'select/:categorySelected([a-zA-Z0-9-_]+)',
                    component: () => import('~/components/Category/Posts.vue'),
                    props: route => ({
                        siteSlug: route.params.siteSlug,
                        categorySelected: route.params.categorySelected //?? route.params.categorySlug
                    })
                }
            ]
        },
        {
            name: 'homepage',
            path: '/',
            meta: {
                layout: false,
                title: 'coucou22'
            },
            component: () => import('~/pages/homepage.vue')
        },
        {
            name: 'notfound',
            path: '/:pathMatch(.*)*',
            component: () => import('~/pages/notfound.vue')
        }
    ],
}
///culture/culture/bibliotheque-et-ludotheque-provinciales-du-luxembourg-23/
//^(?:\/)([a-zA-Z0-9-]+) capture site
//([a-zA-Z0-9-]+)(?:[\/]?)$ capture le dernier element de l'url
// la fin d'url avec un tiret et un ou plusiers chiffres (?:-)(\d+)(?:\/?)$ capture 23
