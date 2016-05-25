$(document).ready(function(){
	var h = $(window).height();
	$(".jqHeight").css("height", h);

//	if($(window).scrollTop() > 5){
//		$("#header").css("color","#394759");
//	};
	
	$("#menubtn").on('click', function(e){
		e.preventDefault();
		$("#menubk").fadeIn("fast");
		$("#menucontent").addClass('slide');
	});

	$("#menubk").on('click', function(e){
		e.preventDefault();
		$("#menubk").fadeOut("fast");
		$("#menucontent").removeClass('slide');
	});

	 $("a[href='#content']").click(function() {
     $('html, body').animate({scrollTop: $("#content").offset().top}, 'slow');
     return false;
  });


});

$(window).resize(function(){
	var h = $(this).height();
	$(".jqHeight").css("height", h);

});





//$("#menubk").on('click', function(e){
//	e.preventDefault();
//	$("#menucontent").removeClass('slide');
//});