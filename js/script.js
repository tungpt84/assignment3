"use strict";
// function handleSubmit() {
//   const emailValue = document.getElementById("email").value.toLocaleLowerCase();
//   const errorEmail = document.getElementById("error-email");
//   const regex =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   const checkEmail = emailValue.match(regex);
//   // lấy phần chứa thông tin user
//   const sectionInfo = document.querySelector("#personal-info .section-info");
//   console.log("check section, sectionInfo");
//   // lấy element để kiểm soát submit
//   const submitControl = document.querySelector(".submit-email");
//   if (checkEmail) {
//     sectionInfo.style.display = "block";
//     submitControl.style.display = "none";
//     errorEmail.innerHTML = "";
//   } else {
//     errorEmail.innerHTML = "Email nhập không đúng";
//   }
// }

// KHAI BAÓ DỮ LIỆU
const submitEmail = document.querySelector(".submit-email");
const info = document.querySelector(".info");
const submit = document.querySelector(".submit");
const closeInfo = document.querySelector(".close-info");
const inputChange = document.getElementById("email");
const errorEmail = document.getElementById("error-email");

// KIỂM TRA TÍNH HỢP LỆ CỦA EMAIL
const validay = (email) => {
  return email.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
// KIỂM TRA SỰ KIỆN KHI NHẬP EMAIL
submit.addEventListener("click", function () {
  const emailValue = document.getElementById("email").value;
  if (validay(emailValue)) {
    info.style.display = "block";
    submitEmail.style.display = "none";
  } else {
    // alert("Sai định dạng email");
    errorEmail.innerHTML = "Định dạng email vừa nhập không hợp lệ";
    errorEmail.style.color = "red";
    inputChange.focus();
  }
});

// ĐÓNG THÔNG TIN CÁ NHÂN
const btnCloseInfo = function () {
  const emailValueNew = document.getElementById("email");
  info.style.display = "none";
  submitEmail.style.display = "block";
  emailValueNew.value = "";
  emailValueNew.focus();
  errorEmail.textContent = "Hãy nhập email để xác thực";
  errorEmail.style.color = "black";
};
closeInfo.addEventListener("click", btnCloseInfo);

// KHAI BÁO DL
function handleClickExp() {
  const btnExp = document.getElementById("btn-exp");

  // ĐIỀU KIỆN ĐỂ ẨN-HIỆN TT
  if (btnExp.classList.value.includes("view-more")) {
    Experience.style.display = "block";
    btnExp.classList.remove("view-more");
    btnExp.classList.add("view-less");
    btnExp.innerHTML = "&#9650; VIEW LESS";
  } else {
    Experience.style.display = "none";
    btnExp.classList.remove("view-less");
    btnExp.classList.add("view-more");
    btnExp.innerHTML = "&#9660; VIEW MORE";
  }
}

// KHAI BÁO DL
function handleClickEdu() {
  const btnEdu = document.getElementById("btn-edu");
  // ĐIỀU KIỆN ĐỂ ẨN-HIỆN TT
  if (btnEdu.classList.value.includes("view-more")) {
    Education.style.display = "block";
    btnEdu.classList.remove("view-more");
    btnEdu.classList.add("view-less");
    btnEdu.innerHTML = "&#9650; VIEW LESS";
  } else {
    Education.style.display = "none";
    btnEdu.classList.remove("view-less");
    btnEdu.classList.add("view-more");
    btnEdu.innerHTML = "&#9660; VIEW MORE";
  }
}
// KHAI BÁO DL
function handleClickWork() {
  const btnWork = document.getElementById("btn-work");
  // ĐIỀU KIỆN ĐỂ ẨN-HIỆN TT
  if (btnWork.classList.value.includes("view-more")) {
    Work.style.display = "block";
    btnWork.classList.remove("view-more");
    btnWork.classList.add("view-less");
    btnWork.innerHTML = "&#9650; VIEW LESS";
  } else {
    Work.style.display = "none";
    btnWork.classList.remove("view-less");
    btnWork.classList.add("view-more");
    btnWork.innerHTML = "&#9660; VIEW MORE";
  }
}
// KHAI BÁO DL
function handleClickInt() {
  const btnInt = document.getElementById("btn-int");
  // ĐIỀU KIỆN ĐỂ ẨN-HIỆN TT
  if (btnInt.classList.value.includes("view-more")) {
    Interest.style.display = "block";
    btnInt.classList.remove("view-more");
    btnInt.classList.add("view-less");
    btnInt.innerHTML = "&#9650; VIEW LESS";
  } else {
    Interest.style.display = "none";
    btnInt.classList.remove("view-less");
    btnInt.classList.add("view-more");
    btnInt.innerHTML = "&#9660; VIEW MORE";
  }
}
// KHAI BÁO DL
function handleClickLang() {
  const btnLang = document.getElementById("btn-lang");
  // ĐIỀU KIỆN ĐỂ ẨN-HIỆN TT
  if (btnLang.classList.value.includes("view-more")) {
    Language.style.display = "block";
    btnLang.classList.remove("view-more");
    btnLang.classList.add("view-less");
    btnLang.innerHTML = "&#9650; VIEW LESS";
  } else {
    Language.style.display = "none";
    btnLang.classList.remove("view-less");
    btnLang.classList.add("view-more");
    btnLang.innerHTML = "&#9660; VIEW MORE";
  }
}
// KHAI BÁO DL
function handleClickSkill() {
  const btnSkill = document.getElementById("btn-skill");
  // ĐIỀU KIỆN ĐỂ ẨN-HIỆN TT
  if (btnSkill.classList.value.includes("view-more")) {
    Skill.style.display = "block";
    btnSkill.classList.remove("view-more");
    btnSkill.classList.add("view-less");
    btnSkill.innerHTML = "&#9650; VIEW LESS";
  } else {
    Skill.style.display = "none";
    btnSkill.classList.remove("view-less");
    btnSkill.classList.add("view-more");
    btnSkill.innerHTML = "&#9660; VIEW MORE";
  }
}
