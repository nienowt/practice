var tab = {};

tab.handleClick = function(){
  $('.nav-li').on('click',function(){
    $(this).toggleClass('tab-select');
    if ($(this).hasClass('tab-select')) {
      $('nav ul').append('<li class="nav-li add"><input type="text" placeholder="List Name" class="new-list dropshadow"></input><button type="submit" class="dropshadow addList">Add</button></li>');
    };
  });
};

tab.handleButton = function(){
  $('nav ul').on('click', 'button', function(){
    $('.add').hide();
    var newListTab = $('.new-list').val();
    $('nav ul').append('<li class="nav-li dropshadow newTab">' + newListTab + '</li>');
    $('li').removeClass('tab-select');
    $('.newTab').toggleClass('tab-select');
    $('#list').hide();
    $('body').append('<ul class ="' + newListTab + '"></ul>');
  });
};

tab.handleClick();
tab.handleButton();
