// var listItem={};
//
// listItem.all = [];
// listItem.marked = [];
//
// listItem.handleButton = function(){
//   $('.add-item').on('click', function(event){
//     event.preventDefault();
//     var item = $('#newItem').val();
//     if (item) {
//       if ($('li').hasClass('tab-select')) {
//         var tabClass = $('.tab-select').text();
//         $('.'+tabClass).append('<li class="newList dropshadow" id="'+ tabClass +'">' + item + '</li>');
//         $('#newItem').val('');
//       };
//     };
//     listItem.all.push([tabClass,item]);
//     localStorage.setItem('todo',JSON.stringify(listItem.all));
//   });
// };
//
// listItem.addRemove = function(){
//   $('#list').on('click','li', function(){
//     $(this).toggleClass('newList');
//     $(this).toggleClass('to-remove');
//     if ($('li.to-remove')) {
//       $('.delete-selected').fadeIn();
//     }
//   });
// };
//
// listItem.handleRemove = function(){
//   $('.delete-selected').on('click', function(event){
//     // if ($('li').hasClass('tab-select')) {
//     // var tabClass = $('li.newList').attr('id');  //change to find the value of li 's id'
//     // };
//     $('li.newList').not('.to-remove').each(function(){
//       var tabClass = $(this).attr('id');
//       console.log('this',this);
//       console.log(tabClass);
//       listItem.marked.push([tabClass,$(this).text()]);
//       console.log(listItem.marked);
//     });
//     listItem.all = listItem.marked;
//     $('.to-remove').fadeOut();
//     localStorage.setItem('todo',JSON.stringify(listItem.all));
//     $('.delete-selected').fadeOut();
//   });
// };
//
// listItem.onPageLoad = function(){
//   if(localStorage.todo){
//     listItem.all = JSON.parse(localStorage.getItem('todo'));
//     listItem.all.forEach(function(item){
//
//       var insertItem = item[1];
//       var list = item[0];
//       $('.'+list).append('<div class="itemDiv"><li class="newList dropshadow">' + insertItem + '</li></div>');
//     });
//   };
// };
//
//
//
// $('.delete-selected').hide();
// listItem.onPageLoad();
// listItem.handleButton();
// listItem.addRemove();
// listItem.handleRemove();
