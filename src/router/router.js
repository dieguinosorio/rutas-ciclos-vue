import { createRouter, createWebHashHistory } from 'vue-router'
import   isAuthenticatedGuard  from './auth-guard'
const routes = [
    
    {
        path: '/',
        redirect:'/pokemon',
    },
    
    {
        path: '/pokemon',
        name:'pokemon',
        component: () =>
            import ( /* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children:[
            {
                path: 'home',
                name:'pokemon-home',
                component: () =>
                    import ( /* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name:'pokemon-about',
                beforeEnter:[isAuthenticatedGuard],
                component: () => import ( /* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage'),
            },
            {
                path: 'pokemon/:id',
                name:'pokemon-id',
                beforeEnter:[isAuthenticatedGuard],
                component: () =>
                    import ( /* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
                props:(route)=>{
                    //const { id } = route.params
                    const id = Number(route.params.id);
                    return {
                        id: (isNaN(id) ? 1 : id),
                    }
                }
            },

            {
                path:'',
                redirect:{name:'pokemon-home'}
            }
        ]
    },

    //DBZ Layout
    {
    path: '/dbz',
    name:'dbz',
        component: () =>
            import ( /* webpackChunkName: "DBZLayout" */ '@/modules/dbz/layouts/DragonBallLayout'),
        children:[
            {
                path: 'characters',
                name:'dbz-characters',
                component: () =>
                    import ( /* webpackChunkName: "DbzListPage" */ '@/modules/dbz/pages/Characters')
            },
            {
                path: 'about',
                name:'dbz-about',
                component: () =>
                    import ( /* webpackChunkName: "DbzAboutPage" */ '@/modules/dbz/pages/About')
            },
            {
                path:'',
                redirect:{name:'dbz-characters'}
            }
        ]
    },
    
    {
        path: '/:pathMatch(.*)*',
        component: () =>import ( /* webpackChunkName: "NotFoundPage" */ '@/modules/pokemon/shared/pages/NotPageFound')
        //redirect:'/home'
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

//guard Global

/*const canAccess = () =>{
    return new Promise(resolve=>{
        const random = Math.random() * 100;
        if(random > 50){
            console.log('Autenticathed')
            resolve(true)
        }
        else{
            console.log('Bloqued for guarded')
            resolve(false)
        }
    })
}

router.beforeEach(async(to,from,next)=>{
    const authorize = await canAccess()
    authorize ? next() : next({name:'pokemon-home'})
})*/


export default router