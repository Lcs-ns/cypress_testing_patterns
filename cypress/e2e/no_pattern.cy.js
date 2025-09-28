describe("No-pattern tests (direct requests)", () => {
  it("GET /todos/1 returns todo with id 1", () => {
    cy.request("GET", "/todos/1").then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body).to.have.property("id", 1);
    });
  });

  it("POST /todos creates a new todo (returns 201)", () => {
    const payload = { title: "build something", completed: false, userId: 1 };
    cy.request("POST", "/todos", payload).then((resp) => {
      expect(resp.status).to.be.oneOf([201, 200]);
      expect(resp.body).to.have.property("title", payload.title);
    });
  });
});
