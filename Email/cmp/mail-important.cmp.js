import {
    mailService
} from "../services/mail.service.js"

import mailPreview from "./mail-preview.cmp.js"
import mailFilter from "./mail-filter.cmp.js"
import navBar from '../cmp/mail-nav.cmp.js'
export default {
    template: `
    <div >
      <nav-bar></nav-bar>
    <section class="inbox-container">
    <mail-filter class="mail-filter-container" @set-filter="setFilter" :counter="readCount" ></mail-filter>
      <section class="mail-list-container">
        <ul class="mail-list">
          <mail-preview v-for="mail in mails" :currMail='mail'  @read-count-up="setCount"></mail-preview>
        </ul>
        </section>
      </section>
    </div>
      `,
    data() {
        return {
            mails: '',
            isRead: {
                active: "",
                text: "Read"
            },
            isImportant: "",
            counter: '',
            readCount: ''

        }
    },
    methods: {
        setCount(count) {
            if (count === false) this.isReadCount++
                else this.isReadCount--
                    if (this.isReadCount < 0) this.isReadCount = 0
            this.$emit('unread', this.isReadCount)
        },
        setFilter(filterBy) {
            this.filter = filterBy
        },
        setReadCount(readCount) {
            this.readCount = readCount
        },
    },
    created() {
        mailService
            .getImportant()
            .then(mails => this.mails = mails)
    },
    components: {
        mailPreview,
        mailFilter,
        navBar
    },
}