import React from 'react'
import TriageBookCover from '../Assets/book_covers/book-triage.png'
import SOTHCover from '../Assets/cover-images/season-of-the-hunted-cover.jpeg'
import OutBreakPerfected from '../Assets/weapon-art/Outbreak-Perfected.jpg'
import Cayde6 from '../Assets/npc-art/Cayde-6.PNG'
import Mithrax from '../Assets/npc-art/Mithrax_Splicer.webp'
import DrifterGambit from '../Assets/book_covers/Drifters-Gambit.png'
import SivaCover from '../Assets/cover-images/Siva-Cover.jpeg'
import Card from './sub-components/Card'



const Updatedsection = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[400px] sm:w-[700px] md:w-[1200px] mx-auto'>
                <div>
                    <h1 className='font-bold text-3xl border-b-2 py-3'>Updates</h1>
                </div>
                <div className='grid grid-11 grid-cols-1  md:grid-cols-3 sm:grid-cols-2 gap-4 pt-3 relative'>
                    {/* First Card */}
                    <div className='md:uppercase'>
                        <a href="/" className=''>
                            <div className='shadow-lg shadow-[#040c16] group container flex  items-center mx-auto content-div md:w-[]'>
                                <div className='w-full content-div opacity-[0.4] rounded-md ' style={{ backgroundImage: `url(${SOTHCover})` }}></div>
                                <div className=' pt-[150px] absolute'>
                                    <div className='grid'>
                                        <div className='pl-3' >
                                            <p className='text-[18px] font-bold  border-b-2 uppercase pb-1 '>Latest Release</p>
                                            <p className='pb-4 text-2xl font-bold'>Season of the Hunted</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Second Card */}
                    <a href='/'>
                        <div className='shadow-lg shadow-[#040c16] group container flex items-center mx-auto content-div '>
                            <div className='w-full content-div opacity-[0.4] rounded-md' style={{ backgroundImage: `url(${OutBreakPerfected})` }}></div>
                            <div className='absolute pt-[150px]'>
                                <div className='grid'>
                                    <div className='pl-3' >
                                        <p className='text-[18px] font-bold  border-b-2 uppercase pb-1 '>Recent Entry</p>
                                        <p className='pb-4 text-2xl font-bold'>Outbreak Prime</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* Third Card */}
                    <a href="">
                        <div className='shadow-lg shadow-[#040c16] group container flex items-center mx-auto content-div'>
                            <div className='w-full content-div opacity-[0.4] rounded-md' style={{ backgroundImage: `url(${Cayde6})` }}></div>
                            <div className='absolute pt-[150px]'>
                                <div className='grid'>
                                    <div className='pl-3' >
                                        <p className='text-[18px] font-bold  border-b-2 uppercase pb-1 '>Recent Category</p>
                                        <p className='pb-4 text-2xl font-bold'>Cayde-6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* Fourth Card */}
                    <a href="">
                        <div className='shadow-lg shadow-[#040c16] group container flex items-center mx-auto content-div'>
                            <div className='w-full content-div opacity-[0.4] rounded-md' style={{ backgroundImage: `url(${Mithrax})` }}></div>
                            <div className='absolute pt-[150px]'>
                                <div className='grid'>
                                    <div className='pl-3' >
                                        <p className='text-[18px] font-bold  border-b-2 uppercase pb-1 '>Recent Category</p>
                                        <p className='pb-4 text-2xl font-bold'>Mithrax</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* Fifth Card */}
                    <a href="">
                        <div className='shadow-lg shadow-[#040c16] group container flex items-center mx-auto content-div'>
                            <div className='w-full content-div opacity-[0.4] rounded-md' style={{ backgroundImage: `url(${DrifterGambit})` }}></div>
                            <div className='absolute pt-[150px]'>
                                <div className='grid'>
                                    <div className='pl-3' >
                                        <p className='text-[18px] font-bold  border-b-2 uppercase pb-1 '>Recent Book</p>
                                        <p className='pb-4 text-2xl font-bold'>Drifter&#39;s Gambit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* Sixth Card */}
                    <a href="">
                        <div className='shadow-lg shadow-[#040c16] group container flex items-center mx-auto content-div'>
                            <div className='w-full content-div opacity-[0.4] rounded-md' style={{ backgroundImage: `url(${SivaCover})` }}></div>
                            <div className='absolute pt-[150px]'>
                                <div className='grid'>
                                    <div className='pl-3' >
                                        <p className='text-[18px] font-bold  border-b-2 uppercase pb-1 '>Recently Updated</p>
                                        <p className='pb-4 text-2xl font-bold'>SIVA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                   <Card name="Siva" />


                </div>
            </div>
        </div>
    )
}

export default Updatedsection