const getData = async (url) => {
  let response = await fetch(url);
  let result = await response.json();
  return result;
}

const showData = async () => {
   try {
     const data = await getData('http://localhost:4000/home');
     data.forEach(element => {
       newUser(element);
     });
   } catch (error) {
    console.log(error)
   }
}
 
const newUser = (info) => {
  const {_id:id, age ,name, surname } = info;
  const li = document.createElement('li');
  const src = `http://localhost:4000/user.html?id=${id}`
  li.innerHTML = `
    <a href=${src}>Name: ${name}</a>
    <p>Surame: ${surname}</p>
    <p>Age: ${age}</p>
    <p>Id: ${id} </p>
    <button onclick="deleteUser(this)" id=${id}>Delete</button>
  `
  document.querySelector('ul').append(li);
}

async function deleteUser (button) {
  try {
    await fetch(`http://localhost:4000/home/user/${button.id}`, {
    method: 'DELETE',
    });
    await button.parentElement.remove()
  } catch (error) {
    console.log(error)
  }
}
showData();


document.forms.newUser.addEventListener('submit', async (e) => {

  const inputName = document.getElementById('name');
  const inputSurname = document.getElementById('surname');
  const inputAge = document.getElementById('age');

  const userData = {
    "name": inputName.value,
    "surname": inputSurname.value,
    "age": inputAge.value,
  }
  
  await fetch(`http://localhost:4000/home`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData),
  });

  inputName.value = '';
  inputSurname.value = '';
  inputAge.value = '';
})