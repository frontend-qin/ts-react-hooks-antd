import React from 'react'
import { render } from 'react-dom'
import Router from './Router'

const root: HTMLElement | null = document.getElementById('root')

render(<Router />, root)
