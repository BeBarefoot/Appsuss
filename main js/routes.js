
import homePage from './home-page.cmp.js';
import mailHome from '/Email/mail-home.cmp.js';
import mainInbox from '/Email/pages/main-mail-window.js';
import newMsg from '/Email/cmp/add-msg.cmp.js';
<<<<<<< HEAD
import noteApp from '../Notes/notepages/note-page.js';
import noteEdit from '../Notes/notepages/note-edit.js'
=======
import displayMail from '/Email/cmp/display-mail.cmp.js';
import importantMail from '/Email/cmp/mail-important.cmp.js';
>>>>>>> 55385694b01c2664af9523d21f0939c0807340e8

var myRoutes = [
    { path: '/home', component: homePage },
    { path: '/mail', component: mailHome },
<<<<<<< HEAD
    { path: '/mail/newMsg', component: newMsg },
    { path: '/keep', component: noteApp},
    { path: '/keep/edit', component: noteEdit},
    { path: '/keep/edit/:noteId', component: noteEdit},
=======
    { path: '/mail/inbox', component: mainInbox },
    { path: '/mail/inbox/:mailId', component: displayMail },
    { path: '/mail/important', component: importantMail },
    { path: '/mail/newMail/:replyAddress?', component: newMsg },
>>>>>>> 55385694b01c2664af9523d21f0939c0807340e8

]
export default myRoutes;