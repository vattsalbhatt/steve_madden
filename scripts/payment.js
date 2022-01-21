document.querySelector(".pay").addEventListener("click", () => {
  let pay = document.querySelector("#paybtn");
  pay.style.display = "block";
  document.querySelector(".pay").style.border = "1px solid black";
});

document.querySelector("#pay1").addEventListener("click", () => {
  let cash = document.querySelector("#cashbtn");
  cash.style.display = "block";
  document.querySelector("#pay1").style.border = "1px solid black";
});

document.querySelector("#cashbtn").addEventListener("click", () => {
  window.location.href = "success.html";
});
document.querySelector("#paybtn").addEventListener("click", () => {
  window.location.href = "card.html";
});




let drive = document.getElementById('prier');

let cartitems = JSON.parse(localStorage.getItem('cartitems')) || [];

let mat = document.getElementById('detail');

function append(arr){
  arr.forEach(({url,name,color,size,Mrp,price,p})=>{

    let div1 = document.createElement('div');

    let image = document.createElement('img');
    image.setAttribute('class','pogo');
    image.src = url;

    div1.append(image)

    let div2 = document.createElement('div');
    div2.setAttribute('class','divsec')

    let nam = document.createElement('h4');
    nam.textContent = name;

    let colsi = document.createElement('h5');
    colsi.textContent = `${color} / ${size}` ;
    colsi.setAttribute('class','blocker');

    let upc = document.createElement('h5');
    upc.textContent = `U.P.C : N.A`;
    upc.setAttribute('class','blocker');

    div2.append(nam,colsi,upc);


    let div3 = document.createElement('div');
    div3.setAttribute('class',"divthird")

    let pri = document.createElement('h4');
    pri.textContent = `${price}`;

    let mrp = document.createElement('h5');
    
    mrp.textContent = `${Mrp}`;
    mrp.setAttribute('class','crosser');
     
    div3.append(pri,mrp);

    let maindiv = document.createElement('div');
    maindiv.append(div1,div2,div3)

    drive.append(maindiv);

    
  })

  
}

append(cartitems);


