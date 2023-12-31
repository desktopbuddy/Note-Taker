const router = require('express').Router();
let { notesArray } = require('../../db/db.json');
const { createNewNote, deleteNote } = require('../../public/assets/js/notes');

router.get('/notes', (req, res) => {
    let results = notesArray;
    res.json(results);
});

router.post('/notes', (req, res) => {
    if(notesArray){
        req.body.id = notesArray.length.toString();
    } else
    {req.body.id = 0}
    res.json(createNewNote(req.body, notesArray));
});

router.delete('/notes/:id', async (req, res) => {
    const { id } = req.params
    notesArray = await deleteNote(id, notesArray);
    res.json(notesArray);
});

module.exports = router;