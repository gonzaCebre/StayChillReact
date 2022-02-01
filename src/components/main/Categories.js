import { NavLink } from 'react-router-dom';
import remePerdido from '../../media/img/reme-perdido.jpg';
import canguroNegro from '../../media/img/canguro-negro.jpg';
import todas from '../../media/img/todas.jpg';


const Categories = () => {

    return (
        <div className='categories'>
            <NavLink to="/category/remeras">
                <div className="category-container">
                    <div>
                        <p className='portada'>Remeras</p>
                        <img src={remePerdido} alt='remeras' className='category-buzo' />
                    </div>
                </div>
            </NavLink>
            <NavLink to="/category/buzos">
                <div className="category-container">
                    <div>
                        <p className='portada'>Buzos</p>
                        <img src={canguroNegro} alt='remeras' className='category-remera' />
                    </div>
                </div>
            </NavLink>
            <NavLink to="/category/all">
                <div className="category-container-all">
                    <div>
                        <p className='portada'>Todos los productos</p>
                        <img src={todas} alt='remeras' className='category-todos' />
                    </div>
                </div>
            </NavLink>
        </div>


    )
}

export default Categories;