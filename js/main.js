// var car = {type: "Chevrolet", cost: 20000, year: 2013};
// var seen = " ";
// var x;
// for (x in car){
//     seen = seen + car[x] + " ";
// }
// document.write(seen + "<br>");
// -----


// var masin = ["hyundai", "chevrolet", "alma"];
// var x;
// for (x of masin){
//     document.write(x + "<br> ")
// }



// for(var sayi1 = 0;sayi1 <=10 ; sayi1++ ){

//     if(sayi1==5 || sayi1==3 || sayi1==9){
//         document.write("eksin yoxudr <br>");
//         continue;
//     }
  
//     document.write(sayi1 + ". sayi <br>");
// }


// var sayi1 = 20;
// var sayi2 = 30;
// var cem;
// var hasil;
// debugger;
// cem = sayi1 + sayi2;
// document.write(cem + "cem");
// debugger;
// hasil = sayi1 * sayi2;
// document.write(hasil + "hasil");


// var sayi = 8;
// try{
//     if(10 < sayi < 20 && sayi%2==0){throw " sayi 20den azdir ve cutdur <br>";}
//     if(5 < sayi < 10 && sayi%2==0){throw " sayi 10dan az cutdur <br>";}
//     if(0 < sayi < 5 && sayi%2==1){throw " sayi 5-den kicik tekdir";}
// }catch(mesaj){
//     document.write(mesaj);
// }


// var sayi = 23;
// var erkek = ["nicat", "vasif", "nareman"];
// var kizlar = ["ayse", "fidan", "potabas"];
// var cons = sayi.constructor;
// for(var i=0; i<=erkek.length-1; i++){
//     document.write(i + erkek[i] + "<br>");
// }

// if (cons === Array){
//     document.write("bu arraydir");
// }else{
//     document.write("bu array deyil");
// }

// var erkek = ["nicat", "vasif", "nareman", "tofuq"];
// var nese = erkek.copyWithin(0,3);
// document.write(nese);


// var  sayi = [19,45,20,56,12,99,35];

// document.write("normal list : " + sayi + "<br>");
// var uzunluq = sayi.length-2;
// var looklike = sayi.fill("nicat",2,uzunluq);
// document.write("second list : " + looklike)

var numbers = [12,45,12,45,87,45,45,12,58,79];
document.write("normal list : " + numbers + "<br>");
function seen(year){
    return year <=87;
}
document.write(numbers.find(seen));

