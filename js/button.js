
// Обработчик события для кнопки .button__btn.all-btn
document.querySelector('.button__btn.all-btn').addEventListener('click', function() {
  var items = document.querySelectorAll('.samples__item.site, .samples__item.application, .samples__item.design, .samples__item.marketing');
  
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove('hidden');
  }
});

// Обработчик события для кнопки .button__btn.site-btn
document.querySelector('.button__btn.site-btn').addEventListener('click', function() {
  var siteItems = document.querySelectorAll('.samples__item.site');
  var otherItems = document.querySelectorAll('.samples__item.application, .samples__item.design, .samples__item.marketing');
  
  for (var i = 0; i < siteItems.length; i++) {
    siteItems[i].classList.remove('hidden');
  }
  
  for (var j = 0; j < otherItems.length; j++) {
    otherItems[j].classList.add('hidden');
  }
});

// Обработчик события для кнопки .button__btn.application-btn
document.querySelector('.button__btn.application-btn').addEventListener('click', function() {
  var applicationItems = document.querySelectorAll('.samples__item.application');
  var otherItems = document.querySelectorAll('.samples__item.site, .samples__item.design, .samples__item.marketing');
  
  for (var i = 0; i < applicationItems.length; i++) {
    applicationItems[i].classList.remove('hidden');
  }
  
  for (var j = 0; j < otherItems.length; j++) {
    otherItems[j].classList.add('hidden');
  }
});

// Обработчик события для кнопки .button__btn.design-btn
document.querySelector('.button__btn.design-btn').addEventListener('click', function() {
  var designItems = document.querySelectorAll('.samples__item.design');
  var otherItems = document.querySelectorAll('.samples__item.site, .samples__item.application, .samples__item.marketing');
  
  for (var i = 0; i < designItems.length; i++) {
    designItems[i].classList.remove('hidden');
  }
  
  for (var j = 0; j < otherItems.length; j++) {
    otherItems[j].classList.add('hidden');
  }
});

// Обработчик события для кнопки .button__btn.marketing-btn
document.querySelector('.button__btn.marketing-btn').addEventListener('click', function() {
  var marketingItems = document.querySelectorAll('.samples__item.marketing');
  var otherItems = document.querySelectorAll('.samples__item.site, .samples__item.application, .samples__item.design');
  
  for (var i = 0; i < marketingItems.length; i++) {
    marketingItems[i].classList.remove('hidden');
  }
  
  for (var j = 0; j < otherItems.length; j++) {
    otherItems[j].classList.add('hidden');
  }
});
