// Condicionais 

var hora = 18;

// start condição  if and else simple
if (hora < 12){
    console.log("Bom dia!");
}else if (hora < 18){
    console.log("Boa tarde")
}else if (hora <= 23){
    console.log("Boa Noite")
}
//////////////

// start condição  if and else Logic &&
if (hora >= 12 && hora < 18){
    console.log("Boa tarde!");
}

// start condição  if and else Logic ||
if (hora == 7 || hora == 12 || hora == 18){
    console.log("Você está na hora do rush");
}