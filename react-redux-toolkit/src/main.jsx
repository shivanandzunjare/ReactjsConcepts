import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

const LazyComponent = lazy(() => import('./App.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <h1> Home</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
      </Suspense>
    
    </Provider>
    
  </StrictMode>,
)
