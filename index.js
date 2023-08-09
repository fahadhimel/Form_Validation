const profile = document.getElementById("profile");
const choosefile = document.getElementById("choosefile");

choosefile.addEventListener("change", () => {
  profile.src = URL.createObjectURL(choosefile.files[0]);
});

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const fname = document.getElementById("fname");
const mname = document.getElementById("mname");
const pphone = document.getElementById("pphone");
const department = document.getElementById("department");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const blad = document.getElementById("blad");
const country = document.getElementById("country");
const address = document.getElementById("address");
const regular = document.getElementById("regular");
const date = document.getElementById("date");
const errorp = document.getElementById("error");
const form = document.getElementById("form");

const lengthFunction = (idname, faildname) => {
    idname.style.border = "";

  if (idname.value.length < 3) {
    errorp.innerText += `${faildname} length is to low. `;
    idname.style.border = "1px solid red";
  } else if (idname.value.length > 50) {
    errorp.innerHTML += `${faildname} length is to high. `;
    idname.style.border = "1px solid red";
  }
};

const validation = () => {
  lengthFunction(firstname, firstname.name);
  lengthFunction(lastname, lastname.name);
};

const radiovalue = (value) => {
  console.log(value);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorp.innerHTML = "";

  validation();
});
