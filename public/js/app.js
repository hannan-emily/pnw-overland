$(document).ready(function() {

  $('.delete').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: $(this).attr('href'),
      method: 'DELETE'
    }).done(function(data){
      location.reload();
    })
  });

  $('.edit').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      url: $(this).attr('href'),
      method: 'PUT',
      data:
      {note: $("#note").val()}
    }).done(function(data){
      window.location.href = '/favorite-trails';
    });
  });
});
