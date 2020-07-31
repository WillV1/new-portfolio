import React from 'react';
import Hero from '../components/Jumbo';
import Content from '../components/Content';

import picture from '../assets/images/picture.jpg';
import resume from '../assets/resume/resume.pdf';

function HomePage(props) {

    return (
        <div className="background">        
            <Hero title={props.title} subTitle={props.subTitle} />
            <Content>
                <img src={picture} alt="website logo" className="my-pic" />
                <h6>Name: William VanHook</h6>
                <h6>Colleges: University of Virginia; Mulhenberg College; University of North Carolina-Chapel Hill</h6>
                <h6>Phone Number: (919) 397-3157</h6>
                <h6>Email Address: <a href={"mailto:wmvanhook@gmail.com"}>wmvanhook@gmail.com</a></h6>
                <a href={resume} target="_blank" rel="noopener noreferrer" title="Download My Resume"><h6>My Resume</h6></a>
                <p>{props.subText}</p>
                <h5>"To live a creative life, we must lose our fear of being wrong." --Anonymous</h5>
                <p><span>Photo by <a href="https://unsplash.com/@snowshade?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Oleg Laptev</a> on <a href="https://unsplash.com/s/photos/background?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></p>
            </Content>
        </div>
    )


}

export default HomePage;