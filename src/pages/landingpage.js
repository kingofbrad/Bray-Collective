import React from 'react'
import Updatedsection from '../components/updatedsection'
import Popularsection from '../components/sub-components/Popularsection'
import Card from '../components/sub-components/Card'
import Siva from '../Assets/cover-images/Siva-Cover.jpeg'
import Navbar from '../components/navbar'
import data from '../Data/data'





const Landingpage = () => {
  return (
    // Main Container
    <div name='landingpage' className="bg-[#19191B]  w-full h-full sm:h-full md:h-full text-gray-300 pt-[100px] px-2">
      <h1>hi</h1>
      <Updatedsection />
      <Popularsection />

    </div>
  )
}

export default Landingpage