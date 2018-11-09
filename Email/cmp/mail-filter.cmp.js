import { mailService } from "../services/mail.service.js"

export default {
    props: ['counter'],
    template: `
     <section >

       <form class="mail-filter">
         
         <div class="search-mail-container">
         
           <input type="text"  v-model="filterBy.byContent" @keydown.enter="search" placeholder="Search..."/>
           <button v-if="!isSearch" type="button" class="btn btn-outline-secondary" @click="search" >Search</button>
           <button v-if="isSearch" type="button" class="btn btn-outline-secondary" @click="reset">Reset</button>
          <div class="sort-text">
              <p >Sort: </p> <button @click.prevent="sortByDate">{{sortDate}} </button>
              <p>{{counter}} New Massages</p>
           </div>
          </div>          
        </form> 

    </section>
    `,
    data() {
        return {
            filterBy: {
                byContent: ""
            },
            isSearch: false,
            isReadCount: 0,
            sortDate: 'New First'
        }
    },
    methods: {
        search() {
            if (!this.filterBy.byContent) return
            this.$emit("set-filter", this.filterBy)
            this.isSearch = true
        },
        reset() {
            this.filterBy = {
                byContent: "",
            }
            this.$emit("set-filter", null)
            this.isSearch = false
        },
        sortByDate() {
            if (this.sortDate === 'New First') this.sortDate = 'Old First'
            else this.sortDate = 'New First'
            mailService.sortByRead(this.sortDate)
                .then(this.$router.push('/mail/inbox'))
        }
    },
    components: {
        mailService
    },
    created() {

    },
}