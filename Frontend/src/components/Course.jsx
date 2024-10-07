import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'
const Course = () => {
  console.log(list)
  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
        <div className='py-28  itme-center justify-center text-center'>
          <h1 className='text-2xl   md:text-4xl'> We're delighted to have you<span className='text-pink-500 '> Here! :)</span></h1>
          <p className='mt-12'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam esse, excepturi facilis sint sit commodi ipsum maiores, sed debitis enim facere quos placeat inventore obcaecati iure repudiandae corporis quasi?
            Magnam sunt impedit odio voluptate minus dolorum quos consequuntur earum ad vel, quis ut quidem quibusdam rem, labore tenetur amet vitae non velit numquam commodi! Aut rerum alias repellat eveniet!</p>
          <Link to="/">
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
          </Link>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
