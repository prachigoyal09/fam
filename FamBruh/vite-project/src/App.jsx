import React from 'react'
import Landing from './components/Landing'
import Footer from './components/Footer'
import OGCreators from './components/OGCreaters'
import Spotlight from './components/Spotlight'
import RisingCreaters from './components/RisingCreaters'
import UGCComponent from './components/UGCComponent'

const App = () => {
  return (
    <>
      <Landing/>
      <OGCreators/>
      <Spotlight/>
      <RisingCreaters/>
      <UGCComponent/>
      <Footer/>
    </>
  )
}

export default App