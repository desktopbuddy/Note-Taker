const router = require('express').Router();
let { notesArray } = require('../../db/db.json');
const { createNewNote, deleteNote } = require('../../public/assets/js/notes');
