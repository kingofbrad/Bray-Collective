import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

import Siva from '../../Assets/cover-images/Siva-Cover.jpeg'
import CardRecords from '../../Json/cards.json'




const Card = (props) => {
    return (
        <a style={{backgroundImage:`url(${Siva})`}} href="/" className=" block p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 content-div">
            <div className='pt-[120px]'>
            <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white ">{props.name}</h5>
            <p className="font-normal text-[#8892b0]">{props.state}</p>
            </div>
            
        </a>
        



    )
    
}


export default Card




