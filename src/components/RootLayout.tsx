import React ,{ReactElement} from 'react'
import Header from './Header/Header'
import BottomHeader from './Header/BottomHeader'
import Footer from './Footer'

interface Props{
    children: ReactElement;
}
const RootLayout = ({children} :Props) => {
  return (
    <>
    <Header/>
    <BottomHeader/>
    {children}
    <Footer/>
    </>
  )
}

export default RootLayout