function yaz(sayi){
    document.girdi.text.value = document.girdi.text.value + sayi
}
function esit(){
    document.girdi.text.value = eval(document.girdi.text.value)
}
function kare(){
    document.girdi.text.value = document.girdi.text.value * document.girdi.text.value
}
function temiz(){
    document.girdi.text.value = ''
}
function sil(){
    document.girdi.text.value = document.girdi.text.value.substring(0, document.girdi.text.value.length-1)
}
function random(){
    document.querySelector(".renk").style.backgroundColor = "red";
}