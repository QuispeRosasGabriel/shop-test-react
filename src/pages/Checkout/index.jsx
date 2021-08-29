import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteSelectedProduct } from '../../actions/productosAction';
import Button from '../../components/Button';
import './styles.css';

const Checkout = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const selectedProducts = useSelector((state) => state.products.selectedProducts);
    const dispatch = useDispatch();
    console.log('pr', selectedProducts)

    useEffect(() => {
        const getTotalPrice = () => {
            let finalPrice = 0;
            selectedProducts.map(({ price }) => ({ price })).forEach(({ price }) => finalPrice += price);
            setTotalPrice(finalPrice)
        }

        getTotalPrice();
    }, [selectedProducts]);


    const handleRemoveProductFromCheckout = (image) => {
        dispatch(deleteSelectedProduct(image));
    }
    
    return (
        <div className="container">

            <div className='row py-4'>
                <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Game Series</th>
                                <th scope="col">Amiibo Series</th>
                                <th scope="col">Type</th>
                                <th scope="col">Price</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedProducts?.map(({ name, image, amiiboSeries, gameSeries, type, price },idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <img className='checkout-product-image' src={image} alt={name} />
                                            <span>{name}</span>
                                        </td>
                                        <td>
                                            {gameSeries}
                                        </td>
                                        <td>
                                            {amiiboSeries}
                                        </td>
                                        <td>
                                            {type}
                                        </td>
                                        <td>
                                            {price}
                                        </td>
                                        <td>
                                            {/* <Button content='Delete' type='danger' onClick={() => handleRemoveProductFromCheckout(image)} /> */}
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="col-md-4">
                    <h5>Checkout Resume </h5>
                    <div>
                        Total Price: {totalPrice}
                    </div>
                    <p>Thanks for buying</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout
