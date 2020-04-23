const routes = {
    home:
    {
        'default': 'Home',
        routes: [{
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
    }

    ,
    menu: {
        default: 'Menu',
        routes: [
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
    }
    ,
    cart: {
        default: 'Cart',
        routes: [{
            path: '',
            content: 'Cart'
        },
        {
            path: 'checkout',
            content: 'Checkout'
        },

        ]
    },
    user: {
        default: 'User',
        routes: [
            {
                path: 'signin',
                content: 'SignIn'
            },
            {
                path: 'signup',
                content: 'SignUp'
            }
        ]
    }
};

export default routes;
