function popUPtest() {
    var txt, colr;
    if (confirm("Button pop-up")) {
      txt = "You selected OK";
      colr = "green";
    } else {
      txt = "You selected CANCEL";
      colr = "red";
    }
    document.getElementById("demo").innerHTML = colr;
    document.getElementById("demo").innerHTML = txt;
}