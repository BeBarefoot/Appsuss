import eventBus, {
    REPLY_MSG
} from "../event-bus.js"
import msgModal from './mail-msg-modal.cmp.js'

export default {
    template: `
     <section class="add-msg-containter">
         <label>To:</label>
             <input type="text" v-model="msg.recipientMail"/> 
             <label>Subject</label>
             <input type="text" v-model="msg.subject"/> 
         <textarea class="user-text" rows="4" cols="50" v-model="msg.text"></textarea>
           <button class="send-mail" @click="checkIfMsg">Send</button>
           <transition name="fade-msg">
           <msg-modal v-if="massage" class="msg-sent-modal" :msg="massage"></msg-modal>
            </transition>
       </section>
     `,
    data() {
        return {
            msg: {
                subject: '',
                recipientMail: '',
                text: ''
            },
            massage: ''
        }
    },
    methods: {
        checkIfMsg() {
            if (this.msg.subject.length > 0 && this.msg.recipientMail.length > 5 && this.msg.text.length > 0) {
                this.massage = "Massage Sent!"
            } else if (this.msg.subject.length == 0 || this.msg.recipientMail.length < 5 || this.msg.text.length === 0) {
                this.massage = "Please fill all the Deatils"
                return setTimeout(() => {
                    this.massage = ''
                }, 1500)
            }
            setTimeout(() => {
                this.massage = ''
                this.$router.push('/mail/inbox')
            }, 1500)
        }
    },
    components: { msgModal },
    created() {
        eventBus.$on(REPLY_MSG, msg => {
            this.msg.recipientMail = msg.to
            this.msg.subject = `RE: ${msg.subject}`
        })
    },
}