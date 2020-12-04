/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let manualUrls = [
  "manual/1.png",
  "manual/2.png",
  "manual/3.png",
  "manual/4.png",
  "manual/5.png",
  "manual/6.png",
  "manual/7.png",
  "manual/8.png",
  "manual/9.png",
  "manual/10.png",
  "manual/11.png",
  "manual/12.png"
];
let manual = document.getElementById("manual");

let index = 0;
    
let divLeft = document.createElement("div");
let divRight = document.createElement("div");
divLeft.innerHTML = `<img src="${manualUrls[index]}" alt=""/>`;
divRight.innerHTML = `<img src="${manualUrls[index + 1]}" alt=""/>`;
    
divRight.addEventListener("click", () => {
  index+=2;
  if (index >= manualUrls.length){
    index = 0;
  }
  divLeft.innerHTML = `<img src="${manualUrls[index]}" alt=""/>`;
  divRight.innerHTML = `<img src="${manualUrls[index + 1]}" alt=""/>`;
});
divLeft.addEventListener("click", () => {
  index-=2;
  if (index == -2){
    index = 8;
  }
  divLeft.innerHTML = `<img src="${manualUrls[index]}" alt=""/>`;
  divRight.innerHTML = `<img src="${manualUrls[index + 1]}" alt=""/>`;
});
    
manual.appendChild(divLeft);
manual.appendChild(divRight);
    
    