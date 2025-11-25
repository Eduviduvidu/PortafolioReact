export default function EducationText({ education, titleLevel = 3 }) {
  const TitleTag = `h${titleLevel}`;

  return (
    <>
      <span className="dec dec-strong-text">
        <TitleTag>{education.title}</TitleTag> {education.extra && <i>({education.extra})</i>}
      </span>
      <p>{education.text}</p>
    </>
  );
}
