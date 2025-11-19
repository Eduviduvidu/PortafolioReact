import { Link } from "react-router-dom";
import Button from "@component/Button";

export default function Projects() {
  return (
    <div>
      <h2>Proyectos</h2>
      <Link to="/projects">
        <Button>VerMas</Button>
      </Link>
    </div>
  );
}
