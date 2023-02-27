import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import catImg2 from '../../public/img/cat2.jpeg'


export default function About() {
	return (
		<div>
			<h1>About</h1>
			<Link onClick={ handleTransition } href="/">Home</Link>
			<Image src={catImg2} className="cat-transition" alt="picture of a cat"/>
		</div>
	)
}

const handleTransition = () => {
		Router.push("/")
}