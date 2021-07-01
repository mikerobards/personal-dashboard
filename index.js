const author = document.querySelector('.img-author')


function getBackgroundImg() {
    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=naasdfasdfasdfasdafsdfture")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            document.body.style.backgroundImage = `url("${data.urls.full}")`
            author.innerHTML = `<p>Photo By <a href="${data.user.links.html}" target="_blank">${data.user.name}</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>`
        })
        .catch(err => {
            document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1571944400884-bc70b2e2ed87?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjUxNzE2NTk&ixlib=rb-1.2.1&q=85")`
            author.innerHTML = `<p>Photo By <a href="https://unsplash.com/@benkelsey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Ben Kelsey</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>`
        })
}

function getCryptoPrice() {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

getBackgroundImg()
getCryptoPrice()


