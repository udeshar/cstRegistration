var data = localStorage.getItem('formData');
const formData = JSON.parse(data);

console.log(formData)

document.getElementById("firstName").innerText=formData.firstName;