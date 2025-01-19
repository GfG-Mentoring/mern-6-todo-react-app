import React from 'react'


const Navbar = () => {

    const userName = 'shikhar';
    // 


    return (
        <div className='w-screen flex gap-4 justify-between flex-row p-2'>
            <div className='font-semibold text-lg '>
                Todo app
            </div>
            <div >
            </div>
            <div className='flex gap-2 items-center'>
                <img className='w-8 h-8 rounded-full' src={`https://api.dicebear.com/9.x/initials/svg?seed=${userName}`} />
                <span>{userName}</span>
            </div>
        </div>
    )
}

export default Navbar