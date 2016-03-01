$(document).ready(function() {
  alert("Game Ready");


  // $(".gird").on('click', function()
  // {
  //      alert("New Game");
  //  });


  $('.picture').on('click',listener);
  var first;
  function listener(event)
  {

    console.log(event);
    console.log(event.target.id);
    for(i=0;i<16;i++)
    {
      if(cardsCreated[i].id == event.currentTarget.id)
      {

        var img = $('<img>');
        var imgAdded = img.attr("src",cardsCreated[i].img);
        $("#"+cardsCreated[i].id).append(imgAdded);
        if(first)
        {
          if(cardsCreated[i].name == first)
          {
            console.log("true");
            first = null;
          }
          else {
            console.log("false");
            first = null;
          }
        }
        else
        {
          first = cardsCreated[i].name;
        }

        $("#"+cardsCreated[i].id).off('click',listener);


      }
    }
  }

        console.log("grid is working");

        function cards (name,img,id) {
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
          name: "erp",
          img: "pic/erp.jpg"
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
          }
        ]

//random the images in the databaseOfImages array and pushing into new array call cardsCreated.

function randomArray()
{
  var copy =  databaseOfImages.slice();

  for (var i =0; i<8; i++) {

  var random = Math.floor(Math.random()* copy.length);

  var card = new cards (copy[random].name, copy[random].img);
  cardsCreated.push(card);
  copy.splice(random,1);

  }
}
      randomArray();
      randomArray();


// In the cardsCreated array, i am assigning an id to each ????

        for (i=0; i < cardsCreated.length; i++) {
        cardsCreated[i].id = "S" + (i+1);
        }
        console.log(cardsCreated);





//    create an array of tiles
//    var tiles = document.getElementsByClassName('grid')
//
//    start by having tiles faced down
//    for (var i = 0; i< tiles.length; i++){
//      $('.grid').on('click', function()
//      {      alert ("click");
//
//    });
//
//  };
//
});
