const player = document.querySelector('#player');
const modal = document.querySelector('.modal-trailer');
const img_filme = document.querySelector('#filme');
const trailer_filme = document.querySelector('#trailer');
const listaFilmes = document.querySelector('#listaFilmes');

function createIframe(id){
    modal.style.display = 'block';
    player.innerHTML = `<iframe width="95%" height="95%" 
    src="https://www.youtube.com/embed/${id}" title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}


function closeModal(){
    player.innerHTML = '';
    modal.style.display = 'none';
}


function adicionarFilme(){

    if(!trailer_filme.value.trim().length || !img_filme.value.trim().length) return alert('campos inválidos');
    
    var urlQuerys =  new URL(trailer_filme.value.trim()).searchParams;

    if(urlQuerys.get('v') == null) return 

    if(localStorage.getItem('filmes')){
        var filmes = JSON.parse(localStorage.getItem('filmes'));
    }else{
        var filmes = [];
    }
  
    filmes.push({
        img: img_filme.value.trim(),
        trailer: urlQuerys.get('v')
    });

    localStorage.setItem('filmes', JSON.stringify(filmes));

  trailer_filme.value = '';
  img_filme.value = '';
  
    loadFilmes();
}

function loadFilmes(){

    if(!localStorage.getItem('filmes')){
        listaFilmes.innerHTML = `<h2>Sem filmes por enquanto :(</h2>`
    }else{
        var filmes = JSON.parse(localStorage.getItem('filmes'));

        listaFilmes.innerHTML = '';

        filmes.forEach(element => {
            listaFilmes.innerHTML += `<img src="${element.img}" onclick="createIframe('${element.trailer}')" alt="">`;
        });

    }

}

loadFilmes();