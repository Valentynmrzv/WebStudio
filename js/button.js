
document.querySelector(".button__btn.all-btn").addEventListener('click', function () {
    document.querySelector(".samples__item.site").classList.remove('hidden');
    document.querySelector(".samples__item.application").classList.remove('hidden');
    document.querySelector(".samples__item.design").classList.remove('hidden');
    document.querySelector(".samples__item.marketing").classList.remove('hidden');
    
});
document.querySelector(".button__btn.site-btn").addEventListener('click', function () {
    document.querySelector(".samples__item.site").classList.remove('hidden');
    document.querySelector(".samples__item.application").classList.add('hidden');
    document.querySelector(".samples__item.design").classList.add('hidden');
    document.querySelector(".samples__item.marketing").classList.add('hidden');
});
document.querySelector(".button__btn.application-btn").addEventListener('click', function () {
    document.querySelector(".samples__item.application").classList.remove('hidden');
    document.querySelector(".samples__item.site").classList.add('hidden');
    document.querySelector(".samples__item.design").classList.add('hidden');
    document.querySelector(".samples__item.marketing").classList.add('hidden');
});
document.querySelector(".button__btn.design-btn").addEventListener('click', function () {
    document.querySelector(".samples__item.design").classList.remove('hidden');
    document.querySelector(".samples__item.site").classList.add('hidden');
    document.querySelector(".samples__item.application").classList.add('hidden');
    document.querySelector(".samples__item.marketing").classList.add('hidden');
});
document.querySelector(".button__btn.marketing-btn").addEventListener('click', function () {
    document.querySelector(".samples__item.marketing").classList.remove('hidden');
    document.querySelector(".samples__item.site").classList.add('hidden');
    document.querySelector(".samples__item.application").classList.add('hidden');
    document.querySelector(".samples__item.design").classList.add('hidden');
});
