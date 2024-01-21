let id = setInterval(getclock, 1000);
const sec = document.getElementById("second");
const min = document.getElementById("min");
const hour = document.getElementById("hour");
function getclock(){
  let d = new Date();
  sec.style.transform = `rotate(${6*d.getSeconds()}deg)`
  min.style.transform = `rotate(${6*d.getMinutes()}deg)`
  hour.style.transform = `rotate(${30*d.getHours() +  (d.getMinutes())/2}deg)`
  console.log(d.getSeconds())
}