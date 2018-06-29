/**
 * @flow
 */
import myPackage from '../../package'

let deprecationsSeen = {}

const consoleWarn = (...args) => {
  if (typeof console === 'object' && typeof console.warn === 'function') {
    console.warn(...args)
  }
}

export const deprecate = (msg: any) => {
  if (!deprecationsSeen[msg]) {
    deprecationsSeen[msg] = true
    consoleWarn(`${myPackage.name} | DEPRECATION: ${msg}`)
  }
}

export const warn = (msg: string) => {
  consoleWarn(`${myPackage.name} | WARNING: ${msg}`)
}
