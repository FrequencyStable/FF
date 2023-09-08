
   const MenuBar = document.getElementById('menu-bar')
   const Profile = document.getElementById('#Profile');

    function show(){
      MenuBar.classList.toggle('animation');
    }

    function gotoProfileFP(){
      window.location.href ="Profile.html";
    } 



    //Linking from FoodStore

    function gotoMenu(){
      window.location.href ="Foodstore.html";
      
    }
    function gotoProfile(){
      window.location.href ="./HTML/Profile.html"
    }
    function Drinks() {
      window.location.href = "./HTML/Drinks.html";
    } 
    
    function gotoDesert(){
      window.location.href ="./HTML/Desert.html";
    }
    
    function gotoVoucher(){
      window.location.href ="./HTML/Voucher.html";
    }

    //Linking from other Pages

    function gotoMenuFP(){
      window.location.href ="../Foodstore.html";
    }
    function DrinksFP() {
      window.location.href = "Drinks.html";
    } 
    function gotoDesertFP(){
      window.location.href ="Desert.html";
    }
    function gotoVoucherFP(){
      window.location.href ="Voucher.html";
    }
  
  
  //Voucher
  
  const counters = document.getElementById('numberCount');
  
  let counter = 0;
  
  const deletebtn1 = document.getElementById('btn1');
  const image1 = document.getElementById('img1');
  let hr1 = document.getElementById('hr-1');
  
  const deletebtn2 = document.getElementById('btn2');
  const image2 = document.getElementById('img2');
  let hr2 = document.getElementById('hr-2');
  
  const deletebtn3 = document.getElementById('btn3');
  const image3 = document.getElementById('img3');
  let hr3 = document.getElementById('hr-3');
  
  const deletebtn4 = document.getElementById('btn4');
  const image4 = document.getElementById('img4');
  let hr4 = document.getElementById('hr-4');

  // Voucher 

  function remove1() {
    image1.remove();
    deletebtn1.remove();
    hr1.remove();
    counter += 1;
    restartAnimation(counters);
    counters.innerHTML = counter;
    console.log(Voucher.childElementCount);
    vibrate()
    checking()
    
    localStorage.setItem('VR1','20')
    localStorage.setItem('HR1',image1.src)
  }
  
  function remove2() {
    image2.remove();
    deletebtn2.remove();
    hr2.remove();
    counter += 1;
    restartAnimation(counters);
    counters.innerHTML = counter;
    console.log(Voucher.childElementCount);
    vibrate()
    checking()  
    localStorage.setItem('VR2','30')
    localStorage.setItem('HR2',image2.src)
  }
  
  function remove3() {
    image3.remove();
    deletebtn3.remove();
    hr3.remove();
    counter += 1;
    restartAnimation(counters);
    counters.innerHTML = counter;
    console.log(Voucher.childElementCount);
    vibrate()
    checking()
    localStorage.setItem('VR3','25')
    localStorage.setItem('HR3',image3.src)
  }
  
  function remove4() {
    image4.remove();
    deletebtn4.remove();
    hr4.remove();
    counter += 1;
    restartAnimation(counters);
    counters.innerHTML = counter;
    console.log(Voucher.childElementCount);
    vibrate()
    checking()
    localStorage.setItem('VR4','15')
    localStorage.setItem('HR4',image4.src)
  }

  
  
  function restartAnimation(counters) {
    counters.classList.remove('display');
    void counters.offsetWidth;
    counters.classList.add('display');
  }
  
  
  
  const CP = document.querySelector('#CP');
  const Voucher = document.querySelector('#Voucher');
  
  function checking(){
    if(Voucher.childElementCount === 0){
      CP.style.display ='block';
      
    }
  }
  
  

  function vibrate() {
    if (Voucher.childElementCount === 0) {
      navigator.vibrate(200);
    }
  }

  // Generate Random IDs

const order_image1 = document.querySelectorAll('.food-img1');
const order_image2 = document.querySelectorAll('.food-img2');
const orderbutn = document.querySelectorAll('.order_button');
const orderbutn1 = document.querySelectorAll('.order_button1');

function changeIDs() {
  const characters = '0123456789';
  const limit = 8;
  let randIDs = 'ITEM_';

  for (let i = 0; i < limit; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randIDs += characters.charAt(randomIndex);
  }

  return randIDs;
}

orderbutn.forEach((button, index) => {
  button.addEventListener('click', () => {
    const key = 'ID'
    let storedID = localStorage.getItem(key);

    localStorage.setItem(key, order_image1[index].src);
    
    window.location.href = '../HTML/PlaceOrder.html';
  });
});

orderbutn1.forEach((button, index) => {
  button.addEventListener('click', () => {
    const key = 'ID'
    let storedID = localStorage.getItem(key);

    localStorage.setItem(key, order_image2[index].src);
    
    window.location.href = '../HTML/PlaceOrder.html';
  });
});


const second = document.querySelectorAll('.second');
const second1 = document.querySelectorAll('.second1');


second.forEach((button, index) => {
  button.addEventListener('click', () => {
    const key = 'ID'
    let storedID = localStorage.getItem(key);

    localStorage.setItem(key, order_image1[index].src);
    
    window.location.href = './HTML/PlaceOrder.html';
  });
});

second1.forEach((button, index) => {
  button.addEventListener('click', () => {
    const key = 'ID'
    let storedID = localStorage.getItem(key);

    localStorage.setItem(key, order_image2[index].src);
    
    window.location.href = './HTML/PlaceOrder.html';
  });
});








  
 
 

  
  
  
   
   
