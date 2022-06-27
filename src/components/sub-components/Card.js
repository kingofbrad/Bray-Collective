import React from 'react'
import'../sub-components/Card.css'
import Siva from '../../Assets/cover-images/Siva-Cover.jpeg'
import CardRecords from '../../Json/cards.json'




const Card = () => {
    return (
        <div style={{ backgroundImage: `url(${Siva})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

        {/* Hover Effects */}
        <div className='opacity-100 '>
            <span className='text-2xl font-bold text-white tracking-wider'>
                Cluttered Charactors
            </span>
            <div className='pt-8 text-center'>
                <span>Recently Updated</span>
                <span></span>
            </div>
        </div>

        { CardRecords && CardRecords[0].title }

        {/* {
            CardRecords && CardRecords.map( record => {
                return (
                    <div className='' key={ record.id}>
                        {record.Siva && record.Siva.map( data => {
                            return(
                                <div key={record.id}> 
                                    {data.title}
                                    {data.content}
                                </div>
                            )
                        })}
                    </div>
                )
            })
        } */}


    </div>
    )
}

export default Card