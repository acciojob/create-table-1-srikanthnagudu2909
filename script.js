let count = 1;

function insert_Row() {
    const table = document.getElementById("sampleTable");
    const tr = document.createElement("tr");
    
    const td1 = document.createElement("td");
    td1.innerText = `New Cell${count}`; // Use count directly
    
    const td2 = document.createElement("td");
    td2.innerText = `New Cell${count + 1}`; // Use count + 1 for the next cell
    
    tr.append(td1, td2);
    table.insertBefore(tr, table.firstChild);
    count += 2; // Increment count by 2 after inserting the row
}