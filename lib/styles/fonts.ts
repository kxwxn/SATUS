import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--next-font-sans',
})

const fonts = [inter]
const fontsVariable = fonts.map((font) => font.variable).join(' ')

export { fontsVariable }