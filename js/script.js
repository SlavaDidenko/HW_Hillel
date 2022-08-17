const request = 'https://jsonplaceholder.typicode.com/todos';

async function todoReqest(request) {
  const response = await fetch(request);
  const getTodos = await response.json();
  return getTodos;
} 

async function getTodos() {
  try {
    const resultReq = await todoReqest(request);
    resultReq.forEach((element , index) => {
          document.querySelector('ul').appendChild(createLi(element , index));
      });
  } catch (error) {
    console.log(error)
  }
}

function createLi(obj , index) {
  let element = document.createElement('li');
  element.dataset.sort = index + 1
  element.innerHTML = `
  <div class="wrapper-title">
  <input id="checkbox${index + 1}" onclick="checkCheckbox(${index + 1})" class="checkbox" ${obj['completed'] == true ? 'checked' : ''} type="checkbox">
  <p class="title ${obj['completed'] == true ? 'title-complated' : ''}">${obj['title']}</p>
  </div>
  <div class="wrapper-btns">
    <button onclick="changeTodo(${index + 1})" id="redact${index + 1}" type="button" class="redact"></button>
    <button id="deleteTask${index + 1}" onclick="deleteTask(${index + 1})" type="button" class="delete"></button>
  </div>
  `
  return element;
}

getTodos();

//11111111111111111111111111111111111111111111111111111///////////////////////////////////////////////////////////////////////////////////

document.getElementsByTagName('form')[0].addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputForTaskCreation = document.querySelector('#title');
  if (inputForTaskCreation.value.replace(/\s/g, "") == "") {
    return;
  }
  let formData = {
  };
  
  formData['title'] = inputForTaskCreation.value; // передаємо value з інпута
  formData['id'] = document.querySelectorAll('li').length + 1 ; // беремо всі задачі, для того щоб дати id
  
  formData['completed'] = false; // по дефолту не виконане
  document.forms.form.reset();

  try {
    await createTodo(formData);
    document.querySelector('ul').append(createLi(formData , formData['id'] - 1));
  } catch (error) {
    console.log(error)
  }
})

 async function createTodo(formData) {
    await fetch(request, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
}
 
//2222222222222222222222222222222222222222222222222222222//////////////////////////////////////////////////////////////////////////////////

async function deleteTask(index) {
  try {
    await fetch(request + `/${index}`, {
    method: 'DELETE',
    });
    document.getElementById(`deleteTask${index}`).parentElement.parentElement.remove()
  } catch (error) {
    console.log(error)
  }
}

//333333333333333333333333333333333333333333333333333333333///////////////////////////////////////////////////////////////////////////////////

function changeTodo(index) {
  const redact = document.getElementById(`redact${index}`);
  const taskTitle = redact.closest('li').querySelector('.title');
  let oldTitle = taskTitle.textContent == '' ? taskTitle.firstChild.value : taskTitle.textContent;

  if (redact.classList.contains('redact-active')) { // якщо тикнули на 'редагувати', але передумали редагувати
    redact.closest('li').querySelector('.save-btn').remove();
    taskTitle.innerHTML = oldTitle;
    redact.classList.remove('redact-active');
    taskTitle.previousElementSibling.disabled = false;
    return;
  }

  redact.classList.add('redact-active');
  taskTitle.previousElementSibling.disabled = true;

//створюємо кнопку
  const saveBtn = document.createElement('button');
  saveBtn.textContent = `Зберегти`;
  saveBtn.classList.add('save-btn');
  saveBtn.disabled = true;
  redact.parentElement.appendChild(saveBtn);
//змінюємо на інпут
  taskTitle.innerHTML = `<input id="input-title${index}" class="${ (taskTitle.classList.contains('title-complated')) ? 'title-complated' : ''}" input-title" type="test" value="${oldTitle}">`;//передаємо в нього наш тайтл

  const inputTitle = document.querySelector(`#input-title${index}`);
  inputTitle.focus();
  inputTitle.selectionStart = inputTitle.value.length;// переносимо курсор в кінець тексту

  inputTitle.addEventListener('input', function () {
    if (this.value == oldTitle) { // якщо наше value = oldTitle , то робимо кнопку disabled
      this.closest('li').querySelector('.save-btn').disabled = true;
    } else {
      this.closest('li').querySelector('.save-btn').disabled = false;
    }
  });

  saveBtn.addEventListener('click', async function (e) {
    e.preventDefault();

    let redactTittle = {
      id : index,
      title : inputTitle.value,
      completed : (taskTitle.classList.contains('title-complated')) ? true : false,
    }

    try {
      if (redactTittle.title.replace(/\s/g, "") == "") { // в інпут ввів пусту строку - видаляємо
        deleteTask(index);
        return;
      }
      await redactTask(index, redactTittle)
      this.closest('li').querySelector('.checkbox').checked = redactTittle.completed
      taskTitle.innerHTML = redactTittle.title;
      redact.classList.remove('redact-active');
      taskTitle.previousElementSibling.disabled = false;
      this.remove();
    } catch (error) {
      console.log(error)
    }
  })
}

async function redactTask(idOfChange, redactTittle) {
    await fetch(request + `/${idOfChange}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(redactTittle),
    });
}

async function checkCheckbox(index) {
  const title = document.getElementById(`checkbox${index}`).closest('.wrapper-title').querySelector('.title')
  let redactCheckbox = {
    id : index,
    title: title.textContent, 
    completed : (title.classList.contains('title-complated')) ? false : true,
  }

  try {
    await redactTask(index, redactCheckbox);
    title.classList.toggle('title-complated')
  } catch (error) {
    console.log(error)
  }
}

//4444444444444444444444444444444444444444444444444444444444///////////////////////////////////////////////////////////////////////////////////

document.getElementsByName('filter')[0].addEventListener('input', function () {
  let allTitles = document.querySelectorAll('.title')

  checkAddresses(allTitles, this.value);
});

function checkAddresses(allTitles , inputAddress) { 
  allTitles.forEach(title => {
    if (!title.textContent.toLowerCase().includes(inputAddress.toLowerCase())) {
      title.parentElement.parentElement.classList.add('none')
    } else {
      title.parentElement.parentElement.classList.remove('none');
    }
  })
}

//555555555555555555555555555555555555555555555555555555555///////////////////////////////////////////////////////////////////////////////////
const sortSelect = document.getElementById('sortSelect');

sortSelect.addEventListener('change', function () {
  
  switch (sortSelect.value) { // тут звісно краще було б працювати вже з готовим об'єктом та дивитись на completed: t/f,
    // а не гратись з селекторами(( 
    
    case 'Спочатку виконані':
      document.querySelectorAll('.checkbox').forEach(element => {
        if (!element.checked) {
          document.querySelector('ul').appendChild(element.parentElement.parentElement)
        }
      })
      break;
    
    case 'Спочатку активні':
      document.querySelectorAll('.checkbox').forEach(element => {
        if (element.checked) {
          document.querySelector('ul').appendChild(element.parentElement.parentElement)
        }
      })
      break;
    
    default:
      const arrDefault = [...document.querySelectorAll('li')].sort((a, b) => a.dataset.sort - b.dataset.sort);
      document.querySelector('ul').innerHTML = '';
      arrDefault.forEach(el => {
        document.querySelector('ul').append(el)
      })
      break;
  }
})
//666666666666666666666666666666666666666666666666666666666666///////////////////////////////////////////////////////////////////////////////////