function ribuan (data){
	var	reverse = data.toString().split('').reverse().join(''),
		ribuan 	= reverse.match(/\d{1,3}/g);
		ribuan	= ribuan.join('.').split('').reverse().join('');
	return ribuan;
}
			

function tampilkan() {

	$.getJSON('https://corona.ntbprov.go.id/api/data', function(data) {

		var bulan = ['','Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']; 
		let update_terakhir = data.update_terakhir;
  		let tahun = update_terakhir.substr(0, 4);
  		let _bulan = update_terakhir.substr(6, 1);
  		let tanggal = update_terakhir.substr(8, 2);
  		let jam = update_terakhir.substr(11, 5);
  		var bulan = bulan[_bulan];

  		// PPTG dan OTG NTB
  		let ntb_pptg = data.total_masih_pptg;
  		let ntb_otg = data.total_masih_otg;
  		let ntb_odp = data.total_masih_odp;
  		let ntb_pdp = data.total_masih_pdp;
  		let ntb_dirawat = data.total_dirawat;
  		let ntb_sembuh = data.total_sembuh;
  		let ntb_meninggal = data.total_meninggal;
  		let ntb_keseluruhan = ribuan(data.total_keseluruhan);
  		let ntb_positif = data.total_positif;

		// Kota Bima
		let kota_bima = data.data.kota_bima;
		let pptg = kota_bima.masih_pptg;
		let otg = kota_bima.masih_otg;
		let dirawat = kota_bima.dirawat;
		let sembuh = kota_bima.sembuh;
		let meninggal = kota_bima.meninggal;
		let odp = kota_bima.masih_odp;
		let pdp = kota_bima.masih_pdp;
		let positif = kota_bima.sembuh + kota_bima.dirawat + kota_bima.meninggal;

		// Kabupaten Bima
		let kabupaten_bima = data.data.kabupaten_bima;
		let kab_pptg = kabupaten_bima.masih_pptg;
		let kab_otg = kabupaten_bima.masih_otg;
		let kab_dirawat = kabupaten_bima.dirawat;
		let kab_sembuh = kabupaten_bima.sembuh;
		let kab_meninggal = kabupaten_bima.meninggal;
		let kab_odp = kabupaten_bima.masih_odp;
		let kab_pdp = kabupaten_bima.masih_pdp;
		let kab_positif = kabupaten_bima.sembuh + kabupaten_bima.dirawat + kabupaten_bima.meninggal;

		// Kabupaten Dompu
		let kabupaten_dompu = data.data.kabupaten_dompu;
		let dom_pptg = kabupaten_dompu.masih_pptg;
		let dom_otg = kabupaten_dompu.masih_otg;
		let dom_dirawat = kabupaten_dompu.dirawat;
		let dom_sembuh = kabupaten_dompu.sembuh;
		let dom_meninggal = kabupaten_dompu.meninggal;
		let dom_odp = kabupaten_dompu.masih_odp;
		let dom_pdp = kabupaten_dompu.masih_pdp;
		let dom_positif = kabupaten_dompu.sembuh + kabupaten_dompu.dirawat + kabupaten_dompu.meninggal;

		$('#update').append('*Update terakhir pada tanggal <strong>'+tanggal+' '+bulan+' '+tahun+' Pukul '+jam+' WITA</strong>, Sumber : Dinas Kesehatan NTB')
		$('#cop').append('With &#x2764; by <strong><a href="https://www.instagram.com/adjiempandi/" style="text-decoration: none; color: black;" target="_blink">Mpandi</strong></a>')
		$('#tampil').append(`
			<div class="col-md-4">
				<div class="card mb-4">
					<img src="img/kota_bima.png" class="card-img-top">
					<div class="card-body">
						<h2 class="card-title text-center"><strong>Kota Bima</strong></h2>
						<p class="card-text">Total Positif : &nbsp;&nbsp;<strong>`+positif+`</strong></p>
						<p class="card-text">Dirawat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+dirawat+`</strong></p>
						<p class="card-text" style="color: green">Sembuh &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+sembuh+`</strong></p>
						<p class="card-text" style="color: red">Meninggal &nbsp;: &nbsp;&nbsp;<strong>`+meninggal+`</strong></p>
						<a href="#" class="btn btn-primary detail" data-toggle="modal" data-target="#exampleModal" data-id="kota_bima">Detail</a>
					</div>
				</div>
			</div>`);

		$('#tampil').append(`
			<div class="col-md-4">
				<div class="card mb-4">
					<img src="img/kabupaten_bima.png" class="card-img-top" width="80">
					<div class="card-body">
						<h2 class="card-title text-center"><br><br><strong>Kabupaten Bima</strong></h2>
						<p class="card-text">Total Positif : &nbsp;&nbsp;<strong>`+kab_positif+`</strong></p>
						<p class="card-text">Dirawat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+kab_dirawat+`</strong></p>
						<p class="card-text" style="color: green">Sembuh &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+kab_sembuh+`</strong></p>
						<p class="card-text" style="color: red">Meninggal &nbsp;: &nbsp;&nbsp;<strong>`+kab_meninggal+`</strong></p>
						<a href="#" class="btn btn-primary detail" data-toggle="modal" data-target="#exampleModal" data-id="kabupaten_bima">Detail</a>
					</div>
				</div>
			</div>`);
		
		$('#tampil').append(`
			<div class="col-md-4">
				<div class="card mb-4">
					<img src="img/kabupaten_dompu.png" class="card-img-top" height="485">
					<div class="card-body">
						<h2 class="card-title text-center"><strong>Kabupaten Dompu</strong></h2>
						<p class="card-text">Total Positif : &nbsp;&nbsp;<strong>`+dom_positif+`</strong></p>
						<p class="card-text">Dirawat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+dom_dirawat+`</strong></p>
						<p class="card-text" style="color: green">Sembuh &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+dom_sembuh+`</strong></p>
						<p class="card-text" style="color: red">Meninggal &nbsp;: &nbsp;&nbsp;<strong>`+dom_meninggal+`</strong></p>
						<a href="#" class="btn btn-primary detail" data-toggle="modal" data-target="#exampleModal" data-id="kabupaten_dompu">Detail</a>
					</div>
				</div>
			</div>`);


		$.getJSON('https://covid19.mathdro.id/api/countries/ID', function(indonesia) {
			var i_confirm = ribuan(indonesia.confirmed.value);
			var i_recovered = ribuan(indonesia.recovered.value);
			var i_deaths = ribuan(indonesia.deaths.value);

			$.getJSON('https://covid19.mathdro.id/api', function(dunia) {
			var d_confirm = ribuan(dunia.confirmed.value);
			var d_recovered = ribuan(dunia.recovered.value);
			var d_deaths = ribuan(dunia.deaths.value);
		
		$('#tampil').append(`
			<div class="col-md-4">
				<div class="card mb-4">
					<div class="card-body">
						<h2 class="card-title text-center"><strong>Indonesia</strong></h2>
						<table>
						<tr class="card-text"><td>Total Positif</td><td>:</td><td><strong>`+i_confirm+`</strong></td>
						<tr class="card-text" style="color: green"><td>Total Sembuh</td><td>:</td><td><strong>`+i_recovered+`</strong></td></tr>
						<tr class="card-text" style="color: red"><td>Total Meninggal</td><td>:</td><td><strong>`+i_deaths+`</strong></td></tr>
						</table>
					</div>
				</div>
			</div>`);

		
		$('#tampil').append(`
			<div class="col-md-4">
				<div class="card mb-4">
					<div class="card-body">
						<h2 class="card-title text-center"><strong>NTB</strong></h2>
						<table>
						<tr class="card-text"><td>Total Positif</td><td>:</td><td><strong>`+ntb_positif+`</strong></td></tr>
						<tr class="card-text"><td>Dirawat</td><td>:</td><td><strong>`+ntb_dirawat+`</strong></td><tr>
						<tr class="card-text" style="color: green"><td>Sembuh</td><td>:</td><td><strong>`+ntb_sembuh+`</strong></td></tr>
						<tr class="card-text" style="color: red"><td>Meninggal</td><td>:</td><td><strong>`+ntb_meninggal+`</strong></td></tr>
						<tr><td class="card-text">Total (PPTG+OTG+ODP+PDP)</td><td>:</td><td><strong>`+ntb_keseluruhan+`</strong></td></tr>
						<tr><td><a href="#" class="btn btn-primary detail" data-toggle="modal" data-target="#exampleModal" data-id="ntb">Detail</a></td></tr>
						</table>
					</div>
				</div>
			</div>`);

		
		
		$('#tampil').append(`
			<div class="col-md-4">
				<div class="card mb-4">
					<div class="card-body">
						<h2 class="card-title text-center"><strong>Dunia</strong></h2>
						<table>
						<tr class="card-text"><td style="margin-bottom: 100px">Total Positif</td><td>:</td><td><strong>`+d_confirm+`</strong></td>
						<tr class="card-text" style="color: green"><td>Total Sembuh</td><td>:</td><td><strong>`+d_recovered+`</strong></td></tr>
						<tr class="card-text" style="color: red"><td>Total Meninggal</td><td>:</td><td><strong>`+d_deaths+`</strong></td></tr>
						</table>
					</div>
				</div>
			</div>`);

		});
		});
	});
}

tampilkan();

$('#tampil').on('click','.detail', function(){
	let kom = $(this).data('id');
	$.getJSON('https://corona.ntbprov.go.id/api/data', function(data) {

		switch(kom) {
		  	case 'kota_bima':
		    var kota_bima = data.data.kota_bima;
			var pptg = ribuan(kota_bima.masih_pptg);
			var selesai_pptg = ribuan(kota_bima.selesai_pptg);
			var otg = ribuan(kota_bima.masih_otg);
			var selesai_otg = ribuan(kota_bima.selesai_otg);
			var odp = ribuan(kota_bima.masih_odp);
			var selesai_odp = ribuan(kota_bima.selesai_odp);
			var pdp = ribuan(kota_bima.masih_pdp);
			var selesai_pdp = ribuan(kota_bima.selesai_pdp);
			var dirawat = kota_bima.dirawat;
			var sembuh = kota_bima.sembuh;
			var meninggal = kota_bima.meninggal;
			var positif = kota_bima.sembuh + kota_bima.dirawat + kota_bima.meninggal;
			var kota = 'Kota Bima';
			var gam = 'img/kota_bima.png';
		    break;
		  	case 'kabupaten_bima':
		    var kabupaten_bima = data.data.kabupaten_bima;
			var pptg = ribuan(kabupaten_bima.masih_pptg);
			var selesai_pptg = ribuan(kabupaten_bima.selesai_pptg);
			var otg = ribuan(kabupaten_bima.masih_otg);
			var selesai_otg = ribuan(kabupaten_bima.selesai_otg);
			var odp = ribuan(kabupaten_bima.masih_odp);
			var selesai_odp = ribuan(kabupaten_bima.selesai_odp);
			var pdp = ribuan(kabupaten_bima.masih_pdp);
			var selesai_pdp = ribuan(kabupaten_bima.selesai_pdp);
			var dirawat = kabupaten_bima.dirawat;
			var sembuh = kabupaten_bima.sembuh;
			var meninggal = kabupaten_bima.meninggal;
			var positif = kabupaten_bima.sembuh + kabupaten_bima.dirawat + kabupaten_bima.meninggal;
			var kota = 'Kabupaten Bima';
			var gam = 'img/kabupaten_bima.png';
		    break;
		  	case 'kabupaten_dompu':
		    var kabupaten_dompu = data.data.kabupaten_dompu;
			var pptg = ribuan(kabupaten_dompu.masih_pptg);
			var selesai_pptg = ribuan(kabupaten_dompu.selesai_pptg);
			var otg = ribuan(kabupaten_dompu.masih_otg);
			var selesai_otg = ribuan(kabupaten_dompu.selesai_otg);
			var odp = ribuan(kabupaten_dompu.masih_odp);
			var selesai_odp = ribuan(kabupaten_dompu.selesai_odp);
			var pdp = ribuan(kabupaten_dompu.masih_pdp);
			var selesai_pdp = ribuan(kabupaten_dompu.selesai_pdp);
			var dirawat = kabupaten_dompu.dirawat;
			var sembuh = kabupaten_dompu.sembuh;
			var meninggal = kabupaten_dompu.meninggal;
			var positif = kabupaten_dompu.sembuh + kabupaten_dompu.dirawat + kabupaten_dompu.meninggal;
			var kota = 'Kabupaten Dompu';
			var gam = 'img/kabupaten_dompu.png';
		    break;
		  	case 'ntb':
		    var pptg = ribuan(data.total_masih_pptg);
		    var selesai_pptg = ribuan(data.total_selesai_pptg);
	  		var otg = ribuan(data.total_masih_otg);
	  		var selesai_otg = ribuan(data.total_selesai_otg);
	  		var odp = ribuan(data.total_masih_odp);
	  		var selesai_odp = ribuan(data.total_selesai_odp);
	  		var pdp = data.total_masih_pdp;
	  		var selesai_pdp = data.total_selesai_pdp;
	  		var dirawat = data.total_dirawat;
	  		var sembuh = data.total_sembuh;
	  		var meninggal = data.total_meninggal;
	  		var positif = data.total_positif;
			var kota = 'Nusa Tenggara Barat';
			var gam = 'img/ntb.png';
		    break;
		  	default:
		}

		$('.modal-body').html(`
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-4 text-center">
						<img src="`+gam+`" height="200">
					</div>

					<div class="col-md-8">
						
						<p class="text-center"><strong>`+kota+`</strong></p>
						<center>
						<table>
							<tr><td>Total Positif</td><td>:</td><td class="text-center"><strong>`+positif+`</strong></td><td>orang</td></tr>
							<tr><td>PPTG (masih)</td><td>:</td><td class="text-center"><strong>`+pptg+`</strong></td><td>orang</td></tr>
							<tr><td>PPTG (selesai)</td><td>:</td><td class="text-center"><strong>`+selesai_pptg+`</strong></td><td>orang</td></tr>
							<tr><td>OTG (masih)</td><td>:</td><td class="text-center"><strong>`+otg+`</strong></td><td>orang</td></tr>
							<tr><td>OTG (selesai)</td><td>:</td><td class="text-center"><strong>`+selesai_otg+`</strong></td><td>orang</td></tr>
							<tr><td>ODP (masih)</td><td>:</td><td class="text-center"><strong>`+odp+`</strong></td><td>orang</td></tr>
							<tr><td>ODP (selesai)</td><td>:</td><td class="text-center"><strong>`+selesai_odp+`</strong></td><td>orang</td></tr>
							<tr><td>PDP (masih)</td><td>:</td><td class="text-center"><strong>`+pdp+`</strong></td><td>orang</td></tr>
							<tr><td>PDP (selesai)</td><td>:</td><td class="text-center"><strong>`+selesai_pdp+`</strong></td><td>orang</td></tr>
							<tr><td>Dirawat</td><td>:</td><td class="text-center"><strong>`+dirawat+`</strong></td><td>orang</td></tr>
							<tr style="color: green"><td>Sembuh</td><td>:</td><td class="text-center"><strong>`+sembuh+`</strong></td><td>orang</td></tr>
							<tr style="color: red"><td>Meninggal</td><td>:</td><td class="text-center"><strong>`+meninggal+`</strong></td><td>orang</td></tr>
						</table>
						</center>					
					</div>
				</div>
			</div>
		`);
	});
	
})