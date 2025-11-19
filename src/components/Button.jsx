export default function Button({ children, onClickCB=() => {} }) {
  return (
    <button className="btn btn-primary" type="button" onClick={onClickCB}>
      {children}
    </button>
  );
}
