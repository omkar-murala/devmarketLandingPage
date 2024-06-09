import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export function Card({images,title,link}:{images:string,title:string,link:string}) {
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={images}
        alt={title}
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {title}
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <Link href={link}>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
          Visit
        </button>
            </Link>
      </div>
    </div>
  )
}
