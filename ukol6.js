let cisla = [564, 4566, 2345, 999, 80];
let soucet=0;

function vratSoucetPrvkuVPoli(pole) {
  let soucet=0;
  for (let i=0; i< cisla.length; i++){
    soucet=soucet+pole[i];
  }
  return soucet;
};

vratSoucetPrvkuVPoli(cisla);
console.log(soucet);