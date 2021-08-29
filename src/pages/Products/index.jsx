import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, getProducts } from '../../actions/productosAction';
import Spinner from '../../components/Spinner';
import useLocalStorage from '../../hooks/useLocalStorage';
import ProductCard from './ProductCard';
import Swal from 'sweetalert2'

const Products = () => {

    const dispatch = useDispatch();
    const { setItem } = useLocalStorage();

    useEffect(() => {
        const getListProducts = () => dispatch(getProducts())
        getListProducts();
    }, []);

    const products = useSelector((state) => state.products.products[0]);
    const selectedProducts = useSelector((state) => state.products.selectedProducts);
    const isLoading = useSelector(state => state.products.loading)

    const handleAddProductToCart = (product) => {
        const existProduct = selectedProducts.some((prd) => prd.image === product.image);
        return !!existProduct ? rejectAddProductToList() : addProductToList(product);
    }

    const addProductToList = (product) => {
        let listSelectedProducts = [];
        dispatch(addProductToCart(product));
        listSelectedProducts = [...selectedProducts];
        setItem('productsList', JSON.stringify(listSelectedProducts))
    }

    const rejectAddProductToList = () => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Something went wrong! You've already added this product to your cart",
    })


    return (
        <>
            {!!isLoading ?
                <div className='d-flex justify-content-center my-5'> <Spinner /> </div>
                : <div className="d-flex align-items-center justify-content-between"> {products?.dataWithPrice?.map((product, idx) => {
                    return (
                        <div key={idx} className="my-5">
                            <ProductCard {...product} handleAddProductToCart={handleAddProductToCart} />
                        </div>
                    )
                })}
                </div>
            }
        </>
    )
}

export default Products
