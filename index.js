const container = document.getElementById('container');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('loupe');

const search = async (query) => {
    container.innerHTML = '';
    
    function shuffleArray(array) {
        for (var i = array.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
    shuffleArray(
    [
        "https://images.unsplash.com/photo-1719937051058-63705ed35502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MXwxfGFsbHwxfHx8fHx8fHwxNzI3NjQxNjEzfA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1726533240264-b748b393ebbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwyfHx8fHx8fHwxNzI3NjQxNjEzfA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727355933101-0e32f39f0b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwzfHx8fHx8fHwxNzI3NjQxNjEzfA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727447903891-f4a3bad38598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHw0fHx8fHx8fHwxNzI3NjQxNjEzfA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727102062617-2b793eec0a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHw1fHx8fHx8fHwxNzI3NjQxNjEzfA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1726425592350-a7f97c155966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHw2fHx8fHx8fHwxNzI3NjQxNjEzfA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1726998748912-fae1b7ca3191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHw3fHx8fHx8fHwxNzI3NjQxNjEzfA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727224279725-5cff726f41e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHw4fHx8fHx8fHwxNzI3NjQxNjEzfA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727473501365-da845918694c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHw5fHx8fHx8fHwxNzI3NjQxNjEzfA&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727460198311-b30af35bceb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwxMHx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1721332155637-8b339526cf4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MXwxfGFsbHwxMXx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727447766212-32a3dd4d4d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwxMnx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727412800268-309a3c7343d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwxM3x8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1725489891146-490f7962e499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwxNHx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1725582204163-46d1f246ecd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwxNXx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1725815091138-95e342c02cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwxNnx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1725940900264-9a1cbbf7108b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwxN3x8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1726148552362-c9e0025d25e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwxOHx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1726503453396-14e5da2f015f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwxOXx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1726250644724-bc10c87c2181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwyMHx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1721332149112-c54e68990d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MXwxfGFsbHwyMXx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1668285275029-f4335d71deb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwyMnx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1726856945519-e2f65a9c7d0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwyM3x8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727044757315-e6764afee48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwyNHx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727089787039-4bcec5544ee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwyNXx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727111544046-d92d85cb4b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwyNnx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727200451325-5ab6c9ba8a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwyN3x8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727229779326-b5e8a808b533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwyOHx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727344953773-afc3edbb9363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwyOXx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1727462490269-67dd2b9c49a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTkzNzN8MHwxfGFsbHwzMHx8fHx8fHx8MTcyNzY0MTYxM3w&ixlib=rb-4.0.3&q=80&w=400"
    ]).forEach(url => {
        const image = document.createElement('img');
        image.src = url;
        image.classList.add('image');
        container.appendChild(image);
    });

    return;

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
        image.classList.add('image');
        container.appendChild(image);
    })
}

searchInput.onkeydown = (event) => {
    if (event.key === 'Enter') {
        search(searchInput.value);
    }
};

searchButton.onclick = () => {
    search(searchInput.value);
};

search('');
