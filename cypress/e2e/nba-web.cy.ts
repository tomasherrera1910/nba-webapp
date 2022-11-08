import { api } from '../../utils/api'

describe('NBA Page, cypress test', () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it('home show all teams', async() => {
    const teams = await api.getTeams()
    teams.forEach(team => {
      cy.get(`${team.City} ${team.Name}`)
    })
  })
})