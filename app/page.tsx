import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

require('dotenv').config();


export default function Home() {
  return (
    <UserButton afterSignOutUrl='/' />
  )
}
