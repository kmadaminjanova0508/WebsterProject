
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Toaster } from './components/ui/toaster.jsx'
import store from './store/store.js'
import './index.css'; 
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
  <App />
  <Toaster/>
  </Provider>
  </BrowserRouter>,
)
