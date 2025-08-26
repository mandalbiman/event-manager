const sampleData =  [
        { 
            "title": "ICC World Cup",
            "date": "15th August 2027",
            "description": "Tournament by ICC"
        },
        { 
            "title": "Asia Cup",
            "date": "20th July 2027",
            "description": "Regional cricket tournament"
        },
        { 
            "title": "Champions Trophy",
            "date": "10th June 2027",
            "description": "ICC One-Day tournament"
        },
        { 
            "title": "T20 World Cup",
            "date": "5th October 2027",
            "description": "T20 format world championship"
        },
        { 
            "title": "The Ashes",
            "date": "1st December 2027",
            "description": "England vs Australia test series"
        },
        { 
            "title": "Border-Gavaskar Trophy",
            "date": "15th January 2028",
            "description": "India vs Australia test series"
        },
        { 
            "title": "CPL Final",
            "date": "18th September 2027",
            "description": "Caribbean Premier League Final"
        },
        { 
            "title": "Big Bash Final",
            "date": "10th February 2028",
            "description": "Australian Big Bash League Final"
        },
        { 
            "title": "PSL Final",
            "date": "25th March 2028",
            "description": "Pakistan Super League Final"
        },
        { 
            "title": "IPL Final",
            "date": "28th May 2028",
            "description": "Indian Premier League Final"
        }
    ]



function getCard(title, date, description) {
    return `<div class="card">
                <div class="card-contents">
                    <div class="card-icon">
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div class="card-section">
                        <h1>${title}</h1>
                        <h3>${date}</h3>
                        <p>${description}</p> <br>
                        <button class="card-action"> Read More</button>
                    </div>
                </div>
            </div>`
}

window.onload = function () {
    let cardListEle = document.getElementById('card-list');
    cardListEle.innerHTML = ""
    let cardList = localStorage.getItem('card-list')
    if (cardList === null || cardList.length === 0){
        cardList = sampleData;
    }
    for (let card of cardList){
        cardListEle.innerHTML += getCard(card['title'], card['date'], card['description'])
    }
}