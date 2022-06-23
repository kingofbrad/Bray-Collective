import React from 'react'
import Updatedsection from '../components/updatedsection'

const Landingpage = () => {
  return (
    // Main Container
    <div className="bg-[#121329] w-full h-screen text-gray-300 font-bold text-4xl pt-[100px]">
      {/* Updated Sections */}
      <div>
        <Updatedsection />
      </div>
    </div>
  )
}

export default Landingpage