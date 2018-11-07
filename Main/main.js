import homePage from './home-page.cmp.js'
import myRoutes from './routes.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })

new Vue({
    el: '#app',
    router: myRouter,
    components: {
        homePage

    }
})