import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Hero from '../components/Jumbo';
import Project from '../components/Project';

import fitness from '../assets/images/fitness.PNG';
import employee from '../assets/images/employee.PNG';
import planner from '../assets/images/planner.PNG';
import burger from '../assets/images/burger.png';
import tourzing from '../assets/images/tourzing.PNG';
import note from '../assets/images/note.PNG';

const items = [
    {
        id: 0,
        title: 'Fitness Tracker',
        imgSrc: fitness,
        gitHubLink: 'https://github.com/WillV1/fitness-tracker',
        appLink: 'https://fathomless-everglades-17524.herokuapp.com/?',
        desc: 'A web application utilizing MongoDB/Mongoose that lets users add exercises to a new or existing workout and review stored data about workouts on the current and previous days. Core technologies used: JavaScript, MongoDB/Mongoose'
    },
    {
        id: 1,
        title: 'Employee Directory',
        imgSrc: employee,
        gitHubLink: 'https://github.com/WillV1/employee-directory',
        appLink: 'https://willv1.github.io/employee-directory/',
        desc: 'This application allows the user to be able to view his/her entire employee directory at once so that he/she has quick access to pertinent information. The user is then able to filter and sort on the selected parameter as necessary. Core technologies used: React'
    },
    {
        id: 2,
        title: 'Day Planner',
        imgSrc: planner,
        gitHubLink: 'https://github.com/WillV1/day-planner',
        appLink: 'https://willv1.github.io/day-planner/',
        desc: 'Application utilizing JQuery and Moment.js to provide the user a dynamic day planner, allowing the user to enter to-do tasks into hourly time blocks and save the to-dos for later access. Core technologies used: HTML5; Bootstrap; JavaScript'
    },
    {
        id: 3,
        title: 'Burger',
        imgSrc: burger,
        gitHubLink: 'https://github.com/WillV1/burger',
        appLink: 'https://blooming-retreat-74825.herokuapp.com/',
        desc: 'A web application that lets users input the names of burgers theyd like to eat and then devour them. Core technologies used: JavaScript/Handlebars.js, Node.js/Express.js, MySQL'
    },
    {
        id: 4,
        title: 'TourZing',
        imgSrc: tourzing,
        gitHubLink: 'https://github.com/WillV1/TourZing',
        appLink: 'https://degrassi-syrup-05027.herokuapp.com/',
        desc: 'A full-stack application that lets users sign up for a tour, based on a listing of tour guides and rate their experience. Core technologies used: Node.js/Express.js, MySQL, Sequelize, Handlebars.js'
    },
    {
        id: 5,
        title: 'Note Taker',
        imgSrc: note,
        gitHubLink: 'https://github.com/WillV1/note-taker-app',
        appLink: 'https://note-taker-wv.herokuapp.com/',
        desc: 'An application that allows the user to create short, pertinent notes for the user, based on business context needs. This application uses an Express.js backend, saves and retrieves note data from a JSON file. Core technologies used: Node.js/Express.js, Javascript'
    }
]
function Projects(props) {
    return (
        <div className="background">
            <Hero title={props.title} subTitle={props.subTitle} />
            <Container fluid={true}>
                <Row className="justify-content-around">
                    <Project items={items} />
                </Row>
            </Container>
        </div>
    )

}

export default Projects;