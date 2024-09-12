describe('Sign in Sinsay with invalid credentials', () => {
  beforeEach(() => {
    cy.visit('https://www.sinsay.com/pl/pl/customer/account/login/#login');
  })

  it("Sign in", () => {
    cy.get("#cookiebotDialogOkButton", { timeout: 10000 }).click()
    cy.get('[data-selen="login-email"]').type("wrongEmail@gmail.com")
    cy.get('[data-selen="login-password"]').type("Testfailed")
    cy.get('[data-selen="login-submit"]').click()

    cy.url().should('include', 'https://www.sinsay.com/pl/pl/customer/account/login/#login')
    cy.get('.sc-gYhhMS', { timeout: 10000 }).should("contain", "Niepoprawny login i/lub hasło.")
  })
})