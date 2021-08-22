 // All section id 

 document.getElementById('memory-8GB').addEventListener('click', function() {
     updateValue('memory-cost', 0)
     totalPrice()
 })
 document.getElementById('memory-16GB').addEventListener('click', function() {
     updateValue('memory-cost', 180)
     totalPrice()
 })
 document.getElementById('SSD-256GB').addEventListener('click', function() {
     updateValue('storage-cost', 0)
     totalPrice()
 })
 document.getElementById('SSD-512GB').addEventListener('click', function() {
     updateValue('storage-cost', 100)
     totalPrice()
 })
 document.getElementById('SSD-1TB').addEventListener('click', function() {
     updateValue('storage-cost', 180)
     totalPrice()
 })
 document.getElementById('free-delivery').addEventListener('click', function() {
     updateValue('delivery-cost', 0)
     totalPrice()
 })
 document.getElementById('charge-delevery').addEventListener('click', function() {
     updateValue('delivery-cost', 20)
     totalPrice()
 })

 // function calling 

 function updateValue(id, value) {
     var costEliment = document.getElementById(id)
     costEliment.innerText = value;

 }

 function totalPrice() {

     var PriceElement = document.getElementById('best-price')
     var Price = Number(PriceElement.innerText);

     var memoryPriceElement = document.getElementById('memory-cost')
     var MemoryPrice = Number(memoryPriceElement.innerText);

     var storageCostElement = document.getElementById('storage-cost')
     var StorageCost = Number(storageCostElement.innerText);

     var deliveryCostEliment = document.getElementById('delivery-cost')
     var DeliveryCost = Number(deliveryCostEliment.innerText);

     var allPrice = document.getElementById('extra-total-cost');

     allPrice.innerText = Price + MemoryPrice + StorageCost + DeliveryCost;

     var intotalEliment = document.getElementById('intotal-price');
     intotalEliment.innerText = allPrice.innerText;

 }

 // add stevekaku section 

 const discounttotalPrice = document.getElementById('extra-total-cost');
 const discountPrice = document.getElementById('intotal-price');
 const pomoInput = document.getElementById('pomo-input');
 const applyBtn = document.getElementById('apply-btn');

 applyBtn.addEventListener('click', function() {
     if (pomoInput.value == 'stevekaku') {
         var percentRate = Number(discounttotalPrice.innerText) * (20 / 100)
         discountPrice.innerText = Number(discounttotalPrice.innerText) - percentRate;
         // input clear 
         pomoInput.value = '';
     }
 })