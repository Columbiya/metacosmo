import React from 'react'

const Preloader = (props) => {
    return (
        <div className='preloader-container'>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Preloader