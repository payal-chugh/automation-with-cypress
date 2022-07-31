/// <reference types="Cypress" />

describe("My Second Test Suite", function () {
  it("My First Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    //Aliasing
    cy.get(".products").as("productLocator");

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        if ($el.find(".product-name").text().includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
