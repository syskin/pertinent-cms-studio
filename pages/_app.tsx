import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
