import foto1 from '../../assets/fotoLanding.jpg'
import foto2 from '../../assets/fotoLanding2.jpg'
import foto3 from '../../assets/fotoLanding3.png'
import foto4 from '../../assets/fotoLanding4.jpg'
import foto5 from '../../assets/fotoLanding5.png'
import fondo1 from '../../assets/fondoLanding.png'
import style from './landing.module.css'
import LoginModal from "../../components/Log/LogIn";
import RegisterModal from "../../components/Register/Register";
import React, {useState} from "react";


export default function Landing() {

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    
    const openRegisterModal = () => {
        setIsRegisterModalOpen(true);
      };
    
      const closeRegisterModal = () => {
        setIsRegisterModalOpen(false);
      };

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
      };
    
      const closeLoginModal = () => {
        setIsLoginModalOpen(false);
      };

    return (

        <div className={style.landingPage}>
            <h1>Welcome to ArtTech STORE</h1>
            <div className={style.divButtons}>
                <button onClick={openLoginModal}>Log In</button>
                <LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} openRegistration={openRegisterModal} />
                <RegisterModal isOpen={isRegisterModalOpen} onRequestClose={closeRegisterModal}/>
                <button onClick={openRegisterModal}>Register</button>
            </div>
            <div className={style.phrases}>
                <div className={style.phraseDiv}>
                    <div className={style.rightPhrase}>
                        <h2>Explore el Arte Único</h2>
                        <p>Sumérgete en un mundo de creatividad y descubre obras que desafían los límites de la imaginación. Nuestros artistas te invitan a explorar creaciones únicas y cautivadoras que te transportarán a nuevos horizontes.</p>
                    </div>
                    <img src={foto1}  />
                </div>
                <div className={style.phraseDiv}>
                    <img src={foto2} alt="" />
                    <div className={style.leftPhrase}>
                        <h2>Encuentra Inspiración en Cada Pincelada</h2>
                        <p>Cada obra de arte cuenta una historia, y en nuestra plataforma, puedes ser parte de esa narrativa. Explora pinturas, esculturas y más, y déjate inspirar por las pinceladas de pasión y emoción en cada obra.</p>
                    </div>
                </div>
                <div className={style.phraseDiv}>
                    <div className={style.rigthPhrase}>
                        <h2>Conéctate con la Mente Creativa</h2>
                        <p>Detrás de cada obra de arte hay una mente creativa que trabaja incansablemente para dar vida a su visión. Únete a nuestra comunidad y conecta con artistas apasionados que comparten su proceso y te invitan a descubrir el arte desde adentro.</p>
                    </div>
                    <img src={foto3} alt="" />
                </div>
                <div className={style.phraseDiv}>
                    <img src={foto4} alt="" />
                    <div className={style.leftPhrase}>
                        <h2>Transforma tu Espacio con Arte</h2>
                        <p>Tu espacio personal merece una dosis de originalidad. Explora nuestra colección de obras de arte que transformarán tus paredes en lienzos de expresión. Encuentra piezas que reflejen tu estilo y añadan un toque único a tu hogar.</p>
                    </div>
                </div>
                <div className={style.phraseDiv}>
                    <div className={style.rightPhrase}>
                        <h2>Descubre el Arte que Resuena Contigo</h2>
                        <p>El arte no solo es visual, es una experiencia que toca tu alma. Explora nuestras categorías y encuentra piezas que resuenen con tus emociones y valores. Cada obra es una oportunidad para conectar con algo más grande que nosotros mismos.</p>
                    </div>
                    <img src={foto5} alt="" />
                </div>
                <img className={style.fondo1} src={fondo1} alt="" />
            </div>
        </div>
    )
}

