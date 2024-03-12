describe('Repro', () => {
    it('Does not do much!', () => {
        cy.visit('https://bmw.autobid.de/'+"en", {failOnStatusCode:false})
      expect(true).to.equal(true)
    })
  })
