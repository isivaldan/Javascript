const listaTweets = document.getElementById('lista-tweets')



//funcones


// comprobar que haya elementos en local storage retorna arreglo
obtenerTweetLocalStorage = () => {
    let tweets
    if (localStorage.getItem('tweets') === null) {
        tweets = []
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'))
    }
    return tweets
}

localStorageListo = () => {
    let tweets = obtenerTweetLocalStorage()
        //recorrer tweets
    tweets.forEach(tweet => {
        const botonBorrar = document.createElement('a')
        botonBorrar.classList = 'borrar-tweet'
        botonBorrar.innerText = 'X'
            //crear elemento
        const li = document.createElement('li')
        li.innerText = tweet
            //añade boton Borras al tweet
        li.appendChild(botonBorrar)
            //añade tweet a la lista
        listaTweets.appendChild(li)
    })
}

agregarTweetLocalStorage = (tweet) => {
    let tweets
    tweets = obtenerTweetLocalStorage()
        //añadir tweet
    tweets.push(tweet)
        //convertir de string a arrays
    localStorage.setItem('tweets', JSON.stringify(tweets))

}


agregarTweets = (e) => {
    e.preventDefault()
        //valor text area
    const tweet = document.getElementById('tweet').value
        //crear button

    const botonBorrar = document.createElement('a')
    botonBorrar.classList = 'borrar-tweet'
    botonBorrar.innerText = 'X'
        //crear elemento
    const li = document.createElement('li')
    li.innerText = tweet
        //añade boton Borras al tweet
    li.appendChild(botonBorrar)
        //añade tweet a la lista
    listaTweets.appendChild(li)

    //añadir a localStorage
    agregarTweetLocalStorage(tweet)
}

//borrar del local storage
borrarTweetLocalStorage = (tweet) => {
    let tweets, tweetBorrar
    tweetBorrar = tweet.substring(0, tweet.length - 1)
    tweets = obtenerTweetLocalStorage()
    tweets.forEach((tweet, index) => {
        if (tweetBorrar === tweet) {
            tweets.splice(index, 1)
        }
    })
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

borrarTweet = (e) => {
    e.preventDefault()
    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove()
        borrarTweetLocalStorage(e.target.parentElement.textContent)
    } else {
        console.log('no')
    }
}

eventListeners = () => {
    document.querySelector('#formulario').addEventListener('submit', agregarTweets)
    listaTweets.addEventListener('click', borrarTweet)

    //contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo)
}


//llamados

eventListeners()