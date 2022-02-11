import { useEffect } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import Value from "../public/Posts"
import { AiOutlineArrowRight } from "react-icons/ai";
import { getSortedPostsData } from '../lib/posts'

const Blog = ({ allPostsData }) => {
    return (
        
    <div className="flex flex-col justify-center">

        <Sidebar/>
 

            {allPostsData.map(({id, date, title, description}) => (
                    <div key={id} className="text-gray-900 px-4 py-2 m-2">
                        <center>
                     
                            <a className="block p-6 max-w-sm bg-gray-800 rounded-2xl border border-gray-700 shadow-md shadow-2xl">
                                
                                <h5 className="text-left mb-2 text-xl font-bold tracking-tight text-white hover:text-indigo-400">{title}</h5>
                                <p className="text-left font-normal text-gray-400">{date}</p>
                                <p className="text-left font-normal text-gray-300">{description}</p>   

                                <br/>

                                <a href="#" className="inline-flex items-center float-right py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-800">
                                 Read more   <AiOutlineArrowRight/>
                                </a>
                            </a>
          
                        </center>
                    </div>
             ))}
    </div>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

export default Blog;