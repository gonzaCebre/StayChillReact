import buzoDavid from '../../media/img/buzo-david.jpg';
import remeBellota from '../../media/img/reme-bellota.jpg';
import buzoStay from '../../media/img/buzo-stay.jpg';
import remeBender from '../../media/img/reme-bender.jpg';
import canguroCombinado from '../../media/img/canguro-combinado.jpg';
import remeBici from '../../media/img/reme-bici.jpg';
import canguroNegro from '../../media/img/canguro-negro.jpg';
import remePerdido from '../../media/img/reme-perdido.jpg';


const Images = () => {

    return (
        <div className='images'>
            <div className='images-main-container'>
                <img src={buzoDavid} alt="Buzo david" className='images-main' />
            </div>
            <div className='images-main-container'>
                <img src={remeBellota} alt="Remera bellota" className='images-main' />
            </div>
            <div className='images-main-container'>
                <img src={buzoStay} alt="Buzo Stay" className='images-main' />
            </div>
            <div className='images-main-container'>
                <img src={remeBender} alt="Remera Bender" className='images-main' />
            </div>
            <div className='images-main-container'>
                <img src={canguroCombinado} alt="Buzo combinado" className='images-main' />
            </div>
            <div className='images-main-container'>
                <img src={remeBici} alt="Remera Bici" className='images-main' />
            </div>
            <div className='images-main-container'>
                <img src={canguroNegro} alt="Buzo negro canguro" className='images-main canguro' />
            </div>
            <div className='images-main-container'>
                <img src={remePerdido} alt="Remera Perdido" className='images-main' />
            </div>
        </div>
    )
}

export default Images;