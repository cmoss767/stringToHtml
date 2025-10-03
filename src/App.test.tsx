import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByText('Text to HTML Converter')).toBeInTheDocument()
  })

  it('renders the text editor section', () => {
    render(<App />)
    expect(screen.getByText('Text Editor')).toBeInTheDocument()
  })

  it('renders the HTML code section', () => {
    render(<App />)
    expect(screen.getByText('HTML Code')).toBeInTheDocument()
  })

  it('renders the download button', () => {
    render(<App />)
    expect(screen.getByText('Download HTML')).toBeInTheDocument()
  })

  it('download button is initially disabled', () => {
    render(<App />)
    const downloadButton = screen.getByText('Download HTML')
    expect(downloadButton).toBeDisabled()
  })
})