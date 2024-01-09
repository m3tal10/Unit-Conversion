function temp(){
    var celsius= document.getElementById("c").value;
    var farenheit=(celsius*9/5)+32;
    document.getElementById("f").value=farenheit;
}
function wei(){
    var kg= document.getElementById("kg").value;
    var pound=(kg*2.2);
    document.getElementById("p").value=pound;
}
function dist(){
    var km= document.getElementById("km").value;
    var mile=(km*9/5)+32;
    document.getElementById("m").value=mile;
}