$(function(){

	// スマホメニューの表示切り替え
	$('#show').on("click", function(){
		// $('#menu_sp').slideToggle();
		$('#menu_sp').fadeToggle(700);
		return false;
	});


	// ウインドウサイズを大きくした場合：toggleを初期化
	var timer = false;
	$(window).resize(function() {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			if($(window).width() >= 401){
				$("#menu_sp").css('display', 'none');
			}
		}, 200);
	});


	// 「#back-to-top」を消す
	$("#back-to-top").hide();

	// スクロールが十分されたら「#back-to-top」を表示
	// スクロールが戻ったら「#back-to-top」を非表示
	$(window).scroll(function(){
		if($(window).width() < 400){
			return;
		}
		$("#pos").text($(this).scrollTop());
		if($(this).scrollTop() > 100) {
			$("#back-to-top").fadeIn();
		} else {
			$("#back-to-top").fadeOut();
		}
	});

	// 「#back-to-top」がクリックされたら上に戻る
	$("#back-to-top a").click(function(){
		$("body,html").animate({
			scrollTop:0
		}, 500);
		return false;
	});

});