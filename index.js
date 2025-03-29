const studentList = document.querySelector(".student-list");
const modalBackdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".student-modal");
const closeModalButton = modal.querySelector("button");
const modalImage = modal.querySelector(".modal-image");

const students = [
  {
    photo: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
  },
  {
    photo: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
  },
  {
    photo:  'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
  },
  {
    photo:   'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
  },
  {
    photo:   'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
  },
  {
    photo:   'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
  },
  {
    photo:  'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
  },
  {
    photo: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
  },
  {
    photo:  'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
  },
];
const studentsList = students
  .map((student) => {
    const saveStudent = `<li class="student-item">
        <img class="student-img" src="${student.photo}" alt="Student" />
      </li>`;
    return saveStudent;
  })
  .join("");
studentList.innerHTML = studentsList;
studentList.addEventListener("click", (event) => {
  if (event.target.nodeName === "IMG") {
    const imageSrc = event.target.src; 
    modalImage.src = imageSrc;  
    modalBackdrop.classList.remove("is-hidden");
  }
});
closeModalButton.addEventListener("click", () => {
  modalBackdrop.classList.add("is-hidden");
});
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    modalBackdrop.classList.add("is-hidden");
  }
});