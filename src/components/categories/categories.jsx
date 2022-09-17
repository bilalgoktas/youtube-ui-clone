import React, { useRef, useState, useEffect } from "react";
import CategoryButton from "../categoryButton/categoryButton";
import styles from "./categories.module.css";
import icons from "../../icons.js";
import classNames from "classnames";

const Categories = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollLength, setScrollLength] = useState(1);

  useEffect(() => {
    setScrollLength(ref.current.scrollWidth - ref.current.clientWidth);
    setScrollPosition(ref.current.scrollLeft);
    console.log(scrollPosition);
  }, [props.isBarsClicked]);

  const ref = useRef();

  const scroll = (offset) => {
    setScrollPosition((ref.current.scrollLeft += offset));
    console.log(scrollPosition);
  };

  const categories = [
    "That",
    "Is",
    "One",
    "Small",
    "Step",
    "For",
    "Mankind",
    "One",
    "Giant",
    "Leap",
    "For",
    "Man",
    "Who",
    "Is",
    "Beginner",
    "In",
    "Frontend",
    "Development",
    "Like",
    "Me",
    "Sample",
    "Example",
  ];

  return (
    <div
      ref={ref}
      className={classNames(
        styles.container,
        !props.isBarsClicked && styles.sidebarSmall
      )}
    >
      {scrollPosition > 0 ? (
        <div
          className={classNames(
            styles.scrollContainer,
            styles.prev,
            !props.isBarsClicked && styles.sidebarSmall
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

      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          index={index}
          length={categories.length}
          name={category}
          style={index === 1 && { marginLeft: "24px" }}
        />
      ))}
    </div>
  );
};

export default Categories;
