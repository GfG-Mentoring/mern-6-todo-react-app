import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './login/page.tsx'
import UsersPage from './user/page.tsx'
import UserDetails from './user/userDetails/page.tsx'
import Authenticated from './components/auth/ProtectedRoute.tsx'

import { Provider } from 'react-redux'
import { reduxStore } from './store/index.ts'
import { ToastContainer } from 'react-toastify'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={reduxStore} >

      {/* <AuthProvider > */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Authenticated >
              <App />
            </Authenticated>
          } />
          < Route path='/login' element={<LoginPage />} />
          < Route path='/user' element={< UsersPage />} />
          < Route path="/user/:userId" element={< UserDetails />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
    {/* </AuthProvider> */}
  </StrictMode>,
)
