import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link';
import Image from 'next/image';

export function Card({img,heading,para,link}:{img:any,heading:any,para:any,link:any}) {
  return (
    <div className="w-[300px] rounded-md border overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <Image
      height={1000}
      width={1000}
        src={img}
        alt="img"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {heading} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          {para}
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
