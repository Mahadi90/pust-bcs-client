import React from 'react';
import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <img className='w-full h-2/3' src={bannerImg} alt="" />
            <h2 className='my-16 text-center text-5xl font-bold'>Important Time</h2>
            <div className='px-2 md:px-20 grid grid-cols md:grid-cols-2 gap-10'>
                <div className='bg-purple-500 p-4 rounded text-white text-center space-y-2'>
                    <h2 className='text-2xl'>Seminar</h2>
                    <p className='bg-green-600 w-52 p-2 mx-auto'>Date : 20-02-2024</p>
                    <p>Venue : gallery-2</p>
                </div>
                <div className='bg-purple-500 p-4 rounded text-white text-center space-y-2'>
                <h2 className='text-2xl'>BCS Model Test</h2>
                    <p className='bg-green-600 w-52 p-2 mx-auto'>Date : 23-02-2024</p>
                    <p>Venue : Comming soon</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;