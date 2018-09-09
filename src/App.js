import React, {Component} from 'react';
import logo from './logo.svg';
import illuminati from './illuminate.jpg';
import sheeple from './sheeple.jpg';
import {Grid,Col,Row} from 'react-bootstrap';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Illuminati's Biggest Hoax</h1>
                </header>
                <br></br>
                <img src={illuminati} alt="none"/>
                <h2>Illuminati's History</h2>
                <Grid>
                    <Row>
                        <Col xs={2}/>
                        <Col xs={8}>
                            <p>The Illuminati (plural of Latin illuminatus, "enlightened") is a name given to several groups, both real and fictitious.</p>
                            <p>Historically, the name usually refers to he Bavarian Illuminati, an Enlightenment-era secret society founded on 1 May 1776.</p>
                            <p>
                                The society's goals were to oppose superstition, obscurantism, religious influence over public life, and abuses of state power.
                                "The order of the day," they wrote in their general statutes, "is to put an end to the machinations of the purveyors of injustice, to control them without dominating them."
                                The Illuminati—along with Freemasonry and other secret societies—were outlawed through edict by the Bavarian ruler Charles Theodore with the encouragement of the Catholic Church, in 1784, 1785, 1787, and 1790.
                                In the several years following, the group was vilified by conservative and religious critics who claimed that they continued underground and were responsible for the French Revolution.
                            </p>
                            <p>
                                Many influential intellectuals and progressive politicians counted themselves as members, including Ferdinand of Brunswick and the diplomat Xavier von Zwack, who was the Order's second-in-command.
                                It attracted literary men such as Johann Wolfgang von Goethe and Johann Gottfried Herder and the reigning dukes of Gotha and Weimar.
                                In subsequent use, "Illuminati" refers to various organisations which claim or are purported to have links to the original Bavarian Illuminati or similar secret societies, though these links are unsubstantiated. They are often alleged to conspire to control world affairs, by masterminding events and planting agents in government and corporations, in order to gain political power and influence and to establish a New World Order. Central to some of the more widely known and elaborate conspiracy theories, the Illuminati have been depicted as lurking in the shadows and pulling the strings and levers of power in dozens of novels, films, television shows, comics, video games, and music videos.
                            </p>
                        </Col>
                        <Col xs={2}/>
                    </Row>
                    <h2>Zoo Hoax and more</h2>
                    <Row>
                        <Col xs={2}/>
                        <Col xs={8}>
                            <img src={sheeple} alt="sheeple" />
                        </Col>
                        <Col xs={2}/>
                    </Row>
                    <br></br>
                    <Row>
                        <Col xs={2}/>
                        <Col xs={8}>
                            <p>
                                The mysterious group known only as the "Illuminati" has been known to spread many myths.
                                A few of the most notable are that Minecraft is fun, unicorns are cute, and zoos are real.
                                None of these things are true but less educated "sheeple" around the world believe these lies along with the lies that the earth is flat.
                            </p>
                            <p>
                                Do yourself a favor, don't be an ignorant sheep person.
                            </p>
                            <h2>You can <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">find more information here</a></h2>
                        </Col>
                        <Col xs={2}/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
