// import eventBus {OPEN_MAIL,OPEN_NOTES} from '/event-bus.js';
import keepSideBar from "../Notes/notepages/note-page.js";
import mailSideBar from "../Email/mail-home.cmp.js";
export default {
  template: `
<section  class="side-bar">

<div class="sidenav">

<keep-side-bar v-if="keepSide"></keep-side-bar>
<mail-side-bar v-if="mailSide"></mail-side-bar>

</div>
</section>
    `,
  data() {
    return {
      keepSide: false,
      mailSide: false
    };
  },
  components: {
    keepSideBar,
    mailSideBar
  },
  created() {
    this.$on('open-mail', ()=> {
        keepMail=true,
        keepSide=false
    })
    this.$on('open-notes',()=> {
        keepSide=true
        keepMail=false
    })
    this.$on('home',()=> {
        keepSide=false
    keepMail=false})
  }
};
