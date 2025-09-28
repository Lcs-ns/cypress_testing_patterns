import TodoPage from "../pages/todoPomPage";

class TodoFactory {
  todoPage = new TodoPage();

  fetchTodo = (id) => {
    return this.todoPage.getTodoRequest(id);
  };

  createTodo = (payload) => {
    return this.todoPage.createTodoRequest(payload);
  };
}

export default TodoFactory;
