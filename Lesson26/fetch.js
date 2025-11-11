const url = 'https://jsonplaceholder.typicode.com/posts';

document.getElementById('getPostButton').addEventListener('click', () => {
  fetch(url)
    .then((response) => {
      console.log(response);
      if (!response.ok)
        throw Error(
          `Failed fetching data. Response code is ${response.status}`,
        );

      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log('An error occured', error));
});

// Send post request to create a new post

const newPost = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

const updatedPost = {
  id: 1,
  title: 'soo',
  body: 'car',
  userId: 2,
}

document.getElementById('createPostButton').addEventListener('click', () => {
  fetch(url, {
    method: 'post',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw Error(`Failed request, status ${response.status}`);
      }

      return response.json();
    })
    
    
});

document.getElementById('updatePostButton').addEventListener('click',() => {
  //https://jsonplaceholder.typicode.com/posts/1
  //https://jsonplaceholder.typicode.com/posts/:id/comments/:id

  
  fetch(url + "/1", {
    method: 'put',
    body: JSON.stringify(updatedPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw Error(`Failed request, status ${response.status}`);
      }

      return response.json();
    }) 
    .then((data) => console.log('Printing data', data))
    .catch((error) => console.error('An error occured', error));
})



function getData () {
  let expectedData;

  const result = fetch(url);
  console.log('Result', result);


  const result2 = fetch(url)
    .then((response) => {
      console.log('Inside result2 request. Printing response...', response);
      if (!response.ok)
        throw Error(
          `Failed fetching data. Response code is ${response.status}`,
        );

      return response.json();
    })
    .then((data) => {
      console.log(data);
      expectedData = data;
      console.log('Expected data inside fetch then case', expectedData);
    })
    .catch((error) => console.log('An error occured', error));

  console.log('Result 2', result2);
  console.log('Expected data', expectedData);
}


document.getElementById('tiggerExampleButton').addEventListener('click', getData);



// function greet (name) {
//   console.log('Hi', name);
// }

// function sayHello(name) {
//   return 'Hello ' + name;
// }

// console.log('Printing result of the greet function: ', greet('Jane'));
// console.log('Printing result of the sayHello function: ', sayHello('Jane'));
