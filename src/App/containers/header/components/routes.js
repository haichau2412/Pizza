const routes = {
    unauthenticated: [
        {
            path: '/auth/signin',
            content: 'Sign In',
        },
        {
            path: '/auth/signup',
            content: 'Sign Up',
        }],
    authenticated: [
        {
            path: '/home',
            content: 'Log out',
        }],
    default: [

    ]
}

export default routes;