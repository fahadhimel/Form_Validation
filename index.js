const profile = document.getElementById("profile");
const choosefile = document.getElementById("choosefile");

choosefile.addEventListener("change", () => {
  profile.src = URL.createObjectURL(choosefile.files[0]);
});

const firstname = document.getElementById("firstname");
const pfirst = document.getElementById("pfirst");

const lastname = document.getElementById("lastname");
const plast = document.getElementById("plast");

const fname = document.getElementById("fname");
const pfname = document.getElementById("pfname");

const mname = document.getElementById("mname");
const pmname = document.getElementById("pmname");

const pphone = document.getElementById("pphone");
const ppphone = document.getElementById("ppphone");

const department = document.getElementById("department");
const pdepartment = document.getElementById("pdepartment");

const email = document.getElementById("email");
const pemail = document.getElementById("pemail");

const phone = document.getElementById("phone");
const psphone = document.getElementById("psphone");

const blad = document.getElementById("blad");
const pblad = document.getElementById("pblad");

const country = document.getElementById("country");
const pcountry = document.getElementById("pcountry");

const address = document.getElementById("address");
const paddress = document.getElementById("paddress");

const radio = document.getElementsByClassName("radio");
const pradio = document.getElementById("pradio");

const regular = document.getElementById("regular");
const day = document.getElementById("day");
const pStudentType = document.getElementById("pregular");

const date = document.getElementById("date");
const pdate = document.getElementById("pdate");

const errorp = document.getElementById("error");
//const errorp = document.getElementById("error");

const form = document.getElementById("form");
//const form = document.getElementById("form");

const lengthFunction = (idname, ptag) => {
  ptag.innerText = "";
  idname.style.border = "";
  const { name, value } = idname;
  if (value.length < 4) {
    ptag.innerText = `${name} length is to low. `;
    idname.style.border = "1px solid red";
    return false;
  } else if (value.length > 50) {
    ptag.innerText = `${name} length is to high. `;
    idname.style.border = "1px solid red";
    return false;
  }
  return true;
};

const emailValidation = (email, ptag) => {
  ptag.innerText = "";
  email.style.border = "";
  const returnnull = lengthFunction(email, ptag);
  if (!(returnnull)) {
    return false;
  }
  const { name, value } = email;
  if (value.indexOf("@") <= 0) {
    ptag.innerText = `${name} is in invalid. `;
    email.style.border = "1px solid red";
    return false;
  } else if (
    value.charAt(value.length - 4) != "." &&
    value.charAt(value.length - 3) != "."
  ) {
    ptag.innerText = `${name} is invalid. `;
    email.style.border = "1px solid red";
    return false;
  }

  return true;
};

const handleKeyPress = (e) => {
  if (!/[0-9]/.test(e.key)) {
    e.preventDefault();
  }
};

const phoneValidation = (phone, ptag) => {
  ptag.innerText = "";
  phone.style.border = "";
  const { name, value } = phone;
  if (value.length < 11 || value.length > 16) {
    ptag.innerText = `${name} is invalid. `;
    phone.style.border = "1px solid red";
    return false;
  }
  return true;
};

const deparBladFunc = (DeBl, ptag) => {
  ptag.innerText = "";
  DeBl.style.border = "";
  const { name, value } = DeBl;
  if (name === "department") {
    if (value !== "CSE" && value !== "EEE") {
      ptag.innerText += `${name} is invalid. `;
      DeBl.style.border = "1px solid red";
      return false;
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
      ptag.innerText = `${name} is invalid. `;
      DeBl.style.border = "1px solid red";
      return false;
    }
  }
  return true;
};

const dateValidation = (date, ptag) => {
  ptag.innerText = "";
  date.style.border = "";
  const { name, value } = date;
  const year = new Date().getFullYear().toString() - 17;

  if (Number(value.slice(0, 4)) == 0) {
    ptag.innerText = `${name} is Empty. `;
    date.style.border = "1px solid red";
    return false;
  } else if (Number(value.slice(0, 4)) >= Number(year)) {
    ptag.innerText = `${name} is invalid.minimum value 2005 `;
    date.style.border = "1px solid red";
    return false;
  }
  return true;
};
const radioValidation = (radio, ptag) => {
  ptag.innerText = "";
  document.getElementById("radioall").style.border = "";

  if (radio[0].checked || radio[1].checked || radio[2].checked) {
    return true;
  } else {
    ptag.innerText = "Gender not Checked. ";
    document.getElementById("radioall").style.border = "1px solid red";
    return false;
  }
};

const studentTypeFunction = (regular, day, pStudentType) => {

  pStudentType.innerText = "";
  document.getElementById("gendate").style.border = "";
  if (!(regular.checked)) {
    pStudentType.innerText = `Student Type ${regular.name} not Checked`;
    document.getElementById("gendate").style.border = "1px solid red";
    return false;
  } else if (!(day.checked)) {
    pStudentType.innerText = `Student Type ${day.name} not Checked`;
    document.getElementById("gendate").style.border = "1px solid red";
    return false;
  }
  return true;
};

const validation = () => {
  const c1 = lengthFunction(firstname, pfirst);
  const c2 = lengthFunction(lastname, plast);
  const c3 = lengthFunction(fname, pfname);
  const c4 = lengthFunction(mname, pmname);
  const c5 = phoneValidation(pphone, ppphone);
  const c6 = phoneValidation(phone, psphone);
  const c7 = emailValidation(email, pemail);
  const c8 = deparBladFunc(department, pdepartment);
  const c9 = deparBladFunc(blad, pblad);
  const c10 = lengthFunction(country, pcountry);
  const c11 = lengthFunction(address, paddress);
  const c12 = dateValidation(date, pdate);
  const c13 = radioValidation(radio, pradio);
  const c14 = studentTypeFunction(regular, day, pStudentType);

  console.log(Boolean(c10) )

  if (
    c1 &&
    c2 &&
    c3 &&
    c4 &&
    c5 &&
    c6 &&
    c7 &&
    c8 &&
    c9 &&
    c10 &&
    c11 &&
    c12 &&
    c13 &&
    c14

  ) {
    return true;
  }else{
    return false;
  }

  
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorp.innerHTML = "";

  const submit = validation();
  console.log(submit);

  if (submit) {
    alert("Form Submited Successfully");
    console.log("click");
  }
});
