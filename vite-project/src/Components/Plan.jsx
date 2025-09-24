import './Plan.scss'
import card from '../assets/Components/card.png'

export default function Plan({item}){
    return(
        <>
            <div className='Plan'>
                <div className='PlanB_workspace'>
                    <div className='card_space'>
                        <img src={card} alt="" />
                    </div>

                    <p>{item.planname}</p>
                    <p><span>{item.price} </span>/mo</p>
                    <p>or {item.price2} yearly</p>

                    <div className='white_line_plan'></div>

                    <p>includes:</p>

                    <div className='p3-5'>
                        <div>
                            <div></div>
                            <p className='testp'>{item.include1}</p>
                        </div>

                        <div>
                            <div></div>
                            <p className='testp'>{item.include2}</p>
                        </div>

                        <div>
                            <div></div>
                            <p className='testp'>{item.include3}</p>
                        </div>

                        {item.include4 ? (
                        <div>
                            <div></div>
                            <p className='testp'>{item.include4}</p>
                        </div>
                        ) : null}

                        {item.include5 ? (
                        <div>
                            <div></div>
                            <p className='testp'>{item.include5}</p>
                        </div>
                        ) : null}
                    </div>

                    <button>Get started</button>
                </div>
            </div>
        </>
    )
}