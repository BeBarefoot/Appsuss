"use strict";

import noteService from "../services/note-services.js";

export default {
  template: `
        <section v-if="note && note.id" class="note-editor" >
        <h4 class="h4-title">Edit Your Note</h4>
        <input class="input" type="text" v-model="note.title" >
        <li class="li-edit" v-for="(txt,idx) in note.txts" type="text"> {{txt}}
            <button 
            v-if="note.type === 'todo' "
            @click="deleteTodo(idx)">{{note.type}}</button>
            <img v-if="note.type === 'image'" :src="note.url" alt="" srcset="">
            <!-- <img v-if="note.type === 'image'" :src="../img/img-icon.png" /> -->
        </li>
        <button class="go-back" @click="goBack">Go Back To Notes</button>
        <button class="dlt-note" @click="deleteNote">Delete Note</button>
        <button class="save-edited-note" @click="addNote">Save Note</button>
        </section>
        <div v-else class="note-editor" >
            <h4 class="h4-title">Add Note</h4>
            <button class="text-note-btn" @click="setNoteAdd('text')">text note</button>
            <button class="image-note-btn" @click="setNoteAdd('image')">image note</button>
            <button class="todo-note-btn" @click="setNoteAdd('todo')">todo note</button>
            <button class="go-back" @click="goBack">Go Back To Notes</button>
            <div  v-if="(note.type === 'text')">
              <div class="text-note-add-container">
              <h2 class="upload-img-title">Upload Text Note</h2>
                    <input class="text-input" type="text" v-model="note.title" placeholder="Name Your Note">
                    <textarea class="textarea" v-model="note.txts[0]" rows="4" cols="20">
                    </textarea>
                    <button class="save-note" @click="addNote">Save Note</button>
              </div> 
            </div>
            <div v-if="(note.type === 'image')">
               <div class="text-note-add-container">
                 <h2 class="upload-img-title">Upload Image Note</h2>
                    <input class="image-input" type="text" v-model="note.title" placeholder="Name Your Note">
                    <img v-if="note.url" :src="note.url" />
                    <input class="img-upload" @change="onFileChange" type="file" name="Upload Image" id="preview-img">
                    <button class="save-note" @click="addNote">Save Note</button>
               </div>  
            </div>
            <div v-if="(note.type === 'todo')">
                    <div class="todo-note-add-container">
                    <h2 class="upload-img-title">Upload Todo Note</h2>
                    <input class="todo-input" type="text"  v-model="note.title" placeholder="Name Your Note">
                    <input class="todo-input-text" type="text" placeholder="Write Your Todo">
                    <button class="save-note" @click="addNote">Save Note</button>
                </div>  
            </div>
        </div>
    `,
  data() {
    return {
      note: {
        id: null,
        title: null,
        type: null,
        txts: [],
        url: null,
        importance: false
      }
    };
  },
  methods: {
    goBack() {
      this.$router.push('/keep');
    },
    deleteNote() {
      noteService.deleteNote(this.id);
      this.goBack();
    },
    deleteTodo(todoIdx) {
      console.log(todoIdx);
      this.note.txts.splice(todoIdx, 1);
    },
    setNoteAdd(noteType) {
      this.note.type = noteType;
    },
    addNote() {
      console.log(this.note);
      noteService.addNewNote(this.note);
      this.goBack();
    },
    addImg() {
      console.log("done");
    },
    onFileChange(e) {
      console.log("File changed");
      const file = e.target.files[0];
      this.note.url = URL.createObjectURL(file);
    }
  },
  created() {
    if (this.$route.params.noteId) {
      noteService.query().then(() => {
        noteService.getNoteById(this.$route.params.noteId).then(note => {
          if (!note) return
          this.note.title = note.title;
          this.note.type = note.type;
          this.note.txts = note.txts;
          this.note.id = note.id;
          this.note.importance = note.importance;
          this.note.url = note.url;
        });
      });
    }
  },
  computed: {}
};
