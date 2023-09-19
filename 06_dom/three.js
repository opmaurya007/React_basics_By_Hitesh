const div= document.createElement('div')
 console.log(div);
 div.className="main"
 div.id=Math.round(Math.random()*10+1)
 div.setAttribute("title","generated title")
 div.style.backgroundColor="green"
 div.style.padding="12px"
 div.innerText="opmaurya"
 const addText=div.createTextNode("opmaurya97")
 div.appendChild(addText)
 document.body.appendChild(div)