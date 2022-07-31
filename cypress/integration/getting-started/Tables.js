/// <reference types="Cypress" />

describe("My Sixth Test Suite", function () {
  it("My First Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
      const course = $el.text();
      if (course.includes("Python")) {
        //Sibling element
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((price) => {
            const priceText = price.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });
});
