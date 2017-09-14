document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " JamesMauricePrendergast. All rights reserved.</p>";

function myFunction(test, type){

      var text = test;

      var crate_img = document.createElement("iframe");   //this creates the image tag
      crate_img.setAttribute('src',text);  //this is where the giphy gif is stored in the src
      crate_img.setAttribute('id',type);
       document.getElementById("test55").appendChild(crate_img);  //we are appending this data as a child to the element to imageDiv

       $( "#video" ).remove();

   }
