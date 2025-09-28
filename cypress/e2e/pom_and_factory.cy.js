import TodoFactory from "./factories/todoFactory";

const todosFactory = new TodoFactory();

describe("POM + Factory tests", () => {
  it("fetches a todo using POM selectors + Factory actions", () => {
    todosFactory.fetchTodo(1).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body).to.have.property("id", 1);
    });
  });

  it("creates a todo using the factory", () => {
    const payload = { title: "factory todo", completed: false, userId: 2 };
    todosFactory.createTodo(payload).then((resp) => {
      expect(resp.status).to.be.oneOf([201, 200]);
      expect(resp.body).to.have.property("title", payload.title);
    });
  });
});
