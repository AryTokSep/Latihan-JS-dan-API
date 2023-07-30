function fetchCountrydata() {
    let nama_negara = countryInput.value 

    if(nama_negara == ""){
        alert('Masukan Nama Negara terlebih dahulu!')
    }
    else{
        fetch(`https://restcountries.com/v3.1/name/${nama_negara}?fulltext=true`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            flag.classList.replace('nonAktif', 'aktif')

            let number_formatter = new Intl.NumberFormat('en-US')
            namaNegara.innerHTML = data[0].name.common
            flag.src = data[0].flags.png
            officialName.innerHTML = `<span>Nama Resmi: </span>${data[0].name['official']}`
            capital.innerHTML = `<span>Ibukota Negara: </span>${data[0].capital}`
            population.innerHTML = `<span>Populasi: </span>${number_formatter.format(data[0].population)} Jiwa`
            continent.innerHTML = `<span>Benua: </span>${data[0].continents}`
            currency.innerHTML = `<span>Mata Uang: </span>${Object.keys(data[0].currencies)[0]}`
            car.innerHTML = `<span>Jalur Kendaraan: </span> ${data[0].car['side']}`
            container.classList.replace('nonAktif', 'aktif')
            infoList.classList.replace('nonAktif', 'aktif')
        })
    }
}

let container = document.getElementById('container')
let searchButton = document.getElementById('searchButton')
let namaNegara = document.getElementById('namaNegara')
let officialName = document.getElementById('officialName')
let capital = document.getElementById('capital')
let population = document.getElementById('population')
let continent = document.getElementById('continent')
let currency = document.getElementById('currency')
let flag = document.getElementById('flag')
let infoList =document.getElementById('info')
let countryInput = document.getElementById('inputNegara')
let road = document.getElementById('car')

searchButton.addEventListener('click', fetchCountrydata)
