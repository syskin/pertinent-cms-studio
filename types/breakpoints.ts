export interface ScreenSize {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  breakpoint: number
}

export const screenSizes: ScreenSize[] = [
  { size: 'xs', breakpoint: 640 },
  { size: 'sm', breakpoint: 640 },
  { size: 'md', breakpoint: 640 },
  { size: 'lg', breakpoint: 640 },
  { size: 'xl', breakpoint: 640 },
]
