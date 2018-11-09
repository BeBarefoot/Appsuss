import mailPreview from "./mail-preview.cmp.js"

export default {
    props: ["mails"],
    template: `
    <div class="papa-div-list">
          <section class="mail-list-container">
            <ul class="mail-list">
              <mail-preview v-for="mail in mails" :currMail='mail'  @read-count-up="setCount"></mail-preview>
            </ul>
        </section>
    </div>
    `,
    data() {
        return {
            isReadCount: 0,
        }
    },
    methods: {
        setCount(count) {
            if (count === false) this.isReadCount++
                else this.isReadCount--
                    if (this.isReadCount < 0) this.isReadCount = 0
            this.$emit('unread', this.isReadCount)
        },

    },
    components: {
        mailPreview,
    },
    created() {

    }
}