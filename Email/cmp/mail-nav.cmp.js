import mainMailWindow from "../pages/main-mail-window.js"

export default {
  template: `
    <section class="mail-side-bar">

        <button @click="newMsg">Compose</button>
        <button @click="openMain">Inbox</button>
        <button @click="important">Important</button>
        
    </section>
    `,
  data() {
    return {
      open: false,
      mailCommand: {
        compose: "msg",
        inbox: "inbox",
        marked: "marked"
      }
    }
  },
  methods: {
    openMain() {
      this.$router.push('/mail/inbox')
    },
    newMsg(){
      this.$router.push('/mail/newMail')
    },
    important(){
      this.$router.push('/mail/important')
    }
  },
  components: {
    mainMailWindow
  },
  created() {
  }
}
