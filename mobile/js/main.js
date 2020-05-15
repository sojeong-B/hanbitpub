var hanbit_m={
	keyvisual :function(){
		$(".keyvisual").mobileDragEvent({total:4});
		var menuOpen=false;

		$(".tab").click(function(e){
			e.preventDefault();
			
			if(menuOpen == false){
				$("body").addClass("fixed");
				$(".menu").animate({left:0}, 300, function(){
					menuOpen=true;
					$(".tab").addClass("open");
				});
			}
			else{
				$("body").removeClass("fixed");
				$(".menu").animate({left:"-100%"}, 300, function(){
					menuOpen=false
					$(".tab").removeClass("open");
					$("#gnb > ul > li").removeClass("active");
					$("#gnb ul ul").slideUp(300);
				})
			}
			
		});	
	},
	navigation : function(){
		$("#gnb > ul > li").click(function(e){
			e.preventDefault();
			
			if($(this).hasClass("active") == false){
				$("#gnb > ul > li").removeClass("active");
				$(this).addClass("active");
				$("#gnb ul ul").slideUp(300);
				$(this).find("ul").slideDown(300);
			}
			else{
				$(this).removeClass("active");
				$(this).find("ul").slideUp(300);
			}
		});
	},
	notice : function(){
		$(".notice .sub_title li").click(function(e){
			e.preventDefault();
			$(".notice .sub_title li").removeClass("active");
			$(this).addClass("active");

			if($(this).index() == 0){
				$(".zone .event_zone").hide();
				$(".zone .news_zone").show();
			}
			else{
				$(".zone .event_zone").show();
				$(".zone .news_zone").hide();
			}
		});
	},
	book : function(){
		var swiper1=new Swiper(".new_list .swiper-container", {
			slidesPerView: 3,
			spaceBetween: 5,
			pagination: {
				el: ".swiper-pagination",
				clickable: true
			}
		});
		var swiper2=new Swiper(".best_list .swiper-container", {
			slidesPerView: 3,
			spaceBetween: 5,
			pagination: {
				el: ".swiper-pagination",
				clickable: true
			}
		});

		var titleN=0;

		$(".book .sub_title li").eq(titleN).addClass("active");
		$(".book_list > div").eq(titleN).addClass("active");

		$(".book .sub_title li").click(function(e){
			e.preventDefault();
			titleN=$(this).index();
			console.log(titleN);
			$(".sub_title li").removeClass("active");
			$(".book_list > div").removeClass("active");
			$(".book .sub_title li").eq(titleN).addClass("active");
			$(".book_list > div").eq(titleN).addClass("active");
		});
	}
}		

	


