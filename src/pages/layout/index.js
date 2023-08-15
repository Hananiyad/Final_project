import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer'

const Layout = ({children})=> {
return <>
<NavBar/>
 {children}
<Footer/>
</>
}
export default Layout