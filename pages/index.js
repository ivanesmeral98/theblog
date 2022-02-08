import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'
import { useContext } from 'react'
export default function Home() {
  
  const theme = 'dark';

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">

      <Sidebar/>
      <h1 className='font-serif py-16 px-64 dark:text-white'>
        Hey, I'm Ivan. I'm a software engineer, student of hip-hop, and I love channeling 
        my love for fitness
        through lifting weights and more recently, indoor cycling! 
        I also love doing Power Vinyasa, adding books to my reading list, 
        and geeking out over Fantasy Premier League.
        
        I'm currently working on the Windows Audio + Media platform experience at Microsoft.
        
        <br/>
        <br/>
        
        Before Microsoft, I studied Computer Science and minored in Fine Arts + Engineering Entrepreneurship at the University of Pennsylvania.
        I graduated in May 2021 and moved to Seattle!

        <br/>
        <br/>

        At Penn I joined Bell and Hex Senior Societies, gave campus tours,
        and loved being a teaching assistant for the intro computer science course for 2 years.

        <br/>
        <br/>
        I started this blog after reading and being inspired by the poem  
        <a className='italic text-sky-700' target="_blank" rel="noreferrer"
        href="http://www.phys.unm.edu/~tw/fas/yits/archive/bukowski_thebluebird.html"> Bluebird
        </a> by Charles Bukowski. I think that we all have a bluebird inside of us
        that we should release and embrace as a way to express ourselves and our creative sides.

        <br/>
        <br/>
        I want to use this site as a repository and home to all my interests, starting with a blog
         and hopefully expanding from there. Who's to say what it'll become!
        Check out my blog posts <Link href="/Blog"><a className='text-sky-700' target="_blank" rel="noreferrer">here.
        </a></Link>

      </h1>


      </div>
  

  );
}
