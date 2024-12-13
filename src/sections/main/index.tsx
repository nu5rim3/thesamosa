import React from 'react'
import myImage from '../../assets/main.png';
const MainSection = () => {
    return (
        <React.Fragment>
            <div className={`flex w-full h-screen items-center justify-center bg-yellow-400`}>
                <img src={myImage} alt="My Image" className=" md:max-w-full md:max-h-full md:object-cover" />
            </div>
        </React.Fragment>
    )
}

export default MainSection