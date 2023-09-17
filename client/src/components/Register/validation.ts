export interface registerErrors {
    name:string
    birthDate:string
    location:string
    image:string
}

const validation = (registerForm: {
    name:string,
    mail:string | undefined,
    birthDate:string,
    location:string,
    image:string

}): registerErrors => {

    let urlRegex = /\.(jpeg|jpg|gif|png)$/i;

    let errors: registerErrors = {
        name: '',
        birthDate:'',
        location:'',
        image: ''
    };

    if(registerForm.name && !registerForm.name){
        errors.name = "This field can not be empty";
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
    }
    if(registerForm.image && !urlRegex.test(registerForm.image)){
        errors.image = 'This must be an url or not be'
    }
    return errors;
}


export default validation;

export const validateSubmit = (registerForm: {
    name:string,
    mail:string | undefined,
    birthDate:string,
    location:string,
    image: string

}) => {

    let errors = false
    let urlRegex = /\.(jpeg|jpg|gif|png)$/i;

    
    if(!registerForm.name){
        errors = true
    }
    if(!registerForm.birthDate){
        errors = true
    }else if(registerForm.birthDate.length !== 10){
        errors = true
    }
    if(registerForm.image && !urlRegex.test(registerForm.image)){
        errors = true
    }

    return errors
}