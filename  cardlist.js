$(document).ready(loadEvents)

function loadEvents() {
    // 1. Read the events from local storage with key events

    let events = localStorage.getItem("events");
    console.log(`Step 1: Events from localStorage ${events}`);

    // 2. convert the value into JSON object. 
    const eventsObject = JSON.parse(events) || [];
    console.log(`step 2: converted the key value ${eventsObject}`);

    // 3. select the cardlist and empty the inner html
    $("#card-list").empty();

    // 4. forEach event in events get name, date & description
    eventsObject.forEach(event => {
        console.log(event);
        const eventName= event['eventName'];
        const eventdate= event['dateTime'];
        const description= event['eventDescription'];
        console.log(eventName);
        console.log(eventdate);
        console.log(description);

        const eventCard= ` 
        <div class="card">
                <div class="card-contents">
                    <div class="card-icon">
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div class="card-section">
                        <h1>${eventName}</h1>
                        <h2>${eventdate}</h2>
                        <p>${description}</p> <br>
                        <button class="card-action"> Read More</button>
                    </div>
                </div>
            </div>
        `

        $('#card-list').append(eventCard);
    });



}
