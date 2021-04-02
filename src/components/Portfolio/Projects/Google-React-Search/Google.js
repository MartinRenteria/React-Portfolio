import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GoogleApp from './GooglePlayStore.png';
import '../../Project.css';

function Burger() {
    return (
<Card style={{ width: '25rem' }} bg="dark" text="white" className="ProjectCard text-center">
  <Card.Img variant="top" src={GoogleApp} alt="Screenshot"/>
  <Card.Body>
    <Card.Title>Burger Muncher</Card.Title>
    <Card.Text>
    This application required the knowledge of modals, using object relational mapping(ORM), MySQL, Node and handlebars in order to collect the users input display their desired food and devour it!
    </Card.Text>
    <Button className="projectButtons" variant="dark"><a href="https://burger-app-node-handlebars.herokuapp.com/burgers" target="_blank" rel="noreferrer">Live Site</a></Button>
    <Button className="projectButtons" variant="dark"><a href="https://github.com/MartinRenteria/Burger-Logger" target="_blank" rel="noreferrer">Github Repo</a></Button>
  </Card.Body>
</Card>
    )
}

export default Burger;