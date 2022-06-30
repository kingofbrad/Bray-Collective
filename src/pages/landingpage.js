import React from 'react'
import Updatedsection from '../components/updatedsection'
import Popularsection from '../components/sub-components/Popularsection'
import Card from '../components/sub-components/Card'
import Siva from '../Assets/cover-images/Siva-Cover.jpeg'
import Navbar from '../components/navbar'
import data from '../Data/data'





const Landingpage = (item) => {
  return (
    // Main Container
    <div className="bg-[#19191B]  w-full h-full sm:h-full md:h-full text-gray-300 pt-[100px] px-2">
      <Card
        name={item.name}
        state={item.add}
        bg={item.image}
        style={{backgroundImage:`url(${Siva})`}}
      />
      <Popularsection />

    </div>
  )
}

export default Landingpage