import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ActionBar from './ActionBar'

describe('ActionBar', () => {
  it('renders all formatting buttons', () => {
    render(<ActionBar />)
    
    expect(screen.getByLabelText('Bold')).toBeInTheDocument()
    expect(screen.getByLabelText('Italic')).toBeInTheDocument()
    expect(screen.getByLabelText('Underline')).toBeInTheDocument()
    expect(screen.getByLabelText('Heading 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Heading 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Heading 3')).toBeInTheDocument()
  })

  it('buttons have proper accessibility attributes', () => {
    render(<ActionBar />)
    
    const boldButton = screen.getByLabelText('Bold')
    expect(boldButton).toHaveAttribute('type', 'button')
    expect(boldButton).toHaveAttribute('aria-pressed', 'false')
    expect(boldButton).toHaveAttribute('title', 'Bold (Ctrl+B)')
  })
})