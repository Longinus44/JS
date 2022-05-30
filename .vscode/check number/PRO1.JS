let num = 39;

for (let i = 1; i <= num; i++)
    if (num % 2 == 0) {
        console.log(`${num} is not a prime number`);
    } else {
        console.log(`${num} is a prime number`);
    }

function check() {
    let doc = document.getElementById('input').value;
    for (let i = 1; i <= doc; i++);
    if (doc % 2 !== 0 & doc % doc == 1) {
        
      document.querySelector('.div').innerHTML.value = document.write(`<h1 class="div">${doc} is  a prime number</h1>`)
    } else {
        document.write(`${doc} is not prime number`)
    }
    
}
