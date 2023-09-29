var downloudh = document.querySelector(`.downloud`)
var bars = document.querySelector(`.bars`)
var aside = document.querySelector(`.aside`)
var belgi = document.querySelector(`.belgi`)
var download_x = document.querySelector(`.download_x`)
var overflo = document.querySelector(`.overflo`)
var claen = document.querySelector(`.claen`)

downloudh.addEventListener(`click`, () =>{
  belgi.style.display = "block";
  overflo.style.display = "block";
})
download_x.addEventListener(`click`, () =>{
  belgi.style.display = "none";
  overflo.style.display = "none";
})
overflo.addEventListener(`click`, () =>{
  belgi.style.display = "none";
  overflo.style.display = "none";
})


bars.addEventListener(`click`, () =>{
  aside.style.display = "block";
  overflo.style.display = "block";
})
claen.addEventListener(`click`, () =>{
  aside.style.display = "none";
  overflo.style.display = "none";
})
overflo.addEventListener(`click`, () =>{
  aside.style.display = "none";
  overflo.style.display = "none";
})




downloudh.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    belgi.style.display = "none";
    overflo.style.display = "none"
  }
});

bars.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    aside.style.display = "none";
    overflo.style.display = "none"
  }
});
// downloudh.addEventListener("keydown", function(event) {
//   if (event.key === "Escape") {
//     belgi.style.display = "none";
//     overflo.style.display = "none"
//     console.log(`escape`);
//   }
// });