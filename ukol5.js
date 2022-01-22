function sectiDveCisla(a,b){
  return a+b;
}

let vysledek = sectiDveCisla(20,555);

function nejvetsiZeTrechCisel(x,y,z){
  if (x>y){
    if (x>z){
      console.log ("Nejvetsi je "+x)
    }
    else{
      console.log ("Nejvetsi je "+z)
    }}
    else {
      console.log("Nejvetsi je "+y)
    }
  }

nejvetsiZeTrechCisel(1,2,3);

function velkaFunkce(m,n){
  let soucet = (m+n);
  let rozdil = Math.abs(m-n);
  let nasobek = (m*n);
  let podil = (m/n);
  console.log("Součet je "+soucet+", Rozdíl je "+rozdil+", Násobek je "+nasobek+", Podíl je "+podil);
};
velkaFunkce(3,4);
velkaFunkce(10,10);
velkaFunkce(1000,1);

