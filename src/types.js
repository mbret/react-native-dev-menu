/**
 * @flow
 */
export type Action = {
  name: string,
  task: Function,
  label?: string
}

export type Indicator = string | Array<string>

export type PersistenceProvider = {
  getItem (key: string): Promise<?string>,

  setItem (key: string, value: string): Promise<void>
}
