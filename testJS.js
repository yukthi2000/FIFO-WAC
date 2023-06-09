var fifowacState = 'w';
var rowNumber = 0;

function methodSwitch(){
    if (fifowacState == 'w') {
        document.getElementById('tableCap').innerHTML = "Inventory System on FIFO";
        document.getElementById('toggleWAC').style.color="grey";
        document.getElementById('toggleFIFO').style.color="azure";
        document.getElementById('wac').hidden = "true";
        document.getElementById('fifo').hidden = "";
        fifowacState = 'f';
    }

    else if (fifowacState == 'f') {
        document.getElementById('tableCap').innerHTML = "Inventory System on WAC";
        document.getElementById('toggleWAC').style.color="azure";
        document.getElementById('toggleFIFO').style.color="grey";
        document.getElementById('wac').hidden = "";
        document.getElementById('fifo').hidden = "true";
        fifowacState = 'w';
    }
}


function chkType() {
    if (document.getElementById('issue').checked) {
        document.getElementById('unit-price').disabled="true";
        document.getElementById('unit-price-lbl').style.color="grey";
    }
    else{
        document.getElementById('unit-price').disabled="";
        document.getElementById('unit-price-lbl').style.color="white";
    }
}