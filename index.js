const container = document.getElementById('container');

const search = async (query) => {
    let path = '/search/photos';
    if (query === '') {
        path = '/photos';
    }
    const response = await fetch(`https://api.unsplash.com${path}?page=1&per_page=30&client_id=CAt1Kt7JZ9OizDDTenT5GSzfuqB1QgILfIvO_ZeHv8U&query=${query}`);
    const body = await response.json();
    const array = query === '' ? body : body.results;

    array.map(x => x.urls.small).forEach(url => {
        const image = document.createElement('img');
        image.src = url;
        container.appendChild(image);
    })
}

search('');