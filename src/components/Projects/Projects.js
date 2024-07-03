import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";

import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
             
              isBlog={false}
              title="Insurance"
              description="Technologies : PHP, Laravel, React, Postgres"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="EASE"
              description="Technologies : PHP, Laravel, Angular, Mysql"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="Net Direct Auto Sales [Sage Consulting]"
              description="Technologies : Wordpress, Php, Git."
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="CanZell Realty"
              description="Technologies : PHP, Laravel, AWS, Salesforce"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="E-Ticketing"
              description="Technologies :   Symfony, Sql"
            
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
