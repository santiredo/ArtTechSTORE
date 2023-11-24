export interface registerErrors {
    name:string
    email:string
    password:string
    confirmedPassword:string
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
        password: '',
        confirmedPassword: ''
    };

    if(registerForm.email && !registerForm.name){
        errors.name = "You must choose a name";
    }
    if(registerForm.password && !registerForm.email){
        errors.email = "You must enter an email"
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
    name:string
    email:string
    password:string
    confirmedPassword:string

}) => {

    let errors = false
    
    if(!registerForm.name || !registerForm.email || !registerForm.password || !registerForm.confirmedPassword){
        errors = true
    }
    if(registerForm.password !== registerForm.confirmedPassword){
        errors = true
    }

    return errors
}