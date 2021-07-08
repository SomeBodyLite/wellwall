
const colored = document.querySelectorAll('#colored');
const actived = document.querySelectorAll('.country_block');

for (let i = 0; i < colored.length; i++) {
  colored[i].addEventListener('mouseover', () => {
    for (let i = 0; i < actived.length; i++) {
      actived[i].classList.toggle('active')
    }
  });
}
for (let i = 0; i < colored.length; i++) {
  colored[i].addEventListener('mouseout', () => {
    for (let i = 0; i < actived.length; i++) {
      actived[i].classList.toggle('active')
    }
  });
}
// ---TRY 2--- //

// function tuck() {
//   colored[i].addEventListener('mouseover', () => {
//     actived.classList.toggle('active')
//   });
// }