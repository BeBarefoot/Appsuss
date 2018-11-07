import newMsg from './cmp/add-msg.cmp.js'

export default {
    template: `
    <div>
        MAIL

        <button @click="openNewMsg">Compose</button>
        <new-Msg></new-Msg>

    </div>
    `,
    components:{
    },
    methods: {
openNewMsg() {
    this.$router.push('/mail/newMsg')}
    },
    components:{
        newMsg
    }
}