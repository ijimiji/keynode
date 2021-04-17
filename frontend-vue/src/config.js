function createRoute(path, name, icon = 'mdi-timer', component = name) {
   return {
        path: path,
        route: path,
        name: name,
        text: name,
        icon: icon,
        component: () => import('./components/' + component + '.vue')
   }
}
const routes = [
    createRoute('/users', 'Users'),
    createRoute('/users', 'Users'),
]

export {
    routes
}
