
import msgContainer from './msg-container.cmp.js'
export default {
  template: `
  
<div>

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
    msgContainer
  }
}