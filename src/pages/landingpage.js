import React from 'react'
import Updatedsection from '../components/updatedsection'
import Popularsection from '../components/sub-components/Popularsection'

const Landingpage = () => {
  return (
    // Main Container
    <div className="bg-[#19191B] w-full h-full sm:h-full md:h-full text-gray-300 pt-[100px]">
      <Updatedsection />
      <Popularsection />
      
    </div>
  )
}

export default Landingpage