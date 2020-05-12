export const validateSignup = (values) => {
    const errors = {};
    const { username, password, email, confirmedPassword } = values;

    if (!email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address';
    }

    if (!username) {
        errors.username = 'Required';
    }

    if (!password) {
        errors.password = 'Required';
    } else if (password.length < 6) {
        errors.password = 'Password must have at least 6 characters';
    }

    if (!confirmedPassword) {
        errors.confirmedPassword = 'Required';
    }
    else if (confirmedPassword !== password) {
        errors.confirmedPassword = 'ConfirmedPassword not matching'
    }

    return errors;

}

export const validateLogin = (values) => {
    const errors = {};
    const { username, password } = values;

    if (!username) {
        errors.username = 'Required';
    }

    if (!password) {
        errors.password = 'Required';
    } else if (password.length < 6) {
        errors.password = 'Password must have at least 6 characters';
    }

    return errors;

}