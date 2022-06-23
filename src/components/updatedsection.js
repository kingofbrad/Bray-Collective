import React from 'react'
import TriageBookCover from '../Assets/book_covers/book-triage.png'


const Updatedsection = () => {
    return (
        <div className=' flex justify-center items-center'>
            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2'>
                    {/* First Card */}
                    <div className=' text-2xl items-center w-full text-center sm:w-[200px]'>
                        <h3 className='text-3xl'>Season of the Hunted</h3>
                        <div className='flex justify-center py-3 '>
                            <img src={TriageBookCover} className=' w-[300px] items-center justify-center' />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, voluptatem?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Updatedsection