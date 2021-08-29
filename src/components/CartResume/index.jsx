import React from 'react'
import './styles.css'
const CartResume = ({ selectedProducts = [] }) => {
    return (
        <div className='cart-wrapper'>
            {
                selectedProducts.length >= 1 ?
                    selectedProducts.map(({ image, name, type }, idx) => (
                        <div key={idx} className='row my-2'>
                            <div className='col-md-2'>
                                <img src={image} className='cart-product-image' alt={name} />
                            </div>
                            <div className='col-md-10'>
                                <div>{name}</div>
                                <div>{type}</div>
                            </div>
                            <hr className='mt-2' />
                        </div>
                    )) : 'No tienes productos seleccionados'
            }
        </div>
    )
}

export default CartResume
