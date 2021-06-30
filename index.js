const author = document.querySelector('.img-author')


async function getBackgroundImg() {
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    const data = await res.json()
    console.log(data)
    document.body.style.backgroundImage = `url("${data.urls.full}")`
    author.innerHTML = `<p>Photo By <a href="${data.user.links.html}" target="_blank">${data.user.name}</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>`
}

getBackgroundImg()





