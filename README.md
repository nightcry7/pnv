pnv-js
========

A small pocket-sized jQuery form validation plugin.

Demo
----------------------------

[Link to Demo](http://cdpn.io/mzCIt)


Documentation
-------------


### You only need to include one file after jQuery.
<pre>
   	&lt;script src="pnv.js"&gt;&lt;/script&gt;
</pre>

### To use simple bind the plugin to your form.
<pre>
    $(function() {
        $('FORMSELCTOR').pnv();
    });
</pre>

### PNV.js also allows for custom error and success functions which can be defined like so:
<pre>
 $(function() {
    var customError = function($this){
      $this.css('border-color','orange');
    }
    var customSuccess = function($this){
      $this.css('border-color','blue');
    }
   $('FORMSELECTOR').pnv({error:customError,success:customSuccess});
  });
</pre>
