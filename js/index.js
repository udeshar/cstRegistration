var form = document.getElementById('firstform');
form.addEventListener('submit',function(event){
          const firstName = form.elements.firstName.value;
          const lastName = form.elements.lastName.value;
          const email = form.elements.email.value;
          const phone = form.elements.phone.value;
          const address = form.elements.address.value;
          const city = form.elements.city.value;
          const state = form.elements.state.value;
          const zip = form.elements.zip.value;
          const gender = form.elements.gender.value;

          console.log(gender)

          const data = {
                    firstName,
                    lastName,
                    email,
                    phone,
                    address,
                    city,
                    state,
                    zip,
                    gender
          }
          console.log(data);
          localStorage.setItem('formData', JSON.stringify(data));
})