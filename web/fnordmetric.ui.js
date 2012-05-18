FnordMetric.ui.navbar = function(elem, opts){

  elem.css('width', $('#viewport').width());

  var back = $('<a>')
    .addClass('button back')
    .html('&laquo;');

  elem.prepend(back);

  var head = $('<h1></h1>');
  for(ind in opts.breadcrumb){
    var cur = $('<a>').html(opts.breadcrumb[ind][0]);
    if (ind == (opts.breadcrumb.length - 1)){ 
    cur.addClass('current'); 
    } else {
      cur.append(' / ');
    }
    head.append(cur);
  };
  elem.append(head);

  for(ind in opts.buttons){
    var btn = $('<a>')
      .addClass('button')
      .click(opts.buttons[ind][1])
      .html(opts.buttons[ind][0]);
    elem.prepend(btn);
  }

}

FnordMetric.ui.modal = function(opts){
  width = $("#viewport").width() * 0.8;

  var dialog_elem = $('<div class="modal">')
    .append($('<div class="modal_inner">'))
    .css({
      "width": width,
      "height": opts.height,
      "marginLeft": (($("#viewport").width() - width) / 2),
      "display": "none"
    });

  if(opts.content){
    dialog_elem.html(opts.content);
  }    

  $("#viewport").append(dialog_elem);
  dialog_elem.show().addClass('visible');
  $('.modal_backdrop').show().addClass('visible');
}

FnordMetric.ui.close_modal = function(elem){
  $(elem).closest('.modal').removeClass('visible').fadeOut();
  $('.modal_backdrop').removeClass('visible').fadeOut();
}

FnordMetric.ui.resizable = function(elem){
  $('.resizable', $(elem)).each(function(){
    var wwperc = parseInt($(this).attr('data-width'));
    if (!wwperc || (wwperc < 1)){ wwperc = 100; }
    var wwidth = $('#viewport').width() * (wwperc/100.0);
    if(wwperc==100){ $(this).addClass('full_width'); } 
    else { wwidth -= 10; $(this).css('float', 'left'); }
    $(this).width(wwidth);
  });
}