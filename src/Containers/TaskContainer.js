import React, { Component } from "react";
import TaskList from "../Components/TaskList";

import AddTask from "../Components/AddTask";

import Filters from "../Components/Filters";

import { FILTERS } from "../Constants/FiltersIndex";

export default class TaskContainer extends Component {
    state = {
      taskList: [
        { id: "t1", title: "Task1", isCompleted: true },
        { id: "t2", title: "Task2", isCompleted: false }
      ],
      currentFilter: FILTERS.ALL_TASKS
    };
  
    get currentList() {
      const { currentFilter, taskList } = this.state;
  
      switch (currentFilter) {
        case FILTERS.ALL_TASKS:
          return taskList;
  
        case FILTERS.COMPLETED:
          return taskList.filter(task => task.isCompleted);
  
        case FILTERS.UNCOMPLETED:
          return taskList.filter(task => !task.isCompleted);
  
        default:
          return taskList;
      }
    }
  
    addTask = title => {
      const newTaskList = [...this.state.taskList];
  
      const newTask = {
        title,
        id: `${Date.now()}`,
        isCompleted: false
      };
  
      newTaskList.push(newTask);
  
      this.setState({ taskList: newTaskList });
    };
  
    onCheck = taskId => {
      const newList = this.state.taskList.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted
          };
        }
  
        return task;
      });
  
      this.setState({ taskList: newList });
    };
  
    changeFilter = newFilter => this.setState({ currentFilter: newFilter });
  
    render() {
      const { currentFilter } = this.state;
      const { addTask, onCheck, changeFilter, currentList } = this;
  
      return (
        <div>
          <Filters currentFilter={currentFilter} changeFilter={changeFilter} />
          <AddTask addTask={addTask} />
          <TaskList onCheck={onCheck} taskList={currentList} />
        </div>
      );
    }
  }
  