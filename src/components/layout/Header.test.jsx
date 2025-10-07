import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

test('renders header', ()=>{
  const { getByText } = render(<Header />)
  expect(getByText(/BizPlus CRM/)).toBeTruthy()
})
