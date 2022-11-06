let exibir_categoria = (categoria) =>{
    let class_produto = document.getElementsByClassName('float_left');
    for(let cont=0; cont<class_produto.length; cont++){
        if(categoria == class_produto[cont].id)
            class_produto[cont].style.display = 'block';
        else
            class_produto[cont].style.display = 'none';
    }
}

let exibir_todos = () =>{
    let class_produto = document.getElementsByClassName('float_left');
    for(let cont=0; cont < class_produto.length; cont++){
        class_produto[cont].style.display = 'block'
    }
}