import React from "react";
import PropTypes from "prop-types";

const images = require.context("../images", true);

function Photo({ image, style, alt }) {
  const nameImage = image;

  const imagePaths = images.keys();

  const matchingPath = imagePaths.find((path) =>
    new RegExp(`${nameImage}\\.(jpg|svg)$`).test(path)
  );

  if (!matchingPath) {
    console.error(`No se encontró una imagen para el nombre: ${nameImage}`);
    return null;
  }

  return <img src={images(matchingPath)} className={style} alt={alt} />;
}

Photo.propTypes = {
  image: PropTypes.string,
  style: PropTypes.string,
  alt: PropTypes.string,
};

export default Photo;
