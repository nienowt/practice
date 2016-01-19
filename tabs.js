var tab = {};

tab.all = [];

tab.handleAdd = function(){
  $('#add-list').on('click',function(){
    $(this).toggleClass('tab-select');
    $('.add').toggle();
  });
};

tab.handleClick = function(){
  $('#nav-tabs').on('click', 'li', function(){
    $('li').removeClass('tab-select');
    $(this).toggleClass('tab-select');
    $('.newList').hide();
    var listCategory = $(this).text();
    if($('li').hasClass(listCategory)) {//false??
      $('.'+ listCategory).show(); //show only list items with tab-specific class (hopefully)
    };
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
      $('#nav-tabs').append('<div class="itemDiv"><li class="nav-li dropshadow">' + item + '</li></div>');
    });
  };
  $('.add').hide();
};

tab.onPageLoad();
tab.handleClick();
tab.handleAdd();
tab.handleButton();


//want to show only those list items tagged with the selected tab name.
