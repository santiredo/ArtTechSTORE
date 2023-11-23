import {useState} from 'react'
import foto1 from '../../assets/fotoLanding.jpg'
import foto2 from '../../assets/fotoLanding2.jpg'
import foto3 from '../../assets/fotoLanding3.png'
import foto4 from '../../assets/fotoLanding4.jpg'
import foto5 from '../../assets/fotoLanding5.png'
import fondo1 from '../../assets/fondoLanding.png'
import style from './landing.module.css'
import SignUp from '../../components/Log/SignUp/SignUp'
import LogIn from '../../components/Log/LogIn/LogIn'


export default function Landing() {

    const [signUp, setSignUp] = useState(false)
    const [logIn, setLogIn] = useState(false)

    const popUpSignUp = () => {
        setSignUp(!signUp)
    }

    const popUpLogIn = () => {
        setLogIn(!logIn)
    }


    return (

        <div className={style.landingPage}>
            <h1 className={style.title}>Welcome to ArtTech STORE</h1>
            <div className={style.log}>
                <button onClick={popUpLogIn}>Log in</button>
                <button onClick={popUpSignUp}>Sign up</button>
            </div>
            <div className={style.phrases}>
                <div className={style.phraseDiv}>
                    <div className={style.rightPhrase}>
                        <h2>Explore Unique Art</h2>
                        <p>Immerse yourself in a world of creativity and discover works that challenge the limits of your imagination. Our artists invite you to explore unique and captivating creations that will transport you to new horizons.</p>
                    </div>
                    <img src={foto1}  />
                </div>
                <div className={style.phraseDiv}>
                    <img src={foto2} alt="" />
                    <div className={style.leftPhrase}>
                        <h2>Find Inspiration in Every Brush Stroke</h2>
                        <p>Every work of art tells a story, and on our platform, you can be part of that narrative. Explore paintings, sculptures and more, and be inspired by the touches of passion and emotion in each work.</p>
                    </div>
                </div>
                <div className={style.phraseDiv}>
                    <div className={style.rightPhrase}>
                        <h2>Discover the Art that Resonates with You</h2>
                        <p>Art is not only visual, it is an experience that touches your soul. Explore our categories and find pieces that resonate with your emotions and values. Each work is an opportunity to connect with something bigger than ourselves.</p>
                    </div>
                    <img src={foto5} alt="" />
                </div>
                <div className={style.phraseDiv}>
                    <img src={foto4} alt="" />
                    <div className={style.leftPhrase}>
                        <h2>Transform your Space with Art</h2>
                        <p>Your personal space deserves a dose of originality. Explore our collection of artwork that will transform your walls into canvases of expression. Find pieces that reflect your style and add a unique touch to your home.</p>
                    </div>
                </div>
                <div className={style.phraseDiv}>
                    <div className={style.rightPhrase}>
                        <h2>The Creative Abyss</h2>
                        <p>In the depths of darkness, art finds its most intimate home. In that abyss, shadows give life to creativity, weaving a tapestry of beauty from the heart of the gloom. In each stroke, the light of the most authentic expression is born.</p>
                    </div>
                    <img src={foto3} alt="" />
                </div>
                <img className={style.fondo1} src={fondo1} alt="" />
            </div>
            {signUp && <SignUp onClose={popUpSignUp}/>}
            {logIn && <LogIn onClose={popUpLogIn}/>}
        </div>
    )
}

