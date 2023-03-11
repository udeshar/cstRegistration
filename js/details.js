var data = localStorage.getItem('formData');
const formData = JSON.parse(data);

console.log(formData)

document.getElementById("firstName").innerText=formData.firstName;
document.getElementById("lastName").innerText=formData.lastName;
document.getElementById("email").innerText=formData.email;
document.getElementById("phone").innerText=formData.phone;
document.getElementById("address").innerText=formData.address;
document.getElementById("city").innerText=formData.city;
document.getElementById("state").innerText=formData.state;
document.getElementById("zipcode").innerText=formData.zip;
document.getElementById("gender").innerText=formData.gender;