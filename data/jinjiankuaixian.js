var bill_id="";
$(function(){
	$.ajax({
		   dataType: "json",
		   url: "http://182.92.228.78/demo/test/get",
		   success: function(data){
			   bill_id = data.id
			   $("#usernames").val(data.name)

			   $("#trans_appid").val(data.trans_appid)

			   $("#trans_openid").val(data.trans_openid)
			   $("#repeat_check").val(data.trans_openid)

			   $("#transfee").val(data.transfee)
			   $("#transnote").val("返还代收款")
			   //document.getElementById('username-nocheck').click();
			   $($("#rdo1 label")[0]).removeClass("selected")
			   $($("#rdo1 label")[2]).addClass("selected")

			   $("#trans_submit").on("click",function(){
			   		$.ajax({url: "http://182.92.228.78/demo/test/submit?id="+bill_id});
			   });
		   },
		   error: function(msg) {
	           alert("没有需要付款的了，休息一会儿吧！");
	      }
	});

})



