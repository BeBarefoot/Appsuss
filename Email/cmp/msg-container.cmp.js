import eventBus, {
    REPLY_MSG
  } from "../event-bus.js"
  

export default {
    template: `
     <section class="add-msg-containter">
         <label>To:</label>
             <input type="text" v-model="msg.recipientMail"/> 
             <label>Subject</label>
             <input type="text" v-model="msg.subject"/> 
         <textarea class="user-text" rows="4" cols="50" v-model="msg.text"></textarea>
           <button class="send-mail">Send</button>
       </section>
     `,
    data() {
        return {
            msg: {
                subject: '',
                recipientMail: ''
            }
        }
    },
    created() {
        eventBus.$on(REPLY_MSG, msg => {
             this.msg.recipientMail = msg.to
             this.msg.subject =`RE: ${msg.subject}`
          })
    },
}