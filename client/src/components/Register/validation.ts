export interface registerErrors {
    name:string
    mail:string
    password:string
    repeatedPassword:string
    birthDate:string
    address:string
}

const validation = (registerForm: {
    name:string,
    mail:string,
    password:string,
    repeatedPassword:string,
    birthDate:string,
    address:string

}): registerErrors => {
export interface registerErrors {
    name:string
    mail:string
    password:string
    repeatedPassword:string
    birthDate:string
    address:string
}

const validation = (registerForm: {
    name:string,
    mail:string,
    password:string,
    repeatedPassword:string,
    birthDate:string,
    address:string

}): registerErrors => {

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    let errors: registerErrors = {
        name: '',
        mail: '',
        password:'',
        repeatedPassword:'',
        birthDate:'',
        address:''
    };
    let errors: registerErrors = {
        name: '',
        mail: '',
        password:'',
        repeatedPassword:'',
        birthDate:'',
        address:''
    };

    if(registerForm.name && !registerForm.name){
        errors.name = "This field can not be empty";
    }
    if(registerForm.mail && !regexEmail.test(registerForm.mail)){
        errors.mail = "The email is invalid.";
    if(registerForm.name && !registerForm.name){
        errors.name = "This field can not be empty";
    }
    if(registerForm.mail && !regexEmail.test(registerForm.mail)){
        errors.mail = "The email is invalid.";
    }
    if(registerForm.password && !registerForm.password.match(/\d/)){
        errors.password = "At least 1 number";
    if(registerForm.password && !registerForm.password.match(/\d/)){
        errors.password = "At least 1 number";
    }
    if(registerForm.password && registerForm.password.length < 6){
        errors.password = "Min 6 characters";
    if(registerForm.password && registerForm.password.length < 6){
        errors.password = "Min 6 characters";
    }
    if(registerForm.repeatedPassword && registerForm.repeatedPassword !== registerForm.password){
        errors.repeatedPassword = "Passwords must match"
    if(registerForm.repeatedPassword && registerForm.repeatedPassword !== registerForm.password){
        errors.repeatedPassword = "Passwords must match"
    }
    if(registerForm.birthDate.length === 10){
        let birthDate = registerForm.birthDate.split('-')
        let year = birthDate[0]
        let month = birthDate[1]
        let day = birthDate[2]
        if(year.length !== 4 || month.length !== 2 || day.length !== 2 || Number(year) > 2023 || Number(month) > 12 || Number(day) > 31){
            errors.birthDate = 'Date format required: YYYY-MM-DD'
        }
    } else if(registerForm.birthDate && registerForm.birthDate.length < 10){
        errors.birthDate = 'Date format required: YYYY-MM-DD'
    if(registerForm.birthDate.length === 10){
        let birthDate = registerForm.birthDate.split('-')
        let year = birthDate[0]
        let month = birthDate[1]
        let day = birthDate[2]
        if(year.length !== 4 || month.length !== 2 || day.length !== 2 || Number(year) > 2023 || Number(month) > 12 || Number(day) > 31){
            errors.birthDate = 'Date format required: YYYY-MM-DD'
        }
    } else if(registerForm.birthDate && registerForm.birthDate.length < 10){
        errors.birthDate = 'Date format required: YYYY-MM-DD'
    }

    return errors;
}

export default validation;

export const validateSubmit = (registerForm: {
    name:string,
    mail:string,
    password:string,
    repeatedPassword:string,
    birthDate:string,
    address:string

}) => {

    let errors = false
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    
    if(!registerForm.name){
        errors = true
    }
    if(!registerForm.mail || !regexEmail.test(registerForm.mail)){
        errors = true
    }
    if(!registerForm.password || !registerForm.password.match(/\d/) || registerForm.password.length < 6){
        errors = true
    }
    if(!registerForm.repeatedPassword || registerForm.repeatedPassword !== registerForm.password){
        errors = true
    }
    if(!registerForm.birthDate){
        errors = true
    }else if(registerForm.birthDate.length !== 10){
        errors = true
    }

    return errors
}