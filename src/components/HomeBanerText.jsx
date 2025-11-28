import "@css/components/homeBannerText.css";
export default function HomeBanerText({
  image,
  text,
  imgClassName,
  textSize = 9,
}) {
  const imageSize = 12 - textSize;

  return (
    <div className="row">
      <div className={`text-column col-md-${textSize}`}>
        <p>{text}</p>
      </div>

      <div className={`col-md-${imageSize}`}>
        <img src={image} alt="react" className={imgClassName && imgClassName} />
      </div>
    </div>
  );
}
