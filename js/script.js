//// item name
var titel_01 =document.getElementById('titel01');
var titel_02 =document.getElementById('titel02');
var titel_03 =document.getElementById('titel03');
var titel_04 =document.getElementById('titel04');
var titel_05 =document.getElementById('titel05');
var titel_06 =document.getElementById('titel06');
var titel_07 =document.getElementById('titel07');
var titel_08 =document.getElementById('titel08');
var titel_09 =document.getElementById('titel09');
var titel_10 =document.getElementById('titel10');

//count
var cont_01 =document.getElementById('cont-01');
var cont_03 =document.getElementById('cont-03');
var cont_02 =document.getElementById('cont-02');
var cont_04 =document.getElementById('cont-04');
var cont_05 =document.getElementById('cont-05');
var cont_06 =document.getElementById('cont-06');
var cont_07 =document.getElementById('cont-07');
var cont_08 =document.getElementById('cont-08');
var cont_09 =document.getElementById('cont-09');
var cont_10 =document.getElementById('cont-10');
///////////////////// price
var price_1 = document.getElementById('price-1')
var price_2 = document.getElementById('price-2')
var price_3 = document.getElementById('price-3')
var price_4 = document.getElementById('price-4')
var price_5 = document.getElementById('price-5')
var price_6 = document.getElementById('price-6')
var price_7 = document.getElementById('price-7')
var price_8 = document.getElementById('price-8')
var price_9 = document.getElementById('price-9')
var price_10 = document.getElementById('price-10')
////////////////////

var Submit =document.getElementById('submit')

Submit.onclick = function Submit(){
    
        if (cont_01  !=""){
            var result = cont_01.value * +price_1.textContent;
            var table = `  
          <tr>
          <th> ${titel_01.textContent} </th>
          <th>${cont_01.value}</th>
          <th>${+(price_1.textContent)}</th>
          <th>${result}</th>
        </tr>
        `
        document.getElementById("table-body").innerHTML +=table;
/////////////////////////////////////////////////////////////////////
        var result02 = cont_02.value * +price_2.textContent;
        var table02 = `  
      <tr>
      <th> ${titel_02.textContent} </th>
      <th>${cont_02.value}</th>
      <th>${+(price_2.textContent)}</th>
      <th>${result02}</th>
    </tr>
    `
    document.getElementById("table-body").innerHTML +=table02
////////////////////////////////////////////////////////////
    var result03 = cont_03.value * +price_3.textContent;
    var table03 = `  
  <tr>
  <th> ${titel_03.textContent} </th>
  <th>${cont_03.value}</th>
  <th>${+(price_3.textContent)}</th>
  <th>${result03}</th>
</tr>
`
document.getElementById("table-body").innerHTML +=table03
        ///////////////////////////////////////
        var result04 = cont_04.value * +price_4.textContent;
        var table04 = `  
      <tr>
      <th> ${titel_04.textContent} </th>
      <th>${cont_04.value}</th>
      <th>${+(price_4.textContent)}</th>
      <th>${result04}</th>
    </tr>
    `
    document.getElementById("table-body").innerHTML +=table04
    ////////////////////////////////////////////
    var result05 = cont_05.value * +price_5.textContent;
    var table05 = `  
  <tr>
  <th> ${titel_05.textContent} </th>
  <th>${cont_05.value}</th>
  <th>${+(price_5.textContent)}</th>
  <th>${result05}</th>
</tr>
`
document.getElementById("table-body").innerHTML +=table05
//////////////////////////////////////////
var result06 = cont_06.value * +price_6.textContent;
var table06 = `  
<tr>
<th> ${titel_06.textContent} </th>
<th>${cont_06.value}</th>
<th>${+(price_6.textContent)}</th>
<th>${result06}</th>
</tr>
`
document.getElementById("table-body").innerHTML +=table06
////////////////////////////////
var result07 = cont_07.value * +price_7.textContent;
var table07 = `  
<tr>
<th> ${titel_07.textContent} </th>
<th>${cont_07.value}</th>
<th>${+(price_7.textContent)}</th>
<th>${result07}</th>
</tr>
`
document.getElementById("table-body").innerHTML +=table07
////////////////////////////////////////////
var result08 = cont_08.value * +price_8.textContent;
var table08 = `  
<tr>
<th> ${titel_08.textContent} </th>
<th>${cont_08.value}</th>
<th>${+(price_8.textContent)}</th>
<th>${result08}</th>
</tr>
`
document.getElementById("table-body").innerHTML +=table08
////////////////////////////////////////////////////////////
var result09 = cont_09.value * +price_9.textContent;
var table09 = `  
<tr>
<th> ${titel_09.textContent} </th>
<th>${cont_09.value}</th>
<th>${+(price_9.textContent)}</th>
<th>${result09}</th>
</tr>
`
document.getElementById("table-body").innerHTML +=table09
///////////////////////////////////////
var result10 = cont_10.value * +price_10.textContent;
var table10 = `  
<tr>
<th> ${titel_10.textContent} </th>
<th>${cont_10.value}</th>
<th>${+(price_10.textContent)}</th>
<th>${result10}</th>
</tr>
`
document.getElementById("table-body").innerHTML +=table10

var total_result = (result + result02 + result03 +result04 +result05 +result06 +result07
    +result08 +result09 +result10);
console.log(total_result);

document.getElementById("total-value").innerHTML = total_result
}}