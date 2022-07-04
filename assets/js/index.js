const URL_API = `${window.location.origin}/api`;

$('#add_autor').submit(function(event){ 
    alert('Autor salvo com sucesso!');
});

$('#update_autor').submit(function(event){ 
    event.preventDefault();

    var dados = {};
    $.map($(this).serializeArray(), function(n, i){
        dados[n['name']] = n['value'];
    });

    var request = {
        'url': `${URL_API}/autor/${dados.id}`,
        'method': 'PUT',
        'data': dados
    }

    $.ajax(request).done(function(response){
        alert('Autor editado com sucesso!');
    });
});

$('#add_aluno').submit(function(event){ 
    alert('Aluno salvo com sucesso!');
});

$('#update_aluno').submit(function(event){ 
    event.preventDefault();

    var dados = {};
    $.map($(this).serializeArray(), function(n, i){
        dados[n['name']] = n['value'];
    });

    var request = {
        'url': `${URL_API}/aluno/${dados.id}`,
        'method': 'PUT',
        'data': dados
    }
    
    $.ajax(request).done(function(response){
        alert('Aluno editado com sucesso!');
    });
});

$('#add_livro').submit(function(event){ 
    alert('Livro salvo com sucesso!');
});

$('#update_livro').submit(function(event){ 
    event.preventDefault();

    var dados = {};
    $.map($(this).serializeArray(), function(n, i){
        dados[n['name']] = n['value'];
    });

    var request = {
        'url': `${URL_API}/livro/${dados.id}`,
        'method': 'PUT',
        'data': dados
    }
    
    $.ajax(request).done(function(response){
        alert('Livro editado com sucesso!');
    });
});

$('#add_locacao').submit(function(event){ 
    alert('Locação salva com sucesso!');
}); 

$('#update_locacao').submit(function(event){ 
    event.preventDefault();

    var dados = {};
    $.map($(this).serializeArray(), function(n, i){
        dados[n['name']] = n['value'];
    });

    var request = {
        'url': `${URL_API}/locacao/${dados.id}`,
        'method': 'PUT',
        'data': dados
    }
    
    $.ajax(request).done(function(response){
        alert('Locação editada com sucesso!');
    });
});

$('.table tbody td a.delete').on('click', function(){
    var id =  $(this).attr('data-id');
    var tela =  $(this).attr('data-tela');

    var request = {
        'url': `${URL_API}/${tela}/${id}`,
        'method': 'DELETE'
    }
    
    if(confirm('Você realmente deseja deletar esse registro?')){
        $.ajax(request).done(function(response){
            alert(`${tela} deleto(a) com sucesso!`);
            location.reload();
        });
    }
})