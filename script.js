/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

    let manualUrls = [
        "https://cdn.glitch.com/d5519467-7038-4e98-b121-23b4a71b6918%2Fclear.png?v=1605736052863",
        "https://cdn.glitch.com/d5519467-7038-4e98-b121-23b4a71b6918%2Fmanual-10cm.png?v=1605735058026",
        "https://cdn.glitch.com/d5519467-7038-4e98-b121-23b4a71b6918%2Fmanual-10cm2.png?v=1605735055283",
        "https://cdn.glitch.com/d5519467-7038-4e98-b121-23b4a71b6918%2Fmanual-10cm3.png?v=1605735059049",
        "https://cdn.glitch.com/d5519467-7038-4e98-b121-23b4a71b6918%2Fmanual-10cm4.png?v=1605735057316",
        "https://cdn.glitch.com/d5519467-7038-4e98-b121-23b4a71b6918%2Fmanual-10cm5.png?v=1605735058529",
        "https://cdn.glitch.com/d5519467-7038-4e98-b121-23b4a71b6918%2Fmanual-10cm6.png?v=1605735057110",
        "https://cdn.glitch.com/d5519467-7038-4e98-b121-23b4a71b6918%2Fmanual-10cm7.png?v=1605735056731",
        "https://cdn.glitch.com/d5519467-7038-4e98-b121-23b4a71b6918%2Fmanual-10cm8.png?v=1605735059480",
        "https://cdn.glitch.com/d5519467-7038-4e98-b121-23b4a71b6918%2Fclear.png?v=1605736052863"
      ];
      let manual = document.getElementById("manual");
      
      let index = 0;
      
      let divLeft = document.createElement("div");
      let divRight = document.createElement("div");
      divLeft.innerHTML = `<img src="${manualUrls[index]} alt=""/>`;
      divRight.innerHTML = `<img src="${manualUrls[index + 1]}" alt=""/>`;
      
      divRight.addEventListener("click", () => {
        index+=2;
        if (index >= manualUrls.length){
          index = 0;
        }
        divLeft.innerHTML = `<img src="${manualUrls[index]} alt=""/>`;
        divRight.innerHTML = `<img src="${manualUrls[index + 1]}" alt=""/>`;
      });
      divLeft.addEventListener("click", () => {
        index-=2;
        if (index == -2){
          index = 8;
        }
        divLeft.innerHTML = `<img src="${manualUrls[index]} alt=""/>`;
        divRight.innerHTML = `<img src="${manualUrls[index + 1]}" alt=""/>`;
      });
      
      manual.appendChild(divLeft);
      manual.appendChild(divRight);
      

      