const routes = {
    home:
        [{
            path: 'news',
            content: 'News'
        },
        {
            path: 'stores',
            content: 'Stores'
        },
        {
            path: 'about',
            content: 'About'
        },
        {
            path: 'contact',
            content: 'Contact'
        }]
    ,
    menu: [
        {
            path: 'pizza',
            content: 'Pizza'
        },
        {
            path: 'drinks',
            content: 'Drinks'
        },
        {
            path: 'cake',
            content: 'Cake'
        }
    ]
    ,
    cart: [
        {
            path: '',
            content: 'Cart'
        },
        {
            path: 'checkout',
            content: 'Checkout'
        }
    ],
    user: [
        {
            path: 'signin',
            content: 'SignIn'
        },
        {
            path: 'signup',
            content: 'SignUp'
        }
    ]
};

export default routes;
