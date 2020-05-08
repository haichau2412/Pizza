import SignUp from './SignUp';
import SignIn from './SignIn';

const routes = [
    {
        path: '/auth/signin',
        content: 'Sign In',
        component: SignIn
    },
    {
        path: '/auth/signup',
        content: 'Sign Up',
        component: SignUp
    }]

export default routes;