import React from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs'
import AllRoutes from './routes/AllRoutes'
const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <BreadCrumbs />
      <AllRoutes />
    </>
  )
}

export default App