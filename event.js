
function submit() {
    let eventName = $('#eventName').val();
    let dateTime = $('#dateTime').val();
    let address = $('#address').val();
    let eventType = $('#eventType').val();
    let eventDescription = $('#eventDescription').val();
    let data = {
        "eventName": eventName,
        "dateTime" : dateTime,
        "address" : address,
        "eventType" :eventType,
        "eventDescription" : eventDescription
    }
    let events = JSON.parse(localStorage.getItem("events")) || [];
    console.log(event);
    events.push(data);
    localStorage.setItem("events",JSON.stringify(events));
}
