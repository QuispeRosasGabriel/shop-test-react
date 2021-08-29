import React from 'react'

const ProductCard = ({ handleAddProductToCart, ...restProps }) => {

    const {character, image, gameSeries, amiiboSeries, type, name, price} = restProps;

    return (
        <div className="card mx-4" style={{ width: "18rem" }} >
            <img src={image} width='180' height='380' className="card-img-top" alt={character} />
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">Game Series: {gameSeries}</p>
                <p className="card-text">Amiibo Series: {amiiboSeries}</p>
                <p className="card-text">Type: {type}</p>
                <a href="#" className="btn btn-success" onClick={() => handleAddProductToCart({ character, image, gameSeries, amiiboSeries, type, name, price })}>Add to cart</a>
            </div>
        </div>
    )
}

export default ProductCard
