export const filterTasks = (text) => {
  return {
    type: "filter/filterTasks",
    payload: text,
  };
};

export const deleteTask = (id) => {
  return {
    type: "tasks/deleteTask",
    payload: id,
  };
};

export const addTask = (task) => {
  return {
    type: "tasks/addTask",
    payload: task,
  };
};
