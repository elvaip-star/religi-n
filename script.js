function mostrar(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("activo"));
  document.getElementById(id).classList.add("activo");
}
