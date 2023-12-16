# Summary :  **[Implementation and Distribution of Personal Blog Sites with React].**

## https://cool-toffee-0bb496.netlify.app/

skills : Typescript / React.js /  React-router / React-query / Netlify / GitHub / Redux-Toolkit + Recoil / Styled-component / Firebase 

This project is in the form of a bulletin board and consists of some simple items. The bulletin board is currently implementing a simple CRUD, configured the backend with Firebase, and deployed with Netlify . Updates are still in progress.

I thought about what kind of project to make, and I decided to make a personal blog because I think it will be useful for various personal purposes, such as posting posts and sharing materials. I looked at various sites for the overall design and layout, and made simple interactions, dark modes, main screens, and bulletin boards. The blog is currently being created, and I want to continue to try various functions and designs, and I will update it by considering what technologies to apply to the blog. Local global state management was done with Context-api and Rudux-toolkit.

Local storage has solved the issue that can be solved when refreshing in dark mode. Cookies do not need to be set up separately like sessions, so we decided to store them in local storage because they seem to be easy to use in a local environment and are not security-sensitive materials. In rudex, make the state of storing dark mode to boolean value, store it in local storage, and then, It was implemented in such a way that each of the dashcamode states was lowered to the necessary components and shown through the trilateral operator. I was able to see that the local storage values were well stored in the Chrome Web browser application tab.

*Adding a new post Issue

![add a post issue.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/fe174e4b-89e1-4eb5-a3cc-a1e573ac5d68/a3f4e259-1141-4882-bf48-b204c910fb04/add_a_post_issue.jpg)

After writing a new article on the bulletin board, I went back to the bulletin board, and there was a problem that the new article was not immediately reflected. In order to reduce frequent network communication when using react queries, I set the status to get the bulletin board list, that is, the get request part, and set the storeTime, but no new communication occurred during that time, so even if a new article was registered, the get request did not occur. So, when a new article was registered, the status of the bulletin board was updated by using invalidQueries to get the list again, and the status of the bulletin board was updated to see immediately the new article.


# 개인 블로그 프로젝트 / 
리액트를 활용한 개인블로그 사이트 구축 및 배포 / 2023년 11월 

### 전체적인 디자인이나 레이아웃은 직접 만들었고, 간단한 인터렉션과 다크모드, 메인화면 그리고 게시판 등 을 만들어 보았으며,
### 게시판 내용은 파이어베이스로 네크워크 통신을 통해 받아오고, 투두리스트 데이터는 로컬스토리지에 저장하는 방법을 적용했습니다.
### 블로그는 현재 만들어가는 중에 있으며, 계속해서 다양한 기능 및 디자인을 입혀보고싶고, 다양한 기술을 블로그에 어떻게 적용해 나갈지 고민하며 업데이트 할 예정입니다.

## https://cool-toffee-0bb496.netlify.app/

- 프론트엔드 : Typescript / React.js /  React-router / React-query / Netlify / GitHub / Redux-Toolkit + Recoil / Styled-component / Firebase 

--------------------------------------------------------------------------


