//return error string else void
export function getNameErrorMessage(name, type) {
    if (type !== "last" && type !== "first") {
        throw 'validateName expects a type argument of "first" or "last"';
    }

    if (!name) {
        // return `${type} name is required, please enter one`;
        return `${type} name is required, please enter one`;
    }

    if (name.length < 3) {
        return `${type} name is too short! please enter a longer one`;
    }

    if (name.length > 14) {
        return `${type} name is too long! please enter a shorter one`;
    }

    if (!/^[a-zA-Z]+$/.test(name)) {
        return `${type} name contains invalid characters, please use alphabetical characters only`;
    }

    return null;
}

export function getEmailErrorMessage(email) {
    if (!email) {
        return `email is required, please enter one`;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        return `email is invalid! please enter a valid email address`;
    }

    return null;
}

export function getPasswordErrorMessage(password) {
    if (!password) {
        return `password is required, please enter one`;
    }

    if (password.length < 7) {
        return `password is too short!, should be between 7 and 30 characters`;
    }

    if (password.length > 30) {
        return `password is too long!, should be between 7 and 30 characters`;
    }
    //we would like password to contain at least one alphabetical (of both cases), a number and a special character
    if (
        !(
            /[a-z]/.test(password) &&
            /[A-Z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[!@#$%&?]/.test(password)
        )
    ) {
        return `password must contain a combination of alphabetical, numeric and special characters`;
    }

    return null;
}

export function getPasswordConfirmationErrorMessage(
    password,
    passwordConfirmation
) {
    if (!passwordConfirmation) {
        return `password confirmation is required, please enter one`;
    }

    if (passwordConfirmation !== password) {
        return `password confirmation must be identical to your password`;
    }

    return null;
}
