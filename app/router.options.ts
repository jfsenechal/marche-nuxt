import type {RouterConfig} from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
    routes: (_routes) => [
        {
            name: 'article',
            path: '/:siteSlug(administration|culture|economie|enfance-jeunesse|sante|social|sport|tourisme)/:categories([a-z-_]+)+\/:articleSlug([a-z-]+-):articleId(\\d+$)',
            component: () => import('~/pages/article.vue')
        },
        {
            name: 'category',
            path: '/:siteSlug(administration|culture|economie|enfance-jeunesse|sante|social|sport|tourisme)/:categories([a-z-_]+)+\/:categorySlug(\\w+)',
            component: () => import('~/pages/category.vue')
        },
        {
            name: 'siteIndex',
            path: '/:siteSlug(administration|culture|economie|enfance-jeunesse|sante|social|sport|tourisme)',
            component: () => import('~/pages/site.vue')
        },
        {
            name: 'homepage',
            path: '/',
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

// http://localhost:3000/sport/zozo/mu
// http://localhost:3000/social/zozo/zizi/mu-23
// http://localhost:3000/culture/lolo/li-li/bculture/culture/bibliotheque-et-ludotheque-provinciales-du-luxembourg-23
// http://localhost:3000/culture/ze-ze/zo_zo/mu
// http://localhost:3000/sante/centres-medicaux-services/
// http://localhost:3000/famille/naissance/consultations-one-205
// http://localhost:3000/famille/naissance/consultations-one-205/
// http://localhost:3000/sante/centres-medicaux-services/hopital-princesse-paola-ifac-vivalia-8
// http://localhost:3000/ze-ze/zozo/sport
// http://localhost:3000/ze-ze/zozo/sport/
// http://localhost:3000/ze-ze/zozo/enfance-jeunesse
// http://localhost:3000/famille/naissance/consultations-one-205