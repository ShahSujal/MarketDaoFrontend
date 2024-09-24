import React from 'react'
import Image from "next/image"
import { CalendarIcon } from "lucide-react"
import { createClient } from "@/prismicio";
import Link from 'next/link';
interface BlogPost {
  id: number
  title: string
  date: string
  imageUrl: string
  gradient: string
}

const page = async() => {
    const client = createClient();
    const blog = await client.getAllByType("blogs");

    if (!blog[0].data) {
        return <div></div>;
        
    }
      return (
        <div className="min-h-screen  text-white font-sans">
          <header className="py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-100 font-paps to-pink-600">
              Trending Blogs
            </h1>
          </header>
          <main className="container mx-auto px-4 py-8 overflow-x-auto">
            <div className="flex  flex-row flex-wrap pb-8">
              {blog.map((post) => (
                <article
                  key={post.id}
                  className={`flex-shrink-0 bg-zinc-950 m-2 w-80 h-[300px] rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105`}
                >
                  <div className="relative h-48">
                    <Image
                      src={post.data.banner.url!}
                      alt={"banner"}
                      layout="fill"
                      objectFit="cover"
                      className=""
                    />
                  </div>
                  <div className=" px-1">
                  <Link href={`/blogs/${post.uid}`}>
                  <h2 className="text-xl hover:text-blue-400 font-bold mb-2 line-clamp-2">{post.data.title}</h2>
                  </Link>
                  </div>
                  <div className="flex items-center text-sm opacity-75">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      <time dateTime={post.last_publication_date}>{new Date(post.last_publication_date).toLocaleDateString()}</time>
                    </div>
                </article>
              ))}
            </div>
          </main>
        </div>
  )
}

export default page
