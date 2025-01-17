import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import Store from './assets/slices/Store.ts'
createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
  <StrictMode>
    <App />
  </StrictMode>,
  </Provider>
)
