import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

// db
const db = getDatabase(app);

export async function getBoardListDataFromServer() {
  return get(ref(db, "boardList")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const boardListdata = snapshot.val();
        console.log(boardListdata);
        return boardListdata;
      }
    });
}
