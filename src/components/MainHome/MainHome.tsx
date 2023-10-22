import styles from "./MainHome.module.css";
import { Projects } from "../Projects/Projects";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { MainNav } from "../MainNav/MainNav";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useQuery } from "@tanstack/react-query";

export const MainHome = () => {
  const {
    isLoading,
    error,
    data: imgsMap,
  } = useQuery(
    ["imgsMap"],
    async () => {
      console.log("네트워크 통신 발생");
      return fetch("data/mainimg.json").then((res) => res.json());
    },
    { staleTime: 1000 * 60 * 5 }
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>error</p>;

  return (
    <section className={styles.container}>
      <MainNav />
      <div className={styles.gridBox}>
        {imgsMap.map((val) => (
          <Projects key={val.value} val={val.value} />
        ))}
      </div>
      <div className={styles.bottomArrow}>
        <button className={styles.bottomArrowBox}>
          <span>More </span>
          <HiOutlineArrowNarrowRight className={styles.arrow} />
        </button>
      </div>
    </section>
  );
};
