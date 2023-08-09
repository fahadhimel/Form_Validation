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

const lengthFunction = (idname) => {
  idname.style.border = "";
  const { name, value } = idname;
  if (value.length < 4) {
    errorp.innerText += `${name} length is to low. `;
    idname.style.border = "1px solid red";
  } else if (value.length > 50) {
    errorp.innerText += `${name} length is to high. `;
    idname.style.border = "1px solid red";
  }
};

const emailValidation = (email) => {
  email.style.border = "";
  lengthFunction(email);
  const { name, value } = email;
  if (value.indexOf("@") <= 0) {
    errorp.innerText += `${name} is in invalid. `;
    email.style.border = "1px solid red";
  } else if (
    value.charAt(value.length - 4) != "." &&
    value.charAt(value.length - 3) != "."
  ) {
    errorp.innerText += `${name} is invalid. `;
    email.style.border = "1px solid red";
  }
};

const phoneValidation = (phone) => {
  phone.style.border = "";
  const { name, value } = phone;
  if (value.length < 11 || value.length > 16) {
    errorp.innerText += `${name} is invalid. `;
    phone.style.border = "1px solid red";
  }
};

const deparBladFunc = (DeBl) => {
  DeBl.style.border = "";
  const { name, value } = DeBl;
  if (name === "department") {
    if (value !== "CSE" && value !== "EEE") {
      errorp.innerText += `${name} is invalid. `;
      DeBl.style.border = "1px solid red";
    }
  } else if (name === "Blad Group") {
    if (
      value !== "O+" &&
      value !== "O-" &&
      value !== "A+" &&
      value !== "A-" &&
      value !== "AB+" &&
      value !== "AB-"
    ) {
      errorp.innerText += `${name} is invalid. `;
      DeBl.style.border = "1px solid red";
    }
  }
};

const validation = () => {
  lengthFunction(firstname);
  lengthFunction(lastname);
  lengthFunction(fname);
  lengthFunction(mname);


  phoneValidation(pphone);
  phoneValidation(phone);

  emailValidation(email);
  
  deparBladFunc(department);
  deparBladFunc(blad);

  
};

const radiovalue = (value) => {
  console.log(value);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorp.innerHTML = "";

  validation();
});
