import React from 'react'


const Navbar = () => {

    const userName = 'shikhar';
    // 


    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                maxHeight: '4rem',
                width: "100%",
                border: "1px solid white",
                display: "flex",
                justifyContent: "space-between"
            }}
        >
            <div>
                Todo app
            </div>
            <div>
                search bar
            </div>
            <div style={{ display: 'flex', alignItems: "center" }}>
                <img style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%"
                    // dicebear
                }} src={`https://api.dicebear.com/9.x/initials/svg?seed=${userName}`} />
                <span>{userName}</span>
            </div>
        </div>
    )
}

export default Navbar