describe('Sign in Sinsay', () => {
  beforeEach(() => {
    cy.visit('https://www.sinsay.com/pl/pl/customer/account/login/#login');
  })


  it("Sign in", () => {
    cy.get("#cookiebotDialogOkButton", { timeout: 10000 }).click()
    cy.get('[data-selen="login-email"]').type("tester42@gmail.com")
    cy.get('[data-selen="login-password"]').type("Test!@#")
    cy.get('[data-selen="login-submit"]').click()

    cy.url().should('include', 'https://www.sinsay.com/pl/pl/')
    cy.get('[data-testid="account-info-logged-true"]', { timeout: 10000 }).should("contain", "Mic")
  })
})