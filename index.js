/*
---------------------------------------------------------
Content menu
---------------------------------------------------------
1. Fetching api
2. Adding the currencies to each currency select menu
3. Query selects for making conversion work
4. Conversion working when clicking convert button
5. Calendar creation
6. Fetching the different values
7. Retrieving the dates from session storage
8. Setting the data table and drawing the graph
---------------------------------------------------------
*/



//1. Fetching api
fetch('https://currency-converter5.p.rapidapi.com/currency/list', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': ''
	}
})
	.then(response => response.json())
	.then(result => {
	//pushing GET result from api to an array
	let valuta = result
		const currency = []
		for (let i = 0; i < 1; i++) {
			currency.push((valuta.currencies))
		}

		//2. adding the currencies to each currency select menu
		for (let i = 0; i < Object.keys(valuta.currencies).length; i++) {
			var x = document.getElementById('currencies1')
			var option = document.createElement('option')
			option.text = Object.values(valuta.currencies)[i]
			option.value = Object.keys(valuta.currencies)[i]
			x.add(option)
		}
		for (let i = 0; i < Object.keys(valuta.currencies).length; i++) {
			var x = document.getElementById('currencies2')
			var option = document.createElement('option')
			option.text = Object.values(valuta.currencies)[i]
			option.value = Object.keys(valuta.currencies)[i]
			x.add(option)
		}

	})
	
	.catch(err => console.error(err));
//3. Query selects for making conversion work
let currency1 = document.querySelector('#currencies1')
let currency2 = document.querySelector('#currencies2')
let amount = document.querySelector('#amountofcurrency')
let convertbutton = document.getElementById('convert')
let test = 0
//4. Making conversion actually work the way it should when you click the convert button
convertbutton.addEventListener('click', () => {
fetch('https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=' + currency1.value + '&to=' + currency2.value + '&amount=' + amount.value, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': ''
		}
	})
		.then(response => response.json())
		.then(response => {
			
			let svar = response
			const rate = svar.rates
			const val = Object.values(rate)
			let val2 = val.pop(0)
			let val3 = Object.values(val2)
			let amount = document.getElementById('convertresult')
			console.log(val3[2])
			let lagra = val3[2] + ' ' + currency2.value
			sessionStorage.setItem('result', lagra)
			amount.textContent = sessionStorage.getItem('result', lagra)
		})
		.catch(err => console.error(err));
	})



convertbutton.addEventListener('click', () => {
//5. Creating my 7 calendars in order to retrieve the full last week
let day1 = new Date()
let dd1 = String(day1.getDate() - 7).padStart(2, '0')
let mm1 = String(day1.getMonth() + 1).padStart(2, '0')
let yyyy1 = day1.getFullYear();
day1 = yyyy1 + '-' + mm1 + '-' + dd1

let day2 = new Date()
let dd2 = String(day2.getDate() - 6).padStart(2, '0')
let mm2 = String(day2.getMonth() + 1).padStart(2, '0')
let yyyy2 = day2.getFullYear();
day2 = yyyy2 + '-' + mm2 + '-' + dd2

let day3 = new Date()
let dd3 = String(day3.getDate() - 5).padStart(2, '0')
let mm3 = String(day3.getMonth() + 1).padStart(2, '0')
let yyyy3 = day3.getFullYear();
day3 = yyyy3 + '-' + mm3 + '-' + dd3

let day4 = new Date()
let dd4 = String(day4.getDate() - 4).padStart(2, '0')
let mm4 = String(day4.getMonth() + 1).padStart(2, '0')
let yyyy4 = day4.getFullYear();
day4 = yyyy4 + '-' + mm4 + '-' + dd4

let day5 = new Date()
let dd5 = String(day5.getDate() - 3).padStart(2, '0')
let mm5 = String(day5.getMonth() + 1).padStart(2, '0')
let yyyy5 = day5.getFullYear();
day5 = yyyy5 + '-' + mm5 + '-' + dd5

let day6 = new Date()
let dd6 = String(day6.getDate() - 2).padStart(2, '0')
let mm6 = String(day6.getMonth() + 1).padStart(2, '0')
let yyyy6 = day6.getFullYear();
day6 = yyyy6 + '-' + mm6 + '-' + dd6

let day7 = new Date()
let dd7 = String(day7.getDate() - 1).padStart(2, '0')
let mm7 = String(day7.getMonth() + 1).padStart(2, '0')
let yyyy7 = day7.getFullYear();
day7 = yyyy7 + '-' + mm7 + '-' + dd7

//6. Fetching the different values for the selected currency throughout the past 7 days and putting it into session storage
	fetch('https://currency-converter5.p.rapidapi.com/currency/historical/' + day1 +'?from=USD&amount=1&format=json&to=' + currency1.value, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': ''
		}
	})
		.then(response => response.json())
		.then(response => {
			let valueobject = response
			let valuearray = Object.values(valueobject)
			let valuedeepobject = valuearray[4]
			let valuedeeparray = Object.values(valuedeepobject)
			let valuefinalarray = valuedeeparray.pop()
			let valuefinal = Object.values(valuefinalarray)
			sessionStorage.setItem('dag1', valuefinal[2])
	})
		.catch(err => console.error(err))
fetch('https://currency-converter5.p.rapidapi.com/currency/historical/' + day2 +'?from=USD&amount=1&format=json&to=' + currency1.value, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': ''
		}
	})
		.then(response => response.json())
		.then(response => {
			let valueobject = response
			let valuearray = Object.values(valueobject)
			let valuedeepobject = valuearray[4]
			let valuedeeparray = Object.values(valuedeepobject)
			let valuefinalarray = valuedeeparray.pop()
			let valuefinal = Object.values(valuefinalarray)
			sessionStorage.setItem('dag2', valuefinal[2])
	})
		.catch(err => console.error(err))

	fetch('https://currency-converter5.p.rapidapi.com/currency/historical/'+ day3 +'?from=USD&amount=1&format=json&to=' + currency1.value, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': ''
		}
	})
		.then(response => response.json())
		.then(response => {
			let valueobject = response
			let valuearray = Object.values(valueobject)
			let valuedeepobject = valuearray[4]
			let valuedeeparray = Object.values(valuedeepobject)
			let valuefinalarray = valuedeeparray.pop()
			let valuefinal = Object.values(valuefinalarray)
			sessionStorage.setItem('dag3', valuefinal[2])
	})

		.catch(err => console.error(err))

	fetch('https://currency-converter5.p.rapidapi.com/currency/historical/'+ day4 +'?from=USD&amount=1&format=json&to=' + currency1.value, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': ''
		}
	})
				.then(response => response.json())
				.then(response => {
					let valueobject = response
					let valuearray = Object.values(valueobject)
					let valuedeepobject = valuearray[4]
					let valuedeeparray = Object.values(valuedeepobject)
					let valuefinalarray = valuedeeparray.pop()
					let valuefinal = Object.values(valuefinalarray)
					sessionStorage.setItem('dag4', valuefinal[2])
		})
			
			.catch(err => console.error(err))
	fetch('https://currency-converter5.p.rapidapi.com/currency/historical/'+ day5 +'?from=USD&amount=1&format=json&to=' + currency1.value, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': ''
		}
	})
				.then(response => response.json())
				.then(response => {
					let valueobject = response
					let valuearray = Object.values(valueobject)
					let valuedeepobject = valuearray[4]
					let valuedeeparray = Object.values(valuedeepobject)
					let valuefinalarray = valuedeeparray.pop()
					let valuefinal = Object.values(valuefinalarray)
					sessionStorage.setItem('dag5', valuefinal[2])
		})
			
			.catch(err => console.error(err))
	fetch('https://currency-converter5.p.rapidapi.com/currency/historical/'+ day6 +'?from=USD&amount=1&format=json&to=' + currency1.value, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': ''
		}
	})
				.then(response => response.json())
				.then(response => {
					let valueobject = response
					let valuearray = Object.values(valueobject)
					let valuedeepobject = valuearray[4]
					let valuedeeparray = Object.values(valuedeepobject)
					let valuefinalarray = valuedeeparray.pop()
					let valuefinal = Object.values(valuefinalarray)
					sessionStorage.setItem('dag6', valuefinal[2])

		})
			
			.catch(err => console.error(err))
	fetch('https://currency-converter5.p.rapidapi.com/currency/historical/'+ day7 +'?from=USD&amount=1&format=json&to=' + currency1.value, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': ''
		}
	})
				.then(response => response.json())
				.then(response => {
					let valueobject = response
					let valuearray = Object.values(valueobject)
					let valuedeepobject = valuearray[4]
					let valuedeeparray = Object.values(valuedeepobject)
					let valuefinalarray = valuedeeparray.pop()
					let valuefinal = Object.values(valuefinalarray)
					sessionStorage.setItem('dag7', valuefinal[2])
		})
			
			.catch(err => console.error(err))



})

convertbutton.addEventListener('click', () => {
//7. Retrieving the dates from session storage and putting them into variables
	let valutadag1 = sessionStorage.getItem('dag1')
	let valutadag2 = sessionStorage.getItem('dag2')
	let valutadag3 = sessionStorage.getItem('dag3')
	let valutadag4 = sessionStorage.getItem('dag4')
	let valutadag5 = sessionStorage.getItem('dag5')
	let valutadag6 = sessionStorage.getItem('dag6')
	let valutadag7 = sessionStorage.getItem('dag7')
	
	
//8. Setting the data table and drawing the graph for the past weeks prices of the selected currency compared to USDollars
	const data = [valutadag1, valutadag2, valutadag3, valutadag4, valutadag5, valutadag6, valutadag7],
	labels = ['7 days ago', '6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', 'yesterday' ]
	
	const ctx = document.getElementById('recentcon').getContext('2d')
	const myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: labels,
			datasets: [{
				label: 'USD compared to ' + currency2.value + ' over 7 past days',
				data: data,
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 206, 86)',
					'rgb(75, 192, 192)',
					'rgb(153, 102, 255)',
					'rgb(255, 159, 64)'
				],
				borderColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 206, 86)',
					'rgb(75, 192, 192)',
					'rgb(153, 102, 255)',
					'rgb(255, 159, 64)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	})
	})