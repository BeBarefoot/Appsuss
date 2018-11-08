
import homePage from './home-page.cmp.js';
import mailHome from '/Email/mail-home.cmp.js';
import newMsg from '/Email/cmp/add-msg.cmp.js';
import noteApp from '../Notes/notepages/note-page.js';
import noteEdit from '../Notes/notepages/note-edit.js'

var myRoutes = [
    { path: '/home', component: homePage },
    { path: '/mail', component: mailHome },
    { path: '/mail/newMsg', component: newMsg },
    { path: '/keep', component: noteApp},
    { path: '/keep/edit', component: noteEdit},
    { path: '/keep/edit/:noteId', component: noteEdit},

]

export default myRoutes;