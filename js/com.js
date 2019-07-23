
//手机号验证
function validateTel (tel){
	var TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      if(TEL_REGEXP.test(tel)){
        return true;
      }
      return false;
}