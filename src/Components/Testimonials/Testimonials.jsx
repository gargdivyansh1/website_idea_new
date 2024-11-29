import React, { useRef } from 'react'
import './Testimonials.css'

// adding the back and next icon 
// and the images 
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Testimonials = () => {

    // here we will use the css property of transform translateX 
    // every time we translate 25% then we will be showing the next one .. as there are 4 cards
    
    const slider = useRef();
    // initialise the value of the translate
    let tx = 0 ;
    
    const slideForward = () => {
        // because when it is lesser then the -50 it is already at the last position
        if(tx > -50){
            tx -= 25 ;
        }

        // now we have to attach it to the translateX
        slider.current.style.transform =  `translateX(${tx}%)`
    }

    const slidebackward = () => {
        if(tx < 0){
            tx += 25;
        }

        // if we do this .. then after the ending of the list the rest it will show the empty spaces
        // tx += 25 ;

        slider.current.style.transform =  `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-icon' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-icon'onClick={slidebackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Consectetur quasi nulla quidem deserunt. Saepe obcaecati quod delectus ex quam necessitatibus dolor, 
                            Atque reprehenderit consequuntur deleniti minima eum autem vero fugiat ipsa ad dolores!
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Consectetur quasi nulla quidem deserunt. Saepe obcaecati quod delectus ex quam necessitatibus dolor, 
                            Atque reprehenderit consequuntur deleniti minima eum autem vero fugiat ipsa ad dolores!
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Consectetur quasi nulla quidem deserunt. Saepe obcaecati quod delectus ex quam necessitatibus dolor, 
                            Atque reprehenderit consequuntur deleniti minima eum autem vero fugiat ipsa ad dolores!
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Consectetur quasi nulla quidem deserunt. Saepe obcaecati quod delectus ex quam necessitatibus dolor, 
                            Atque reprehenderit consequuntur deleniti minima eum autem vero fugiat ipsa ad dolores!
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials