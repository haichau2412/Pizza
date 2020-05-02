import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';
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
            path: '/auth/profile',
            content: 'Profile',
            component: Profile
        },
        {
            path: '/auth/logout',
            content: 'Logout',
            component: Logout
        }]
}

export default routes;