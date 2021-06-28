var input = document.querySelector('.input');
var items = document.querySelectorAll('.item');
items.forEach(function(item) {
    item.addEventListener('click', function() {
       if(input.innerHTML=='0') 
       input.innerHTML = '';
       if(item.innerHTML == "AC")
       input.innerHTML = '0';
       else if(item.innerHTML == "DEL") {
            var arrText = Array.from(input.innerHTML);
            arrText.splice(arrText.length-1, 1)
            if(arrText.length!=0)
            input.innerHTML = arrText.join('')
            else input.innerHTML = '0'
       }
       else if (item.innerHTML == "=") {
            input.innerHTML = eval(input.innerHTML)
       }
       else
       input.innerHTML += item.innerHTML
    })
})