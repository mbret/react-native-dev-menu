/**
 * @flow
 */
export const isError = (e: any): boolean => !!(e && e.stack && typeof e.message === 'string')
