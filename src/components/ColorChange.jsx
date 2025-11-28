import "@css/components/ColorChange.css";

export default function ColorChange() {
  let themeColor = localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "light";

  function handleChangeColor(e) {
    const to = document.getElementById("themeColor").checked ? "dark" : "light";
    const element = document.getElementById("theme");

    element.classList.forEach((className) => {
      element.classList.remove(className);
    });

    element.classList.remove();
    element.classList.add(to + "-theme");

    //Apliquem els canvis a localStorage
    localStorage.setItem("themeColor", to);
  }
  return (
    <label className="theme-color">
      <input
        id="themeColor"
        type="checkbox"
        onChange={handleChangeColor}
        defaultChecked={themeColor === "dark" ? true : false}
      />
      <div className="ball"></div>
    </label>
  );
}
