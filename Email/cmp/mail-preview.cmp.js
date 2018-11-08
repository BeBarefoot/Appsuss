import {
  mailService
} from "../services/mail.service.js"

export default {
  props: ["currMail"],
  template: `
    <div class="mail-full-list" v-if="currMail">
        <section 
        :class="[isRead.active? '':'bolder']"
        class="inbox-list" 
        @click="openMail(currMail)">
            <p class="mail-from" > {{this.currMail.from}}</p>
            <div class="mail-line-details">
                <p class="mail-subject" > {{this.currMail.subject}}</p>
                <p class="mail-content" >{{this.currMail.content}}</p>
                <p class="mail-date" >{{this.currMail.date}}</p>
                <div class="mail-controlers">
                  <p class="delete-mail-inline" @click.stop="deleteMail(currMail)">
                    <a href="#" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-trash"></span> Trash 
                   </a></p>
                  <p class="mark-as-read" 
                  @click.stop="markRead(currMail)"> <a href="#" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-trash"></span> {{isRead.text}} 
                   </a></p>
                  <p class="mark-as-important"
                  :class="[isImportant? 'msg-important':'']"
                  @click.stop="markImportant(currMail)">
                  <a href="#" class="btn btn-lg"><span class="glyphicon glyphicon-trash"></span> ★
                   </a>
                  </p>
                </div>
               
            </div>
     
    </section>
    </div>
    `,
  data() {
    return {
      isRead: {
        active: "",
        text: "Read"
      },
      isImportant: "",

    }
  },
  methods: {
    deleteMail(currMail) {
      mailService.deleteMail(currMail.id)
    },
    markRead() {
      this.isRead.active = !this.isRead.active
      if (this.isRead.active === true) {
        this.isRead.text = "Unread"

      } else {
        this.isRead.text = "Read"

      }
      this.$emit("read-count-up", this.isRead.active)
      this.currMail.isRead = !this.currMail.isRead
      mailService.updateMail(this.currMail.id)
    },
    markImportant() {
      this.isImportant = !this.isImportant
      this.currMail.isImportant = !this.currMail.isImportant
      mailService.updateMail(this.currMail.id)
    },
    openMail() {
      this.currMail.isRead = true
      mailService.updateMail(this.currMail.id)
      this.$router.push(`/mail/inbox/${this.currMail.id}`)
    }
  },
  created() {
    this.isImportant = this.currMail.isImportant
    this.isRead.active = this.currMail.isRead
    if (this.isRead.active === true) {
      this.isRead.text = "Unread"

    } else this.isRead.text = "Read"

    this.$emit("read-count-up", this.isRead.active)
  }
}