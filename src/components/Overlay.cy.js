/// <reference types="cypress" />
import React from 'react'
import { Overlay } from './Overlay'
import '../App.css'

describe('Overlay', () => {
  it('is invisible', () => {
    cy.mount(<Overlay />)
    cy.get('.overlay').should('not.be.visible')
  })

  it('is visible and clickable', () => {
    cy.mount(<Overlay overlay={true} onClickOverlay={cy.stub().as('click')} />)
    cy.get('.overlay').should('be.visible').click()
    cy.get('@click').should('have.been.called')
  })

  it('shows the loading element', () => {
    cy.intercept('GET', '/times/90', {
      delay: 1000,
      statusCode: 404,
      body: [],
    })
    cy.mount(<Overlay overlay={true} time={90} />)
    cy.contains('.overlay__loading', 'Loading').should('be.visible')
    cy.get('.overlay__loading').should('not.exist')
  })
})
