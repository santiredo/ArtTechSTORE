export type PriceErrors = string;

export const validateForm = (price:string) : PriceErrors => {

    let error: PriceErrors = ''

    let priceRegex = /^[0-9]+$/
    
    console.log(price)

    if(price && !priceRegex.test(price)){
        error = 'This field accepts only numbers'
    }

    return error
}

export interface FormErrors {
    title: string;
    price: string;
    type: string;
    technique: string;
    image: string;
    description: string;
}

export const validateSubmit = (form: {
    title: string;
    type: string;
    image: string;
    description: string;
    technique: string[];
    price: string;

}): FormErrors => {

    let errors: FormErrors = {
        title: '',
        price: '',
        type: '',
        technique: '',
        image: '',
        description: ''
    };


    let priceRegex = /^[0-9]+$/
    
    if(!form.title){
        errors.title = 'This field is required'
    }
    if(!form.type){
        errors.type = 'This field is required'
    }
    if(!form.image){
        errors.image = 'You must choose an image'
    }
    if(!form.description){
        errors.description = 'This field is required'
    }
    if(form.technique.length === 0){
        errors.technique = 'This field is required'
    }
    if((form.price && !priceRegex.test(form.price) || !form.price)){
        errors.price = 'This field accepts only numbers'
    }

    return errors
}

export const finalValidate = (form: {
    title: string;
    type: string;
    image: string;
    description: string;
    technique: string[];
    price: string;

}) => {

    let errors = false


    let priceRegex = /^[0-9]+$/
    
    if(!form.title){
        errors = true
    }
    if(!form.type){
        errors = true
    }
    if(!form.image){
        errors = true
    }
    if(!form.description){
        errors = true
    }
    if(form.technique.length === 0){
        errors = true
    }
    if((form.price && !priceRegex.test(form.price) || !form.price)){
        errors = true
    }

    return errors
}