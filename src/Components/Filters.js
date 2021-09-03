import React from "react";

import { FILTERS } from "../Constants/FiltersIndex";

const Filters = ({ currentFilter, changeFilter }) => (
  <div className="filters">
        <h4>To Do List:</h4>
        <button
        style={{
            background: currentFilter === FILTERS.ALL_TASKS ? "gray" : "inherit"
        }}
        onClick={() => changeFilter(FILTERS.ALL_TASKS)}
        className="filterButton"
        >
        ALL
        </button>
        <button
        style={{
            background: currentFilter === FILTERS.COMPLETED ? "gray" : "inherit"
        }}
        onClick={() => changeFilter(FILTERS.COMPLETED)}
        className="filterButton"
        >
        Completed
        </button>
        <button
        style={{
            background: currentFilter === FILTERS.UNCOMPLETED ? "gray" : "inherit"
        }}
        onClick={() => changeFilter(FILTERS.UNCOMPLETED)}
        className="filterButton"
        >
        Uncompleted
        </button>
  </div>
);

export default Filters;
