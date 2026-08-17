function validateForm() {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;


  if (name.length < 5 || name.length > 18) {
    alert("Name must be 5–18 characters");
    return false;
  }

  for (let i = 0; i < name.length; i++) {
    let ch = name[i];
    if (!(ch >= 'A' && ch <= 'Z') && !(ch >= 'a' && ch <= 'z')) {
      alert("Name must contain only letters");
      return false;
    }
  }

  if (!email.includes("@") || !email.endsWith(".com")) {
    alert("Invalid email");
    return false;
  }

  if (phone.length !== 10) {
    alert("Phone must be 10 digits");
    return false;
  }

  if (phone[0] < '6' || phone[0] > '9') {
    alert("Phone must start with 6–9");
    return false;
  }

  for (let i = 0; i < phone.length; i++) {
    if (phone[i] < '0' || phone[i] > '9') {
      alert("Phone must contain only digits");
      return false;
    }
  }

  if (pass.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  let hasUpper = false;
  let hasNumber = false;

  for (let i = 0; i < pass.length; i++) {
    let ch = pass[i];
    if (ch >= 'A' && ch <= 'Z') hasUpper = true;
    if (ch >= '0' && ch <= '9') hasNumber = true;
  }

  if (!hasUpper || !hasNumber) {
    alert("Password must contain 1 uppercase and 1 number");
    return false;
  }

  if (pass !== cpass) {
    alert("Passwords do not match");
    return false;
  }

  let gender = document.getElementsByName("gender");
  let selected = false;

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) selected = true;
  }

  if (!selected) {
    alert("Select gender");
    return false;
  }

  let skills = document.getElementsByName("skill");
  let count = 0;

  for (let i = 0; i < skills.length; i++) {
    if (skills[i].checked) count++;
  }

  if (count < 1 || count > 2) {
    alert("Select 1 to 2 skills");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}