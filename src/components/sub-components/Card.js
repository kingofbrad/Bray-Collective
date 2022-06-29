import React from 'react'
import '../sub-components/Card.css'
import Siva from '../../Assets/cover-images/Siva-Cover.jpeg'
import CardRecords from '../../Json/cards.json'




const Card = () => {
    return (
        <div style={{ backgroundImage: `url(${Siva})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effects */}
            <div className='text-center flex text-2xl text-white'>
                {CardRecords && CardRecords[0].title}
            </div>
            <div>
                {CardRecords && CardRecords[1].content}
            </div>

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