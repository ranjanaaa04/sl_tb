//NoteList.js

import React from 'react';

const NoteList = ({ notes, onUpdate, onDelete }) => {
	return (
		<div>
			<h2>Travel</h2>
			<ul>
				{notes.map((note) => (
					<li key={note._id}>
						<strong>{note.title}</strong>
						<p>{note.description}</p>
						<p><img src={note.coverImg} alt=''/></p>
                        <p>{note.googleMapLink}</p>
						<button onClick={() =>
							onUpdate(note._id)}>Update</button>
						<button onClick={() =>
							onDelete(note._id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NoteList;
