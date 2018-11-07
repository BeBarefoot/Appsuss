
import homePage from './home-page.cmp.js';
import keepHome from '/Notes/keep-home.cmp.js';
import mailHome from '/Email/mail-home.cmp.js';
import mainInbox from '/Email/pages/main-mail-window.js';
import newMsg from '/Email/cmp/add-msg.cmp.js';
import displayMail from '/Email/cmp/display-mail.cmp.js';

var myRoutes = [
    { path: '/home', component: homePage },
    { path: '/keep', component: keepHome },
    { path: '/mail', component: mailHome },
    { path: '/mail/inbox', component: mainInbox },
    { path: '/mail/inbox/:mailId', component: displayMail },
    { path: '/mail/newMail', component: newMsg },

]
export default myRoutes;