import homePage from './home-page.cmp.js'
import myRoutes from './routes.js'
import navBar from './cmp/nav-bar.cmp.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })

new Vue({
    el: '#app',
    router: myRouter,
    components: {
        homePage,
        navBar

    }
})