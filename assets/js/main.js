var saluto = prompt ("come ti chiami?");
document.getElementById("saluto").innerHTML = "Ciao " + saluto;

var cognome = prompt ("Qual è il tuo cognome?");
document.getElementById("cognome").innerHTML = cognome;

var colorePreferito = prompt ("Qual è il tuo colore preferito?");
document.getElementById("colorePreferito").innerHTML = colorePreferito;

var password ;
document.getElementById("password").innerHTML = saluto + cognome + colorePreferito + "19";