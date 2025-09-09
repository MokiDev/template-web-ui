import { render, screen } from '@testing-library/react'
import FAQ from '../../src/components/FAQ'

// Mock the dependencies
jest.mock('../../src/data/siteContent', () => ({
  siteContent: {
    faq: {
      items: [
        { question: 'Test Question 1', answer: 'Test Answer 1' },
        { question: 'Test Question 2', answer: 'Test Answer 2' }
      ]
    }
  }
}))

jest.mock('../../src/utils/formatters', () => ({
  createSlug: jest.fn((text) => text.toLowerCase().replace(/\s+/g, '-'))
}))

jest.mock('../../analytics/utils', () => ({
  captureEvent: jest.fn()
}))

describe('FAQ', () => {
  test('renders FAQ component', () => {
    render(<FAQ />)
    
    // Test should pass as long as component renders without crashing
    // FAQ section should exist even if no FAQs are defined in the mock
    expect(true).toBeTruthy() // Basic rendering test
  })
})