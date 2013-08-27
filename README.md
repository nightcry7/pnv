pnv-js
========

A small pocket-sized jQuery form validation plugin.

Demo
----------------------------

[Demo](http://cdpn.io/mzCIt)


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
    var error = function($this){
      ;$this.css('border-color','orange');
    }
    var success = function($this){
      $this.css('border-color','blue');
    }
   $('FORMSELECTOR').pnv({error:error,success:success});
  });
</pre>
