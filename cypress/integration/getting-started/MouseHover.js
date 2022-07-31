/// <reference types="Cypress" />

describe("My Fifth Test Suite", function () {
  it("My First Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //jquery applied to its immediate child elements
    // cy.get("div.mouse-hover-content").invoke("show");
    // cy.contains("Top").click();
    // cy.url().should("include", "top");

    //Clicking Hidden element using force
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
