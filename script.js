// const div = document.querySelector('div');
// div.setAttribute('id','myid');
// div.innerHTML = "<div class='div_inner'>Text</div>";

// let inner = document.querySelector(".div_inner");
// inner.insertAdjacentHTML("afterend","<span class='span_class'>Span1</span>");
// inner.insertAdjacentHTML("afterend","<span class='span_class'>Span2</span>");
// inner.insertAdjacentHTML("afterend","<div id='text1'>Div3</div>");
// inner.insertAdjacentHTML("afterend","<div id='text1'>Div4</div>");


//let ul = document.querySelector('ul');
//ul.setAttribute('id','flex');
//document.querySelectorAll('li').forEach(function (value,key) {value.setAttribute('id','li')});


const div = document.querySelector('.header_button button');
div.onclick = function() {
    document.location='index.html#contact';
}