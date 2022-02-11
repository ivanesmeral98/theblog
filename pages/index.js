import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'
import { useContext } from 'react'
export default function Home() {
  
  const theme = 'dark';

  return (
    <div className="bg-white min-h-screen">

      <Sidebar/>
      <br/>

      <div className="flex">
 
        <div className="pl-32 flex-2"><img className="justify-center object-scale-down h-64 w-128"src="https://i.imgur.com/7BINF6j.png" /></div>
    
        <div className="flex-2"><img className="justify-center object-scale-down h-64 w-128"src="https://i.imgur.com/B1kykPk.png" /></div>
   
        <div className="flex-2"><img className="justify-center object-scale-down h-64 w-128"src="https://i.imgur.com/QzndhrK.png"  /></div>
      
      </div>

      <div className='text-gray-600 font-serif py-16 px-64'>
        <p>

        <a className='text-xl text-sky-700'> What's up everybody, I'm Ivan 👋 </a>

        <br/>
        <br/>
        I'm a software engineer, student of hip-hop, and I love channeling 
        my love for fitness
        through lifting weights and more recently, indoor cycling! 
        I also love doing 
        
        <a className=' text-sky-700' target="_blank" rel="noreferrer"
        href=" http://radiantyogaedh.com/power-vinyasa-flow/"> Power Vinyasa
        </a> 
, adding books to my reading list, 
        and wasting time on 
        
        <a className=' text-sky-700' target="_blank" rel="noreferrer"
        href="https://www.premierleague.com/news/2173986"> Fantasy Premier League.</a> I'm currently working on the Windows Audio + Media platform experience at Microsoft.
        
        <br/>
        <br/>
        
        Before Microsoft, I studied Computer Science and minored in Fine Arts + Engineering Entrepreneurship at the University of Pennsylvania.

        <br/>
        <br/>

        At Penn I joined Bell and Hex Senior Societies, gave campus tours,
        and loved being a teaching assistant for the intro computer science course for 2 years. 
        I'm now an alumni interviewer for prospective students all over the world.

        <br/>
        <br/>
        I started this site after reading and being inspired by the poem  
        <a className='italic text-sky-700' target="_blank" rel="noreferrer"
        href="http://www.phys.unm.edu/~tw/fas/yits/archive/bukowski_thebluebird.html"> Bluebird
        </a> by Charles Bukowski. I think that we all have a bluebird inside of us
        that we should release and embrace as a way to express ourselves and our creative sides.


        <br/>
        <br/>
        I want to use this site as a repository and home to all my interests, starting with a blog
         and hopefully expanding from there. Who's to say what it'll become!
        Check out my blog posts <Link href="/Blog"><a className='text-sky-700' target="_blank" rel="noreferrer">here.</a></Link>
        </p>
      </div>
    </div>
  

  );
}
