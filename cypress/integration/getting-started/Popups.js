/// <reference types="Cypress" />

describe("My Fourth Test Suite", function () {
  it("My First Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //Cypress auto accepts alerts and popups
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    //Child Tab
    cy.get("#opentab").invoke("removeAttr", "target").click();

    //Difference - contain and include?
    cy.url().should("include", "rahulshettyacademy");
    cy.url().should("contain", "rahulshettyacademy");

    //Navigating Browser
    cy.go("back");
  });
});
