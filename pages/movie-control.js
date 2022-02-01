export function AddMovieToWishlist(token, id) {
    fetch('https://movielist-api-tubes-arc.herokuapp.com/api/list/add', {
        method: 'POST', 
        headers: {
          'Content-Type': 'text/plain',
          'x-access-token': token
        },
        body: `{"movieId" : ${id}}`
        }).then(response => response.json()
    )
}

export function RemoveMovieFromWishlist(token, id) {
    fetch('https://movielist-api-tubes-arc.herokuapp.com/api/list/delete', {
        method: 'POST', 
        headers: {
            'Content-Type': 'text/plain',
            'x-access-token': token
          },
          body: `{"movieId" : ${id}}`
    }).then(response => response.json()
    )
}
