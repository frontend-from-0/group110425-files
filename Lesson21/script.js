console.log('Document', document);
console.log();

console.log('Window');
console.log(window);

const image = document.getElementById('firstImg');
const previousSibling = image.previousElementSibling;
console.log(image, previousSibling);

const link = document.getElementById('clickMeLink');
link.href = 'https://google.com';
link.target = '_blank';

const pElements = document.getElementsByClassName('text');
console.log(pElements);

pElements[0].innerText = 'Hello world';

const themeSwitch = document.getElementById('themeSwitch');

// Array function inside addEventListener (second param) is called a callback function
themeSwitch.addEventListener('click', () => {
  const bodyElement = document.getElementsByTagName('body')[0];

  // if (themeSwitch.innerText === 'Light Mode') {
  //   themeSwitch.innerText = 'Dark Mode';
  // } else {
  //   themeSwitch.innerText = 'Light Mode';
  // }

  if ([...bodyElement.classList.values()].includes('dark')) {
    themeSwitch.innerText = 'Light Mode';
  } else {
    themeSwitch.innerText = 'Dark Mode';
  }

  bodyElement.classList.toggle('dark');
});

const resizeMinusButton = document.getElementById('resizeMinus');
const resizePlusButton = document.getElementById('resizePlus');

resizeMinusButton.addEventListener('click', () => {
  const imageClasses = image.classList.values().toArray();

  if (imageClasses.includes('image-xs')) {
    document.getElementById('imageResizeMessage').innerText =
      'Cannot resize the image, smalles size is selected.';
  } else if (imageClasses.includes('image-sm')) {
    image.classList.replace('image-sm', 'image-xs');
  } else if (imageClasses.includes('image-md')) {
    image.classList.replace('image-md', 'image-sm');
  } else if (imageClasses.includes('image-lg')) {
    image.classList.replace('image-lg', 'image-md');
  } else {
    image.classList.add('image-lg');
  }
});
