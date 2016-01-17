var tab = {};

tab.handleClick = function(){
  $('.nav-li').on('click',function(){
    $(this).toggleClass('tab-select');
    if ($(this).hasClass('tab-select')) {
      $('nav ul').append('<li class="nav-li"><input type="text" placeholder="List Name" class="new-list dropshadow"></input><button type="submit" class="dropshadow addList">Add</button></li>');
    };
  });
};


tab.handleClick();
