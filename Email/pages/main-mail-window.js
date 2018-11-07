import newMsg from "../cmp/add-msg.cmp.js";
import { mailService } from "../services/mail.service.js"
import mailList from "../cmp/mail-list.cmp.js";

export default {
  template: `
    <div>
        <!-- <new-msg v-if='msg'></new-msg> -->
        <!-- <marked open-box></marked> -->
       <section class="inbox-container">
       <mail-list class="mail-list-container" :mails="mailsToShow"></mail-list> 

       </section>
 
    </div>
    `,
  data() {
    return {
      mails: "",
      filter: ""
      // msg: false,
      // marked: false,
      // inbox: false
    };
  },
  methods: {
    getMail() {
    }
  },
  computed: {
    mailsToShow() {
      if (!this.filter) return this.mails;
      else
        var displaymails = this.mails.filter(mail => {
          return mail.title.includes(this.filter.byTitle);
        });
      return displaymails;
    }
  },
  components: {
    newMsg,
    mailService,
    mailList
  },
  created() {
    mailService.query().then(mail => (this.mails = mail))
  }
};
