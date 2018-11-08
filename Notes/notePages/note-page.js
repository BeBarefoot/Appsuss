'use strict'

import noteService from '../services/note-services.js';
import noteTxt from '../cmp/note-txt.cmp.js';
import noteList from '../cmp/note-list.cmp.js';
import noteFilter from '../cmp/note-filter.cmp.js';

export default {
    template: `
        <section class="note-app">
            <h1 class="note-app-title">NoteApp</h1>
            <note-filter class="note-filter-container" @set-filter="setFilter"></note-filter>
                <button class="new-note-btn"  @click="goToEdit" align="center">New Note</button>
            <note-list @selected="selectNote" :notes="notes"></note-list>
        </section> 
    `,
    data() {
        return {
            notes: [],
            filter: null,
        }   
    },
    methods: {
        selectNote(note) {
            this.$router.push('/keep/edit/' + note.id)
        },
        goToEdit() {
            this.$router.push('/keep/edit')
        },
        setFilter(filterBy) {
            this.filter = filterBy
        }
    },
    created() {
        noteService.query() 
            .then(notes => this.notes = notes)
    },
    computed: {
        notesToShow() {
            if(!this.filter) return this.notes
            else {
                var displayNotes = this.notes.filter(mail => {
                    let content = note.content.toLowerCase()
                    let filter = this.byContent.toLowerCase()
                    return content.includes(filter)
                })
            }
            return displayNotes
        }
    },
    components: {
        noteService,
        noteTxt,
        noteList,
        noteFilter
    }
};