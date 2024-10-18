// let currentIndex = 0;
// const slides = document.querySelectorAll(".slide");

// function showNextSlide() {
//   slides[currentIndex].classList.remove("active");
//   currentIndex = (currentIndex + 1) % slides.length;
//   slides[currentIndex].classList.add("active");
// }

// slides[currentIndex].classList.add("active");
// setInterval(showNextSlide, 3000);

// 완료 


const heroWrapper = document.querySelector(".hero-wrapper");
const heroContentContainers = document.querySelectorAll(".content-container");
let heroCurrentIndex = 0;

function rollHeroContent() {
  heroCurrentIndex = (heroCurrentIndex + 1) % heroContentContainers.length;
  heroWrapper.style.transform = `translateX(-${heroCurrentIndex * 100}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(rollHeroContent, 2000);
});

const curriculumsWrapper = document.querySelector(".curriculums-cards-wrapper");
const curriculumCardsContainers = document.querySelectorAll(
  ".curriculums-cards-container"
);

const curriculumLeftArrow = document.querySelector("#curriculum-left-arrow");
const curriculumRightArrow = document.querySelector("#curriculum-right-arrow");
let curriculumContainerIndicator = document.querySelector(".slide-number");
let curriculumIndex = 0;

function updateArrowStates() {
  curriculumLeftArrow.disabled = curriculumIndex === 0;
  curriculumRightArrow.disabled =
    curriculumIndex === curriculumCardsContainers.length - 1;
}

function rollCurriculumCards(direction) {
  curriculumIndex = Math.max(
    0,
    Math.min(curriculumIndex + direction, curriculumCardsContainers.length - 1)
  );
  curriculumsWrapper.style.transform = `translateX(-${curriculumIndex * 100}%)`;
  updateArrowStates();
  changeCurriculumCarouselNumber();
}

function changeCurriculumCarouselNumber() {
  curriculumContainerIndicator.textContent = `${curriculumIndex + 1}/${
    curriculumCardsContainers.length
  }`;
}

curriculumLeftArrow.addEventListener("click", () => rollCurriculumCards(-1));
curriculumRightArrow.addEventListener("click", () => rollCurriculumCards(1));

updateArrowStates();
changeCurriculumCarouselNumber();



// 


let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[currentIndex].classList.remove("active");
  
  currentIndex = (currentIndex + 1) % slides.length;
  
  slides[currentIndex].classList.add("active");

  // 이미지 위치 설정
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.transform = "translateX(0)";
    } else if (index < currentIndex) {
      slide.style.transform = "translateX(100%)"; // 왼쪽으로 이동
    } else {
      slide.style.transform = "translateX(100%)"; // 오른쪽으로 이동
    }
  });
}

// 초기 상태 설정
slides.forEach((slide, index) => {
  slide.style.transform = index === currentIndex ? "translateX(0)" : "translateX(100%)";
});

setInterval(showNextSlide, 3000);
