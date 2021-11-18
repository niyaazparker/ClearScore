import { expect } from 'chai'

describe("Dispays Dom elements", () => {
    it ("Elements displaying correctly", () => {
        cy.visit("/")
        cy.get("#axios-container").should("exist")
    })
});

describe("Testing API Endpoints Using Cypress", () => {

    it("Test GET Request", () => {
          cy.request("https://api.jsonbin.io/b/6107fbe9f14b8b153e05e714")
               .should((response) => {
                      expect(response.data);
          })
    })
    
 })