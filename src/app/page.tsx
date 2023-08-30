import Image from 'next/image'
import Navbar from './components/Navbar'
import { Carausel } from './components/Carausel'
import Link from 'next/link'
import  Router  from 'next/router'
import abouts from './page/abouts'

export default function Home() {
  return (
    <Router>
       <Route exact path="/" component={Navbar} />
      <Route path="/about" component={abouts} />
    </Router>
  )
}
