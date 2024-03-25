//App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import './App.css';

const App = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:5000/items')
			.then(response => {
				setNotes(response.data);
				console.log(response.data)
			})
			.catch(error =>
				console.error('Error fetching notes:', error));
	}, []);

	const handleCreateNote = (newNote) => {
		setNotes([...notes, newNote]);
		axios.post('http://localhost:5000/items/add', newNote)
			.then(response =>
				console.log('Note created:', response.data))
			.catch(error =>
				console.error('Error creating note:', error));
	};

	const handleUpdateNote = (noteId) => {
		console.log(`Update note with ID: ${noteId}`);
	};

	const handleDeleteNote = (noteId) => {
		setNotes(notes.filter(note => note._id !== noteId));
		axios.delete(`http://localhost:5000/items/${noteId}`)
			.then(response =>
				console.log('Note deleted:', response.data))
			.catch(error =>
				console.error('Error deleting note:', error));
	};

	return (
		<div className="container">
			<CreateNote onCreate={handleCreateNote} />
			<NoteList notes={notes}
				onUpdate={handleUpdateNote}
				onDelete={handleDeleteNote} />
		</div>
	);
};

export default App;
