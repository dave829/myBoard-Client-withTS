import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { v4 as uuid } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

// db
const db = getDatabase(app);

//게시판 글 Get / Read / output
export async function getBoardListApi() {
  return get(ref(db, "boardList")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
      return [];
    });
}

//게시판 글쓰기 Write / Update / input
export async function addNewBoardList(boardList, imageURL) {
  //console.log("글쓰기api호출됨");
  //console.log(boardlist);
  const id = uuid();
  return set(ref(db, `boardList/${id}`), {
    ...boardList,
    id,
    userName: boardList.name,
    content: boardList.content,
    //image: imageURL,
    //options: boardList.options.split(","),
    //like: boardList.like,
  });
}

// Delete / input

//좋아요 버튼 api
