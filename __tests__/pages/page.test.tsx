import { render, screen } from '@testing-library/react'
import HomePage from '../../src/app/page'

// Mock all the child components to keep tests focused on the page structure
jest.mock('../../src/components/Header', () => {
  return function MockHeader() {
    return <header data-testid="header">Header</header>
  }
})

jest.mock('../../src/components/Hero', () => {
  return function MockHero() {
    return <section data-testid="hero">Hero</section>
  }
})

jest.mock('../../src/components/Services', () => {
  return function MockServices() {
    return <section data-testid="services">Services</section>
  }
})

jest.mock('../../src/components/About', () => {
  return function MockAbout() {
    return <section data-testid="about">About</section>
  }
})

jest.mock('../../src/components/Pricing', () => {
  return function MockPricing() {
    return <section data-testid="pricing">Pricing</section>
  }
})

jest.mock('../../src/components/FAQ', () => {
  return function MockFAQ() {
    return <section data-testid="faq">FAQ</section>
  }
})

jest.mock('../../src/components/Contact', () => {
  return function MockContact() {
    return <section data-testid="contact">Contact</section>
  }
})

jest.mock('../../src/components/Footer', () => {
  return function MockFooter() {
    return <footer data-testid="footer">Footer</footer>
  }
})

describe('HomePage', () => {
  test('renders all main sections', () => {
    render(<HomePage />)
    
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('services')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('pricing')).toBeInTheDocument()
    expect(screen.getByTestId('faq')).toBeInTheDocument()
    expect(screen.getByTestId('contact')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  test('has correct document structure', () => {
    render(<HomePage />)
    
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    
    // Check that the main container has expected styling classes
    const container = screen.getByText('Header').closest('div')
    expect(container).toHaveClass('min-h-screen', 'bg-background', 'text-foreground')
  })
})