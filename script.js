
document
  .getElementById("water-button")
  .addEventListener("click", function () {
    document.body.style.transition = "transform 0.5s ease"; // 애니메이션 효과 설정
    document.body.style.transform = "translateX(-100%)"; // 페이지 왼쪽으로 슬라이드

    setTimeout(() => {
      window.location.href = "0.TechBlog_main/TechBlog_mainindex.html"; // 이동할 HTML 파일의 경로
    }, 500); // 애니메이션이 끝난 후 페이지 이동
  });
