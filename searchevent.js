    /*
    1. Get the data
    2. Get the selectedOption
    3. Select table body
    4. Empty Table body
    5. filter the events based on selectedOption
    6. For each element in event generate the tr tag
    7. append the tr tag to table body
    8. use document.ready
    9. use onchange in html/js
    */

$(document).ready(filterTable);

function parseDate(dateStr) {
    const defaultDate = new Date(1972, 2, 1);
    if (!dateStr) return defaultDate;
    if (dateStr.trim() === "") return defaultDate;
    const dateParts = dateStr.split("/");
    if (dateParts.length != 3) return defaultDate;
    const inputDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    if (isNaN(inputDate.getTime())) return defaultDate;
    return inputDate;
}

function filterTable() {
    const events = JSON.parse(localStorage.getItem("events")) || [];

    let selectedOption = $('#select').val();
    console.log(selectedOption);
    let tableBody = $('#listing');

    $('#listing').empty();

        let eventsFilter = events.filter((evnt) => {
        const dateTime = parseDate(evnt['dateTime']);
        console.log(dateTime);
        const now = new Date();
        console.log(selectedOption);
        if (selectedOption === "future") {
            if (dateTime >= now) {
                return true;
            } else {
                return false;
            }
        } else {
            if (dateTime < now) {
                return true;
            } else {
                return false;
            };
        };
    });

    eventsFilter.forEach(items=> {
        
    })
} 


