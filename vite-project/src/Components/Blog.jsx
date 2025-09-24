import './Blog.scss'
import blog_button from '../assets/Components/blog_button.png'

export default function Blog({item}){
    return(
        <>
            <div className='BSPace'>
                <img src={item.blog_image} alt="" />
                <div className='BSP_workspace'>
                    <div className='BSP_tags'>
                        <div><p>{item.blog_tag1}</p></div>
                        <p>{item.blog_tag2}</p>
                    </div>

                    <p>{item.blog_title}</p>
                    <p>{item.blog_desc}</p>
                    <button><img src={blog_button} alt="" /> Read more</button>
                </div>
            </div>
        </>
    )
}