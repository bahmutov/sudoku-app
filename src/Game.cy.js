/// <reference types="cypress" />
import React from 'react'
import { Game } from './Game'
import './App.css'
import {
  SudokuContext,
  SudokuProvider,
  useSudokuContext,
} from './context/SudokuContext'
import { WinContext, WinProvider } from './context/WinContext'
import { starting, solved } from '../cypress/fixtures/sudoku.json'

describe('Game', () => {
  it('sets the won flag', () => {
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

  function OverwriteSudokuContext({ children, spies, stubs }) {
    const value = useSudokuContext()

    Cypress._.each(spies, (fn, spyName) => {
      const realFn = value[spyName]
      value[spyName] = function () {
        fn(...arguments)
        return realFn.apply(this, arguments)
      }
    })

    return (
      <SudokuContext.Provider value={value}>{children}</SudokuContext.Provider>
    )
  }

  it('spies on the set selected number', () => {
    cy.mount(
      <SudokuProvider>
        <OverwriteSudokuContext
          spies={{
            setNumberSelected: cy.stub().as('setNumberSelected'),
          }}
        >
          <WinProvider>
            <Game />
          </WinProvider>
        </OverwriteSudokuContext>
      </SudokuProvider>,
    )
    cy.get('@setNumberSelected').should('have.been.calledWith', '0')
    cy.get('.status__action-fast-mode-slider').click()
    cy.get('.status__action-fast-mode input').should('be.checked')
    cy.contains('.status__number', '5').click()
    cy.get('@setNumberSelected').should('have.been.calledWith', '5')
    cy.contains('.status__number', '8').click()
    cy.get('@setNumberSelected').should('have.been.calledWith', '8')
  })

  it.skip('sets the selected number (nope)', () => {
    cy.mount(
      <SudokuProvider>
        <SudokuContext.Provider
          value={{
            numberSelected: '7',
            setNumberSelected: cy.stub().as('setNumberSelected'),
          }}
        >
          <WinProvider>
            <Game />
          </WinProvider>
        </SudokuContext.Provider>
      </SudokuProvider>,
    )
  })
})
