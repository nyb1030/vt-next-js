import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { useEffect } from 'react'
import Router from 'next/router'
import catImg1 from "../../public/img/cat1.webp"

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link onClick={ handleTransition } href="/about">About</Link>
      <Image src={catImg1} className="cat-transition" alt="picture of a cat"/>
    </div>
  )
}

const handleTransition = () => {
    Router.push("/about")
}
 