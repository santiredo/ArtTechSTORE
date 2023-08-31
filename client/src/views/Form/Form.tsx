import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { finalValidate, validateForm, validateSubmit } from './Validation/validation';
import style from './form.module.css'
import './form.css'
import { postCreation } from '../../redux/Actions/action';


export default function Form() {

    // DECLARAMOS EL ESTADO DE FORM

    const [form, setForm] = useState({
        title: '',
        price: '',
        type: '',
        technique: [] as string[],
        image: '',
        description: ''
    })

    const [errors, setErrors] = useState({
        title: '',
        price: '',
        type: '',
        technique: '',
        image: '',
        description: ''
    })

    // ACA ESTAN LOS HANDLECHANGE

    const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const file = event.target.files && event.target.files[0]

        if(file){
            const reader = new FileReader()

            reader.onload = (e) => {
                if(e.target && e.target.result) {
                    setForm({
                        ...form,
                        image: e.target.result.toString()
                    })
                }
            }
            reader.readAsDataURL(file)
        }
    }

    const handleChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        const priceError = validateForm(form.price)
        setErrors({
            ...errors,
            price: priceError
        })
    }, [form])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

    }

    const handleTechnique = (event: React.MouseEvent<HTMLDivElement>) => {

        const technique = event.currentTarget.textContent

        if (technique && !form.technique.includes(technique)){
            setForm({
                ...form,
                technique: [...form.technique, technique]
            })
        }
    }

    const handleType = (event: React.MouseEvent<HTMLDivElement>) => {

        const type = event.currentTarget.textContent

        type && setForm({
            ...form,
            type: type
        })
    }


    // ACA TENEMOS FUNCIONES PARA MODIFICAR EL CSS DE LOS SELECTS

    const [type, setType] = useState(false)

    const handleSelectType = () => {
        const typeOptions = document.querySelector("#typeOptions")

        if(!type) {
            setType(true)
            typeOptions?.classList.remove('hiddenOptions');            
            typeOptions?.classList.add('showType');            

        } else{
            setType(false)

            setTimeout(() => {
                typeOptions?.classList.remove('hideType');
                typeOptions?.classList.add('hiddenOptions')
                
            }, 500);

            typeOptions?.classList.remove('showType')
            typeOptions?.classList.add('hideType')
        }
        const event = document.querySelector('.type')
        event?.classList.toggle('typeActive')
    }


    const [technique, setTechnique] = useState(false)
    
    const handleSelectTechnique = () => {
        const techniqueOptions = document.querySelector("#techniqueOptions")

        if(!technique) {
            setTechnique(true)
            techniqueOptions?.classList.remove('hiddenOptions');            
            techniqueOptions?.classList.add('showTechnique');            

        } else{
            setTechnique(false)

            setTimeout(() => {
                techniqueOptions?.classList.remove('hideTechnique');
                techniqueOptions?.classList.add('hiddenOptions')
                
            }, 500);

            techniqueOptions?.classList.remove('showTechnique')
            techniqueOptions?.classList.add('hideTechnique')
        }
        const event = document.querySelector('.technique')
        event?.classList.toggle('techniqueActive')
    }



    const handleClickOutside = () => {

        const typeActive = document.querySelector('.type')
        const typeOptions = document.querySelector("#typeOptions")

        if(type){
            setType(false)

            setTimeout(() => {
                typeOptions?.classList.remove('hideType');
                typeOptions?.classList.add('hiddenOptions')
                
            }, 500);
            
            typeOptions?.classList.remove('showType')
            typeOptions?.classList.add('hideType')
            typeActive?.classList.value.includes('typeActive') && typeActive.classList.toggle('typeActive')

        }


        const techniqueActive = document.querySelector('.technique')
        const techniqueOptions = document.querySelector("#techniqueOptions")

        if(technique){
            setTechnique(false)

            setTimeout(() => {
                techniqueOptions?.classList.remove('hideTechnique');
                techniqueOptions?.classList.add('hiddenOptions')
                
            }, 500);
            
            techniqueOptions?.classList.remove('showTechnique')
            techniqueOptions?.classList.add('hideTechnique')
            techniqueActive?.classList.value.includes('techniqueActive') && techniqueActive.classList.toggle('techniqueActive')

        }
    }




    // ACA ESTA EL HANDLE SUBMIT

    const dispatch = useDispatch()

    const handleSubmit = async(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if(!finalValidate(form)){
            if(form.image) {
                try {
                    const formData = new FormData()
                    formData.append('file', form.image)
    
                    const response = await axios.post(
                        'https://api.cloudinary.com/v1_1/dgyliu9l2/upload',
                        formData
                    )
                    setForm({
                        ...form,
                        image: response.data.secure_url
                    })

                } catch (error) {
                    error instanceof Error && alert(`Error: ${error.message}`);
                }
            }

            dispatch(postCreation(form))

        }else{
            setErrors(validateSubmit(form))
            alert('Some data is missing')
        }

    }


    return (
        <div className={style.formPage} onClick={handleClickOutside}>
            <h1>Post your creation</h1>
            <form>
                <div className={style.uploadImgDiv}>
                    <input
                        id="image"
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleUploadFile}
                    />
                    {
                        form.image ? (
                            <>
                                <img src={form.image} alt="" />
                                <span onClick={() => setForm({...form, image: ''})}>X</span>
                            </>
                        ) : (
                            <><p>Upload your image</p><label htmlFor='image'></label></>
                            
                        )
                    }
                </div>
                <div className={style.allInputsDiv}>
                    <div className='selectBox'>
                        <label>Introduce the name of your creation</label>
                        <input type="text" name="title" id="title" value={form.title} onChange={handleChange}/>                    
                    </div>
                    <div className='selectBox'>
                        <div onClick={handleSelectType} className='type'>
                            <div>
                                <p className='title'>Type</p>
                            </div>
                        </div>
                        <div className='hiddenOptions' id="typeOptions">
                            <div className="option">
                                <p onClick={handleType}>Painting</p>
                            </div>
                            <div className="option">
                                <p onClick={handleType}>3D Object</p>
                            </div>
                            <div className="option">
                                <p onClick={handleType}>Dibujo</p>
                            </div>
                        </div>
                        {
                            form.type && (
                                <div className={style.selectedTechniques}>
                                        <p>{form.type}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className='selectBox'>
                        <div onClick={handleSelectTechnique} className='technique'>
                            <div>
                                <p className='title'>Technique</p>
                            </div>
                        </div>
                        <div className='hiddenOptions' id="techniqueOptions">
                            <div className="option">
                                <p onClick={handleTechnique}>Oleo</p>
                            </div>
                            <div className="option">
                                <p onClick={handleTechnique}>Lapiz</p>
                            </div>
                            <div className="option">
                                <p onClick={handleTechnique}>Acuarela</p>
                            </div>
                            <div className="option">
                                <p onClick={handleTechnique}>Macrame</p>
                            </div>
                            <div className="option">
                                <p onClick={handleTechnique}>Ceramica</p>
                            </div>
                        </div>
                        {
                            form.technique && (
                                <div className={style.selectedTechniques}>
                                    {form.technique.map(element => (
                                        <p key={element}>{element}</p>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                    <div className='selectBox'>
                        <label>Some deep message</label>
                        <textarea name="description" id="deescription" value={form.description} onChange={handleChangeDescription} placeholder='Tell us what inspired you or it cpuld be some deep meaning about your art too'/>                    
                    </div>
                    <div className='selectBox'>
                    {errors.price && <b className={style.errors}>{errors.price}</b>}
                        <label>Price:</label>
                        <input type='text' name="price" id="price]" value={form.price} onChange={handleChange} placeholder='$$$'/>     
                    </div>
                </div>
            </form>
            <button onClick={handleSubmit}>POST MY CREATION</button>
        </div>
    )
}