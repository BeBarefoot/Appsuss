'use strict'

export default {
    props: ['counter'],
    template: `
       <section >
  
         <form class="note-filter">
           
           <div class="serach-note-container">
             
             <input class="search-note-input" type="text"  v-model="filterBy.noteData" placeholder="Search..."/>
             <button v-if="!isSearch" type="button" class="btn btn-outline-secondary" @click="search">Search</button>
             <button v-if="isSearch" type="button" class="btn btn-outline-secondary" @click="reset">Reset</button>
            </div>
          </form> 
  
      </section>
      `,
    data() {
      return {
        filterBy: {
          noteData: ""
        },
        isSearch: false,
      }
    },
    methods: {
      search() {
        if (!this.filterBy.noteData) return
        this.$emit("set-filter", this.filterBy)
        this.isSearch = true
      },
      reset() {
        this.filterBy = {
          noteData: "",
        }
        this.$emit("set-filter", null)
        this.isSearch = false
      },
    },
    created() {
  
    },
  
  }