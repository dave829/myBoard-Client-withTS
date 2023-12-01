import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import styles from "./BoardList.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Forum } from "../../model/forum";
import { useAppSelector } from "../../redux-toolkitStore/store";
import { getBoardListApi } from "../../api/firebase";
import { BoardListNew } from "../BoardListNew/BoardListNew";
import { Link } from "react-router-dom";
//import { CarouselCustom } from "../CarouselCustom/CarouselCustom";
//import { getBoardListApi } from "../../api/firebase";
import { LikeButton } from "../ui/LikeButton";

export const BoardList = () => {
  const darkmode = useAppSelector((state) => state.darkmode).darkmode;

  const {
    isLoading,
    error,
    data: listDate,
  } = useQuery(
    ["listDate"],
    // async () => {
    //   console.log("네트워크 통신 발생");
    //   return fetch("data/listDate.json").then((res) => res.json());
    // },
    getBoardListApi,
    { staleTime: 1000 * 60 * 5 }
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>error</p>;

  return (
    <div className={styles.container}>
      <div className={styles.boardBoxtop}>
        {/* 캐루셀 컴포넌트 넣는곳 */}
        {/* <CarouselCustom /> */}
      </div>

      <div
        className={`${
          darkmode
            ? `${styles.boardBoxBody} ${styles.boardBoxBodyDarkmode}`
            : styles.boardBoxBody
        }`}
      >
        <ul className={styles.listBox}>
          {listDate?.map((list: Forum) => (
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
                    {list.userName}
                  </span>
                  <div className={styles.likeBtnBox}>
                    <LikeButton />
                    <span className={styles.like}>
                      {list.like || 0}
                      {/* {like} */}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottomWrite}>
        <button className={styles.bottomWritebox}>
          <Link to="/BoardListNew">
            <span>글쓰기 </span>
            <HiOutlineArrowNarrowRight className={styles.arrow} />
          </Link>
        </button>
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
