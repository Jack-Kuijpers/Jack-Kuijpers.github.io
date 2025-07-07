const tvs = [
  { name: "LG Low", price: 1399, size: 55, brand: "LG", year: 2020, deal: 200, OLED: true, fourK: false, img: 'https://emersonaudio.com/cdn/shop/files/ET-2400-MAIN_HR-JPG.jpg?v=1692816683' },
  { name: "Samsung QN90A", price: 1499, size: 65, brand: "Samsung", year: 2021, deal: 0, OLED: false, fourK: true, img: 'data:image/jpeg;base64,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' },
  { name: "Sony A80J", price: 1599, size: 55, brand: "Sony", year: 2021, deal: 150, OLED: true, fourK: true, img: 'data:image/jpeg;base64,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' },
  { name: "TCL 6-Series", price: 799, size: 65, brand: "TCL", year: 2022, deal: 100, OLED: false, fourK: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBeL12V2_321WIj2VaWaDrjeT1vDa0K-Urg&s' },
  { name: "Hisense U8H", price: 899, size: 55, brand: "Hisense", year: 2022, deal: 0, OLED: false, fourK: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOW3K4K84g19ktix6PiRhoyQWVHszHLvZPg&s' },
  { name: "Vizio M-Series", price: 599, size: 50, brand: "Vizio", year: 2023, deal: 75, OLED: false, fourK: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5wsEZHlJavLD28mQafDIzEFzXOxyehmHbw&s' },
  { name: "Samsung S95B", price: 1799, size: 65, brand: "Samsung", year: 2022, deal: 0, OLED: true, fourK: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGCqqDV1s1O6f-hoUAOcTXCfDfOWT8k035g&s' },
  { name: "LG G1", price: 1999, size: 65, brand: "LG", year: 2021, deal: 250, OLED: true, fourK: true , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8iOYRSMFAJCcUjeJPyNn6fb03rY_MxPT7qQ&s'},
  { name: "Sony X90J", price: 1099, size: 55, brand: "Sony", year: 2021, deal: 0, OLED: false, fourK: true , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96mpiMOqyd9zEP1RjZ_5XrOgFSnQLtk0RDQ&s'},
  { name: "TCL 5-Series", price: 499, size: 50, brand: "TCL", year: 2022, deal: 50, OLED: false, fourK: true , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW0y505u1u5P-bOiZpylkbZrK0a6DDI_limQ&s'},
  { name: "Hisense A6", price: 399, size: 43, brand: "Hisense", year: 2023, deal: 30, OLED: false, fourK: true, img: 'https://multimedia.bbycastatic.ca/multimedia/products/500x500/177/17731/17731993.jpg' },
  { name: "Vizio V-Series", price: 379, size: 50, brand: "Vizio", year: 2022, deal: 0, OLED: false, fourK: true, img: 'https://multimedia.bbycastatic.ca/multimedia/products/500x500/179/17909/17909555.jpg' },
  { name: "LG B2", price: 1299, size: 55, brand: "LG", year: 2022, deal: 200, OLED: true, fourK: true , img: 'https://multimedia.bbycastatic.ca/multimedia/products/500x500/179/17909/17909550.jpg'},
  { name: "Samsung Q80B", price: 1199, size: 65, brand: "Samsung", year: 2022, deal: 0, OLED: false, fourK: true , img: 'https://multimedia.bbycastatic.ca/multimedia/products/500x500/188/18895/18895472.jpeg'},
  { name: "Sony A95K", price: 2999, size: 65, brand: "Sony", year: 2022, deal: 400, OLED: true, fourK: true , img: 'https://multimedia.bbycastatic.ca/multimedia/products/500x500/162/16243/16243247.jpg'},
  { name: "TCL S4", price: 349, size: 43, brand: "TCL", year: 2023, deal: 40, OLED: false, fourK: true , img: 'https://multimedia.bbycastatic.ca/multimedia/products/500x500/193/19312/19312044.jpeg'},
  { name: "Hisense U6H", price: 649, size: 55, brand: "Hisense", year: 2022, deal: 0, OLED: false, fourK: true , img: 'https://multimedia.bbycastatic.ca/multimedia/products/500x500/193/19312/19312044.jpeg'},
  { name: "Vizio OLED H1", price: 1199, size: 55, brand: "Vizio", year: 2021, deal: 150, OLED: true, fourK: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFDfmCi-Pc6fPnYN-dvXnbtxuAoxKan8u8hA&s' },
  { name: "LG C3", price: 1899, size: 65, brand: "LG", year: 2023, deal: 0, OLED: true, fourK: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpXr-HaGsfrhs41RhxjoSiOA_qW1WqT8rng&s' },
  { name: "Samsung QN85B", price: 1399, size: 55, brand: "Samsung", year: 2022, deal: 100, OLED: true, fourK: true, img: 'https://multimedia.bbycastatic.ca/multimedia/products/500x500/179/17909/17909550.jpg' },
  { name: "Sony X85J", price: 949, size: 50, brand: "Sony", year: 2021, deal: 75, OLED: false, fourK: false , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJWBBWVjIGTFkeUxzuauPAkvb27yIR38Mi9Q&s'},
  { name: "TCL Q7", price: 1099, size: 65, brand: "TCL", year: 2023, deal: 0, OLED: false, fourK: true , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrIBk03sLGFc5EXZvxV2onrrH097tBy1NcQ&s'},
  { name: "Hisense UX", price: 1599, size: 65, brand: "Hisense", year: 2023, deal: 0, OLED: false, fourK: false , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwHgi-izjMbIUS0hgwiAANF0ShGXwpI1EIA&s'},
  { name: "Vizio D-Series", price: 279, size: 40, brand: "Vizio", year: 2022, deal: 30, OLED: false, fourK: false , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaAc5NBat1xSJPQmtT-rUifwYQaTJqft6ew&s'},
  { name: "LG A2", price: 999, size: 48, brand: "LG", year: 2022, deal: 100, OLED: true, fourK: true , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhlYuuY3EbTwQ05j3_h2cHB5zELNvsUnNwCA&s'},
  { name: "Samsung Frame", price: 1499, size: 55, brand: "Samsung", year: 2023, deal: 0, OLED: false, fourK: true, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT3_mADbigpmfCXrFNupamyGSuXPNlojO0nC5gCNFAAwNBy6skQGtDE43PKc5VrwTPphNNiaPc1iB7Yk6jT6NLMuXiCGwzGcSohrFnGAYSl1Tcw8Z5DK--Bdv7j2vHf7PR8r7JeIpl4v0o&usqp=CAc' },
  { name: "Sony X95K", price: 2199, size: 65, brand: "Sony", year: 2022, deal: 0, OLED: false, fourK: true, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQqiNeL44N__wu1UEEhB4ykbDyvxmYt6apMQ01TuZqduZWG2j_GXGlwUCzAK_C2SU4rwt6dZDJPFdFum_N5NhEvssFNFJzMXC9VA9cf6jIKmVt9NYO1g6QJTtt2KEVxw6rB-2FWVw&usqp=CAchttps://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQqiNeL44N__wu1UEEhB4ykbDyvxmYt6apMQ01TuZqduZWG2j_GXGlwUCzAK_C2SU4rwt6dZDJPFdFum_N5NhEvssFNFJzMXC9VA9cf6jIKmVt9NYO1g6QJTtt2KEVxw6rB-2FWVw&usqp=CAc' },
  { name: "TCL XL Collection", price: 1999, size: 85, brand: "TCL", year: 2021, deal: 300, OLED: false, fourK: true , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9M9DcP3DnT6KCG_5R53E1z57QcKxSb7quw&s'},
  { name: "Philips R6", price: 449, size: 50, brand: "Philips", year: 2022, deal: 50, OLED: false, fourK: true, img: 'https://multimedia.bbycastatic.ca/multimedia/products/500x500/177/17729/17729143.jpeg' },
  { name: "Vizio PQX", price: 1799, size: 65, brand: "Vizio", year: 2023, deal: 0, OLED: false, fourK: false, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw6EtpyPpNZLTBLTMjxO-FVzONIyj48GWpFw&s' },
];
var currentFilter = [];

function clearAllDivs(){
  const parentDiv = document.getElementById('list');
  parentDiv.innerHTML = '';
}
function alphabetSort(){
  currentFilter.sort((a, b) => a.name.localeCompare(b.name));
}
function priceSortHtoL(){
  currentFilter.sort((a, b) => b.price - a.price);
}
function priceSortLtoH(){
  currentFilter.sort((a, b) => a.price - b.price);
}
function fourKfilter(){
  currentFilter = currentFilter.filter(currentFilter => currentFilter.fourK === true);
}
function oLEDfilter(){
  currentFilter = currentFilter.filter(currentFilter => currentFilter.OLED === true);
}
function dealfilter(){
  currentFilter = currentFilter.filter(currentFilter => currentFilter.deal > 0);
}
function filterYear(startYear, endYear){
  currentFilter = currentFilter.filter();
}
function yearRange(year, startYear, endYear){
  return(year >= startYear && year <= endYear);
}
function filterPrice(lowPrice, highPrice){
  currentFilter = currentFilter.filter(currentFilter => currentFilter.price >= lowPrice && currentFilter.price <= highPrice)
  priceSortLtoH();
}
function brandFilter(brand){
  var tempArray = tvs.filter(tvs => tvs.brand == brand);
  console.log(tempArray);
  currentFilter = currentFilter.concat(tempArray);
  console.log(currentFilter);
}
if(localStorage.length == 0){
  var cartlist = [];
  console.log(cartlist);
}else{
  var cartlist = JSON.parse(localStorage.getItem("name"));
}

function createList(){
    const container = document.getElementById('list');
    const numberOfDivs = tvs.length;

    for (let i = 0; i < numberOfDivs; i++) {
        const newDiv = document.createElement('div');
        const subDiv1 = document.createElement('div');
        subDiv1.classList.add('info');
        const subDiv2 = document.createElement('div'); 
        subDiv2.classList.add('price');
        const price = document.createElement('h2');
        const name = document.createElement('h1');
        const size = document.createElement('h3');
        const img = document.createElement('img');
        const cart = document.createElement('button')

        if(localStorage.length>0 && localStorage.getItem("name").includes(tvs[i].name)){
          cart.append('Remove from cart');
        }else{
          cart.append('Add to cart');
        }
        cart.id=tvs[i].name;
        cart.addEventListener('click', function(event){
          var tempA = [];
          if(cart.textContent == "Remove from cart"){
            console.log(cartlist);
            cartlist = cartlist.filter(tv => tv != event.target.id);
            cart.textContent = "Add to Cart";
          }else{
            cartlist.push(event.target.id);
            cart.textContent = "Remove from cart" ;
          }
          tempA = JSON.stringify(cartlist);
          localStorage.setItem('name',tempA);
          
        })
        img.src = tvs[i].img;
        newDiv.append(img);
        name.append(tvs[i].name);
        newDiv.appendChild(name);
        newDiv.append(subDiv1);
        newDiv.append(subDiv2);
        size.append(tvs[i].size + " inchs");
        subDiv1.appendChild(size);
        if(tvs[i].deal > 0){
          price.classList.add('deal');
          price.append('$' + tvs[i].price + " Saving $" + tvs[i].deal);
        }else{
          price.append('$' + tvs[i].price);
        }
        
        subDiv2.appendChild(price);
        newDiv.appendChild(cart)
        newDiv.classList.add('tv');
        container.append(newDiv);
    }
}

function dealLoad(){
  currentFilter = tvs;
  dealfilter();
  updateList();
}
if(sessionStorage.getItem("deal") == "y"){
  var deal = document.getElementById("Deal");
  deal.checked = true;
  dealLoad();
  sessionStorage.removeItem("deal");
}else{
  createList();
}


function updateList(){
    const container = document.getElementById('list');
    const numberOfDivs = currentFilter.length;

    for (let i = 0; i < numberOfDivs; i++) {
        const newDiv = document.createElement('div');
        const subDiv1 = document.createElement('div');
        subDiv1.classList.add('info');
        const subDiv2 = document.createElement('div');    
        subDiv2.classList.add('price');
        const price = document.createElement('h2');
        const name = document.createElement('h1');
        const size = document.createElement('h3');
        const img = document.createElement('img');
        img.src = currentFilter[i].img;
        newDiv.append(img);
        name.append(currentFilter[i].name);
        newDiv.appendChild(name);
        newDiv.append(subDiv1);
        newDiv.append(subDiv2);
        size.append(currentFilter[i].size + " inchs");
        subDiv1.appendChild(size);
        const cart = document.createElement('button')
        
        if(localStorage.getItem("name").includes(currentFilter[i].name)){
          cart.append('Remove from cart');
        }else{
          cart.append('Add to cart');
        }
        
        cart.id=currentFilter[i].name;
        cart.addEventListener('click', function(event){
          var tempA = [];
          cartlist.push(event.target.id);
          if(cart.textContent == "Remove from cart"){
            cartlist = cartlist.filter(tv => tv != event.target.id);
            cart.textContent = "Add to Cart";
          }else{
            cart.textContent = "Remove from cart" ;
          }
          tempA = JSON.stringify(cartlist);
          localStorage.setItem('name',tempA);
          
        })
        if(currentFilter[i].deal > 0){
          price.classList.add('deal');
          price.append('$' + currentFilter[i].price + " Saving $" + currentFilter[i].deal);
        }else{
          price.append('$' + currentFilter[i].price);
        }
        subDiv2.appendChild(price);
        newDiv.appendChild(cart)
        newDiv.classList.add('tv');
        container.append(newDiv);
    }
}


function filtered() {
  var fourKbox = document.getElementById("fourK");
  var under500 = document.getElementById("under500");
  var between500and750 = document.getElementById("between500and750");
  var between750and1000 = document.getElementById("between750and1000");
  var between1000and1500 = document.getElementById("between1000and1500");
  var above1500 = document.getElementById("above1500");
  var sony = document.getElementById("Sony");
  var lG = document.getElementById("LG");
  var tCL = document.getElementById("TCL");
  var hisense = document.getElementById("Hisense");
  var vizio = document.getElementById("Vizio");
  var samsung = document.getElementById("Samsung");
  var philips = document.getElementById("Philips");
  var oLED = document.getElementById("OLED");
  var deal = document.getElementById("Deal");
  clearAllDivs();
  currentFilter = [];
  var needsReset = true;
  if(sony.checked == true){
    brandFilter("Sony");
    needsReset = false;
  }
  if(lG.checked == true){
    brandFilter("LG");
    needsReset = false;
  }
  if(tCL.checked == true){
    brandFilter("TCL");
    needsReset = false;
  }
  if(hisense.checked == true){
    brandFilter("Hisense");
    needsReset = false;
  }
  if(vizio.checked == true){
    brandFilter("Vizio");
    needsReset = false;
  }
  if(samsung.checked == true){
    brandFilter("Samsung");
    needsReset = false;
  }
  if(philips.checked == true){
    brandFilter("Philips");
    needsReset = false;
  }
  if(needsReset){
    currentFilter = tvs;
  }

  if (fourKbox.checked == true){
    fourKfilter();
  } 
  if (oLED.checked == true){
    oLEDfilter();
  } 
  if (deal.checked == true){
    dealfilter();
  } 
  if(all.checked == true){

  }else if(under500.checked == true){
    filterPrice(0,500);
  }else if(between500and750.checked == true){
    filterPrice(500,750);
  }else if(between750and1000.checked == true){
    filterPrice(750,1000);
  }else if(between1000and1500.checked == true){
    filterPrice(1000,1500);
  }else if(above1500.checked == true){
    filterPrice(1500,8000);
  }

  updateList();
}




