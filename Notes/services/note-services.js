'use strict'

import utilService from './util.service.js'
import storageService from './storage-service.js'

const KEY = 'notePageKey';

export default {
    query,
    deleteNote,
    getNoteById,
    addNewNote
}

var notesDB = []


function query(filter = null) {
    if (notesDB.length > 0) return Promise.resolve(notesDB);
    return storageService.load(KEY)
        .then(notes => {
            if (!notes || !notes.length) {
                notes = createInitialNotes();
                storageService.store(KEY, notes);
            }
            notesDB = notes
            if (filter === null) return notes;
            else return notes.filter(note =>
                note.type.toUpperCase().includes(filter.byType.toUpperCase()))
        })
}

function getNoteById(NoteId) {
    var note = notesDB.find(note => note.id === NoteId)
    return Promise.resolve(note);
}

function addNewNote(noteToSave){
    noteToSave.id = utilService.makeId(6)
    notesDB.push(noteToSave)
    console.log(notesDB)
    storageService.store(KEY, notesDB)

}


function deleteNote(noteId) {
    var idx = notesDB.findIndex(note => note.id === noteId)
    notesDB.splice(idx, 1)
    storageService.store(KEY, notesDB)
}

function createInitialNotes() {
    console.log('hey')
    return [
        {
            id: utilService.makeId(6),
            title: 'remeber to upload',
            type: 'text',
            txts: ['remeber to upload'],
            importance: false,
        },
        {
            id: utilService.makeId(6),
            type: 'image',
            title: 'fix this shit',
            txts: ['buying nails'],
            // url:'../img/img-icon.png',
            importance: false,
        },
        {
            id: utilService.makeId(6),
            type: 'todo',
            title: 'Done with this shit',
            txts: ['' ,''],
            importance: false,
        },

    ]
}
