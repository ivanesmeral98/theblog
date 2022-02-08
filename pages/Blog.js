import { useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'
import htmr from 'htmr';
import Teaching from "./articles/Teaching";
import Link from "next/link";

const Blog = ({ posts }) => {

    return (
    <div className="text-center">
        <ul>
            <l>
            <Link href="/articles/Teaching">
                <a className='italic text-sky-700' target="_blank" rel="noreferrer">
                An attempt to make a difference through empathy-based teaching - 2/10/2022
                </a>
            </Link>
            </l>

        </ul>
        
    </div>
    );
}


export default Blog;