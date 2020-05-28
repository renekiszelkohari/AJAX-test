// var xhr = new XMLHttpRequest();
// var data;

// xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
// xhr.send();

// // function setData (jsonData) {
// //     data = jsonData;
// // }

// xhr.onreadystatechange = function() {
//     //console.log(this.readyState);
//     if (this.readyState == 4 && this.status == 200) {
//         //document.getElementById("data").innerHTML = this.responseText;
//         //console.log(typeof(this.responseText));
//         //console.log(typeof(JSON.parse(this.responseText)));
//         //console.log(JSON.parse(this.responseText));
//         //data = this.responseText;
//         //console.log(data);
//         //setData(JSON.parse(this.responseText));
//         data = JSON.parse(this.responseText);
//     }
// };

// setTimeout(function(){
//     console.log(data);
// }, 500);

// ------------ CALLBACK FUNCTION INSTEAD OF SET TIMEOUT ---------

// function getData(cb) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
//     xhr.send();

//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             cb(JSON.parse(this.responseText));
//         }
//    };
// }

// function printDataToconsole(data) {
//     console.log(data);
// }

// // getData(function(data) {
// //     console.log(data);
// // })

// getData(printDataToconsole);

// ------------- GETTING DATA ONTO THE PAGE ----------
// const baseUrl = "https://ci-swapi.herokuapp.com/api/"

// function getData(type, cb) {
//      var xhr = new XMLHttpRequest();
//      xhr.open("GET", baseUrl + type + "/");
//      xhr.send();

//      xhr.onreadystatechange = function() {
//          if (this.readyState == 4 && this.status == 200) {
//              cb(JSON.parse(this.responseText));
//          }
//     };
// }

// function writeToDocument(type) {
//     getData(type, function(data){
//         document.getElementById("data").innerHTML = data;
//     });
// }

// ------------- UNPACKING DATA ONTO THE DOM ----------
// const baseUrl = "https://ci-swapi.herokuapp.com/api/"

// function getData(type, cb) {
//      var xhr = new XMLHttpRequest();
//      xhr.open("GET", baseUrl + type + "/");
//      xhr.send();

//      xhr.onreadystatechange = function() {
//          if (this.readyState == 4 && this.status == 200) {
//              cb(JSON.parse(this.responseText));
//          }
//     };
// }

// function writeToDocument(type) {
//     var el = document.getElementById("data");
//     el.innerHTML = "";
//     getData(type, function(data){
//         //console.dir(data);
//         data = data.results;
//         data.forEach((item) => {
//             //document.getElementById("data").innerHtml += "<p>" + item.name + "</p>";
//             el.innerHTML += "<p>" + item.name + "</p>";
//         });
//     });
// }

// ------------- TABULAR DATA ----------
const baseUrl = "https://ci-swapi.herokuapp.com/api/"

function getData(type, cb) {
     var xhr = new XMLHttpRequest();
     xhr.open("GET", baseUrl + type + "/");
     xhr.send();

     xhr.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             cb(JSON.parse(this.responseText));
         }
    };
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });
    return `<tr>${tableHeaders}</tr>`
}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";
    
    getData(type, function(data){
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach((item) => {
            //Object.keys(item).forEach(function(key) {
                //console.log(key);
            //})
            //el.innerHTML += "<p>" + item.name + "</p>";
        });
        el.innerHTML = `<table>${tableHeaders}</table>`;
    });
}