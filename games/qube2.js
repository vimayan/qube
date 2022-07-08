var pieces = document.getElementsByClassName("piece");

function getAxis(face) {  
    return String.fromCharCode('X'.charCodeAt(0) + (face / 2|0)); // X, Y or Z  88+
} 

function mx(i, j) {  
    return ([2, 4, 3, 5][j % 4] + i % 2 * ((j) % 4 * 2 + 3) + 2 * (i / 2 |0)) % 6;  
}  
function assembleCube(){
for(var i = 0 ;i<=20;i++){
   var x = mx(i, i % 18);  
    pieces[i].style.transform = moveto(i%6)+ (i > 5 ? moveto(x) + (i > 17 ? moveto(mx(x, x + 2)) : '') : '');  ;
}


    function moveto(g){

        return 'translate' + getAxis(g) + '(' + ((g % 2 * 4 - 2)) + 'em)'

    }
}

window.addEventListener('load', assembleCube);  

