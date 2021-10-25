const row = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = 
  ` <h3> <strong> ${i} </strong></h3>
  `
  row.append(box);
  console.log(box);

  if (!(i % 3) && !(i % 5)) {
    box.classList.add('mult3-5');
    box.innerHTML = 
    ` <h3> <strong>fuzzbuzz</strong></h3>
    `
 } else if (!(i % 3)) {
    box.classList.add('mult3');
    box.innerHTML = 
    ` <h3> <strong>fuzz</strong></h3>
    `
 } else if (!(i % 5)) {
    box.classList.add('mult5');
    box.innerHTML = 
    ` <h3> <strong>buzz</strong></h3>
    `
 } 



};