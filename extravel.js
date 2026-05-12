const tabBtns = document.querySelectorAll(".tab-btn");
tabBtns.forEach( (btn) => {
  btn.addEventListener("click" , () => {
    const group = btn.dataset.group;

    document
      .querySelectorAll(`[data-group = "${group}"]`)
      .forEach( (b) => {
        b.classList.remove("active")
      })

    btn.classList.add("active")
  } )
})



 

