const search = document.querySelector("#search");
const st = document.querySelector(".student-list");
const students = document.querySelectorAll(".student-item");

search.addEventListener("keydown", searchData);

function searchData(e) {
  const text = search.value.toUpperCase().trim();
  students.forEach((student) => {
    const names = student.querySelector("h3").innerHTML;
    if (names.toUpperCase().indexOf(text) > -1) {
      student.style.display = "flex";
    } else {
      student.style.display = "none";
    }
  });
}
