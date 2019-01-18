//Réalisation avec JIKIKI + rajout Recherche //-----------------------------------------------------------------


$('#count').text($('p').length);

$('.trash').on("click",
    function() {
      $(this).parent().remove();
      $('#count').text($('p').length);
    }
  )

  $('#btn-add').click(function() {
    // $("p").text($("#add-message").val()) // Recovery the value champ text field 
    $('body').append($('<div class="row new-last-row"> <img class="avatar" src="avatar-3.jpg"> <div class="content"><h6>Shadd Love</h6>  <p> ' + $("#add-message").val() + '</p></div> <img class="trash" src="trash.png" alt=""> </div>'));
    // empty value
    $("#add-message").val("")
    // counter
    $('#count').text($('p').length);
    // delete
    $('.trash').on("click",
        function() {
          $(this).parent().remove();
          $('#count').text($('p').length);
        }
      )
  })

  $('#btn-search').click(function() {
    console.log("hello world");
    console.log($("#add-search").val());
  
    // last modification, to be able to search everywhere in the DOM
    $('.row').show(800);
  
    $('h6').each(function(){
      if($("#add-search").val().length > 0 && $("#add-search").val() != $(this).text() ){
        $(this).parent().parent().fadeOut();
      }
    })
    $("#add-search").val("")
  })






// Réalisation avec le DOM // --------------------------------------------------------------------------------



// document.getElementById("count").textContent = document.getElementsByTagName("p").length;

// for(var i=0; i<document.getElementsByClassName("trash").length; i++){
//   document.getElementsByClassName("trash")[i].addEventListener("click",
//     function(){
//       this.parentNode.remove();
//       document.getElementById("count").textContent = document.getElementsByTagName("p").length;
//     }
//   )
// }

// document.getElementById("btn-add").addEventListener("click",
//   function() {
//     // function check
//     console.log("click détecté")
//
//     var divRaw = document.createElement("div");
//     divRaw.className = "row new-last-row";
//     document.body.appendChild(divRaw);
//
//     var img1 = document.createElement("img");
//     img1.className = "avatar";
//     img1.src = "avatar-1.jpg";
//     divRaw.appendChild(img1);
//
//     var divText = document.createElement("div");
//     divText.className = "content";
//     divRaw.appendChild(divText);
//
//     var h6 = document.createElement("h6");
//     h6.textContent = "Noel Paganelli";
//     divText.appendChild(h6);
//
//     var p = document.createElement("p");
//     p.textContent = document.getElementById("add-message").value;
//     divText.appendChild(p);
//
//     var img2 = document.createElement("img");
//     img2.className = "trash";
//     img2.src = "trash.png";
//     divRaw.appendChild(img2);
//
//     // setting the input value to an empty array to "clear" the input just after the message is added
//     document.getElementById("add-message").value = "";
//     // re-counting the number of p elements to change the number of message when a new message is added
//     document.getElementById("count").textContent = document.getElementsByTagName("p").length;
//     // re-adding the avent listener the new trash. Otherwise the new trash will not work...
//     img2.addEventListener("click",
//       function() {
//         this.parentNode.remove();
//         document.getElementById("count").textContent = document.getElementsByTagName("p").length;
//       }
//     )
//
//   })

// $('#btn-search').click(function() {
//   $('.row').show(800);
//   $('h6').each(
//     function() {
//
//       // checkup & tests
//       console.log($("#add-search").val().length);
//       console.log($("#add-search").val());
//       console.log($(this).text());
//
//       if ($("#add-search").val().length > 0 && $(this).text() != $("#add-search").val()) {
//         $(this).parent().parent().fadeOut();
//       }
//     }
//   )
// })
