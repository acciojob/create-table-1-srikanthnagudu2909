
function insert_Row() {
    //Write your code here
	  const table=document.getElementById("sampleTable")
      const tr=document.createElement("tr")
      const td1=document.createElement("td")
      td1.innerText="New Cell1"
      const td2=document.createElement("td")
      td2.innerText="New Cell2"
      tr.append(td1,td2)
      table.insertBefore(tr,table.firstChild)
  
  
}
