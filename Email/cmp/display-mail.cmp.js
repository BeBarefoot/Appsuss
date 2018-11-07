import { mailService } from "../services/mail.service.js";

export default {
  template: `
      <div v-if="mail">
      <router-link class="prev-mail":to="'/mail/inbox/'+prevmailId">Back</router-link>
      <router-link class="next-mail":to="'/mail/inbox/'+nextmailId">Next</router-link>
        <section class="mail-details">
        <div class="mail-details-text">
            
             </div>
    </section>
    </div>
        `,
  data() {
    return {
      mail: null,
      mails: [],
      nextmailId: "",
      prevmailId: ""
    };
  },
  computed: {
    loadMailData() {
        const mailId = this.$route.params.mailId;
        mailService.getMailById(mailId)
            .then(mail => this.mail = mail)
        mailService.nextMail(mailId)
            .then(nextMail => this.nextMailId = nextMail.id)
    }
  },

  components: {},
  created() {
    window.scrollTo(0, 0);
    let mailId = this.$route.params.mailId;
    mailService.getMailById(mailId).then(mail => {
      this.mail = mail;
    });
  },
  mounted() {
    this.loadMailData();
  },
  watch: {
    "$route.params.mailId": function(id, prevValue) {
      this.prevmailId = prevValue;
      this.loadMailData();
    }
  }
};
