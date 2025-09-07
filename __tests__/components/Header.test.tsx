import { render, screen } from '@testing-library/react'
import Header from '../../src/components/Header'
import { CalProvider } from '../../src/components/CalProvider'

// Mock next/dynamic since it's used in CalProvider
jest.mock('next/dynamic', () => jest.fn(() => {
  return function MockedComponent () {
    return <div data-testid="mocked-component" />
  }
}))

// Mock window.scrollTo for tests
Object.defineProperty(window, 'scrollY', {
  value: 0,
  writable: true,
})

// Mock the useCal hook
jest.mock('../../src/components/CalProvider', () => ({
  CalProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useCal: () => ({
    open: jest.fn(),
  }),
}))

describe('Header', () => {
  const renderHeader = () => {
    return render(
      <CalProvider>
        <Header />
      </CalProvider>
    )
  }

  test('renders logo text', () => {
    renderHeader()
    expect(screen.getByText('The Bay Area Tutor')).toBeInTheDocument()
  })

  test('renders desktop navigation links', () => {
    renderHeader()
    expect(screen.getByRole('button', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /faq/i })).toBeInTheDocument()
  })

  test('renders schedule buttons', () => {
    renderHeader()
    const scheduleButtons = screen.getAllByRole('button', { name: /schedule now/i })
    expect(scheduleButtons).toHaveLength(2) // Desktop + floating button
  })

  test('renders mobile menu button', () => {
    renderHeader()
    const mobileMenuButton = screen.getByRole('button', { name: '' }) // Menu icon button
    expect(mobileMenuButton).toBeInTheDocument()
  })
})