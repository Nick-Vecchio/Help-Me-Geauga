// JavaScript Document
$(document).ready(function(){
        $("#myinputdata").on("keyup",function(){
          var value=$(this).val().toLowerCase();
           $(".mydivdata *").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)
          });
        });
     });