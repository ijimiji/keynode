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
    createRoute('/', 'Home', 'mdi-home'),
    createRoute('/register', 'Register', 'mdi-account-plus'),
    createRoute('/login', 'Login', 'mdi-login'),
    createRoute('/me', 'Personal', 'mdi-account-details'),
]

export {
    routes
}
