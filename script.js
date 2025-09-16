function insert_Row() {
  const table = document.getElementById("sampleTable");
  const newRow = table.insertRow(0); // always insert at top (inside tbody)
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerText = "New Cell1";
  cell2.innerText = "New Cell2";
}
