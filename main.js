const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function (item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      tabsBtn.forEach(function (item) {
         item.classList.remove('active');
      })

      currentBtn.classList.add('active');

      tabsItems.forEach(function (item) {
         item.classList.remove('active');
      })

      currentTab.classList.add('active');
   })
});



const acc = document.querySelectorAll(".acc");

acc.forEach(function (e) {
   e.addEventListener('click', function (e) {
      const self = e.currentTarget;
      const control = self.querySelector('.acc__control');
      const content = self.querySelector('.acc__content');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {

         content.style.maxHeight = content.scrollHeight + 'px';
      } else {
         content.style.maxHeight = null;
      }
   })
});