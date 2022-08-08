const request = 'https://jsonplaceholder.typicode.com/posts';

const xhr = new XMLHttpRequest();
let result = null;

xhr.open('GET', request)

xhr.onload = () => {
  if (xhr.status == 404) {
    console.error('eror')
  }
  if (xhr.status == 200) {
    result = JSON.parse(xhr.response)
    result.forEach(element => {
    document.querySelector('ul').appendChild(createLi(element));
    });
  }
}
xhr.send();


document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = {
  };

  document.querySelectorAll('input').forEach(element => {
    formData[element.name] = element.value;
  });
  
  xhr.open("POST", request)
  
  xhr.onload = () => {
    if (xhr.status == 404) {
      console.error('eror')
    }

    if (xhr.status == 201) {
      document.querySelector('ul').appendChild(createLi((formData)));
      document.forms.form.reset();
    }
  }

  xhr.send(JSON.stringify(formData));

})

function createLi(obj) {
  let element = document.createElement('li');
  element.innerHTML = `<p> title: ${obj['title']}</p>
  <p>body: ${obj['body']}</p>
  <p> userId: ${obj['userId']}</p>`
  return element;
}
