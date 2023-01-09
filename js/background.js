//페이지 배경화면 랜덤생성

const images = ["0.jpg", "1.jpg", "2.jpg"]; // 배열생성
const changeImage = images[Math.floor(Math.random() * images.length)]; // 랜덤으로 images의 사진들을 가져옴
const bakcgroundImage = document.createElement("img"); //

bakcgroundImage.src = `img/${changeImage}`;

document.body.appendChild(bakcgroundImage); // body에 bakcgroundImage값을 넣어준다.
