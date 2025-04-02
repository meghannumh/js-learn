# Projects related to DOM

## Project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

``` javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (
      e.target.id === 'grey' ||
      e.target.id === 'white' ||
      e.target.id === 'blue' ||
      e.target.id === 'yellow'
    ) {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

