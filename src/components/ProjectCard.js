import { Button, Col } from "react-bootstrap";
import { Projects } from "./Projects";

export const ProjectCard = ({ title, description, imgUrl, Link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={Link} className="btn-link">
            <Button style={{ boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62"}}>View Project</Button>
          </a>
        </div>
      </div>
    </Col>
  )
}