'use strict'

import noteService from '../services/note-services.js';
import noteTxt from '../cmp/note-txt.cmp.js';
import noteList from '../cmp/note-list.cmp.js';

export default {
    template: `
        <section class="note app">
            <h1 class="note-app-title">NoteApp</h1>
                <button class="new-note-btn"  @click="goToEdit" align="center">New Note</button>
            <note-list @selected="selectNote" :notes="notes"></note-list>
        </section> 
    `,
    data() {
        return {
            notes: []
        }   
    },
    methods: {
        selectNote(note) {
            this.$router.push('/keep/edit/' + note.id)
        },
        goToEdit() {
            this.$router.push('/keep/edit')
        }
    },
    created() {
        noteService.query() 
            .then(notes => this.notes = notes)
    },
    computed: {

    },
    components: {
        noteService,
        noteTxt,
        noteList
    }
};