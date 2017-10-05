var f =document.getElementById('Foo');

var i = 0;

setInterval(function (){
    f.style.display = (f.style.display == 'none' ? '' : 'none');
    i++;
    if (i % 2 === 0){
        if (f.innerHTML.indexOf("LOVE") !=-1){
            s = 'SKIING';
        } else {
            s = 'LOVE';
        }
        f.innerHTML = s;
    }
},550);