import React from 'react'
import Updatedsection from '../components/updatedsection'
import Popularsection from '../components/sub-components/Popularsection'
import Card from '../components/sub-components/Card'
import CardsRecords from '../Json/cards.json'
import Navbar from '../components/navbar'





const Landingpage = () => {
  return (
    // Main Container
    <div className="bg-[#19191B]  w-full h-full sm:h-full md:h-full text-gray-300 pt-[100px] px-2">
      <Card name={CardsRecords && CardsRecords[0].title} state={CardsRecords && CardsRecords[0].content} />
      <Popularsection />
      
    </div>
  )
}

export default Landingpage