import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages'
import { HeroesRoutes } from '../heroes/routes'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login/*' element={
          <PublicRouter>
            <Routes>
              <Route path='/*' element={<LoginPage />}/>
            </Routes>
            {/* <LoginPage /> */}
          </PublicRouter>
        } />

        <Route path='/*' element={
          <PrivateRouter>
            <HeroesRoutes />
          </PrivateRouter>
        } />
        {/* <Route path='/*' element={<HeroesRoutes />} /> */}
      </Routes>    
    </>
  )
}