import React, { Component } from 'react';

export default class AddTask extends Component {
    state = {
        taskTitle: ''
    };

    onChangeTitle = event => this.setState({ taskTitle: event.target.value });

    onAddTask = () => {
        const { addTask } = this.props;
        const { taskTitle } = this.state;

        addTask(taskTitle);

        this.setState({ taskTitle: "" });
    };
    
    render() {
        const { onChangeTitle, onAddTask } = this;
        const { taskTitle } = this.state;

        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Task Title" 
                    value={taskTitle} 
                    onChange={onChangeTitle} 
                    className="inputStyle"                />
                <button disabled={!taskTitle} onClick={onAddTask}>Add Task</button>
            </div>
        );
    }

}