//items.js

const express = require('express');
const router = express.Router();
const Item = require('../models/item.model');

router.post('/add', (req, res) => {
	const { title, description, coverImg,googleMapLink } = req.body;

	const newNote = new Item({
		title,
		description,
		coverImg,
		googleMapLink
	});

	newNote.save()
		.then(() => res.json('Note added!'))
		.catch(err => res.status(400).json(`Error: ${err}`));
});

router.get('/', (req, res) => {
	Item.find()
		.then(notes => res.json(notes))
		.catch(err => res.status(400).json(`Error: ${err}`));
});

router.put('/update/:id', (req, res) => {
	Item.findById(req.params.id)
		.then(note => {
			note.title = req.body.title;
			note.description = req.body.description;
			note.coverImg = req.body.coverImg;
			note.googleMapLink=req.body.googleMapLink;
			note.save()
				.then(() => res.json('Note updated!'))
				.catch(err => res.status(400).json(`Error: ${err}`));
		})
		.catch(err => res.status(400).json(`Error: ${err}`));
});

router.delete('/:id', (req, res) => {
	Item.findByIdAndDelete(req.params.id)
		.then(() => res.json('Note deleted.'))
		.catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
