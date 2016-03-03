$(document).ready(function()
{

//easter egg!!!
var show = false;
  $(document).keypress(function(event) {
    if(event.which === 13) {
      if(!show)
      {
        $(".ga").show();
      }
      else {
        $(".ga").hide();
      }
      show = !show;
      // show and !show is a toggle
    }
    });


  $(".newGame").on('click',function()
  {
    alert ("New Game!");
  document.location.reload(true);

   });


  //listener is my function name

  $('.picture').on('click', listener);
  var first, firstId; // first refers to first card opened and we use current card to compare with the first card. If first card is unavailable, then current card will be first.
  var numFlipped = 0;
  var score = 0;
  var player = false;

  // var currentPlayer;
  // console.log(currentPlayer)

  var intervalID;
  var counter = 40;



  function startTimer () {
    $(".timer").html(counter);
  intervalID = setInterval(timerId, 1000);


  function timerId() {
          counter -= 1;
         $(".timer").html(counter);


         if(counter == 0)
         {
           alert("Next Player!");
           clearInterval(intervalID);
           player = false;
          document.location.reload(true);
         }
   }


  }



  function listener(event)
  {
    numFlipped = numFlipped + 1;
    console.log("numFlipped value" + " " + numFlipped);
    console.log(event.target.id);
    console.log(cardsCreated);


    if(!player)
    {
      counter = 40;
      startTimer();
      player = true;
    }

    // images assigned to each tile, but we're not displaying them yet!
    for (var i = 0; i < cardsCreated.length; i++)
    {
      if (cardsCreated[i].id === event.currentTarget.id)
      {
        //we are appending image onto our ID
        var img = $('<img>');
        var imgAdded = img.attr("src", cardsCreated[i].img);
        var appendImg = $("#" + cardsCreated[i].id).append(imgAdded);

        $("#" + cardsCreated[i].id).off('click', listener);

        // player shouldn not be able to flip more than two tiles at once.


        if (numFlipped == 2)
        // when 2 cards are flipped, i want to compare if match or don't match
          {

          if (cardsCreated[i].name == first)
          {
            // console.log("true");
          //   if(currentPlayer == "x") {
          //   currentPlayer = "x";
          //     }
          //   else (currentPlayer = "o")
          //  console.log(currentPlayer);

            score ++;

            function gamestatus () {
            if( score == 1) {
            $(".gamestatus").html("You score "+ score + " point");
               }
            else if (score == 8 ){

            $(".gamestatus").html("Patriotic Singaporean!");

              }
             else {
            $(".gamestatus").html("You score " + score + " points");
             }
           }
               gamestatus();
          }

          else
          {
            var card = cardsCreated[i];

            function flipDelay()
            {
              setTimeout(disappear, 1200);
            }

            function disappear()
            {
              $("#" + card.id + " img").remove();
              $("#" + firstId + " img").remove();

            }
            flipDelay();


            $("#" + card.id).on('click', listener);
            $("#" + firstId).on('click', listener);


          }

          // if(currentPlayer == "x") {
          // currentPlayer = "o";
          //   }
          // else {currentPlayer = "x"}
          // console.log(currentPlayer);

          numFlipped = 0;

        }


        else
        {

          first = cardsCreated[i].name;
          //firstId is to store info on my first card when open
          firstId = cardsCreated[i].id;
        }



      }


    }

  }



  // console.log("grid is working");

  function cards(name, img, id)
  {
    this.name = name;
    this.img = img;
    this.id = id;
  }

  var cardsCreated = []

  // creating a database of images with name and url
  var databaseOfImages = [
  {
    name: "dragon",
    img: "pic/dragon.jpg"
  },
  {
    name: "cag",
    img: "pic/cag.jpg"
  },
  {
    name: "durian",
    img: "pic/durian.jpg"
  },
  {
    name: "esplanade",
    img: "pic/esplanade.jpg"
  },
  {
    name: "hdb",
    img: "pic/hdb.jpg"
  },
  {
    name: "mbs",
    img: "pic/mbs.jpg"
  },
  {
    name: "merlion",
    img: "pic/merlion.jpg"
  },
  {
    name: "nationalgallery",
    img: "pic/nationalgallery.jpg"
  }]

  //random the images in the databaseOfImages array and pushing into new array call cardsCreated.

  function randomArray()
  {
    //creating a copy of our array with 8 images so that when they push to cardsCreated, i have another set to work with
    var copy = databaseOfImages.slice();

    for (var i = 0; i < 8; i++)
    {

      var random = Math.floor(Math.random() * copy.length);

      var card = new cards(copy[random].name, copy[random].img);
      cardsCreated.push(card);
      copy.splice(random, 1);

    }
  }
  randomArray();
  randomArray();

  // In the cardsCreated array, i am assigning an id (S"")to each card.

  for (var i = 0; i < cardsCreated.length; i++)
  {
    cardsCreated[i].id = "S" + (i + 1);
  }

});
