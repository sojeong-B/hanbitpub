var hanbit={
	owl : function(){
		var owl=$(".owl-carousel");

		owl.owlCarousel({
			margin: 0,
			nav: false,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				2000: {
					items: 1
				}
			}
		});
		owl.trigger("refresh.owl.carousel");
	},
	navigation : function(){
		$("#gnb > ul > li").hover(
			function(){
				$(this).addClass("active");
				$(this).children("ul").stop().slideDown(300);
			},
			function(){
				$(this).removeClass("active");
				$(this).children("ul").stop().slideUp(300);
			}
		);

		$("#gnb > ul > li > a").focusin(function(){
			$(this).parent().addClass("active");
			$(this).parent().children("ul").stop().slideDown(300);
		});
		$("#gnb ul li li:last-child a").focusout(function(){
			$(this).parents("li").removeClass("active");
			$(this).parent().parent().parent().children("ul").stop().slideUp(300);
		});
	},
	banner : function(){
		$(".contents .banner1").hover(
			function(){
				$(this).addClass("active");
				$(".contents .banner1 strong, .contents .banner1 em").css({"color" : "#fff"});
				$(".contents .banner1 .icon").addClass("active");
			},
			function(){
				$(this).removeClass("active");
				$(".contents .banner1 strong, .contents .banner1 em").css({"color" : "#000"});
				$(".contents .banner1 .icon").removeClass("active");
			}
		)
		$(".contents .banner2").hover(
			function(){
				$(this).addClass("active");
				$(".contents .banner2 strong, .contents .banner2 em").css({"color" : "#fff"});
				$(".contents .banner2 .icon").addClass("active");
			},
			function(){
				$(this).removeClass("active");
				$(".contents .banner2 strong, .contents .banner2 em").css({"color" : "#000"});
				$(".contents .banner2 .icon").removeClass("active");
			}
		)
		$(".contents .banner3").hover(
			function(){
				$(this).addClass("active");
				$(".contents .banner3 strong, .contents .banner3 em").css({"color" : "#fff"});
				$(".contents .banner3 .icon").addClass("active");
			},
			function(){
				$(this).removeClass("active");
				$(".contents .banner3 strong, .contents .banner3 em").css({"color" : "#000"});
				$(".contents .banner3 .icon").removeClass("active");
			}
		)
	},
	gallery : function(){
		var gallery=$(".family_area ul"); // 움직이는 대상 갤러리 변수입니다.
		var gallerypos=0; // 갤러리 위치 변수입니다.
		var galleryw=175; // 갤러리 이동 크기 변수입니다.


		function leftMoving(node=gallery, pos=gallerypos, w=galleryw){
			pos-=w;
			$(node).animate({left:pos}, 500, function(){
				$(this).append(node.find("li").first());
				pos+=w;
				$(this).css({left:pos});
			});
		}
		function rightMoving(node=gallery, pos=gallerypos, w=galleryw){
			$(node).prepend(node.find("li").last());
			pos-=w;
			$(node).css({left:pos});

			pos+=w;
			$(node).animate({left:pos}, 500);
		}

		$(".left_btn").click(function(e){
			e.preventDefault();
			leftMoving();
		});
		$(".right_btn").click(function(e){
			e.preventDefault();
			rightMoving();
		});

		var id=setInterval(function(){
			rightMoving();
		},6000)
	},
	find : function(){
		$(".area_zone dt a").click(function(e){
			e.preventDefault();
			$(".area_zone li").removeClass("selected"); 
			$(this).parent().parent().addClass("selected"); 

			if($(this).parent().next("dd").css("display") == "none"){
				$(this).addClass("active");
				$(".area_zone dd").slideUp(300);
				$(this).parent().next("dd").slideDown(300);
			}
			else{
				$(this).removeClass("active");
				$(this).parent().next("dd").slideUp(300);
			}
		});
		var listName="";
		$(".area_zone dd a").click(function(e){
			e.preventDefault();
			var $dd=$(this).parent().parent().parent();
			listName=$(this).text();

			$dd.slideUp(300);
			$dd.prev("dt").find("a").removeClass("active");
			$dd.prev("dt").find("a").text(listName);
		});
	},
	controll : function(){
		var mediaN=0;
		var mediaPos=0;

		$(".controlls li").eq(mediaN).addClass("active");

		$(".controlls li").click(function(e){
			e.preventDefault();
			$(".controlls li").removeClass("active");
			$(this).addClass("active");
			mediaN=$(this).index();
			mediaPos=mediaN*(-1)*368
			$(".meida_moving").animate({left: mediaPos}, 300);
		});
	},
	notice : function(){
		var titleN=0;
		$(".notice .title li").eq(titleN).addClass("active");
		$(".description div").eq(titleN).addClass("active");

		$(".title li").click(function(e){
			e.preventDefault();
			titleN=$(this).index();
			$(".title li").removeClass("active"); // 2020-04-14
			$(".description div").removeClass("active");
			$(".notice .title li").eq(titleN).addClass("active");
			$(".description div").eq(titleN).addClass("active");
		});
	}
}

	