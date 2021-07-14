import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import 'tailwindcss/tailwind.css'
import '../assets/scss/main.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
