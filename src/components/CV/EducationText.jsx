export default function EducationText({ education, titleLevel = 3 }) {
  const TitleTag = `h${titleLevel}`;

  return (
    <div className="education">
      <span className="education-title">
        <TitleTag>{education.title}</TitleTag> {education.extra && <i>({education.extra})</i>}
      </span>
      <p>{education.text}</p>
    </div>
  );
}
