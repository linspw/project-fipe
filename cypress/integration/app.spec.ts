describe("E2E test", () => {
  context("Home Page and Result Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });

    it("should render the home page and display a message", () => {
      cy.get("h1").contains("Tabela Fipe");
    });

    it("should select autocomplete fields and open result page with requested params", () => {
      cy.get("#autocomplete-brand").click();
      cy.focused().type("Acura");
      cy.contains("Acura")
        .should("be.visible")
        .and("have.class", "MuiAutocomplete-option")
        .click();

      cy.get("#autocomplete-model").click();
      cy.focused().type("Integra GS 1.8");
      cy.contains("Integra GS 1.8")
        .should("be.visible")
        .and("have.class", "MuiAutocomplete-option")
        .click();

      cy.get("#autocomplete-year").click();
      cy.focused().type("1992 Gasolina");
      cy.contains("1992 Gasolina")
        .should("be.visible")
        .and("have.class", "MuiAutocomplete-option")
        .click();

      cy.get(".MuiButton-root").contains("Consultar preço").click();
      cy.location("href", { timeout: 20000 }).should(
        "include",
        "http://localhost:3000/resultados?brand=1&model=1&year=1992-1"
      );

      cy.get("h1").contains("Tabela Fipe: Acura Integra GS 1.8 1992");
    });
  });
});
