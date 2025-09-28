import TodoActions from "./functions/todoActions";

describe("Function-based tests (page funcs + actions)", () => {
  it("fetches a todo via function-based page + actions", () => {
    TodoActions.fetchTodo(1).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body).to.have.property("id", 1);
    });
  });

  it("creates a todo via function-based actions", () => {
    const payload = { title: "fn-based todo", completed: false, userId: 3 };
    TodoActions.createTodo(payload).then((resp) => {
      expect(resp.status).to.be.oneOf([201, 200]);
      expect(resp.body).to.have.property("title", payload.title);
    });
  });
});
