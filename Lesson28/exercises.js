// 1. Convert the function below into asyncrounous function using async/await and try/catch syntax.
// function fetchPosts () {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((posts) => console.log(posts))
//     .catch((error) => console.error(error));
// };

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(await response.json());
  } catch (error) {
    console.log('Failed', error);
  }
}

// 2. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully!');
    }, 2000);
  });
};
/*
fetchData()
	.then((result) => console.log(result))
	.catch((error) => console.error(error));
*/
const getData = async () => {
  try {
    console.log(await fetchData());
  } catch (error) {
    console.log(error);
  }
};

// 3. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);
  return users;
};

async function countUsers() {
  try {
    console.log('Total users:', (await fetchUsers()).length);
  } catch (error) {
    console.log(error);
  }
}
countUsers();

// 4. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchUserData = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

async function logUserOrError() {
  try {
    console.log('User data:', await fetchUserData());
  } catch (error) {
    console.log(error);
  }
}
logUserOrError();

// 5. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const getPostsAndComments = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    const post = await response.json();
    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`,
    );
    console.log(await commentsResponse.json());
  } catch (error) {
    console.log(error);
  }
};

getPostsAndComments();
// 6.Convert the function below into asyncrounous function using async/await and try/catch syntax.

const fetchWithTimeout = (url, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(url);
        resolve(response.json());
      } catch (error) {
        reject(error);
      }
    }, timeout);
  });
};
const getPostsWithTimeout = async () => {
  try {
    const posts = await fetchWithTimeout(
      'https://jsonplaceholder.typicode.com/posts',
      2000,
    );
    console.log('Posts:', posts);
  } catch (error) {
    console.log(error);
  }
};
getPostsWithTimeout();



