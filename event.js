function submit() {
    let inputElement = document.getElementById("eventName");
    let rec = inputElement.value;
    let dateTimeElement = document.getElementById("dateTime");
    let dateTime = dateTimeElement.value;
    let addressElement = document.getElementById("address");
    let address = addressElement.value;
    let eventTypeElement = document.getElementById("eventType");
    let eventType = eventTypeElement.value;
    let eventDescriptionElement = document.getElementById("eventDescription");
    let eventDescription = eventDescriptionElement.value;
    let data = {
        "eventName": rec,
        "dateTime" : dateTime,
        "address" : address,
        "eventType" :eventType,
        "eventDescription" : eventDescription
    }
    let dataAsString = JSON.stringify(data);    
    alert(dataAsString);
    localStorage.setItem("data",dataAsString);
}
