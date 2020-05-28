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

function writeToDocument(type) {
    getData(type, function(data){
        document.getElementById("data").innerHTML = data;
    });
}