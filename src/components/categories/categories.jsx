import React, {useRef} from 'react';
import CategoryButton from "../categoryButton/categoryButton";
import styles from "./categories.module.css";


const Categories = () => {

    const ref = useRef();

    const scroll = (offset) => {
        ref.current.scrollLeft += offset;
    }

    const categories = ["That", "Is", "One", "Small", "Step", "For", "Mankind", "One", "Giant", "Leap", "For", "Man", "Who", "Is", "A Beginner", "In", "Frontend", "Development", "Like", "Me"];



  return (
    <div ref={ref} className={styles.container}>
    <button className={styles.prev} onClick={()=> scroll(-50)}>PREV</button>
    <button className={styles.next} onClick={() => scroll(50)}>NEXT</button>
        {categories.map((category, index) => <CategoryButton key={index} name={category}/>)}
    

    </div>
  )
}

export default Categories