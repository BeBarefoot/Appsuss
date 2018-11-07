
import homePage from './home-page.cmp.js';
import keepHome from '/Notes/keep-home.cmp.js';
import mailHome from '/Email/mail-home.cmp.js';

var myRoutes = [
    { path: '/home', component: homePage },
    { path: '/keep', component: keepHome },
    { path: '/mail', component: mailHome },

]

export default myRoutes;