import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./CarouselCustom.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { boardListData } from "../../redux-toolkitStore/reducers/boardListDataSlice";

export const CarouselCustom = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.box}>
          <Slider {...settings}>
            {boardListData.map((v) => (
              <li key={uuidv4()}>
                <Link to="#">
                  <video autoPlay muted playsInline width="350px" height="65px">
                    <source src={v.url} type="video/mp4" />
                  </video>
                </Link>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </>
  );
};
