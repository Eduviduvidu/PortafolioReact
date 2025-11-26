import "@css/components/homeBannerText.css";
export default function HomeBanerText({
  image,
  text,
  textSize = 9,
  imgOnRight = false,
}) {
  const imageSize = 12 - textSize;

  return (
    <div className="row">
      {!imgOnRight && (
        <div className={`text-column col-md-${textSize}`}>
          <p>{text}</p>
        </div>
      )}

      <div className={`col-md-${imageSize}`}>
        <img src={image} alt="react" />
      </div>

      {imgOnRight && (
        <div className={`text-column col-md-${textSize}`}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
