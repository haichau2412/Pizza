import React from 'react';
import ProductView from './ProductView';
import Sidebar from '../sharecomponents/sidebar/Sidebar';
import routes from './routes';
import { getProducts } from '../../service/ProductServices';

const Menu = () => {

    const [products, setProducts] = React.useState({ Pizza: [], Drink: [], Dessert: [] });
    const [category, setCategory] = React.useState('Pizza');

    const handleClick = (data) => {
        setCategory(data);
    }

    React.useEffect(
        () => {
            const fetchData = async () => {
                const data = await getProducts();
                setProducts(pre => ({ ...pre, ...data }));
            }
            fetchData();
        }, []);

    return (
        <>
            <Sidebar routes={routes} handleClick={handleClick} />
            <ProductView products={products[category]} ></ProductView>
        </>
    )
};

export default Menu;
