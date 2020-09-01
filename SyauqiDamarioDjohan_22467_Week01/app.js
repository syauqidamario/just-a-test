var a, b, total = 0;

$(document).ready(function() {
    mulai();
});

function mulai(){
    $('#button_hapus').on('click', function () {
        $('#a').val('');
        $('#b').val('');

        $('.ionItem').remove();
        $("#label_3").text('Rp. 0,00');
        total = 0;
        console.log(total)
    } );
  
    $('#button_tambah').on('click', function () {
    a = $('#a').val();
    b = $('#b').val();
    if(a == '' || b == ''){
        handleButtonClick();
    }
    else{
        hitungPendapatan(a, b);
        $('#a').val('');
        $('#b').val('');
    }
    } );
}

function handleButtonClick() {
    controller.create({
      header: 'Terjadi Kesalahan',
      message: 'Mohon masukkan nama dan jumlah pengeluaran.',
      buttons: ['Tutup']
    }).then(alert => {
      alert.present();
    });
  }

function hitungPendapatan(a, b) {
    var itemAppend1 = '<ion-item class="ionItem">' +
                        '<ion-label>' + a + '</ion-label>' +
                        '<ion-label> Rp. ' + b + ',00</ion-label>' +
                        '</ion-item>';
    total += parseInt(b);
    // $("#list").append(itemAppend1);
    $( itemAppend1).insertBefore( "#list" );

    $("#label_3").text('Rp. ' + total + ',00');

    console.log(a);
    console.log(b);
}