document.write("js-1.js");
    var a = document.getElementsByName('teacher');
    var b = document.getElementById('aa');
    for (var i = 0; i < a.length; i++) {
        a[i].onclick = function () {
             
            b.style.display = "block";
            b.innerHTML = this.value;           
        }
    }
    document.write(Date());
