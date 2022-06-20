var links = "https://www.tcmb.gov.tr/kurlar/202202/15022022.xml";
var usd = [];
var aud = [];
var dkk = [];
var eur = [];
var gbp = [];
var chf = [];
var sek = [];
var cad = [];
var kwd = [];
var nok = [];
var sar = [];
var jpy = [];
var bgn = [];
var ron = [];
var rub = [];
var irr = [];
var cny = [];
var pkr = [];
var qar = [];
var krw = [];
var azn = [];
var aed = [];


var x = new XMLHttpRequest();

 //for (i = 0; i < links.length; i++) {
   
   x.open("GET", links, true);
   x.onreadystatechange = function () {
      if (x.readyState == 4 && x.status == 200) {
         var doc = x.responseXML;

         //debugger
         var currencies = doc.getElementsByTagName("Tarih_Date")[0];
         var count = currencies.childElementCount;
         debugger
         for (let j = 0; j < count; j++) {
            var currency = currencies.children[j].getElementsByTagName("CurrencyName")[0].textContent;
            var value = currencies.children[j].getElementsByTagName("ForexSelling")[0].textContent;

            switch (currency) {
               case "US DOLLAR":
                  usd.push(value);
                  break;

               case "AUSTRALIAN DOLLAR":
                  aud.push(value);
                  break;

               case "DANISH KRONE":
                  dkk.push(value);
                  break;

               case "EURO":
                  eur.push(value);
                  break;

               case "POUND STERLING":
                  gbp.push(value);
                  break;

               case "SWISS FRANK":
                  chf.push(value);
                  break;

               case "SWEDISH KRONA":
                  sek.push(value);
                  break;

               case "CANADIAN DOLLAR":
                  cad.push(value);
                  break;

               case "KUWAITI DINAR":
                  kwd.push(value);
                  break;

               case "NORWEGIAN KRONE":
                  nok.push(value);
                  break;

               case "SAUDI RIYAL":
                  sar.push(value);
                  break;

               case "JAPENESE YEN":
                  jpy.push(value);
                  break;

               case "BULGARIAN LEV":
                  bgn.push(value);
                  break;

               case "NEW LEU":
                  ron.push(value);
                  break;

               case "RUSSIAN ROUBLE":
                  rub.push(value);
                  break;

               case "IRANIAN RIAL":
                  irr.push(value);
                  break;

               case "CHINESE RENMINBI":
                  cny.push(value);
                  break;

               case "PAKISTANI RUPEE":
                  pkr.push(value);
                  break;

               case "QATARI RIAL":
                  qar.push(value);
                  break;

               case "SOUTH KOREAN WON":
                  krw.push(value);
                  break;

               case "AZERBAIJANI NEW MANAT":
                  azn.push(value);
                  break;

               case "UNITED ARAB EMIRATES DIRHAM":
                  aed.push(value);
                  break;

               default:
                  break;
            }
            //debugger
         }

        // debugger


      }
   };
//}
 
 x.send(null);
//debugger