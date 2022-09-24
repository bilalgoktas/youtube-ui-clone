import React, { useRef, useState, useEffect } from "react";
import CategoryButton from "../categoryButton/categoryButton";
import styles from "./categories.module.css";
import allCategories from "../../data/allCategories";
import icons from "../../icons.js";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

const Categories = ({ isBarsClicked }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollLength, setScrollLength] = useState(1);

  useEffect(() => {
    setScrollLength(ref.current.scrollWidth - ref.current.clientWidth);
    setScrollPosition(ref.current.scrollLeft);
    console.log(scrollPosition);
  }, [isBarsClicked]);

  const ref = useRef();

  const scroll = (offset) => {
    setScrollPosition((ref.current.scrollLeft += offset));
    console.log(scrollPosition);
  };

  return (
    <div
      ref={ref}
      className={classNames(
        styles.container,
        !isBarsClicked && styles.sidebarSmall,
        isDarkTheme && styles.dark
      )}
    >
      {scrollPosition > 0 ? (
        <div
          className={classNames(
            styles.scrollContainer,
            styles.prev,
            !isBarsClicked && styles.sidebarSmall
          )}
        >
          <img onClick={() => scroll(-150)} src={icons.leftArrow} alt="" />
        </div>
      ) : (
        ""
      )}

      {scrollPosition < scrollLength && (
        <div className={classNames(styles.scrollContainer, styles.next)}>
          <img onClick={() => scroll(150)} src={icons.rightArrow} alt="" />
        </div>
      )}

      {allCategories.map((category, index) => (
        <CategoryButton
          key={index}
          index={index}
          length={allCategories.length}
          name={category}
        />
      ))}
    </div>
  );
};

export default Categories;
