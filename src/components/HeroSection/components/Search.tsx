import React from 'react'

export function Search() {
  return (
    <div className="flex w-full items-center space-x-2 md:w-1/3">
      <input
        className="flex h-[3rem] w-full lg:w-[60rem] rounded-2xl border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Name the software you're looking for ? "
      ></input>
      
    </div>
  )
}
