class HomePage {
  static getEditName() {
    return cy.get('input[name="name"]:nth-child(2)');
  }

  static getTwoWayBinding() {
    return cy.get('input[name="name"]:nth-child(1)');
  }
  static getGender() {
    return cy.get("#exampleFormControlSelect1");
  }

  static getEntrepreneur() {
    return cy.get("#inlineRadio3");
  }
  static getShopButton() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}

export default HomePage;
