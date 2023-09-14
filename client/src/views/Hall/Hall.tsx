import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import Register from '../../components/Register/Register'
import axios from 'axios'
import loadingGIF from '../../assets/loading.gif'
import { useNavigate } from 'react-router-dom'

import style from './hall.module.css'

export default function Hall(){

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const {user} = useAuth0()

    const [userExistence, setUserExistence] = useState(Boolean)
  
    const isUserRegistered = async() => {
      if(user?.email){
        let response = await axios(`http://localhost:3001/user/mail?mail=${user!.email}`)
  
        if(!response.data) {response = await axios(`http://localhost:3001/artist/artist/mail?mail=${user!.email}`)}
  
        if(!response.data){
            setLoading(false)
            setUserExistence(false)
        } else{
            localStorage.setItem('userDate', response.data)
            navigate('/home')
        }
      }
    }

    useEffect(() => {
        isUserRegistered()
    }, [user?.email])

    return (
        <div className={style.hallPage}>
            {
                loading ? (
                    <>
                        <img className={style.loading} src={loadingGIF} alt="" />
                    </>
                ) : (
                    <div>
                        {
                            !userExistence && <Register onRegister={(userExistence) => setUserExistence(userExistence)} />
                        }
                    </div>
                )
            }
        </div>
    )

}