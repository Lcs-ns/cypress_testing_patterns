import * as page from "../pages/todoFunctionPage";

const TodoActions = {
  page,

  fetchTodo: (id) => {
    return page.getTodoRequest(id);
  },

  createTodo: (payload) => {
    return page.createTodoRequest(payload);
  },
};

export default TodoActions;