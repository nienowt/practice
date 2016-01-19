var tab = {};

tab.all = [];
tab.Ul = [];

tab.handleAddTab = function(){
  $('#add-list').on('click',function(){
    $(this).toggleClass('tab-select');
    $('.add').toggle();
  });
};

tab.handleClick = function(){
  $('#nav-tabs').on('click', 'li', function(){
    $('li').removeClass('tab-select');
    $(this).toggleClass('tab-select');
    var listCategory = $(this).text();
    console.log('this',$(this).text());
    $('ul').show();
    $('ul').not('#nav-tabs').not('.' +listCategory).hide();
    console.log(listCategory);
  });
  $('li.main').click();
};

tab.handleButton = function(){
  $('nav ul').on('click', 'button', function(){
    var newListTab = $('.new-list').val();
    $('.add').hide();
    if (newListTab) {
      $('#nav-tabs').append('<li class="nav-li dropshadow newTab">' + newListTab + '</li>');
      tab.all.push(newListTab);
      $('#uls').append('<ul class ="dropshadow' + newListTab +'"></ul>');
    };
    localStorage.setItem('tabs', JSON.stringify(tab.all));
    $('li').removeClass('tab-select');
    $('.newTab').toggleClass('tab-select');
    $('#list').hide();
  });
};

tab.onPageLoad = function(){
  if(localStorage.tabs) {
    tab.all = JSON.parse(localStorage.getItem('tabs'));
    tab.all.forEach(function(item){
      var item = item;
      $('#nav-tabs').append('<li class="nav-li dropshadow">' + item + '</li>');
      $('#uls').append('<ul class="dropshadow toDoUl ' + item +'"></ul>');
    });
  };
  $('.add').hide();
};

tab.onPageLoad();
tab.handleClick();
tab.handleAddTab();
tab.handleButton();


//want to show only those list items tagged with the selected tab name.
