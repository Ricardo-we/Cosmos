let nomA = document.getElementById("nombreAlumno");

nomA.innerHTML = prompt("Escribe tu nombre")
if(nomA == " " || ""){
    nomA.innerHTML = "Ricardo Morales"
}