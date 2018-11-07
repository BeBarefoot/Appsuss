export default {
    template: `
    <section class="add-msg-containter">
        
        <div>
            <label>From:</label>
            <input type="text" v-model="msg.from"/> 
            <label>To:</label>
            <input type="text" v-model="msg.to"/> 
        <textarea class="user-text" rows="4" cols="50" v-model="msg.text"></textarea>
          
        </div>

    </section>
    `,
    data() {
        return{
            msg:{
                text:'',
                from:'',
                to:'',
            }
        }
    }
}