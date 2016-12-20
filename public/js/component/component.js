var $radioList = $('.radio_box .radio_block');
$radioList.on('tap', function(){
   var $self = $(this);
   if(!$self.hasClass('selected')){
      $radioList.removeClass('selected');
      $self.addClass('selected');
   }
});

var $selectTitle = $('.select-title');
var $selectList = $('.select-list');
$selectTitle.on('tap', function(){
    $(this).siblings('.select-list').toggle();
});
$selectList.find('.select-li').on('tap', function(){
   var $self = $(this);
   var $parent = $self.parent('.select-list');
   var text = $self.text();
   var val = $self.data('val');
   console.log(text, val);
   $parent.siblings('.select-title').text(text).data('val', val);
   $parent.hide();
});