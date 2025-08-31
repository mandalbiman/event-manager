$(document).ready(docReady);

function docReady() {
    $(".error-msg").hide();
}

function onChangeEventName() {
    let eventName = $('#eventName').val();
    if (!validEventName(eventName)) {
        console.log(validEventName(eventName));
        console.log(eventName);
        $('#eventNameErr').show();
        $('#eventNameErr').text('Invalid Event Name. Event Name should be alphanumeric and length should be greater than 3');
        return;
    } else {
        $('#eventNameErr').hide();
    }
}

function dateTimeChange() {
    let dateTime = $('#dateTime').val();
    if (!validDateTime(dateTime)) {
        console.log(validDateTime(dateTime));
        console.log(dateTime);
        $('#dateTimeErr').show();
        $('#dateTimeErr').text('Invalid Date Time. Date Time should be dd/mm/yyyy format');
        return;
    } else {
        $('#dateTimeErr').hide();
    }
}
function addressChange() {
    let address = $('#address').val();
    if (!validAddress(address)) {
        console.log(validAddress(address));
        console.log(address);
        $('#addressErr').show();
        $('#addressErr').text('Invalid Address. Address should be Alphabetical and length should be greater than 10');
        return;
    }
    else {
        $('#addressErr').hide();
    }
}
function eventtypeChange() {

    let eventType = $('#eventType').val();
    if (!validEventType(eventType)) {
        console.log(validEventType(eventType));
        $('#eventTypeErr').show();
        $('#eventTypeErr').text('Invalid EventType. EventType should be Alphabetical amd length should be greater than 4');
        return;
    }
    else {
        $('#eventTypeErr').hide();
    }
}
function eventdescriptionChange() {
    let eventDescription = $('#eventDescription').val();
    if (!validEventDescription(eventDescription)) {
        console.log(validEventDescription(eventDescription));
        $('#event_descriptionErr').show();
        $('#event_descriptionErr').text('Invalid EventDescription . EventDescription should be Alphabetical and length should be greater than 15');
        return;
    }
    else {
        $('#eventDescription').hide();
    }
}


function submit() {

    onChangeEventName();
    dateTimeChange();
    addressChange();
    eventtypeChange();
    eventdescriptionChange();

    if ($(".error-msg").filter(":visible").length > 0) {
        return;
    }

    let data = {
        "eventName": eventName,
        "dateTime": dateTime,
        "address": address,
        "eventType": eventType,
        "eventDescription": eventDescription
    }
    let events = JSON.parse(localStorage.getItem("events")) || [];
    console.log(events);
    events.push(data);
    localStorage.setItem("events", JSON.stringify(events));
    alert("Event Saved");
    window.location.href = "success.html"
}

function validEventName(eventName) {
    if (eventName === "") return false;
    if (eventName === null) return false;
    if (eventName === undefined) return false;
    if (eventName.length < 3 || eventName.length > 20) return false;
    const pattern = /^[a-zA-Z0-9._\s]+$/;
    if (!pattern.test(eventName)) {
        return false;
    }
    return true;
}
function validDateTime(dateTime) {
    if (dateTime === "") return false;
    if (dateTime === null) return false;
    if (dateTime === undefined) return false;
    const dateFormat = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/; // DD/MM/YYYY
    if (!dateFormat.test(dateTime)) {
        return false;
    }
    return true;
}
function validAddress(address) {
    if (address === "") return false;
    if (address === null) return false;
    if (address === undefined) return false;
    const addressPattern = /^[a-zA-Z\s,.\'-]{10,}$/;
    if (!addressPattern.test(address)) {
        return false;
    }
    return true;
}
function validEventType(eventType) {
    if (eventType === "") return false;
    if (eventType === null) return false;
    if (eventType === undefined) return false;
    const eventPattern = /^[a-zA-Z._\s,.\'-]+$/;
    if (!eventPattern.test(eventType)) {
        return false;
    }
    return true;
}
function validEventDescription(eventDescription) {
    if (eventDescription === "") return false;
    if (eventDescription === null) return false;
    if (eventDescription === undefined) return false;
    if (eventDescription.length < 10 || eventDescription.length > 30) return false;
    const descriptionPattern = /^[a-zA-Z._\s,.\'-]+$/;
    if (!descriptionPattern.test(eventDescription)) {
        return false;
    }
    return true;
}

function acceptTerms() {
    console.log("Terms changed");
    const termsChecked = $('#terms').prop('checked');
    if (termsChecked && $(".error-msg").filter(":visible").length === 0) {
        $("#submitBtn").prop('disabled', false);
    } else {
        $("#submitBtn").prop('disabled', true);
    }
}