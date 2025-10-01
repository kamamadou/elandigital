/*alert("le codage n'est pas encore prêt!");
var val="7";
console_log(val);
*/
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link = {
      link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active")); // retire l'effet des autres
        this.classList.add("active"); // ajoute l'effet au lien cliqué
})
});
});
</script>




function showContent(id) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => section.style.display = 'none');

  const activeSection = document.getElementById(id);
  if (activeSection) {
    activeSection.style.display = 'block';
}
}
