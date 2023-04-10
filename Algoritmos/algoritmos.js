function calcularPromedio(){
    let nota1 = parseInt(document.getElementById('nota1').value);
    let nota2 = parseInt(document.getElementById('nota2').value);
    let nota3 = parseInt(document.getElementById('nota3').value);
    
    let examenFinal = parseInt(document.getElementById('trabajoFinal').value);
    let trabajoFinal = parseInt(document.getElementById('examenFinal').value);
    
    let promedioNotas = (nota1 + nota2 + nota3) /3;
    let porcentajeNotas = (promedioNotas * 0.55)+(examenFinal* 0.3)+(trabajoFinal * 0.15);
    let nota = document.getElementById('nota')
        if (notaFinal >= 0) {
        nota.innerHTML = '<p>'+ `NOTA FINAL:-> ${notaFinal}` + '</p>';
}
}