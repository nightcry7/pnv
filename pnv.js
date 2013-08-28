(function($){
    $.fn.pnv = function(options){
        var error = function($this){
            $this.css('border-color','red');
        }
        var success = function($this){
            $this.css('border-color','green');
        }
        function validateEmail($e) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test($e);   
        }
        function validatePhone($p) { 
            var re =  /^(?:\+?[0-9]?[0-9]?[0-9][-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            return re.test($p);
        }
        var opts = $.extend({
            error: error,
            success: success,
            email: "email",
            phone: "phone",
            }, options );
      
        $(this).children('fieldset').find('input:not(.pnvSkip, .next, .back),select:not(.pnvSkip ,.next ,.back)').bind('keyup change blur',function(){
            normVal($(this));  
        });
        $(this).children('fieldset').find('.next').bind('click',function(){
            $(this).parents('fieldset').find('input:not(.pnvSkip, .next, .back),select:not(.pnvSkip ,.next ,.back)').each(function(){
                var a = '[name='+$(this).attr('name')+']';
                a = $(a); 
                normVal(a);
            });
        });
        function normVal($this){
            getName = $this.attr('name');
            console.log(getName);
            $this.css('border','2px solid');
            if(getName == opts.email && !validateEmail($this.val())){
                opts.error($this);
            }else if(getName == opts.phone && !validatePhone($this.val())){
                opts.error($this);
            }else if($this.val() == '' || $this.val() == $this.attr('placeholder')){
                opts.error($this);
            }else{
                opts.success($this);
            }  
        }
    }
})(jQuery);
