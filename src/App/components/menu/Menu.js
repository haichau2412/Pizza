import React from 'react';
import ProductView from './ProductView';
import Sidebar from '../sharecomponents/sidebar/Sidebar';
import routes from './routes';
import { getProducts } from '../../service/ProductServices';
import Alert from '../sharecomponents/alert/Alert';

const Menu = () => {

    const [products, setProducts] = React.useState({
        Pizza: [],
        Drink: [],
        Dessert: []
    });
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


    const [message, setMessage] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [isVisible, setIsVisible] = React.useState(false);

    const addNotification = (msg, status, visible) => {
        setMessage(msg);
        setStatus(status);
        setIsVisible(visible);
    }

    const handleClickAlert = () => {
        setIsVisible(false);
    }

    return (
        <>
            <Alert status={status} msg={message} isVisible={isVisible} handleClick={handleClickAlert} />
            <Sidebar routes={routes} handleClick={handleClick} />
            <ProductView products={products[category]} addNotification={addNotification}></ProductView>
        </>
    )
};

export default Menu;
