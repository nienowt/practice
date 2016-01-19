var listItem={};

listItem.all = [];
listItem.marked = [];

listItem.handleButton = function(){
  $('.add-item').on('click', function(event){
    event.preventDefault();
    var item = $('#newItem').val();
    if (item) {
      if ($('li').hasClass('tab-select')) {
        var tabClass = $('.tab-select').text();
        var toStore = '<li class="newList dropshadow '+ tabClass +'">' + item + '</li>';
        $('#list').append(toStore);
        $('#newItem').val('');
      };
    };
    listItem.all.push(toStore);
    localStorage.setItem('todo',JSON.stringify(listItem.all));
  });
};

listItem.addRemove = function(){
  $('#list').on('click','li', function(){
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
  if (localStorage.todo){
    listItem.all = JSON.parse(localStorage.getItem('todo'));
    listItem.all.forEach(function(item){
      var toAppend = item;
      $('#list').append(toAppend);
    });
  };
};



$('.delete-selected').hide();
listItem.onPageLoad();
listItem.handleButton();
listItem.addRemove();
listItem.handleRemove();
