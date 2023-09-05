const validation = (userData: { mail: string, password: string }) => {

    const regexmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const errors: {mail: string, password: string} = {
        mail: "",
        password: "",
    };

    if(!regexmail.test(userData.mail)){
        errors.mail = "The mail is invalid.";
    }
    if(!userData.mail){
        errors.mail = "This field can not be empty";
    }
    if(userData.mail.length > 35){
        errors.mail = "The mail cannot exceed 35 characters";
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