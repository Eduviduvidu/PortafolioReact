import "@css/components/AbsoluteButton.css";
export default function AbsoluteButton({ children, id, click }) {
  return (
    <span id={id} onClick={click} class="absolute-button">
      {children}
    </span>
  );
}
