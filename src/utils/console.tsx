/**
 *
 */
import { name } from '../../package.json'

let deprecationsSeen: any = {}

const consoleWarn = (...args: any[]) => {
  if (__DEV__ && typeof console === 'object' && typeof console.warn === 'function') {
    console.warn(...args)
  }
}

export const deprecate = (msg: any) => {
  if (!deprecationsSeen[msg]) {
    deprecationsSeen[msg] = true
    consoleWarn(`${name} | DEPRECATION: ${msg}`)
  }
}

export const warn = (msg: string) => {
  consoleWarn(`${name} | WARNING: ${msg}`)
}
