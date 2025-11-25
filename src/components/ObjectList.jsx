import "./JsonStyle.css";
export default function ObjectList({ objectArray, title }) {
  return (
    <div id={title.toLowerCase()} className="objectList json-list">
      <div className="json-key-title">
        <h2 className="json-key-text">{title}</h2>
        <span className="json-separator">:</span>
        <span className="open-bracket">{"{"}</span>
      </div>
      <ul className="json-value">
        {Object.keys(objectArray).map((key) => {
          return (
            <li key={key}>
              <span className="json-key-text">{key}</span>
              <span className="json-separator">: </span>
              <span className="json-value">{objectArray[key]}</span>
            </li>
          );
        })}
      </ul>
      <span className="close-bracket">{"}"}</span>
    </div>
  );
}
