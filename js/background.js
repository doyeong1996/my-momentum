//페이지 배경화면 랜덤생성

const images = ["0.jpg", "1.jpg", "2.jpg"]; // 배열생성
const changeImage = images[Math.floor(Math.random() * images.length)]; // 랜덤으로 images의 사진들을 가져옴
const bakcgroundImage = document.createElement("img"); //HTML에 JS 로 Element 작성

bakcgroundImage.src = `img/${changeImage}`; // src 로 img폴더 뒤에 changeImage 를 추가함

document.body.appendChild(bakcgroundImage); // body에 bakcgroundImage값을 넣어준다.
