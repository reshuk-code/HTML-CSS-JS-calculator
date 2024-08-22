// function calculate(){
//     let p = document.getElementById('p').value;
//     let t = document.getElementById('t').value;
//     let r = document.getElementById('r').value;

//     let sum = p*t*r / 100;


//     document.getElementById('ShowValue').innerHTML= sum;
// }   















function calculate(){
 
    let p = document.getElementById('p').value;
    let t = document.getElementById('t').value;
    let r = document.getElementById('r').value;

    let sum = (p*t*r)/100;
    document.getElementById('ShowValue').innerHTML = "simple intrest=" + sum ;
    console.log(document.getElementById('ShowValue'))

}




























