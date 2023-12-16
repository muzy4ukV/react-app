import React from 'react'


function Good(props) {
    return(
        <div className='good'>
            <img src={`/goods/img_${props.id}.jpg`} width={300} height={300} alt='препарат' />
            <p><b>{props.name}</b></p>
            <p>Ціна - {props.price} грн</p>
        </div>
    )
};

export default Good;