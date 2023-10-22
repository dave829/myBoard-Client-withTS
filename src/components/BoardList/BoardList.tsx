import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import styles from "./BoardList.module.css";
import { CarouselCustom } from "../CarouselCustom/CarouselCustom";
import { Forum } from "../../model/forum";
import { useAppSelector } from "../../redux-toolkitStore/store";

export const BoardList = () => {
  const darkmode = useAppSelector((state) => state.darkmode).darkmode;

  const {
    isLoading,
    error,
    data: listDate,
  } = useQuery(
    ["listDate"],
    async () => {
      console.log("네트워크 통신 발생");
      return fetch("data/listDate.json").then((res) => res.json());
    },
    { staleTime: 1000 * 60 * 5 }
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>error</p>;

  return (
    <div className={styles.container}>
      <div className={styles.boardBoxtop}>
        <CarouselCustom />
      </div>

      <div
        className={`${
          darkmode
            ? `${styles.boardBoxBody} ${styles.boardBoxBodyDarkmode}`
            : styles.boardBoxBody
        }`}
      >
        <ul className={styles.listBox}>
          {listDate.map((list: Forum) => (
            <li className={styles.listItemBoxContainer} key={uuidv4()}>
              <div
                className={`${
                  darkmode
                    ? `${styles.listItemBox} ${styles.listItemBoxDarkmode}`
                    : styles.listItemBox
                }`}
              >
                <div className={styles.listItemsLeft}>
                  <span className={styles.listImg}>img</span>
                  <span
                    className={`${
                      darkmode
                        ? `${styles.listContent} ${styles.listContentDarkmode}`
                        : styles.listContent
                    }`}
                  >
                    {list.content}
                  </span>
                </div>
                <div className={styles.listItemsRight}>
                  <span
                    className={`${
                      darkmode
                        ? `${styles.listName} ${styles.listNameDarkmode}`
                        : styles.listName
                    }`}
                  >
                    {list.name}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.boardBoxbottom}>
        <ul className={styles.boardBoxbtul}>
          <li key={uuidv4()}>Previous</li>
          <li key={uuidv4()}>1 of 6</li>
          <li key={uuidv4()}>Next</li>
        </ul>
      </div>
    </div>
  );
};
