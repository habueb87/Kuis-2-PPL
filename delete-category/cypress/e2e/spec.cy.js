//type definition for Cypress object 'cy'

describe("Delete Kategori", function() {
  it("should login with username and password", function() {

      // visit the lambdageeks page
      cy.visit('https://cerita-online-kelompok6-ti2a.000webhostapp.com/admin/login_admin.php')

      cy.get(':nth-child(1) > .form-control').type('rhd')

      cy.get(':nth-child(2) > .form-control').type('raihan123')

      cy.get('.btn').click()

      cy.get('[href="tambah_kategori.php"]').click()

      cy.get(':nth-child(8) > :nth-child(3) > .btn-danger').click()
      
  });
});

describe("Edit Cerita (Author)", function() {
  it("should login with username and password", function() {

      // visit the lambdageeks page
      cy.visit('https://cerita-online-kelompok6-ti2a.000webhostapp.com/admin/login_admin.php')

      cy.get(':nth-child(1) > .form-control').type('rhd')

      cy.get(':nth-child(2) > .form-control').type('raihan123')

      cy.get('.btn').click()

      cy.get('[href="data_cerita.php"]').click({ timeout : 15000 })

      cy.get(':nth-child(1) > :nth-child(7) > .btn-success').click()

      cy.get(':nth-child(3) > #exampleInputEmail1').clear().type('Satria Alief PS')

      cy.get('.m-3 > .btn').click()
      
  });
});

describe("Edit Cerita (Kategori)", function() {
  it("should login with username and password", function() {

      // visit the lambdageeks page
      cy.visit('https://cerita-online-kelompok6-ti2a.000webhostapp.com/admin/login_admin.php')

      cy.get(':nth-child(1) > .form-control').type('rhd')

      cy.get(':nth-child(2) > .form-control').type('raihan123')

      cy.get('.btn').click()

      cy.get('[href="data_cerita.php"]').click({ timeout : 15000 })

      cy.get(':nth-child(1) > :nth-child(7) > .btn-success').click()

      cy.get('.form-select').select("Comedy")

      cy.get('.m-3 > .btn').click()
      
  });
});