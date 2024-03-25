//CreateNote.js

import React, { useState } from 'react';

const CreateNote = ({ onCreate }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [coverImg, setCoverImg] = useState('');
	const [googleMapLink, setgoogleMapLink] = useState('');

	const handleCreate = () => {
		if (!title || !description) {
			alert('Please enter both title and desc.');
			return;
		}

		const newNote = {
			title: title,
			description: description,
			coverImg: coverImg,
			googleMapLink:googleMapLink
		};
		onCreate(newNote);

		setTitle('');
		setDescription('');
		setCoverImg('');
		setgoogleMapLink('');
	};

	return (
		<div>
			<h2>Create Travel</h2>
			<p><label>Title:</label>
			<input type="text" value={title}
				onChange={(e) => setTitle(e.target.value)}
				name='name' /><br /></p>
			<p><label>Description:</label>
			<textarea value={description}
				onChange={(e) => setDescription(e.target.value)} /><br /></p>

			<p><span><label>coverImg:</label></span>
			<span><input type="text" value={coverImg}
				onChange={(e) => setCoverImg(e.target.value)}
				name='coverImg'  /><br /></span>
			</p>
			<p><label>googleMapLink:</label>
			<input type="text" value={googleMapLink}
				onChange={(e) => setgoogleMapLink(e.target.value)}
				name='googleMapLink' /><br />
			</p>
			<p><button onClick={handleCreate}>Create Note</button></p>
		</div>
	);
};

export default CreateNote;
