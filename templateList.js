
function ListItem(text, id){
  this.text = text;
  this.id = id;
};

ListItem.all = [];
var toAppend = function(tabClass,text){
  return '<li class="newList dropshadow '+ tabClass +'">' + text + '</li>';
};

ListItem.handleNewItemButton = function(){
  $('.add-item').on('click', function(event){
    event.preventDefault();
    var item = $('#newItem').val();
    if (item) {
      var tabClass = $('.tab-select').text();
      var pushNew = new ListItem(item, tabClass);
      $('ul.'+tabClass).append(toAppend(tabClass,item));
      ListItem.all.push(pushNew);
    };
    localStorage.setItem('todo',JSON.stringify(ListItem.all));
    $('#newItem').val('');
  });
};

ListItem.addRemove = function(){
  $('#uls').on('click','.newList', function(){
    $(this).toggleClass('to-remove');
    if ($('li.to-remove')) {
      $('.delete-selected').fadeIn();
    }
  });
};

ListItem.removeList = function(){
  var tabs = $('.tab-select').not('.main').text();
  if ($('ul.',tabs).children().length < 1) {
    $('.tab-select').hide();
    var position = tab.all.indexOf(tabs);
    tab.all.splice(position,1);
    localStorage.setItem('tabs', JSON.stringify(tab.all));
  }
  $('#list').show();
};

ListItem.removeItem = function(){
  $('.delete-selected').on('click', function(event){
    marked = [];
    $('li.to-remove').each(function(){
      marked.push($(this));
    });
    $('.to-remove').fadeOut();
    marked.forEach(function(item){
      var toRemove = item.text();
      var position;
      ListItem.all.forEach(function(item){
        if(item.text === toRemove) {
          position = ListItem.all.indexOf(item);
        }
      });
      ListItem.all.splice(position, 1);
      ListItem.marked = [];
    });
    localStorage.setItem('todo',JSON.stringify(ListItem.all));
    $('.delete-selected').fadeOut();
    ListItem.removeList();
  });
};


ListItem.onPageLoad = function(){
  $('.delete-selected').hide();
  if (localStorage.todo) {
    ListItem.all = JSON.parse(localStorage.getItem('todo'));
    ListItem.all.forEach(function(item) {
      var tabClass = item.id;
      text = item.text;
      $('ul.'+tabClass).append(toAppend(tabClass, text));
    });
  }
};

ListItem.handleNewItemButton();
ListItem.onPageLoad();
ListItem.addRemove();
ListItem.removeItem();
