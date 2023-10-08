
import Map from "../Map"
import Branding from "./Componand/Branding"
import Card from "./Componand/Card"
import Company from "./Componand/Company"
import Mamber from "./Componand/Mamber"
import Banner from "./Componand/Navbar/Banner"
import Footer from "./Componand/Navbar/Footer"
import Header from "./Componand/Navbar/Header"
import Navbar from "./Componand/Navbar/Navbar"
import Ourservice from "./Componand/Ourservice"
import Services from "./Componand/Services"
import Slide from "./Componand/Slide"
import Supply from "./Componand/Supply"


function App() {

  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <Banner></Banner>
   <Services></Services>
   <Slide></Slide>
   <Ourservice></Ourservice>
   <Supply></Supply>
   <Company></Company>
   <Branding></Branding>
   <Card></Card>
   <Map></Map>
   <Mamber></Mamber>
   <Footer></Footer>
    </>
  )
}

export default App
