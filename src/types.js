/**
 * @flow
 */
export type Action = {
  name: string,
  task: Function,
  label?: string
}

export type Indicator = string | Array<string>
