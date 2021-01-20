import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../css/Task.css';

const Task = ({ Text, deleteItem }) => {
	const [checked, setChecked] = useState(false);
	return (
		<div id='list-entry'>
			<p className={checked ? 'entry-text checked' : 'entry-text'}>{Text}</p>
			<div className='icons'>
				<FontAwesomeIcon
					id='check-icon'
					icon={faCheck}
					onClick={e => {
						e.preventDefault();
						setChecked(true);
					}}
				/>
				<FontAwesomeIcon
					id='trash-icon'
					icon={faTrash}
					onClick={e => {
						e.preventDefault();
						deleteItem(Text);
					}}
				/>
			</div>
		</div>
	);
};
export default Task;
