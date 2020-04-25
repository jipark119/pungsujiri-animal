// style: 'mapbox://styles/jieunpark119/cjneunx4y2ufr2snt3qccnkb2',



var range = $('.input-range'),
    value = $('.range-value');

value.html(range.attr('value'));
var valRs;



range.on('input', function(){
  var input, filter, ul, li, a, i;
    valRs  =this.value;
    value.html(this.value);
    input = valRs;
    ul = document.getElementById("map");
    li = ul.getElementsByTagName("li");
    for(var i=0;i<li.length;i++){
      a=li[i].getAttribute('id');
      if(a==valRs){
        li[i].style.backgroundColor = "red";
      li[i].style.width = "15px";
          li[i].style.height = "15px";
      }else{
          li[i].style.backgroundColor = "white";
        li[i].style.width = "10px";
            li[i].style.height = "10px";

      }
    }


});
