var listItem={};

listItem.all = [];
listItem.marked = [];

listItem.handleButton = function(){
  $('.add-item').on('click', function(event){
    event.preventDefault();
    var item = $('#newItem').val();
    if (item) {
      $('#list').append('<div class="itemDiv"><li class="newList">' + item + '</li></div>');
      $('#newItem').val('');
    };
    listItem.all.push(item);
    localStorage.setItem('todo',JSON.stringify(listItem.all));
  });
};

listItem.addRemove = function(){
  $('ul').on('click','li', function(){
    $(this).toggleClass('newList');
    $(this).toggleClass('to-remove');
    if ($('li.to-remove')) {
      $('.delete-selected').fadeIn();
    }
  });
};

listItem.handleRemove = function(){
  $('.delete-selected').on('click', function(event){
    $('li.to-remove').each(function(){
      listItem.marked.push($(this));
    });
    $('.to-remove').fadeOut();
    listItem.marked.forEach(function(item){
      var toRemove = item.text();
      var position = listItem.all.indexOf(toRemove);
      listItem.all.splice(position, 1);
      listItem.marked = [];
    });
    $('li.to-remove').removeClass('to-remove');
    localStorage.setItem('todo',JSON.stringify(listItem.all));
    $('.delete-selected').fadeOut();
  });
};

listItem.onPageLoad = function(){
  listItem.all = JSON.parse(localStorage.getItem('todo'));
  listItem.all.forEach(function(item){
    var item = item;
    $('#list').append('<div class="itemDiv"><li class="newList">' + item + '</li></div>');
  });
};

$('.delete-selected').hide();
listItem.onPageLoad();
listItem.handleButton();
listItem.addRemove();
listItem.handleRemove();
