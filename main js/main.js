import homePage from './home-page.cmp.js'
import myRoutes from './routes.js'
import navBar from './nav-bar.cmp.js'
import sideBar from './side-bar.cmp.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })

new Vue({
    el: '#app',
    router: myRouter,
    components: {
        homePage,
        navBar,
        sideBar

    }
})