import "./JsonStyle.css";
export default function ArrayList({ dataArray, title }) {
  return (
    <div id={title.toLowerCase()} className="arrayList json-list">
      <div className="json-key-title">
        <h2 className="json-key-text">{title}</h2>
        <span className="json-separator">:</span>
        <span className="open-bracket">{"["}</span>
      </div>
      <ul className="json-value">
        {dataArray.map((key) => {
          return (
            <li key={key}>
              <span className="json-value">{key}</span>
            </li>
          );
        })}
      </ul>
      <span className="close-bracket">{"]"}</span>
    </div>
  );
}
