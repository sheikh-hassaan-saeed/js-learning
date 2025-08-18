//Math.random to generate random numbers//
//Math.round to round the number to nearest integer//

const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);


//Math.min and Math.max to get max and min values//

const scores = [75, 88, 92, 61, 55];

console.log(Math.min(...scores));
console.log(Math.max(...scores));

///function to show random no after every 2 secnod delay//

function randomNo() {
    let randomNum = Math.floor(Math.random() * 6) + 1;

    setInterval(() => {
        console.log("Showing after every 2 second");
    }, 2000);
}
console.log(randomNo());
