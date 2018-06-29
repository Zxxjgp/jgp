 function datacheck(){
        var textSour = $("#textSour").val();
        if (textSour == null || textSour == ''){
            alert("请输入数据");
            return false;
        }
        var arrays = textSour.split("\n");
        var array = [];
        for (var i=0 ; i< arrays.length ; i++)
        {
            if (arrays[i] != null && arrays[i] != '') {
                array.push(arrays[i]);
            } 
        }

        var nums = [ ];
        var result = null;
        var  view = [];
        var collect = "";
        for (var i=0 ; i< array.length ; i++)
        {
            result = check(array[i]);
            nums.push(result); //以后迭代过程
            if (result == true){
                 view.push("数据格式校验成功");
            }else {
                 view.push("数据格式校验失败");
            }
            collect += ("数据条目："+array[i] + "-------------------------"+view[i] + "\n");
        }

        $(".bottomBar").empty().append("<textarea readonly=\"readonly\" id=\"textMatchResult\">"+collect+"</textarea>");
    }
    function check(data){
        var array = data.split("");
        var nums = [ ];
        for (var i=0 ; i< array.length ; i++)
        {
            nums.push(parseInt(array[i]));
        }
        for(var i = nums.length-2; i >= 0; i = i - 2) {
            nums[i] = parseInt(nums[i] + nums[i]);
            nums[i] = parseInt(nums[i]/10 + nums[i]%10);
        }
        var sum = 0;
        for(var i=0;i<nums.length;i++) {
            sum += nums[i];
        }
        return sum % 10 == 0;
    }