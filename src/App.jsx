import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Container from './components/Container'
import Info from './components/Info'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
// import ThrottledMouseMove from './components/ThrottledMouseMove'

function App() {
  return (
  <div>

  <Container>
    <Header></Header>
    <Banner></Banner>
    <Info></Info>
    {/* <ThrottledMouseMove></ThrottledMouseMove> */}
    <Carousel></Carousel>
    <Footer></Footer>
  </Container>
  </div>
  )
}

export default App