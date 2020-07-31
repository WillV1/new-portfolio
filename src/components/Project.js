import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

const Project = (props) => {

        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                
                {props.items.map(item => (
                <Card style={{ width: '25rem' }} className="profile-image">
                <Card.Img variant="top" src={item.imgSrc} alt="project image" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.desc}
                  </Card.Text>
                  <Button href={item.gitHubLink} target="_blank" variant="dark" type="submit">GitHub</Button>
                  <Button href={item.appLink} target="_blank" variant="dark" type="submit">Deployed App</Button>
                </Card.Body>
              </Card>
              ))}
              
                </Row>
            </Container>
            )

}

export default Project;