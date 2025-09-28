export const getTodoRequest = (id) =>
  cy.request({ method: "GET", url: `/todos/${id}` });

export const createTodoRequest = (payload) =>
  cy.request({ method: "POST", url: "/todos", body: payload });
