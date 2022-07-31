class ShopPage {
  static checkoutBtn() {
    return cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link");
  }
  static location() {
    return cy.get("#country");
  }
  static locationSuggestion() {
    return cy.get(".suggestions > ul > li > a");
  }

  static termsCheckbox() {
    return cy.get("#checkbox2");
  }
  static purchaseButton() {
    return cy.get("input[type='submit']");
  }
  static alertMessage() {
    return cy.get(".alert");
  }

  static productPrice() {
    return cy.get("tr td:nth-child(4) strong");
  }

  static getTotal() {
    return cy.get("h3 strong");
  }
}

export default ShopPage;
