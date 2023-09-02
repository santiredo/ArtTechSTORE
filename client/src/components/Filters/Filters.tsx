


/* import { useDispatch } from 'react-redux'
 */import reset from '../../assets/reset.png'
import style from './filters.module.css'


export default function Filters() {

/*     const dispatch = useDispatch()
 */
/*     const handleType = (event: React.ChangeEvent<HTMLParagraphElement>) => {
        dispatch(filterByType(event.target.defaultValue))
    } */

    return (
        <div className={style.divAuxiliar}>
            <div className={style.filtersComponent}>
                <h3>Filters</h3>
                <img src={reset} alt="" />
                <div className={style.filterDiv}>
                    Type
                    <div className={style.options}>
                        <p /* onClick={handleType} */ defaultValue='Drawing'>Drawings</p>
                        <p /* onClick={handleType} */ defaultValue='Painting'>Paintings</p>
                        <p /* onClick={handleType} */ defaultValue='3D Object'>3D Objects</p>
                    </div>
                </div>
                <div className={style.filterDiv}>
                    Technique
                    <div className={style.options}>
                        <p /* onClick={handleTechnique} */ defaultValue='Oleo'>Oleo</p>
                        <p /* onClick={handleTechnique} */ defaultValue='Lapiz'>Lapiz</p>
                        <p /* onClick={handleTechnique} */ defaultValue='Acuarela'>Acuarela</p>
                        <p /* onClick={handleTechnique} */ defaultValue='Macrame'>Macrame</p>
                        <p /* onClick={handleTechnique} */ defaultValue='Ceramica'>Ceramica</p>
                    </div>
                </div>
                <div className={style.filterDiv}>
                    Payment method
                    <div className={style.options}>
                        <p /* onClick={handlePayment} */ defaultValue='Direct Purchase'>Direct Purchase</p>
                        <p /* onClick={handlePayment} */ defaultValue='Auction'>Auction</p>
                    </div>
                </div>
                <div className={style.filterDiv}>
                    Price
                    <div className={style.options}>
                        <p /* onClick={handlePrice} */ defaultValue='< 2000>'>{`<`} 2000</p>
                        <p /* onClick={handlePrice} */ defaultValue='2000-5000'>2000-5000</p>
                        <p /* onClick={handlePrice} */ defaultValue='5000-10000'>5000-10000</p>
                        <p /* onClick={handlePrice} */ defaultValue='> 10000'>{`>`}10000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}