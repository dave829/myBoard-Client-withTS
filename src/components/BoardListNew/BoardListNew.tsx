import React, { useState } from "react";
import { addNewBoardList } from "../../api/firebase";
import { Button } from "../ui/Button";

interface BoardLists {
  name?: string;
  content?: string;
  options?: string[];
}

type BoardList = {
  name?: string;
  content?: string;
  options?: string[];
};

export const BoardListNew = () => {
  const [boardList, setBoardList] = useState<BoardLists>({});
  //const [file, setFile] = useState();
  const [isuploading, setIsUploading] = useState(false);
  //const [success, setSuccess] = useState();
  //console.log(boardList);

  //input / onChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log("handleChange");
    //console.log(e.target);
    const { name, value, files } = e.target;
    //if (name === "file") {
    //setFile(files && files[0]);
    //console.log(files[0]);
    //return;
    setBoardList((boardList) => ({ ...boardList, [name]: value }));
  };

  //Form / Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //console.log("handleSubmit");
    e.preventDefault();

    //버튼 상태(업로딩 메세지)
    setIsUploading(true);

    // 제품의 사진을 Cloudinary에 업로드 하고 URL을 획득.
    // Firebase에 새로운 제품을 추가.
    //uploadImage(file) //
    //.then((url) => {
    //console.log(url);

    // Firebase에 새로운 제품을 추가.
    addNewBoardList(boardList, null)
      // })
      .then(() => {
        //     setSuccess("성공적으로 제품이 추가 되었습니다.");
        //     setTimeout(() => {
        //       setSuccess(null);
        //     }, 4000);
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">게시글 작성</h2>
      {/* {success && <p className="my-2">✅{success}</p>} */}
      {/* {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )} */}
      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
        {/* <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        /> */}
        <input
          type="text"
          name="name"
          value={boardList.name ?? ""}
          placeholder="이름"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          value={boardList.content ?? ""}
          placeholder="게시글 내용"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          value={boardList.options ?? ""}
          placeholder="추가사항(콤마(,)로 구분)"
          required
          onChange={handleChange}
        />
        <Button
          text={isuploading ? "업로드중..." : "제품 등록하기"}
          //disabled={isuploading}
        />
      </form>
    </section>
  );
};
