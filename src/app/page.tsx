import Image from 'next/image'
import Navbar from './components/Navbar'
import { Carausel } from './components/Carausel'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div>
      <Navbar/>
      <Link href='/halam/login'>login ok</Link>
    </div>
    </>
  )
}
