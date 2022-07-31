/// <reference types="Cypress" />
import "cypress-iframe";

describe("My Seventh Test Suite", function () {
  it("My First Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href]").contains("Mentorship").click();
    cy.iframe().find("h1.pricing-title").should("have.length", 2);
  });
});
