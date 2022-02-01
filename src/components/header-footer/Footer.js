import React from "react";
import mastercard from '../../media/icons/mastercard.png';
import ae from '../../media/icons/american-express.png';
import cabal from '../../media/icons/cabal.png';
import deposito from '../../media/icons/deposito.png';
import mercadopago from '../../media/icons/mercadopago.png';
import naranja from '../../media/icons/naranja.png';
import pagofacil from '../../media/icons/pagofacil.png';
import rapipago from '../../media/icons/rapipago.png';
import visa from '../../media/icons/visa.png';
import acordar from '../../media/icons/acordar.png';
import retiro from '../../media/icons/retiro-local.png';
import personalizado from '../../media/icons/personalizado.png';
import correo from '../../media/icons/correo-argentino.png';
import { UilFacebook } from '@iconscout/react-unicons';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilMessage } from '@iconscout/react-unicons';
import { UilWhatsapp } from '@iconscout/react-unicons';

const Footer = () => {

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-container-item">
                    <p>Medios de pago</p>
                    <div className="footer-icons">
                        <img src={mastercard} alt="mastercard" className="icon-footer" />
                        <img src={ae} alt="mastercard" className="icon-footer" />
                        <img src={cabal} alt="mastercard" className="icon-footer" />
                        <img src={deposito} alt="mastercard" className="icon-footer" />
                        <img src={mercadopago} alt="mastercard" className="icon-footer" />
                        <img src={naranja} alt="mastercard" className="icon-footer" />
                        <img src={pagofacil} alt="mastercard" className="icon-footer" />
                        <img src={rapipago} alt="mastercard" className="icon-footer" />
                        <img src={visa} alt="mastercard" className="icon-footer" />
                        <img src={acordar} alt="mastercard" className="icon-footer" />
                    </div>
                </div>
                <div className="footer-container-item">
                    <p>Métodos de envío</p>
                    <div className="footer-icons">
                        <img src={correo} alt="correo argentino" className="icon-footer" />
                        <img src={acordar} alt="mastercard" className="icon-footer" />
                        <img src={retiro} alt="mastercard" className="icon-footer" />
                        <img src={personalizado} alt="mastercard" className="icon-footer" />
                    </div>
                </div>
                <div className="footer-container-item">
                    <p>Nuestras redes</p>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/staychill.cba" target="_blank"><UilFacebook className="redes-icon" /></a>
                        <a href="https://www.instagram.com/staychill.cba/" target="_blank"><UilInstagram className="redes-icon" /></a>
                        <a href="mailto:staychill.cba@gmail.com" target="_blank"><UilMessage className="redes-icon" /></a>
                        <a href="https://api.whatsapp.com/send?phone=+5493516864221" target="_blank"><UilWhatsapp className="redes-icon" /></a>
                    </div>
                </div>
            </div>
            <p>Sitio web creado por Gonzalo Cebrero</p>

        </footer>
    )
}

export default Footer;