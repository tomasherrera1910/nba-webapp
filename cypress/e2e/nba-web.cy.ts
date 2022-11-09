describe('NBA Page, cypress test', () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it('home show all teams', () => {
    cy.intercept('https://api.sportsdata.io/v3/nba/scores/json/teams', {fixture: 'teams.json'})
    cy.contains('Utah Jazz')
    cy.contains('Brooklyn Nets')
    cy.contains('Cleveland Cavaliers')
  }),
  it('team details can be open', () => {
    cy.contains('Cleveland Cavaliers').click()
    cy.url()
    .should("include", "/team/CLE")
    .then(() => {
      //cleveland player
      cy.contains('Darius Garland')
      //conference
      cy.contains('Eastern')
      //division
      cy.contains('Central')
    })
  })
  it('player stats show players and filters work', () => {
    cy.contains('Players Stats').click()
    cy.url()
    .should("include", "/stats")
    .then(() => {
      cy.get('select').select('Points')
      cy.contains('Luka Doncic')
      cy.get('input').type('Kevin')
      cy.get('form').submit()
      cy.contains('Durant')
    })
  })
})
export {}