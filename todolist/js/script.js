// Çarpının eklenmesi.

var lists = document.getElementsByTagName("li"); 
var i;
for (i = 0; i < lists.length; i++) {
  var span = document.createElement("span");
  var text = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text);
  lists[i].appendChild(span);
}


// X'e basınca listelerin silinmesi.

var close = document.getElementsByClassName("close");
var i = 0;

for (; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display =  "none";
    }
}


// Liste elemanlarının üzerine çizgi çekme

var list = document.querySelector("#list");

list.addEventListener('click', function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle('checked');
  }
}, false);

// Yeni bir liste ekleme

var alertAppendDOM = document.querySelector("#alertAppend");

function alertTop(title, text, color) {
  alertAppendDOM.innerHTML = `<div class=" float-right alert alert-${color} alert-dismissible">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <strong>${title}</strong> ${text}
  </div>`
}


function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if (inputValue === ''){
      alertTop("Başarısız!", "Listeye eklenmedi", "danger")
    }

    else {
      document.getElementById("list").appendChild(li);
      alertTop("Başarılı!", "Listeye eklendi", "success");
      localStorage.setItem("key", )
    }


    document.getElementById("task").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}





  