import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        // rota de listagem
        {
            path: '/',
            alias: '/avenidas',
            name: 'avenidas',
            component: () => import('./components/AvenidaList')
        },
        // rota de adicionar
        {
            path: '/adicionar',
            name: 'adicionar',
            component: () => import('./components/AddAvenida')
        },
        // rota buscando por id
        {
            path: '/avenidas/:id',
            name: 'avenidas-details',
            component: () => import('./components/Avenida')
        }
    ]
})