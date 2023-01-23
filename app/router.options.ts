import type {RouterConfig} from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
    routes: (_routes) => [
        {
            name: 'article',
            path: '/:categories([\/a-z]+)\/:articleSlug([a-z]+-):articleId(\\d+$)',
            component: () => import('~/pages/article.vue')
        },
        {
            name: 'category',
            path: '/:categories([\/a-z]+)\/:categorySlug(\\w+)',
            component: () => import('~/pages/category.vue')//([\a-z]+)\/(?:[a-z]+-)(\d+)$
        },
        {
            name: 'culture',
            path: '/culture/:slug(\\w+)',
            component: () => import('~/pages/site.vue')
        },
        {
            name: 'site',
            path: '/site/:slug(\\w+)',
            component: () => import('~/pages/site.vue')
        },
        {
            name: 'home',
            path: '/',
            component: () => import('~/pages/home.vue')
        }
    ],
}
///culture/culture/bibliotheque-et-ludotheque-provinciales-du-luxembourg-23/
//^(?:\/)([a-zA-Z0-9-]+) capture site
//([a-zA-Z0-9-]+)(?:[\/]?)$ capture le dernier element de l'url

// la fin d'url avec un tiret et un ou plusiers chiffres (?:-)(\d+)(?:\/?)$ capture 23