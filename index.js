const author = document.querySelector('.img-author')
const cryptoTop = document.querySelector('.crypto-top')
const cryptoPrices = document.querySelector('.crypto-prices')
const timeEl = document.querySelector('.time')
const weatherIcon = document.querySelector('.weather-icon')
const weatherTemp = document.querySelector('.weather-temp')
const weatherCity = document.querySelector('.weather-city')
const url1 = "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd"
const url2 = "https://api.coingecko.com/api/v3/coins/bitcoin"


function getBackgroundImg() {
    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.body.style.backgroundImage = `url("${data.urls.full}")`
            author.innerHTML = `<p>Photo By <a href="${data.user.links.html}" target="_blank">${data.user.name}</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>`
        })
        .catch(err => {
            document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1571944400884-bc70b2e2ed87?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjUxNzE2NTk&ixlib=rb-1.2.1&q=85")`
            author.innerHTML = `<p class="author">Photo By <a href="https://unsplash.com/@benkelsey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Ben Kelsey</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>`
            console.log(err)
        })
}

function getCryptoPrice() {
    fetch(url2)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.name, data.image.small)
            cryptoTop.innerHTML = `
            <img src=${data.image.small}/><h2>${data.name}</h2>
            `
            cryptoPrices.innerText = `
            ???? : $${data.market_data.current_price.usd}
            ???? : $${data.market_data.high_24h.usd}
            ???? : $${data.market_data.low_24h.usd}
            `

        })
        .catch(err => {
            console.error(err)
        })
}

function getTime() {
    const date = new Date()
    const options = {
        timeStyle: "short"
    }
    let time = date.toLocaleTimeString("en-us", options)
    timeEl.innerText = time
}



function getWeather() {
    navigator.geolocation.getCurrentPosition(pos => {
        fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=imperial`)
            .then(res => {
                if (!res.ok) {
                    throw Error("Weather data not available")
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                console.log(data.weather[0].icon)
                console.log(data.name)
                console.log(Math.round(data.main.temp))
                weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
                weatherTemp.innerHTML = `${Math.round(data.main.temp)}??F`
                weatherCity.innerHTML = `${data.name}`
            })
            .catch(err => console.error(err))
    })
}


// https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png

getBackgroundImg()
getCryptoPrice()
getWeather()
setInterval(getTime, 1000)





