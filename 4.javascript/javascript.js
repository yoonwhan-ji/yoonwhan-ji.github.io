

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


let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[currentIndex].classList.remove("active");
  
  currentIndex = (currentIndex + 1) % slides.length;
  
  slides[currentIndex].classList.add("active");


  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.transform = "translateX(0)";
    } else if (index < currentIndex) {
      slide.style.transform = "translateX(100%)"; 
    } else {
      slide.style.transform = "translateX(100%)"; 
    }
  });
}


slides.forEach((slide, index) => {
  slide.style.transform = index === currentIndex ? "translateX(0)" : "translateX(100%)";
});

setInterval(showNextSlide, 3000);


document.querySelectorAll("details summary").forEach((summary) => {
  summary.addEventListener("click", function () {
    const img = this.querySelector("img");
    img.classList.toggle("open");
  });
});

document.querySelectorAll(".day").forEach((day) => {
    day.addEventListener("click", function () {
    
        document.querySelectorAll(".day.selected").forEach((selectedDay) => {
            selectedDay.classList.remove("selected");
        });

        this.classList.add("selected");
    });
});

// 


const leftArrowImage = './img/누른뒤 왼.png'; // 새로운 왼쪽 화살표 이미지
const rightArrowImage = './img/누른뒤 우.png'; // 새로운 오른쪽 화살표 이미지
const leftArrowDefaultImage = './img/누르기전 왼.png'; // 기본 왼쪽 화살표 이미지
const rightArrowDefaultImage = './img/누르기전 우.png'; // 기본 오른쪽 화살표 이미지

function updateArrowImages() {
  curriculumLeftArrow.src = curriculumIndex === 0 ? leftArrowDefaultImage : leftArrowImage;
  curriculumRightArrow.src = curriculumIndex === curriculumCardsContainers.length - 1 ? rightArrowDefaultImage : rightArrowImage;
}

function rollCurriculumCards(direction) {
  curriculumIndex = Math.max(
    0,
    Math.min(curriculumIndex + direction, curriculumCardsContainers.length - 1)
  );
  curriculumsWrapper.style.transform = `translateX(-${curriculumIndex * 100}%)`;
  updateArrowStates();
  updateArrowImages(); // 화살표 이미지 업데이트
  changeCurriculumCarouselNumber();
}

// 초기 화살표 이미지 설정
updateArrowImages();

curriculumLeftArrow.addEventListener("click", () => rollCurriculumCards(-1));
curriculumRightArrow.addEventListener("click", () => rollCurriculumCards(1));

updateArrowStates();
changeCurriculumCarouselNumber();


// 체크박스 
document
.getElementById("checkbox")
.addEventListener("change", function () {
  const checkmark = document.querySelector(".checkmark");
  if (this.checked) {
    checkmark.style.backgroundColor = "#4CAF50"; // 체크 시 색상
  } else {
    checkmark.style.backgroundColor = "#1f2839"; // 기본 색상 유지
  }
});


// 10/25
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const submitBtn = document.getElementById('submitBtn');
const contactInputs = document.querySelectorAll('.contacts-input-box');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // 하나의 체크박스만 선택되도록 제한
        checkboxes.forEach(cb => {
            if (cb !== checkbox) {
                cb.checked = false;
            }
        });
        checkSubmitButtonState();
    });
});

contactInputs.forEach(input => {
    input.addEventListener('input', checkSubmitButtonState);
});

function checkSubmitButtonState() {
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const contactsFilled = Array.from(contactInputs).every(input => input.value.trim() !== '');

    submitBtn.disabled = !(checkedCount === 1 && contactsFilled);
    submitBtn.classList.toggle('disabled', submitBtn.disabled);
}


// 1025


function formatPhoneNumber(input) {
  // 숫자만 필터링
  const value = input.value.replace(/[^0-9]/g, '');

  // 포맷팅
  if (value.length < 4) {
    input.value = value;
  } else if (value.length < 8) {
    input.value = value.slice(0, 3) + '-' + value.slice(3);
  } else {
    input.value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
  }
}


document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

});


function formatPhoneNumber(input) {
  const value = input.value.replace(/[^0-9]/g, '');

  if (value.length < 4) {
    input.value = value;
  } else if (value.length < 8) {
    input.value = value.slice(0, 3) + '-' + value.slice(3);
  } else {
    input.value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
  }


  const submitBtn = document.getElementById('submitBtn');
  if (value.length === 10) { 
    submitBtn.classList.remove('disabled');
    submitBtn.classList.add('enabled');
    submitBtn.disabled = false;
  } else {
    submitBtn.classList.remove('enabled');
    submitBtn.classList.add('disabled');
    submitBtn.disabled = true;
  }
}

  