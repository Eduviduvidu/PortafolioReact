export default function JobText({ job, titleLevel = 3 }) {
  const TitleTag = `h${titleLevel}`;

  return (
    <>
      <span className="dec dec-strong-text">
        <TitleTag>{job.title}</TitleTag> <i>({job.location})</i>
      </span>
      <p>{job.text}</p>
    </>
  );
}
