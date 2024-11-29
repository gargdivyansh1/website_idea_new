import React from 'react'
import './About.css'
import play_img from '../../assets/play-icon.png'
import about_img from '../../assets/about.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} className="about-img" alt="" />
                <img src={play_img} className="play-icon" alt="" />
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Nuturing Tommorow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sequi eum vero ab illo, at accusamus odio pariatur perspiciatis. At alias molestias totam corrupti
                    suscipit fugiat esse nesciunt, soluta fuga
                    omnis reprehenderit necessitatibus, e
                    ius ut perferendis iure aperiam quasi odit, harum et itaq
                    ue sunt temporibus cumque! Aperiam beatae quis labore.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore eaque maxime obcaecati.
                    Optio delectus soluta aut magnam voluptate odit in!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Neque, ea sit nihil eius tenetur iusto.
                    Ipsam quam dolor laborum dolore?
                </p>
            </div>
        </div>
    )
}

export default About