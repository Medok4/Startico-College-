import './Review.scss'
import star from '../assets/Components/stars.png'

export default function ReviewComp({item}){
    return(
        <>
            <div className='RC_workspace'>
                <div className='RCWS_realworkspace'>
                    <img src={star} alt="" />
                    
                    <p>{item.review}</p>

                    <div className='User'>
                        <img src={item.usericon} alt="" />
                        <div>
                            <p>{item.username}</p>
                            <p>{item.userwork}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}