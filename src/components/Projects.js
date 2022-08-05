import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import whatsappclone from "../assets/img/whatsappclone.png";
import amazonclone from "../assets/img/amazonclone.png";
import quizapp from "../assets/img/quizapp.png";
import todolist from "../assets/img/todolist.png";
import weatherapp from "../assets/img/weatherapp.png";
import mobihub from "../assets/img/mobihub.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Footer } from "./Footer";


export const Projects = () => {

    const projects = [
        {
          title: "WhatsApp Clone",
          description: "This is a React JS project which has Firebase Firestore real-time database, Material UI, React Router, React Context API, Redux, and Google Authentication.",
          imgUrl: whatsappclone,
          Link : "https://github.com/mouli1441/Whatsapp-Clone",
        },
        {
          title: "Amazon Clone",
          description: "Its another React Js project which has a firebase firestoroe real-time database authentication , React Router , Context API , and a razor payment method option.",
          imgUrl: amazonclone,
        },
        {
          title: "A Quiz App",
          description: " A project in HTML , CSS , JAVASCRIPT with functionality.",
          imgUrl: quizapp,
          Link : "https://mouli1441.github.io/Quiz-app-JS/",
        },
        {
          title: "To-Do-List",
          description: "This project is made by using HTML5, CSS and Advanced JAVAScript .",
          imgUrl: todolist,
          Link : "https://mouli1441.github.io/To-Do-List/",
        },
        {
          title: "A Weather App",
          description: "A weather website that depicts the fetched data from API and displays it to the client",
          imgUrl: weatherapp,
          Link : "https://weatherjswebapp.netlify.app/",
        },
      
        {
          title: "The MobiHub webpage",
          description: "This was the project performed for a webbattle . The project is a responsive website which is made by using HTML5, CSS, JAVAScript and also using Bootstrap",
          imgUrl: mobihub,
          Link : "https://mouli1441.github.io/The-MobileHub/",
        },
      ];

    return (
  
        <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>All my top projects are listed here.</p>
                  
                  {/* react bootstrap tab components */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index ) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                       </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>I have also participated in Hackathons and other contests in the field of Web development and got selected just before the final. I have worked as a Content Writer at CodeBusted. It was related to data entry and data processing on technical grounds that I have mentioned in my skillset. </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>

    )
}