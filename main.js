
var portfolioItem = $("figure");
var i=0;


$("#back").hide();
 portfolioItem.each(function() {
    $(".contentBox",this).attr("id","slide"+i);
    i++;
});

 var btn = '<section id="btn"><span class="prev"><i class="fas fa-arrow-circle-left"></i></span><span class="next"><i class="fas fa-arrow-circle-right"></i></span><span class="btn_close"><i class="fas fa-window-close fa-2x"></i></span></section>';

 $(".contentBox").prepend(btn);


function top_slide(){
	var height=$(window).scrollTop()+100;
	return height;
};

function height_contentBox() {
  if($("body").height() > 700) {
	 window_height = $("body").height()+58;
	 return window_height;
  }
  else {
    window_height = $("body").height()*2;
    return window_height;
  }
}

function next() {
	$(".next").click(function(){
        $(this).parent().parent().fadeOut(300);
        num = num_slide();
        num_id = $(this).closest('.select').attr('id').substring(5,10);
        num_id_next = num.indexOf(num_id)+1;
        if(num.indexOf(num_id)==num.length-1){
            $("#slide"+num[0]).show().css({top:top_slide()+"px"});
        }
        else {
            $("#slide"+num[num_id_next]).show().css({top:top_slide()+"px"});
        }
    });
}

function prev() {
	$(".prev").click(function(){
        $(this).parent().parent().fadeOut(300);
        num = num_slide();
        num_id = $(this).closest('.select').attr('id').substring(5,10);
        num_id_prev = num.indexOf(num_id)-1;
        if(num.indexOf(num_id)==0){
            $("#slide"+num[num.length-1]).show().css({top:top_slide()+"px"});
        }
        else {
            $("#slide"+num[num_id_prev]).show().css({top:top_slide()+"px"});
        }
    });
}

function num_slide(){
    var num=[];
    $(".select").each(function(){
        num.push($(this).attr("id").substring(5,));
    });
    return num;
}

function close() {
	$(".btn_close i").click(function() {
	$(".contentBox").fadeOut(400);
	$("#back").fadeOut(400);
});
}


function all() {
    $("#box figure").show();
    $(".contentBox").addClass("select");

    $("figure").on("click",function(event){
        $("#back").show().css({height:height_contentBox()+"px"});
        $(this).find(".contentBox",this).show().css({top:top_slide()+"px"});
    });

    next();
    prev();
    close();

}

all();
