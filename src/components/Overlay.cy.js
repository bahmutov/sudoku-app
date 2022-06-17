/// <reference types="cypress" />
import React from 'react'
import { Overlay } from './Overlay'
import '../App.css'

describe('Overlay', () => {
  it('is invisible and cannot be clicked', () => {
    cy.mount(<Overlay onClickOverlay={cy.stub().as('click')} />)
    cy.get('.overlay').should('not.be.visible')
    // the overlay cannot be clicked using the cy.click() command
    // because it is not visible
    // workaround:
    // 1. click({ force: true })
    // 2. invoke('click') // jQuery method
    // cy.get('@click').should('have.been.calledOnce')
  })

  it('is visible and clickable', () => {
    cy.mount(<Overlay overlay={true} onClickOverlay={cy.stub().as('click')} />)
    cy.get('.overlay').should('be.visible').click()
    cy.get('@click').should('have.been.calledOnce')
  })
})
