export function sortArrayAsc(array: any, property: string) {
  return array.sort((a: any, b: any) => (a[property] > b[property] ? 1 : -1))
}
