class TodoPage {
    getTodoRequest = (id) => {
        return cy.request({ method: 'GET', url: `/todos/${id}` });
    }

    createTodoRequest = (payload) => {
        return cy.request({ method: 'POST', url: '/todos', body: payload });
    }
}

export default TodoPage;