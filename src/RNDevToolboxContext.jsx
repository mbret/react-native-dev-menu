/**
 * @flow
 */
import React from 'react'
import type {
  RNDevToolboxInterface
} from './RNDevToolboxBase'

export const RNDevToolboxContext = React.createContext < RNDevToolboxInterface | null >(null)
