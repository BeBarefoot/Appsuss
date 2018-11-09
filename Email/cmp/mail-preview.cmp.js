import {
    mailService
} from "../services/mail.service.js"

export default {
    props: ["currMail", 'setSort'],
    template: `
    <div class="mail-full-list" v-if="currMail">
     
        <section 
        :class="[currMail.isRead? '':'bolder']"
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
                  @click.stop="markRead(currMail)"> <a href="#" class="btn btn-info btn-lg">
                    <span class="glyphicon glyphicon-trash"></span> {{isRead}}
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
            isRead: "",
            isImportant: "",
            func: this.setSort
        }
    },
    methods: {
        deleteMail(currMail) {
            mailService.deleteMail(currMail.id)
        },
        markRead() {
            this.currMail.isRead = !this.currMail.isRead
            if (this.currMail.isRead) {
                this.isRead = "Unread"
            } else {
                this.isRead = "Read"
            }
            this.$emit("read-count-up", this.currMail.isRead)

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
        },
        onSortMail() {
            this.isImportant = this.currMail.isImportant
            if (this.currMail.isRead === true) {
                this.isRead = "Unread"
            } else this.isRead = "Read"
            this.$emit("read-count-up", this.currMail.isRead)
        }
    },
    created() {
        this.onSortMail()
    },

}