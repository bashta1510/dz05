function prn(data) {
    document.write('<br>' + data);
}

const a = parseFloat(prompt('Enter a:'));
const b = parseFloat(prompt('Enter b:'));
const c = parseFloat(prompt('Enter c:'));

let x1 = 0;
let x2 = 0;



prn('a' + a);
prn('b' + b);
prn('c' + c);

prn('a * x2 + b * x + c = 0 ');

const det = (b * b) - (4 * a * c);


prn('det =' + det);

function checkDet(det){
    if (det < 0){
        return 'No result';
    } else if (det == 0){
        x1 = (- b) / (2 * a);
        return x1;
    } else  {
        x1 = ((- b) +  Math.sqrt(det)) / (2 * a);
        x2 = ((- b) -  Math.sqrt(det)) / (2 * a);
        return x1 , x2;
    }
}

prn(checkDet(x1));
prn(checkDet(x2));