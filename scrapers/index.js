const fs = require('fs');
const xml2js = require('xml2js');
var request = require('request-promise-native');
var xmlStream = fs.createWriteStream('content-shorthand.xml', {flags: 'a'});

function options () {
    return {
      method: 'POST',
      url: `https://cps-jenkins-master.cloud.bbc.co.uk/job/optimo-pages-furniture-invoke1/buildWithParameters?ENVIRONMENT=int&DPUB_PIPELINES=true`,
      //strictSSL: true,
      key: fs.readFileSync('/Users/athers01/certificate.pem'),
      cert: fs.readFileSync('/Users/athers01/certificate.pem'),
      ca: fs.readFileSync('/Users/athers01/ca.pem'),
      resolveWithFullResponse: true,
      timeout: 30000,
  };
}

async function makeRequest() {
    try {
        var response = await request(options());
        console.error(response);
        // xmlStream.write(`${response.body}\n\n`);
    } catch(error) {
        console.error(error);
    }

}

makeRequest();

// var longforms; 
// var parser = new xml2js.Parser();
// fs.readFile(__dirname + '/shorthand.xml', function(err, data) {
//     parser.parseString(data, function (err, result) {
//         longforms = result.search.results[0].result;
//         var guids = longforms.map(element => element.metadata[0].guid[0]);
//         guids.forEach(guid => {
//           makeRequest(guid);
//         });
//     });
// });



