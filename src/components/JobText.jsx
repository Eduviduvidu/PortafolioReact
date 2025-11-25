export default function JobText({ job, titleLevel = 3 }) {
  const TitleTag = `h${titleLevel}`;

  return (
    <div className="job">
      <span className="job-title">
        <TitleTag>{job.title}</TitleTag> <i>({job.location})</i>
      </span>
      <p>{job.text}</p>
    </div>
  );
}
