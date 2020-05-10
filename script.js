const links = document.querySelectorAll(".scroll");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    
    // dapatkan nilai dari atribut href
    let atributHref = this.getAttribute("href");

    let elemenTujuan = document.querySelector(atributHref);

    window.scrollTo({
      top: elemenTujuan.offsetTop, 
      behavior: "smooth" 
    })
  })
})