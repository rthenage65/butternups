console.log('js runs')

$.getJSON( "object.json", function( json ) {
  console.log(json);
  for (let i = 0; i < json.length; i++) {
    $("#butter-container").append(`
        <div class="adaptable squishable half row container">
          <div class="two thirds container">
            <div class="small left heading">${json[i].name}</div>
            <div class="left text">${json[i].discription}</div>
            <div class="left text">${json[i].price}</div>
          </div>
          <div class="third vertically centered container">
            <img class="full image" src="${json[i].imgSrc}">
          </div>
        </div>
        `)
  }
})