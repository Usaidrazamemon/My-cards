import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText() {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2  '>
      <div className=' hover:border-[#D3FD50] hover:text-[#D3FD50]  flex items-center text-blue-50 leading-[6vw]  uppercase border-2 border-white rounded-full px-14   mb-3 '><Link className='text-[6vw] mt-6' to='/model'>model</Link></div>
      <div className=' hover:border-[#D3FD50] hover:text-[#D3FD50]  flex items-center text-blue-50 leading-[6vw] uppercase border-2 border-white rounded-full px-14  mb-3 '><Link className='text-[6vw] mt-6' to='/gallery'>gallery</Link></div>


    </div>
  )
}

export default HomeBottomText
