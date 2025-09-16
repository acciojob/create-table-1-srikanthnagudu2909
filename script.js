let count=1
function insert_Row() {
    //Write your code here
	  const table=document.getElementById("sampleTable")
      const tr=document.createElement("tr")
      const td1=document.createElement("td")
      td1.innerText=`NewCell${count++}`
      const td2=document.createElement("td")
      td2.innerText=`NewCell${count}`
      tr.append(td1,td2)
      table.insertBefore(tr,table.firstChild)
  
  
}
