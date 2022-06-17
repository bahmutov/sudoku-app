/// <reference types="cypress" />

import { starting, solved } from '../fixtures/sudoku.json'

describe('Sudoku', () => {
  it('plays the same game', () => {
    // to play the same game, we will pass
    // the starting and the solved arrays
    // to the application via the "window" object
    cy.visit('/', {
      onBeforeLoad(window) {
        window.starting = starting
        window.solved = solved
      },
    })

    // our initial array only has 3 cells to fill
    cy.get('.game__cell:contains(0)').should('have.length', 3)
    starting.forEach((cell, index) => {
      if (cell === '0') {
        cy.get('.game__cell').eq(index).click()
        cy.contains('.status__number', solved[index])
          .click()
          // slow down the test to make
          // the commands visible to the user
          .wait(1000, { log: false })
      }
    })

    cy.contains('.overlay__text', 'You solved it').should('be.visible')
  })
})
