function filterTable(){
    /*
    1. Get the data
    2. Get the selectedOption
    3. Select table body
    4. Empty Table body
    5. filter the events based on selectedOption
    6. For each element in event genrate the tr tag
    7. append the tr tag to table body
    8. use document.ready
    9. use onchange in html/js
    */

    var selectedOption = document.getElementById("select").value;
    var tableRows = document.getElementById("table").getElementsByTagName("tr");

    for (var i = 1; i<tableRows.length; i++){
        var tableData = tableRows[i].getElementsByTagName("td");
        var hideRow = true;

        if (selectedOption === "all"){
            hideRow = false;
        }else if (tableData[1].innerHTML === selectedOption){
            hideRow = false
        }
        if (hideRow){
            tableRows[i].style.display = "none";
        }else{
            tableRows[i].style.display = "";
        }
    }
}

document.getElementById("select").addEventListener("change" , filterTable);