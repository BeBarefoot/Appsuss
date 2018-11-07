import {mailService} from '../services/mail.service.js';

export default {
  props: ["currMail"],
  template: `
    <div v-if="currMail">
        <section class="inbox-list" @click="openMail(currMail)">
            <p class="mail-from" > {{this.currMail.from}}</p>
            <div class="mail-line-details">
                <p class="mail-subject" > {{this.currMail.subject}}</p>
                <p class="mail-content" >{{this.currMail.content}}</p>
                <p class="delete-mail-inline" @click="deleteMail(currMail)">X</p>
               
            </div>
     
    </section>
    </div>
    `,
  data() {
    return {
      mailIdx: ""
    };
  },
  methods: {
    deleteMail(currMail) {
        mailService.deleteMail(currMail.id)
    },
    openMail() {
        this.$router.push(`/mail/inbox/${this.currMail.id}`)
    },
  },
  created() {

  }
};
