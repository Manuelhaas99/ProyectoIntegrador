
document.querySelector('#barra_busqueda').addEventListener('input', (evento) => { 
    const busqueda= evento.target.value;
    console.log(busqueda);
});