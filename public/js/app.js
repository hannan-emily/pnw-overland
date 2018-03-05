$(document).ready(function() {

//delete one trail from this user's favorite list
  $('.delete').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: $(this).attr('href'),
      method: 'DELETE'
    }).done(function(data){
      location.reload();
    })
  });

// //update the note content on a specific favorite trail
//   $('.edit').on('click', function(e){
//     console.log("hit the edit route in app.js")
//     e.preventDefault();
//     $.ajax({
//       url: $(this).attr('href'),
//       method: 'PUT',
//       data: {note: $("#note").val()}
//     }).done(function(data){
//       console.log(data);
//       location.reload();
//     });
//   });
// });

	$('.edit-user').submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: $(this).attr('action'),
			method: "PUT",
			data: {
				name: $('#authName').val(),
        email: $('#authEmail').val(),
        password: $('#authEmailpassword').val()
			}
		}).done(function(data) {
			console.log(data);
			window.location.href = '/profile';
		});
	});

//
// $('.put-form').on('submit', function(e) {
//   e.preventDefault();
//   var teamElement = $(this);
//   var teamUrl = teamElement.attr('action');
//   var teamData = teamElement.serialize();
//   $.ajax({
//     method: 'PUT',
//     url: teamUrl,
//     data: teamData
//   }).done(function(data) {
//     // get data returned from the PUT route
//     console.log(data);
//
//     // do stuff when the PUT action is complete
//     teamElement.remove();
//
//     // or, you can redirect to another page
//     window.location = '/teams';
//   });
// });
