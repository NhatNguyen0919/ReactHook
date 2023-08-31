import React, { useState } from 'react';
import './Form.scss';

const Form = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState(0)
    const [color, setColor] = useState("")
    return (
        <div>
            <div className='wrapper'>
                <h2>Add new</h2>
                <div className='name-infor'>
                    <label htmlFor="">Name:</label>
                    <input value={name} type="input-name" onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className='price-infor'>
                    <label htmlFor="">Price:</label>
                    <input value={price} type="input-price" onChange={(e)=>{setPrice(e.target.value)}} />
                </div>
                <div className='size-infor'>
                    <label htmlFor="">Size:</label>
                    <input value={size} type="input-size" onChange={(e)=>{setSize(e.target.value)}} />
                </div>
                <div className='color-infor'>
                    <label htmlFor="">Color:</label>
                    <input value={color} type="input-color" onChange={(e)=>{setColor(e.target.value)}} />
                </div>
                <button>+ Add New</button>
            </div>
        </div>
    )
}

export default Form