export interface registerErrors {
    name:string
    email:string
    password:string
}

const validation = (registerForm: {
    name:string
    email:string
    password:string
    confirmedPassword:string
}): registerErrors => {

    let errors: registerErrors = {
        name: '',
        email:'',
        password: ''
    };

    if(registerForm.email && !registerForm.name){
        errors.name = "You must choose a name";
    }
    if(registerForm.password && !registerForm.email){
        errors.email = "You must enter an email"
    }

    return errors;
}


export default validation;

export const validateSubmit = (registerForm: {
    name:string
    email:string
    password:string
    confirmedPassword:string

}) => {

    let errors = false
    
    if(!registerForm.name){
        errors = true
    }

    return errors
}