export default function Project({ type, project }) {
  let classes = ["project"];
  if (type) {
    classes.push(...type);
  }
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
