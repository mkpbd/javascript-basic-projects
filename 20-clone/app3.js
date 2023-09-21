$(document).ready(function(){
    $(".clone-parent").click(function(e){
        console.log(e);
    //   $("p").clone(true).appendTo("body");
    
    let cloneData =  e.target.parentNode;

    console.log(cloneData);
   let cc =  $(cloneData).clone(true).appendTo(cloneData);
   console.log(cc);

//    e.target.parentNode.after(cc);
   

    });
  });