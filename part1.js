var count =3;
var countElement = document.querySelector("#count")

console.log(countElement);

function likeCount() {
  count ++;
  countElement.innerText = count;
  console.log(count);
}