



import { useDispatch } from 'react-redux'
import reset from '../../assets/reset.png'
import style from './filters.module.css'
import { filterByPayment, filterByPrice, filterByTechnique, filterByType, resetFilter } from '../../redux/action'



export default function Filters() {


    const dispatch = useDispatch()

    const handleType = (event: React.MouseEvent<HTMLParagraphElement>) => {
        dispatch(filterByType(event.currentTarget.getAttribute('data-value') ?? ''))
    }

    const handleTechnique = (event: React.MouseEvent<HTMLParagraphElement>) => {
        dispatch(filterByTechnique(event.currentTarget.getAttribute('data-value') ?? ''))
    }

    const handlePayment = (event: React.MouseEvent<HTMLParagraphElement>) => {
        dispatch(filterByPayment(event.currentTarget.getAttribute('data-value') ?? ''))
    }

    const handlePrice = (event: React.MouseEvent<HTMLParagraphElement>) => {
        dispatch(filterByPrice(event.currentTarget.getAttribute('data-value') ?? ''))
    }
    const handleReset = (event: React.MouseEvent<HTMLParagraphElement>) => {
        event.preventDefault();
        dispatch(resetFilter())
    }

    return (
        <div className={style.divAuxiliar}>
            <div className={style.filtersComponent}>
                <h3>Filters</h3>
                <img src={reset} onClick={handleReset} alt="" />
                <div className={style.filterDiv}>
                    Type
                    <div className={style.options}>
                        <p onClick={handleType} data-value='Drawing'>Drawing</p>
                        <p onClick={handleType} data-value='Painting'>Painting</p>
                        <p onClick={handleType} data-value='3D Object'>3D Object</p>

                    </div>
                </div>
                <div className={style.filterDiv}>
                    Technique
                    <div className={style.options}>
                        <p onClick={handleTechnique} data-value='Oil painting'>Oil painting</p>
                        <p onClick={handleTechnique} data-value='Pencil'>Pencil</p>
                        <p onClick={handleTechnique} data-value='Watercolor'>Watercolor</p>
                        <p onClick={handleTechnique} data-value='Macrame'>Macrame</p>
                        <p onClick={handleTechnique} data-value='Ceramics'>Ceramics</p>

                    </div>
                </div>
                <div className={style.filterDiv}>
                    Payment method
                    <div className={style.options}>
                        <p onClick={handlePayment} data-value='Direct Purchase'>Direct Purchase</p>
                        <p onClick={handlePayment} data-value='Auction'>Auction</p>

                    </div>
                </div>
                <div className={style.filterDiv}>
                    Price
                    <div className={style.options}>

                        <p onClick={handlePrice} data-value='Higher'>Higher {'>'} Lower</p>
                        <p onClick={handlePrice} data-value='Lower'>Lower {'>'} Higher</p>

                    </div>
                </div>
            </div>
        </div>
    )
}