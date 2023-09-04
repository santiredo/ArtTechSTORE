const validation = (userData: { email: string, password: string }) => {

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const errors: {email?: string, password?: string} = {};

    if(!regexEmail.test(userData.email)){
        errors.email = "The email is invalid.";
    }
    if(!userData.email){
        errors.email = "This field can not be empty";
    }
    if(userData.email.length > 35){
        errors.email = "The email cannot exceed 35 characters";
    }
    if(!userData.password.match(/\d/)){
        errors.password = "Password must contain at least 1 number";
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "Password must contain between 6 and 10 characters";
    }

    return errors;
}

export default validation;