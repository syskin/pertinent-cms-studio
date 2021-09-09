export function sortArrayAsc(array: any, property: string) {
  return array.sort((a: any, b: any) => (a[property] > b[property] ? 1 : -1))
}

export function camelToKebabCase(input: string): string {
  return input.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}

export function kebabToCamelCase(input: string): string {
  return input.replace(/-./g, (x) => x.toUpperCase()[1])
}
