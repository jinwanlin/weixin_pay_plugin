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
			   $("#transnote").val("提现")
			   document.getElementById('username-nocheck').click();

			   $("#trans_submit").on("click",function(){
			   		$.ajax({url: "http://182.92.228.78/demo/test/submit?id="+bill_id});
			   });
		   },
		   error: function(msg) {
	           alert("没有需要付款的了，休息一会儿吧！");
	      }
	});

})



