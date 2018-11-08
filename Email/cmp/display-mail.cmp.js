import {
  mailService
} from "../services/mail.service.js"
import eventBus, {
  REPLY_MSG
} from "../event-bus.js"

export default {
  template: `
      <div class="display-single-mail-container" v-if="mail">
        <div class="mail-display-next-back-btn">
          <router-link class="prev-mail":to="'/mail/inbox/'+prevmailId">Back</router-link>
          <router-link class="next-mail":to="'/mail/inbox/'+nextMailId">Next</router-link>
        </div>
        
      <section class="mail-details">
        <div class="mail-details-text">
          <p class="delete-mail-inline" @click="deleteMail">  <span class="glyphicon">&#xe020;</span></p>
          <div class="mail-single-display-headline">
            <h2>{{mail.subject}}</h2>
          <h5 class="mail-single-display-email">{{mail.email}}</h5>  
          </div>
          <ul>
              <li class="mail-display-from">{{mail.from}}</li>
              <li class="mail-display-content">{{mail.content}}</li>
            </ul>
            <button @click="reply">Reply</button>
             </div>
    </section>
    </div>
        `,
  data() {
    return {
      mail: null,
      mails: [],
      nextMailId: "",
      prevmailId: ""
    }
  },
  methods: {
    loadMailData() {
      const mailId = this.$route.params.mailId
      mailService.getMailById(mailId).then(mail => (this.mail = mail))
      mailService
        .nextMail(mailId)
        .then(nextMail => (this.nextMailId = nextMail.id))
    },
    deleteMail() {
      mailService.deleteMail(this.mail.id)
      this.$router.push(`/mail/inbox/`)
    },
    reply() {
        setTimeout(() => {
          eventBus.$emit(REPLY_MSG, {
            subject: `${this.mail.subject}`,
            to: `${this.mail.email}`,
          }, 0)
      })
      this.$router.push('/mail/newMail/'+ this.mail.email)
    }
  },

  components: {
    eventBus
  },
  created() {
    window.scrollTo(0, 0)
    let mailId = this.$route.params.mailId
    mailService.getMailById(mailId).then(mail => {
      this.mail = mail
    })
  },
  mounted() {
    this.loadMailData()
  },
  watch: {
    "$route.params.mailId": function (id, prevValue) {
      this.prevmailId = prevValue
      this.loadMailData()
    }
  }
}