/// <reference types="Cypress" />

import HomePage from "../../support/pageObjects/HomePage";
import ShopPage from "../../support/pageObjects/ShopPage";

describe("My Eighth Test Suite", () => {
  let data = {};
  before(() => {
    cy.fixture("protoCommerce").then((d) => (data = d));
    Cypress.config("defaultCommandTimeout", 8000);
  });
  beforeEach(() => {
    cy.visit(Cypress.env("url") + "/angularpractice/");
  });

  it("Form Validation", () => {
    HomePage.getEditName().type(data.name);
    HomePage.getGender().select(data.gender);
    HomePage.getTwoWayBinding().should("have.value", data.name);
    HomePage.getEditName().should("have.attr", "minlength", "2");
    HomePage.getEntrepreneur().should("be.disabled");
  });

  //   it("Shop and checkout", () => {
  //     HomePage.getShopButton().click();
  //     data.productName.forEach((element) => {
  //       cy.selectProduct(element);
  //     });
  //     ShopPage.checkoutBtn().click();
  //     cy.contains("Checkout").click();
  //     ShopPage.location().type("India");
  //     //cy.wait(4000);
  //     ShopPage.locationSuggestion().click();
  //     ShopPage.termsCheckbox().click({ force: true });
  //     ShopPage.purchaseButton().click();
  //     ShopPage.alertMessage().then((elem) => {
  //       expect(elem.text()).include(
  //         "Success! Thank you! Your order will be delivered in next few weeks :-)."
  //       );
  //     });
  //   });
  it("Validating Total", () => {
    HomePage.getShopButton().click();
    data.productName.forEach((element) => {
      cy.selectProduct(element);
    });
    ShopPage.checkoutBtn().click();
    var sum = 0;
    ShopPage.productPrice().each(($el, index, $list) => {
      sum = sum + Number($el.text().split(" ")[1]);
    });
    ShopPage.getTotal().then((elem) => {
      expect(Number(elem.text().split(" ")[1])).to.equal(sum);
    });
  });
});
