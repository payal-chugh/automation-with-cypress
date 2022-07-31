/// <reference types="Cypress" />

describe("My First Test Suite", function () {
  it("My First Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);

    //Aliasing
    cy.get(".products").as("productLocator");

    //Parent Child chaining
    cy.get("@productLocator").find(".product").should("have.length", 4);

    //Click on Add to Cart
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click();

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        if ($el.find(".product-name").text().includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".brand").should("have.text", "GREENKART");
  });
});
