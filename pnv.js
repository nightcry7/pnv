(function($){
    $.fn.pnv = function(options){
      var error = function($this){
    $this.css('border-color','red');
  }
  var success = function($this){
    $this.css('border-color','green');
  }
        var settings = $.extend({
          error: error,
          success: success,
          email: "email",
          phone: "phone"
        }, options );
      
      $(this).children('fieldset').children('input:not([data-val="skip"]),select:not([data-val="skip"])').bind('keyup change blur',function(){
        normVal($(this));  
      });
      $(this).children('fieldset').find('.next').bind('click',function(){
        
        $(this).parents('fieldset').children('input:not([data-val="skip"], .next),select:not([data-val="skip"] ,.next)').each(function(){
          var a = '[name='+$(this).attr('name')+']';
          a = $(a); 
         normVal(a);
        });
      });
      function normVal($this){
        getName = $this.attr('name');  
        $this.css('border','2px solid');
        if(getName == settings.email && !validateEmail($this.val())){
                settings.error($this);
            }else if(getName == settings.phone && !validatePhone($this.val())){
                settings.error($this);
            }else if($this.val() == '' && getName !== settings.email && getName !== settings.phone){
                settings.error($this);
            }else{
              settings.success($this);
            }  
      }
      function validateEmail($e) {
               var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               return re.test($e);   
            }
      function validatePhone($p) { 
               var re =  /^(?:\+?[0-9]?[0-9]?[0-9][-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
               return re.test($p);
            }
    }
})(jQuery);
