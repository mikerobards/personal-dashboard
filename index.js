const author = document.querySelector('.img-author')
const cryptoTop = document.querySelector('.crypto-top')
const cryptoPrices = document.querySelector('.crypto-prices')
const url1 = "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd"
const url2 = "https://api.coingecko.com/api/v3/coins/dogecoin"


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
            author.innerHTML = `<p>Photo By <a href="https://unsplash.com/@benkelsey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Ben Kelsey</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>`
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
            🎯 : $${data.market_data.current_price.usd}
            🔺 : $${data.market_data.high_24h.usd}
            🔻 : $${data.market_data.low_24h.usd}
            `

        })
        .catch(err => {
            console.error(err)
        })
}

getBackgroundImg()
getCryptoPrice()


