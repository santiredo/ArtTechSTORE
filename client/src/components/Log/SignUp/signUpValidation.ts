export interface registerErrors {
    email:string
    password:string
    confirmedPassword:string
}

const validation = (registerForm: {
    email:string
    password:string
    confirmedPassword:string
}): registerErrors => {

    let errors: registerErrors = {
        email:'',
        password: '',
        confirmedPassword: ''
    };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(registerForm.password && emailRegex.test(registerForm.email)){
        errors.email = "You must enter a valid email"
    }
    if(registerForm.confirmedPassword && (!registerForm.password || registerForm.password.length < 8)){
        errors.password = "Password: 8+ chars."
    }
    if(registerForm.confirmedPassword && registerForm.confirmedPassword !== registerForm.password){
        errors.confirmedPassword = "Both passwords must match"
    }

    return errors;
}


export default validation;

export const validateSubmit = (registerForm: {
    email:string
    password:string
    confirmedPassword:string

}) => {

    let errors = false

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(!emailRegex.test(registerForm.email)){
        errors = true
    }

    if(registerForm.password !== registerForm.confirmedPassword){
        errors = true
    }

    return errors
}