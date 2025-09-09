import { render, screen } from '@testing-library/react'
import Hero from '../../src/components/Hero'
import { CalProvider } from '../../src/components/CalProvider'

// Mock next/dynamic
jest.mock('next/dynamic', () => jest.fn(() => {
  return function MockedComponent() {
    return <div data-testid="mocked-component" />
  }
}))

// Mock the useCal hook
jest.mock('../../src/components/CalProvider', () => ({
  CalProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useCal: () => ({
    open: jest.fn(),
  }),
}))

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage(props: any) {
    return <img {...props} />
  }
})

describe('Hero', () => {
  const renderHero = () => {
    return render(
      <CalProvider>
        <Hero />
      </CalProvider>
    )
  }

  test('renders main heading', () => {
    renderHero()
    expect(screen.getByText('Your Local')).toBeInTheDocument()
    expect(screen.getByText('Bay Area Premier Tutor')).toBeInTheDocument()
  })

  test('renders experience badge', () => {
    renderHero()
    expect(screen.getByText(/UC Berkeley Graduate/)).toBeInTheDocument()
    expect(screen.getByText(/15\+ Years Experience/)).toBeInTheDocument()
  })

  test('renders subheading with key information', () => {
    renderHero()
    expect(screen.getByText(/expert tutoring for SAT, ACT/)).toBeInTheDocument()
    expect(screen.getByText(/Bay Area curricula/)).toBeInTheDocument()
  })

  test('renders location badge', () => {
    renderHero()
    expect(screen.getByText('In-Person* & Online')).toBeInTheDocument()
  })

  test('renders call-to-action buttons', () => {
    renderHero()
    expect(screen.getByRole('button', { name: /schedule free consultation/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /view services/i })).toBeInTheDocument()
  })

  test('renders schools trust statement', () => {
    renderHero()
    expect(screen.getByText('Trusted by families from these East Bay schools:')).toBeInTheDocument()
  })

  test('renders professional tutor image', () => {
    renderHero()
    const image = screen.getByAltText('Professional tutor helping student with advanced mathematics problem')
    expect(image).toBeInTheDocument()
  })
})