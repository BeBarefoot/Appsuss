import newMsg from "../cmp/add-msg.cmp.js"
import {
    mailService
} from "../services/mail.service.js"
import mailList from "../cmp/mail-list.cmp.js"
import mailFilter from "../cmp/mail-filter.cmp.js"
import navBar from '../cmp/mail-nav.cmp.js'

export default {
    template: `
    <div>
      <nav-bar></nav-bar>
       <section class="inbox-container">
       <mail-filter class="mail-filter-container" @set-filter="setFilter" :counter="readCount" ></mail-filter>
       <mail-list  :mails="mailsToShow" v-on:unread="setReadCount"></mail-list> 
       </section>
 
    </div>
    `,
    data() {
        return {
            mails: "",
            filter: null,
            readCount: '',
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filter = filterBy
        },
        setReadCount(readCount) {
            this.readCount = readCount
        },

    },
    computed: {
        mailsToShow() {
            if (!this.filter) return this.mails
            else {
                var displaymails = this.mails.filter(mail => {
                    let content = mail.content.toLowerCase()
                    let filter = this.filter.byContent.toLowerCase()
                    return content.includes(filter)
                })
            }
            return displaymails
        }
    },
    components: {
        newMsg,
        mailService,
        mailList,
        mailFilter,
        navBar
    },
    created() {
        mailService.query().then(mail => (this.mails = mail))
    }
}