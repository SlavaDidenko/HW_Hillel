const userId = document.location.href.split('=')[1];

const getData = async () => {
  let response = await fetch(`http://localhost:4000/home/user/${userId}`);
  let result = await response.json();
  return result;
}


const updateData = async (userData) => {
  await fetch(`http://localhost:4000/home/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData),
  });
}


const createUser = (info) => {
  const {_id:id, age ,name, surname } = info;
  document.forms.userForm.innerHTML = `
    <p>Id: ${id}</p>
    <label for="name">Name</label>
    <input id="name" value="${name}" type="text">
    <label for="surname">Surname</label>
    <input id="surname" value="${surname}" type="text">
    <label for="age">Age</label>
    <input id="age" value="${age}" type="number">
    <button disabled type="submit">Save changes</button>
  `
}

const showData = async () => {
   try {
     const data = await getData();
     createUser(data);

     const inputName = document.getElementById('name');
     const inputSurname = document.getElementById('surname');
     const inputAge = document.getElementById('age');

     let inputNameValue = inputName.value;
     let inputSurnameValue = inputSurname.value;
     let inputAgeValue = inputAge.value;
     
     document.querySelectorAll('input').forEach(el => {
       el.addEventListener('input', () => {
         if ((inputName.value !== inputNameValue || inputSurname.value !== inputSurnameValue || inputAge.value !== inputAgeValue)
           && inputName.value !== "" && inputSurname.value !== "" && inputAge.value !== "") {
           document.querySelector('button').disabled = false;
         } else document.querySelector('button').disabled = true;
       })
     })

     document.forms.userForm.addEventListener('submit', (e) => {
       e.preventDefault();
      const userData = {
        "_id": userId,
        "name": inputName.value,
        "surname": inputSurname.value,
        "age": inputAge.value,
        "__v": 0,
       }
       updateData(userData);

       inputNameValue = inputName.value;
       inputSurnameValue = inputSurname.value;
       inputAgeValue = inputAge.value;
       document.querySelector('button').disabled = true;
    })
   } catch (error) {
    console.log(error)
   }
}

showData();
