import React from 'react';

const TaskItem = ({ task, onCheck }) => {
    const onCheckboxClick = () => {
        onCheck(task.id);
    };

return (
    <li>
        <input 
            onClick={onCheckboxClick}
            type="checkbox" 
            checked={task.isCompleted} 
        />
        {task.title}
    </li>
    );
};


export default TaskItem;

