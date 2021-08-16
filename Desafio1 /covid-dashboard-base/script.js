
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
}

const getData = (url) => {
    const promiseCallback = (resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) throw new Error('Erro ao carregar' +  response.status)
                return response.json()
            })
            .then(resolve)
            .catch(reject)
    }
    return new Promise(promiseCallback)
}

getData(`https://api.covid19api.com/summary`, options)
    .then((response) => {
        return document.getElementById('confirmed').innerHTML = response.Global.TotalConfirmed
    })
    .catch(console.error)



getData(`https://api.covid19api.com/summary`, options)
    .then((response) => {
        return document.getElementById('death').innerHTML = response.Global.TotalDeaths
    })
    .catch(console.error)


getData(`https://api.covid19api.com/summary`, options)
    .then((response) => {
        return document.getElementById('recovered').innerHTML = response.Global.TotalRecovered
    })
    .catch(console.error)


getData(`https://api.covid19api.com/summary`, options)
    .then((response) => {
        return document.getElementById('active').innerHTML = response.Global.NewRecovered
    })
    .catch(console.error)



getData(`https://api.covid19api.com/countries`, options)
    .then((response) => {
        console.log(response[1])
    })
    .catch(console.error)


function loadCountries(data) {
    let combo = document.getElementById('combo');

}

for(index in data ) {
    combo.options[combo.options.lenght] = new Option(
        data[index].Country,
        data[index].Country,

    )
}






