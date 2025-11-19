export default function Page({
  children,
  classNames = ["container", "basic-page", "dark-theme"],
}) {
  //Implementar lógica per aplicar el tema fosc o clar
  return <div className={` ${classNames.join(" ")}`}>{children}</div>;
}
