import SignUp from './SignUp';
import SignIn from './SignIn';
import Logout from './Logout';

const routes = {
    unauthenticated: [
        {
            path: '/auth/signin',
            content: 'Sign In',
            component: SignIn
        },
        {
            path: '/auth/signup',
            content: 'Sign Up',
            component: SignUp
        }],
    authenticated: [
        {
            path: '/auth/logout',
            content: 'Logout',
            component: Logout
        }]
}

export default routes;