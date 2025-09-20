import './explore.scss'
import cross from '../../assets/cross.png'
import logo from '../../assets/logo.png'
import B1 from '../../assets/B1.png'
import B2 from '../../assets/B2.png'
import B3 from '../../assets/B3.png'
import B4 from '../../assets/B4.png'
import B5 from '../../assets/B5.png'
import button_arrow from '../../assets/button_arrow.png'
import button_black_arrow from '../../assets/button_black_arrow.png'
import logoi1 from '../../assets/logoi1.png'
import logoi2 from '../../assets/logoi2.png'
import logoi3 from '../../assets/logoi3.png'
import logoi4 from '../../assets/logoi4.png'
import i86 from '../../assets/86icon.png'
import i74 from '../../assets/74icon.png'
import BYS_img1 from '../../assets/BYS_img1.png'
import BYS_img2 from '../../assets/BYS_img2.png'
import BYS_img3 from '../../assets/BYS_img3.png'
import Straight_img1 from '../../assets/Straight_img1.png'
import Straight_img2 from '../../assets/Straight_img2.png'
import worm_i1 from '../../assets/worm_i1.png'
import worm_i2 from '../../assets/worm_i2.png'
import green_img from '../../assets/green_img.png'
import Logo_White from '../../assets/Logo_White.png'
import final1 from '../../assets/final1.png'
import final2 from '../../assets/final2.png'
import final3 from '../../assets/final3.png'

export default function Explore(){

    function closeExplore(){
        document.getElementById('explore').style.display = 'none'
    }

    return(
        <>
            <div id='explore' className='explore'>
                <p>Explore all our services.</p>
                <img onClick={closeExplore} className='close' src={cross} alt="" />
            </div>

            <header>
                
                
                <nav>
                    <div className='nav'>
                        <div className='nav_workspace'>
                            <img src={logo} alt="" />

                            <div className='nav_buttons'>
                                <a href="">Our Story</a>
                                <a className='a1' href="">Blog</a>
                                <a className='a1' href="">Contact</a>
                                <a className='a1' href="">Pricing</a>
                                <button className='log_button'>Log in</button>
                                <button className='try_button'>Try for free</button>
                            </div>
                        </div>
                    </div>
                </nav> 

                <div className='div_with_draw'>
                    <div className='absolute_scam'>
                        <img src={B1} alt="" />
                        <img src={B2} alt="" />
                        <img src={B3} alt="" />
                    </div>

                    <div className='base_info'> 
                        <p>Head start your business today!</p>
                        <p>Consectetur adipiscing elit. Integer sagittis quam magna, quis sollicitudin lorem ornare ut. Nulla et scelerisque mauris.</p>
                        <div className='base_button_space'>
                            <button>Get started</button>
                            <button>Try for free <img src={button_arrow} alt="" /></button>
                        </div>
                        <div className='base_4_logo'>
                            <img src={logoi1} alt="" />
                            <img src={logoi2} alt="" />
                            <img src={logoi3} alt="" />
                            <img src={logoi4} alt="" />
                        </div>
                    </div>
                </div>

                <div className='watch_introduction'>
                    <div className='wi_line'></div>
                    <div className='introduction_itself'>
                        <button>Watch Introduction</button>
                    </div>
                </div>
            </header>
            
            <section className='Faster_Than_Ever'>
                <img className='B4' src={B4} alt="" />

                <div className='FTE_workspace'>
                    <div className='FTE_photo'>
                        <div className='FTE_green_div'>
                            <div className='FTE_GD_workspace'>
                                <div>
                                    <p>86%</p>
                                    <p>Increased in sales</p>
                                </div>
                                <img src={i86} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='FTE_info'>
                        <p className='FTE_i1'>Speed</p>
                        <p className='FTE_i2'>Faster than ever before</p>
                        <p className='FTE_i3'>Morbi tristique cursus diam, at viverra felis malesuada eu. Duis iaculis velit ac urna fermentum interdum. Ut auctor vitae nisi eget varius. Phasellus rutrum pellentesque lectus pulvinar dapibus aenean dui justro, tempus sed oido.</p>
                        <div>
                            <button>Get started</button>
                            <button>Try for free <img src={button_black_arrow} alt="" /></button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Build_Your_Startup'>
                <div className='BYS_workspace'>
                    <img className='B5' src={B5} alt="" />
                    <div className='BYS_info'>
                        <p className='BYS_I1'>Building your very own Startup has never been simpler</p>
                        <p className='BYS_I2'>Aenean dui justo, tempus sed odio ut, convallis accumsan nunc. Phasellus mauris sem, porta eu turpis vel, maximus condimentum turpis.</p>
                        <div className='BYS_3div'>
                            <div>
                                <div>
                                    <img src={BYS_img1} alt="" />
                                    <p>Better results</p>
                                    <p>Vestibulum posuere odio id purus maximus, vel condimentum nunc tincidunt. Duis sit amet vulputa.</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src={BYS_img2} alt="" />
                                    <p>Less paper work</p>
                                    <p>Duis convallis eros eu dolor posuere, sit amet mollis turpis elementum. Aliquam ut sapien enim.</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src={BYS_img3} alt="" />
                                    <p>More profit</p>
                                    <p>Donec tincidunt est pellentesque, ullamcorper quam sed, aliquam eros. Proin finibus luctus nisi.</p>
                                </div>
                            </div>
                        </div>
                        <div className='BYS_2buttons'>
                            <button>Get started</button>
                            <button>Try for free <img src={button_black_arrow} alt="" /></button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Straight'>
                <div className='S_workspace'>
                    <div className='S_div1'>
                        <p>Efficient</p>
                        <p>Straight to the point</p>
                        <p>Vivamus ante dolor, condimentum eget dignissim vitae, malesuada sed urna. Aenean consequat risus tortor, quis porta.</p>

                        <div className='S_D1_2divs'>
                            <div>
                                <img src={Straight_img1} alt="" />
                                <p>No meetings</p>
                                <p>Porta non eros. Ut finibus viverra neque, sed vestibulum tellus volutpat ac cras at massa.</p>
                            </div>
                            <div>
                                <img src={Straight_img2} alt="" />
                                <p>24/7 customer support</p>
                                <p>Praesent consequat erat in orci lobortis, in accumsan orci vestibulum nam et dictum.</p>
                            </div>
                        </div>

                        <div className='S_2buttons'>
                            <button>Get started</button>
                            <button>Try for free <img src={button_black_arrow} alt="" /></button>
                        </div>
                    </div>

                    <div className='S_div2'>
                        <div className='S_D2_greendiv'>
                            <div>
                                <div>
                                    <p>74%</p>
                                    <p>Increased in productivity</p>
                                </div>
                                <img src={i74} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Worm_From_Sponsor'>
                <div className='WFScam'>
                    <img src={worm_i1} alt="" />
                    <img src={worm_i2} alt="" />
                </div>

                <div className='WFS_Delayed'>
                    <p>A words from our customers</p>
                    <p>Eu turpis vel, maximus condimentum turpis faucibus dictum accumsan.</p>
                </div>
            </section>

            <section className='Plans'>
                <div className='Plans_Scam'>
                    <img src={B4} alt="" />
                </div>

                <div className='Plans_workspace'>
                    <p>Pricing</p>
                    <p>Pricing plans</p>
                    <p>Suspendisse mattis porttitor gravida et malesuada fames.</p>
                </div>
            </section>

            <section className='Our_Blogs'>
                <div className='OB_workspace'>
                    <p>Blog</p>
                    <p>Our latest blogs</p>
                    <p>Accumsan semper euismod dolor vitae metus.</p>
                    <button>View all</button>
                </div>
            </section>

            <section className='Email'>
                <div className='Email_line'></div>

                <div className='Email_field'>
                    <div className='EF_scam'>
                        <img src={green_img} alt="" />
                    </div>

                    <div className='Email_workspace'>
                        <p>Stay up to date with the latest news from the Startup world!</p>
                        <p>Etiam volutpat ligula nec orci egestas, at porta massa tempor. Proin rutrum, purus in convallis pharetra, risus leo sagittis.</p>
                        <div>
                            <input type="email" placeholder='Enter your email'/>
                            <button>Subscribe</button>
                        </div>
                        <p>By clicking Subscribe you're confirming that you agree with our Terms and Conditions.</p>
                    </div>
                </div>
            </section>

            <footer>
                <div className='footer_workspace'>
                    <div className='FW_link_space'>

                        <div className='FWLS_d1'>
                            <img src={Logo_White} alt="" />
                            <p>Address: <br /> Level 1, 12 Nikola Tesla street, Niš, Serbia</p>
                            <p>Contact: <br /> 1800 123 4567 <br /> info@startico.io</p>
                        </div>

                        <div className='FWLS_d2'>
                            <p>Pages</p>
                            <div>
                                <a href="">Home v1</a>
                                <a href="">Home v2</a>
                                <a href="">Home v3</a>
                                <a href="">About v1</a>
                                <a href="">About v2</a>
                                <a href="">About v3</a>
                                <a href="">Contact v1</a>
                                <a href="">Contact v2</a>
                                <a href="">Contact v3</a>
                                <a href="">Blog</a>
                                <a href="">Pricing</a>
                                <a href="">Log in</a>
                                <a href="">Sign up</a>
                            </div>
                            
                        </div>

                        <div className='FWLS_d3'>
                            <p>CMS pages</p>
                            <div>
                                <a href="">Blog Post</a>
                                <a href="">Blog Categories</a>
                            </div>
                        </div>

                        <div className='FWLS_d4'>
                            <p>Utility pages</p>
                            <div>
                                <a href="">Style guide</a>
                                <a href="">Licenses</a>
                                <a href="">Changelog</a>
                                <a href="">404</a>
                                <a href="">Password</a>
                            </div>
                        </div>
                    </div>

                    <div className='final_space'>
                        <p>© Startico by Minima Square. Powered by Webflow.</p>
                        <div>
                            <img src={final1} alt="" />
                            <img src={final2} alt="" />
                            <img src={final3} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}