
import homePage from './home-page.cmp.js';
import keepHome from '/Notes/keep-home.cmp.js';
import mailHome from '/Email/mail-home.cmp.js';
import newMsg from '/Email/cmp/add-msg.cmp.js';

var myRoutes = [
    { path: '/home', component: homePage },
    { path: '/keep', component: keepHome },
    { path: '/mail', component: mailHome },
    { path: '/mail/newMsg', component: newMsg },

]

export default myRoutes;