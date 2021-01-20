import React, { useEffect, useState } from 'react';
import Task from './Task';
import '../css/TaskList.css';

const TaskList = ({ TaskArr = [], deleteItem }) => {
	const [tasks, setTasks] = useState(TaskArr);

	useEffect(() => {
		setTasks(TaskArr);
	}, [TaskArr]);

	function generateTaskList() {
		return tasks.map((text, index) => {
			return tasks.length === 0 ? (
				<></>
			) : (
				<Task key={index} Text={text} deleteItem={deleteItem} />
			);
		});
	}
	return <div id='list'>{generateTaskList()}</div>;
};
export default TaskList;
