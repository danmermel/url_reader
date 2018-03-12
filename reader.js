var request = require('request');
var cheerio = require('cheerio');
var searchTerm = process.argv[2];
console.log(searchTerm);
var interval = 5 * 1000 // 5 seconds

for( var pg = 0; pg<=4; pg++) {
  setTimeout( function(page) {
    var url = 'http://www.google.com/search?q=' + searchTerm + '&start=' + pg*10;
    console.log(url);
    console.log("processing page", page);
    request(url, function(err, resp, body){
      $ = cheerio.load(body);
      links = $('a'); //jquery get all hyperlinks
      $(links).each(function(i, link){
        // if($(link).attr('href').match(/\/thetimes\.co\.uk\//)) {
          console.log($(link).attr('href'));
        //}
      });
    });
  }, interval*pg, pg);
}
