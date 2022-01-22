function sectiDveCisla(a,b){
  return a+b;
}

let vysledek = sectiDveCisla(20,555);
console.log(vysledek);

function nejvetsiZeTrechCisel(x,y,z){
  if (x>y){
    if (x>z){
      console.log ("Nejvetsi je "+x)
    }
    else{
      console.log ("Nejvetsi je "+z)
    }
    else{
      console.log("Nejvetsi je "+y)
    }
  }
}

nejvetsiZeTrechCisel(1,2,3);
