/// <reference types="cypress" />
import React from 'react'
import { Game } from './Game'
import './App.css'
import { SudokuProvider } from './context/SudokuContext'
import { WinContext } from './context/WinContext'
import { starting, solved } from '../cypress/fixtures/sudoku.json'

describe('Game', () => {
  it('sets the win flag', () => {
    const value = {
      won: false,
      setWon: cy.stub().as('setWon'),
    }
    window.starting = starting
    window.solved = solved
    cy.mount(
      <SudokuProvider>
        <WinContext.Provider value={value}>
          <Game />
        </WinContext.Provider>
      </SudokuProvider>,
    )
    cy.get('@setWon')
      .should('have.been.calledWith', false)
      .invoke('resetHistory')

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

    cy.get('@setWon').should('have.been.calledOnceWith', true)
  })
})
