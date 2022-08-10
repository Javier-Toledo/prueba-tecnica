import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axiosClient from "../../config/axiosClient";
import "./ListProducts.css";


const ListProducts = () => {
        const history = useHistory()
        // component State
        const [products, setProducts] = useState([]);
        const [searchProduct, setSearchProduct] = useState('')
        const [product, setProduct] = useState([])
        const [isSearch, setIsSearch] = useState(false)

        //llamada  a la API
        const getProducts = async () => {
            axiosClient.get('/products?_page=1&_limit=8')
            .then(res => {
                // update state
                setProducts(res.data);
            })
        };

        const onSearch = async () => {
            if (searchProduct === '') {
                setIsSearch(false)
                setProducts([])
                getProducts()
            } else {
                await axiosClient.get(`/products?q=${searchProduct}`)
                    .then(resp => {
                        setIsSearch(true)
                        setProduct(resp.data)
                    })
            }
        }

        const onDetail = ({id}) => {
            history.push(`/details/${id.id}`)
        }

        useEffect(() => {
            getProducts()
        },[]);

    return (
        <>
                <div className='container'><div className='paperSearch'>
                    <input type="search"
                    placeholder='Buscar producto...'
                    className="input"
					value={searchProduct}
                    onChange={e => setSearchProduct(e.target.value)}
                    onKeyDown={e => { if (e.keyCode === 13) { onSearch() } }}
                    />
                    <button className="search__btn" onClick={onSearch} > Buscar </button>
                </div></div>
                <div className="wrapper">
            {isSearch ?
                product.map((prod, index) => (
                <div className="card" key={index} onClick={() => onDetail({id:prod})}>
                <img src={prod.image} alt={prod.title} className="card__img" />
                <div className="card__body">
                <h2 className="card__title card__line-clamp">{prod.title}</h2>
                <h3 className="card__price">{prod.price}</h3>
                </div>
            </div>
            ))
            :
            products.map((prod, index) => (
                <div className="card" key={index} onClick={() => onDetail({id:prod})}>
                <img src={prod.image} alt={prod.title} className="card__img" />
                <div className="card__body">
                <h2 className="card__title card__line-clamp">{prod.title}</h2>
                <h3 className="card__price">{prod.price}</h3>
                </div>
            </div>
            ))
        }
        </div>
</>
    );
};

export default ListProducts;