import { render, screen } from '@testing-library/react'
import Footer from '../../src/components/Footer'

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
})

describe('Footer', () => {
  test('renders footer component', () => {
    render(<Footer />)
    
    const footer = screen.getByRole('contentinfo') || screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'footer'
    })
    expect(footer || document.querySelector('footer')).toBeTruthy()
  })

  test('has correct styling classes', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    
    expect(footer).toHaveClass('bg-academic-off-white', 'dark:bg-academic-navy')
  })
})