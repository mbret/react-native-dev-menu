/**
 *
 */
export type Action = {
  name: string,
  task: Function,
  label?: string
}

export type Indicator = string | [string, string?, string?]

export type PersistenceProvider = {
  getItem (key: string): Promise<string | undefined>,

  setItem (key: string, value: string): Promise<void>
}
