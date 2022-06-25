import React from 'react'
import SOTHCover from '../../Assets/cover-images/season-of-the-hunted-cover.jpeg'
import OutBreakPerfected from '../../Assets/weapon-art/Outbreak-Perfected.jpg'
import ErisMorn from '../../Assets/npc-art/Eris-Morn-Cover-Art.jpeg'
import Mithrax from '../../Assets/npc-art/Mithrax-cover.avif'
import DrifterGambit from '../../Assets/book_covers/Drifters-Gambit.png'
import SivaCover from '../../Assets/cover-images/Siva-Cover.jpeg'
import BookTriage from '../../Assets/book_covers/book-triage.png'
import Tresspasser from '../../Assets/weapon-art/Tresspasser.jpeg'
import RasputinCover from '../../Assets/cover-images/Rasputin-Cover.png'

const Popularsection = () => {
  return (
    <div className='flex justify-center items-center pt-[70px]'>
            <div className='w-[400px] sm:w-[700px] md:w-[1200px] mx-auto'>
                <div>
                    <h1 className='font-bold text-3xl border-b-2 py-3'>Popular</h1>
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
                                            <p className='text-[18px] font-bold  border-b-2 uppercase pb-1 '>Season</p>
                                            <p className='pb-4 text-2xl font-bold'>Season of the Hunted</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Second Card */}
                    <div className='sm:grid-col-end-2'>
                        <a href='/'>
                            <div className='shadow-lg shadow-[#040c16] group container flex items-center mx-auto content-div '>
                                <div className='w-full content-div opacity-[0.4] rounded-md' style={{ backgroundImage: `url(${Tresspasser})` }}></div>
                                <div className='absolute pt-[150px]'>
                                    <div className='grid'>
                                        <div className='pl-3' >
                                            <p className='text-[18px] font-bold  border-b-2 uppercase pb-1 '>Weapon</p>
                                            <p className='pb-4 text-2xl font-bold'>Tresspasser</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* Third Card */}
                    <a href="">
                        <div className='shadow-lg shadow-[#040c16] group container flex items-center mx-auto content-div'>
                            <div className='w-full content-div opacity-[0.4] rounded-md' style={{ backgroundImage: `url(${ErisMorn})` }}></div>
                            <div className='absolute pt-[150px]'>
                                <div className='grid'>
                                    <div className='pl-3' >
                                        <p className='text-[18px] font-bold  border-b-2 uppercase pb-1 '>Vendor</p>
                                        <p className='pb-4 text-2xl font-bold'>Eris Morn</p>
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
                                        <p className='text-[18px] font-bold  border-b-2 uppercase pb-1 '>Vendor</p>
                                        <p className='pb-4 text-2xl font-bold'>Mithrax</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* Fifth Card */}
                    <a href="">
                        <div className='shadow-lg shadow-[#040c16] group container flex items-center mx-auto content-div'>
                            <div className='w-full content-div opacity-[0.4] rounded-md' style={{ backgroundImage: `url(${BookTriage})` }}></div>
                            <div className='absolute pt-[150px]'>
                                <div className='grid'>
                                    <div className='pl-3' >
                                        <p className='text-[18px] font-bold  border-b-2 uppercase pb-1 '>Book</p>
                                        <p className='pb-4 text-2xl font-bold'>Season of the Hunted</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* Sixth Card */}
                    <a href="">
                        <div className='shadow-lg shadow-[#040c16] group container flex items-center mx-auto content-div'>
                            <div className='w-full content-div opacity-[0.4] rounded-md' style={{ backgroundImage: `url(${RasputinCover})` }}></div>
                            <div className='absolute pt-[150px]'>
                                <div className='grid'>
                                    <div className='pl-3' >
                                        <p className='text-[18px] font-bold  border-b-2 uppercase pb-1 '>Category</p>
                                        <p className='pb-4 text-2xl font-bold'>Rasputin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                </div>
            </div>
        </div>
  )
}

export default Popularsection