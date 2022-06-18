/// <reference types="cypress" />
import React from 'react'
import './App.css'
import { Game } from './Game'
import { SudokuProvider } from './context/SudokuContext'
import { WinProvider } from './context/WinContext'
import { starting, solved } from '../cypress/fixtures/sudoku.json'

describe('Game', () => {
  it('appears', () => {
    window.starting = starting
    window.solved = solved
    cy.mount(
      <SudokuProvider>
        <WinProvider>
          <Game />
        </WinProvider>
      </SudokuProvider>,
    )

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
