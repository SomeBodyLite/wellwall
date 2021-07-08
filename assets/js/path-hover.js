
const colored = document.querySelectorAll('#colored');
const actived = document.querySelectorAll('.country_block');
console.log('actived: ', actived);

for (let i = 0; i < colored.length; i++) {
  colored[i].addEventListener('mouseover', () => {
    colored[i].classList.toggle('active')
  });
}
for (let i = 0; i < colored.length; i++) {
  colored[i].addEventListener('mouseout', () => {
    colored[i].classList.toggle('active')
  });
}

// ---TRY 2--- //

// function tuck() {
//   colored[i].addEventListener('mouseover', () => {
//     actived.classList.toggle('active')
//   });
// }