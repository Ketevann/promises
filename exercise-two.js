'use strict';

var Promise = require('bluebird'),
    async = require('async'),
    exerciseUtils = require('./utils');

var readFile = exerciseUtils.readFile,
    promisifiedReadFile = exerciseUtils.promisifiedReadFile,
    blue = exerciseUtils.blue,
    magenta = exerciseUtils.magenta;

var args = process.argv.slice(2).map(function(st){ return st.toUpperCase(); });

module.exports = {
  problemA: problemA,
  problemB: problemB,
  problemC: problemC,
  problemD: problemD,
  problemE: problemE
};

// runs every problem given as command-line argument to process
args.forEach(function(arg){
  var problem = module.exports['problem' + arg];
  if (problem) problem();
});

function problemA () {



  let p1 = promisifiedReadFile("poem-two/stanza-01.txt");
  let p2 = promisifiedReadFile("poem-two/stanza-02.txt");

  Promise.all([p1, p2]).spread((stanza2, stanza3) => {
    blue(stanza2)
    blue(stanza3)
  }).then(function(){
    console.log("done!!!!")
  })

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * A. log poem two stanza one and stanza two, in any order
   *    but log 'done' when both are done
   *    (ignore errors)
   *    note: reads are occurring in parallel (simultaneously)
   *
   */

  // // callback version
  // async.each(['poem-two/stanza-01.txt', 'poem-two/stanza-02.txt'],
  //   function (filename, eachDone) {
  //     readFile(filename, function (err, stanza) {
  //       console.log('-- A. callback version --');
  //       blue(stanza);
  //       eachDone();
  //     });
  //   },
  //   function (err) {
  //     console.log('-- A. callback version done --');
  //   }
  // );

  // promise version
  // ???

}

function problemB () {


  let p1 = promisifiedReadFile("poem-two/stanza-01.txt");
  let p2 = promisifiedReadFile("poem-two/stanza-02.txt");
  let p3 = promisifiedReadFile("poem-two/stanza-03.txt");
  let p4 = promisifiedReadFile("poem-two/stanza-04.txt");
  let p5 = promisifiedReadFile("poem-two/stanza-05.txt");
  let p6 = promisifiedReadFile("poem-two/stanza-06.txt");
  let p7 = promisifiedReadFile("poem-two/stanza-07.txt");
  let p8 = promisifiedReadFile("poem-two/stanza-08.txt");


  Promise.all([p1, p2,p3,p4,p5,p6,p7,p8]).then(function(stanza)  {
   stanza.forEach(function(file){
     blue(file);
   });

  }).then(function(){
    console.log("done!!!!")
  })
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * B. log all the stanzas in poem two, in any order
   *    and log 'done' when they're all done
   *    (ignore errors)
   *    note: reads are occurring in parallel (simultaneously)
   *
   */

  // var filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
  //   return 'poem-two/' + 'stanza-0' + n + '.txt';
  // });

  // // callback version
  // async.each(filenames,
  //   function (filename, eachDone) {
  //     readFile(filename, function (err, stanza) {
  //       console.log('-- B. callback version --');
  //       blue(stanza);
  //       eachDone();
  //     });
  //   },
  //   function (err) {
  //     console.log('-- B. callback version done --');
  //   }
  // );

  // promise version
  // ???

}

function problemC () {


  let p1 = promisifiedReadFile("poem-two/stanza-01.txt");
  let p2 = promisifiedReadFile("poem-two/stanza-02.txt");
  let p3 = promisifiedReadFile("poem-two/stanza-03.txt");
  let p4 = promisifiedReadFile("poem-two/stanza-04.txt");
  let p5 = promisifiedReadFile("poem-two/stanza-05.txt");
  let p6 = promisifiedReadFile("poem-two/stanza-06.txt");
  let p7 = promisifiedReadFile("poem-two/stanza-07.txt");
  let p8 = promisifiedReadFile("poem-two/stanza-08.txt");


  Promise.all([p1, p2,p3,p4,p5,p6,p7,p8]).then(function(stanza)  {
   stanza.forEach(function(file){
     blue(file);
   });

  }).then(function(){
    console.log("done!!!!")
  })
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * C. read & log all the stanzas in poem two, *in order*
   *    and log 'done' when they're all done
   *    (ignore errors)
   *    note: reads are occurring in series (only when previous finishes)
   *
   */

  // var filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
  //   return 'poem-two/' + 'stanza-0' + n + '.txt';
  // });

  // // callback version
  // async.eachSeries(filenames,
  //   function (filename, eachDone) {
  //     readFile(filename, function (err, stanza) {
  //       console.log('-- C. callback version --');
  //       blue(stanza);
  //       eachDone();
  //     });
  //   },
  //   function (err) {
  //     console.log('-- C. callback version done --');
  //   }
  // );

  // promise version
  // ???

}

function problemD () {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * D. log all the stanzas in poem two, *in order*
   *    making sure to fail for any error and log it out
   *    and log 'done' when they're all done
   *    note: reads are occurring in series (only when previous finishes)
   *
   */

  let p1 = promisifiedReadFile("poem-two/stanza-01.txt");
  let p2 = promisifiedReadFile("poem-two/stanza-02.txt");
  let p3 = promisifiedReadFile("poem-two/stanza-03.txt");
  let p4 = promisifiedReadFile("poem-two/stanza-04.txt");
  let p5 = promisifiedReadFile("poem-two/stanza-05.txt");
  let p6 = promisifiedReadFile("poem-two/stanza-06.txt");
  let p7 = promisifiedReadFile("poem-two/stanza-07.txt");
  let p8 = promisifiedReadFile("poem-two/stanza-08.txt");


Promise.all([p1, p2,p3,p4,p5,p6,p7,p8]).then(function(stanza)  {
   stanza.forEach(function(file){
     blue(file);
   })
})
     .catch(function(err){
      magenta(err);
    })
    .then(function(){
      console.log('done');
    })




}

function problemE () {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * E. make a promisifed version of fs.writeFile
   *
   */

  var fs = require('fs');
  function promisifiedWriteFile (filename, str) {
    // your code here
  }
}

// utils.promisifiedReadFile = function (filename) {
// 	return new Promise(function (resolve, reject) {
// 		utils.readFile(filename, function (err, str) {
// 			if (err) reject(err);
// 			else resolve(str);
// 		});
// 	});
// };





// promisifiedReadFile('poem-two/stanza-01.txt')
  //   .then(function(fileContents){
  //     blue(fileContents);
  //     return promisifiedReadFile('poem-two/stanza-02.txt')
  //   })
  //   .then(function(fileContents){
  //     blue(fileContents);
  //     return promisifiedReadFile('poem-two/stanza-03.txt')

  //   })
  //    .then(function(fileContents){
  //     blue(fileContents);
  //     return promisifiedReadFile('poem-two/stanza-04.txt')
  //     })
  //       .then(function(fileContents){
  //       blue(fileContents);
  //       return promisifiedReadFile('poem-two/stanza-05.txt')
  //     })
  //     .then(function(fileContents){
  //       blue(fileContents);
  //       return promisifiedReadFile('poem-two/stanza-06.txt')
  //     })
  //     .then(function(fileContents){
  //       blue(fileContents);
  //       return promisifiedReadFile('poem-two/stanza-07.txt')
  //     })
  //     .then(function(fileContents){
  //       blue(fileContents);
  //       return promisifiedReadFile('poem-two/stanza-08.txt')
  //     })
  //     .then(function(fileContents){
  //       blue(fileContents);
  //     })


  // var filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
  //   return 'poem-two/' + 'stanza-0' + n + '.txt';
  // });
  // var randIdx = Math.floor(Math.random() * filenames.length);
  // filenames[randIdx] = 'wrong-file-name-' + (randIdx + 1) + '.txt';

  // // callback version
  // async.eachSeries(filenames,
  //   function (filename, eachDone) {
  //     readFile(filename, function (err, stanza) {
  //       console.log('-- D. callback version --');
  //       if (err) return eachDone(err);
  //       blue(stanza);
  //       eachDone();
  //     });
  //   },
  //   function (err) {
  //     if (err) magenta(err);
  //     console.log('-- D. callback version done --');
  //   }
  // );

  // promise version
  // ???
