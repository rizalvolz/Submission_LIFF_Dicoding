function add(n, type) {
    var total, totalfood, totalfood2, totalbef, totalbef2, totalHarga;
    total = $("#" + type + n).html();
    totalfood = $("#jmlfood").html();
    totalfood2 = $("#jmlfood2").html();
    totalbef = $("#jmlbef").html();
    totalbef2 = $("#jmlbef2").html();
    total++;
    $("#" + type + n).html(total);
    if(total == 1) {
        $("#" + type + n).siblings(".btn-secondary").css("visibility", "visible");
    }

    if(type == "pempek_bakar") {
        totalfood++;
        $("#jmlfood").html(totalfood);
    }
    else if(type == "pempek_goreng") {
        totalfood2++;
        $("#jmlfood2").html(totalfood2);
    } else if(type == "enjoy_squidward") {
        totalbef++;
        $("#jmlbef").html(totalbef);
    } else {
        totalbef2++;
        $("#jmlbef2").html(totalbef2);
    }

    totalHarga = (totalfood*7000) + (totalfood2*5000) + (totalbef*3000) + (totalbef2*3000);
    $("#harga").html(totalHarga);
}

function substract(n, type) {
    var total, totalfood, totalfood2, totalbef, totalbef2, totalHarga;
    total = $("#" + type + n).html();
    totalfood = $("#jmlfood").html();
    totalfood2 = $("#jmlfood2").html();
    totalbef = $("#jmlbef").html();
    totalbef2 = $("#jmlbef2").html();
    total--;
    $("#" + type + n).html(total);
    
    if(total == 0) {
        $("#" + type + n).siblings(".btn-secondary").css("visibility", "hidden");
        total = $("#" + type + n).html("");
    }

    if(type == "pempek_bakar") {
        totalfood--;
        $("#jmlfood").html(totalfood);
    } 
    else if(type == "pempek_goreng") {
        totalfood2--;
        $("#jmlfood2").html(totalfood2);
    } else if(type == "enjoy_squidward") {
        totalbef--;
        $("#jmlbef").html(totalbef);
    } else {
        totalbef2--;
        $("#jmlbef2").html(totalbef2);
    }


    totalHarga = (totalfood*7000) + (totalfood2*5000) + (totalbef*3000) + (totalbef2*3000);
    $("#harga").html(totalHarga);
}

 
$(document).ready(function() {
    $(".btn-secondary").css("visibility", "hidden");
    $("#empty").hide();
});
