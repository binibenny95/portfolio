import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPhp,
  DiLaravel,
  DiUbuntu,
  DiMysql,
  DiOpensource,
  DiDebian,
  DiPython,
  DiGit,
 
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiOpensource />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDebian />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
     
     
     
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      
    </Row>
  );
}

export default Techstack;
