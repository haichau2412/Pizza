import React from 'react';
import { StyledItem, Heading, Details,ShippingPrice, Detail, Status, Product, Name, Price, ShippingData } from './StyledHistory';


const formatDate = (string, data) => {
    let date = new Date(data);
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    return `${string[0]}: ${y}.${m}.${d}`;
}

const arrangeProduct = (cart) => {

    let arranged = cart.reduce((result, product, index) => {
        if (!result[product.category]) {
            result[product.category] = [];
            result[product.category].push(product);
        } else {
            result[product.category].push(product);
        }
        return result;
    }, {});

    let keys = Object.keys(arranged);

    let result = keys.reduce((result, key, index) => {
        return [...result, ...arranged[key]];
    }, [])

    return result;
}


const Item = ({ order }) => {

    const { address, cart, createAt, phone, totalPrice } = order;



    const products = arrangeProduct(cart).map((product, index) => {
        const { category, name, quantity } = product;
        return (
            <Product key={index} >
                <Name>
                    <p>{`${category}:`}</p>
                    <p><b>{`${name} x(${quantity})`}</b></p>
                </Name>
                <Price>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price * product.quantity)}</Price>
            </Product>
        )
    });

    return (
        <StyledItem>
            <Heading>
                <h5>{formatDate`Order date${createAt}`}</h5>
            </Heading>
            <Details>
                <Detail>
                    {products}
                    <ShippingPrice>
                        <p>Total Price</p>
                        <Price>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}</Price>
                    </ShippingPrice>
                    <ShippingData>
                        <p>Shipping Address:</p>
                        <p>{address}</p>
                    </ShippingData>
                    <ShippingData>
                        <p>Phone Number:</p>
                        <p>{phone}</p>
                    </ShippingData>

                </Detail>
                <Status>
                    <h5>Status</h5>
                    <p>Order accepted</p>
                </Status>
            </Details>

        </StyledItem>
    )
}

export default Item;