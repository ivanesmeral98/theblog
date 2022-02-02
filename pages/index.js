import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import Teaching from '../components/articles/teaching'


export default function Home() {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  `

  return (
    <div className='bg-[#e0f2fb]'>
      <Sidebar/>
   


      </div>
  

  );
}
