/*
---------------------------------------------------------
Content menu
---------------------------------------------------------
1. ID Selection
2. Adding eventlisteners where needed
3. Creation of the if statement

---------------------------------------------------------
*/


//1. ID Selection
let mode = document.getElementById('modeselect')
let submit = document.getElementById('submit')
let citychoice = document.getElementById('city')
let cityid = document.getElementById('cityid')
let pop = document.getElementById('population')
let cityanswer = document.getElementById('cityanswer')
let citypopulation = document.getElementById('citypopulation')
let cityidanswer = document.getElementById('cityidanswer')

//2. Adding eventlisteners where needed
mode.addEventListener('input', (e) => {
        let selector = mode.value
        if (mode.value != 'Select your mode (not this one)') {
            console.log(selector)
        }
        if (mode.value == 'GET') {
            pop.disabled = true
            cityid.disabled = true
        } else {
            pop.disabled = false
            cityid.disabled = false
        }
})



submit.addEventListener('click', () => {

    if (mode.value == 'GET') {
    fetch('https://avancera.app/cities/?name=' + citychoice.value, {
        method: mode.value
    })
    .then((response) => response.json())
    .then((result) => {
        let answers = result
        let singleanswer = answers.pop()
        console.log(singleanswer)
        cityanswer.textContent = singleanswer.name
        citypopulation.textContent = singleanswer.population
        cityidanswer.textContent = singleanswer.id
    })
}

const namn = citychoice.value
const befolkning = Number(pop.value)
const stadsid = cityid.value

//3. Creation of the if statement to get the correct fetch depending on the mode selected by the user
    if (mode.value == 'POST') {
        fetch('https://avancera.app/cities/' + stadsid, {
            method: mode.value,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name : namn, population : befolkning})
        })
        .then((response) => response.json())
        .then((result) => {
            let answers = result
            let singleanswer = answers.pop()
            console.log(singleanswer)
            cityanswer.textContent = singleanswer.name
            citypopulation.textContent = singleanswer.population
            cityidanswer.textContent = singleanswer.id
        })
    }
    if (mode.value == 'PUT') {
        fetch('https://avancera.app/cities/' + stadsid, {
            method: mode.value,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: stadsid, name : namn, population : befolkning})
        })
        .then((response) => {
            let answers = response
            console.log(answers)
            cityanswer.textContent = answers.status
            citypopulation.textContent = answers.statusText
        })
    }
    if (mode.value == 'DELETE') {
        fetch('https://avancera.app/cities/' + stadsid, {
            method: mode.value
        })
        .then((response) => {
            let answers = response
            console.log(answers)
            cityanswer.textContent = answers.status
            citypopulation.textContent = answers.statusText
        })
    }
})
