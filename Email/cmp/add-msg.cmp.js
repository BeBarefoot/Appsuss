import msgContainer from './msg-container.cmp.js'
import navBar from '../cmp/mail-nav.cmp.js'

export default {
    template: `
  
<div>
<nav-bar></nav-bar>
<msg-container> </msg-container>


</div>
      
    `,
    data() {
        return {
            replyMail: ''
        }
    },
    methods: {

    },
    created() {

    },
    components: {
        msgContainer,
        navBar
    }
}