import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
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
        console.log('useremail', user.email);
        let response = await axios(`/user/mail?mail=${user!.email}`)
        console.log('primeraResponse', response.data);
        
        if(!response.data) {response = await axios(`/artist/artist/mail?mail=${user!.email}`)}
        console.log('segundaRespuesta', response.data);
        
        if(!response.data){
            console.log('dentro if');
            setLoading(false)
            setUserExistence(false)
        } else{
            console.log('dentro else');
            
            localStorage.setItem('userData', JSON.stringify(response.data))
            navigate('/home')
        }
      }
    }

    useEffect(() => {
        isUserRegistered();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        {/* {
                            !userExistence && <Register onRegister={(userExistence) => setUserExistence(userExistence)} />
                        } */}
                    </div>
                )
            }
        </div>
    )

}