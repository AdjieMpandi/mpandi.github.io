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
  		let ntb_keseluruhan = data.total_keseluruhan;
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
		let positif = kota_bima.sembuh + kota_bima.dirawat;

		// Kabupaten Bima
		let kabupaten_bima = data.data.kabupaten_bima;
		let kab_pptg = kabupaten_bima.masih_pptg;
		let kab_otg = kabupaten_bima.masih_otg;
		let kab_dirawat = kabupaten_bima.dirawat;
		let kab_sembuh = kabupaten_bima.sembuh;
		let kab_meninggal = kabupaten_bima.meninggal;
		let kab_odp = kabupaten_bima.masih_odp;
		let kab_pdp = kabupaten_bima.masih_pdp;
		let kab_positif = kabupaten_bima.sembuh + kabupaten_bima.dirawat;

		// Kabupaten Dompu
		let kabupaten_dompu = data.data.kabupaten_dompu;
		let dom_pptg = kabupaten_dompu.masih_pptg;
		let dom_otg = kabupaten_dompu.masih_otg;
		let dom_dirawat = kabupaten_dompu.dirawat;
		let dom_sembuh = kabupaten_dompu.sembuh;
		let dom_meninggal = kabupaten_dompu.meninggal;
		let dom_odp = kabupaten_dompu.masih_odp;
		let dom_pdp = kabupaten_dompu.masih_pdp;
		let dom_positif = kabupaten_dompu.sembuh + kabupaten_dompu.dirawat;

		$('#update').append('*Update terakhir pada tanggal <strong>'+tanggal+' '+bulan+' '+tahun+' Pukul '+jam+' WITA</strong>, Sumber : Dinas Kesehatan NTB')
		$('#tampil').append(`
			<div class="col-md-4">
				<div class="card mb-4">
					<img src="img/kota_bima.png" class="card-img-top">
					<div class="card-body">
						<h2 class="card-title text-center"><strong>Kota Bima</strong></h2>
						<p class="card-text">Total Positif : &nbsp;&nbsp;<strong>`+positif+`</strong></p>
						<p class="card-text">PPTG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;<strong>`+pptg+`</strong></p>
						<p class="card-text">OTG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+otg+`</strong></p>
						<p class="card-text">ODP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+odp+`</strong></p>
						<p class="card-text">PDP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+pdp+`</strong></p>
						<p class="card-text">Dirawat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+dirawat+`</strong></p>
						<p class="card-text">Sembuh &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+sembuh+`</strong></p>
						<p class="card-text" style="color: red">Meninggal &nbsp;: &nbsp;&nbsp;<strong>`+meninggal+`</strong></p>
					</div>
				</div>
			</div>`);

		$('#tampil').append(`
			<div class="col-md-4">
				<div class="card mb-4">
					<img src="img/kab_bima.png" class="card-img-top" width="80">
					<div class="card-body">
						<h2 class="card-title text-center"><br><br><strong>Kabupaten Bima</strong></h2>
						<p class="card-text">Total Positif : &nbsp;&nbsp;<strong>`+kab_positif+`</strong></p>
						<p class="card-text">PPTG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;<strong>`+kab_pptg+`</strong></p>
						<p class="card-text">OTG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+kab_otg+`</strong></p>
						<p class="card-text">ODP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+kab_odp+`</strong></p>
						<p class="card-text">PDP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+kab_pdp+`</strong></p>
						<p class="card-text">Dirawat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+kab_dirawat+`</strong></p>
						<p class="card-text">Sembuh &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+kab_sembuh+`</strong></p>
						<p class="card-text" style="color: red">Meninggal &nbsp;: &nbsp;&nbsp;<strong>`+kab_meninggal+`</strong></p>
					</div>
				</div>
			</div>`);
		
		$('#tampil').append(`
			<div class="col-md-4">
				<div class="card mb-4">
					<img src="img/dompu.png" class="card-img-top" height="485">
					<div class="card-body">
						<h2 class="card-title text-center"><strong>Kabupaten Dompu</strong></h2>
						<p class="card-text">Total Positif : &nbsp;&nbsp;<strong>`+dom_positif+`</strong></p>
						<p class="card-text">PPTG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;<strong>`+dom_pptg+`</strong></p>
						<p class="card-text">OTG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+dom_otg+`</strong></p>
						<p class="card-text">ODP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+dom_odp+`</strong></p>
						<p class="card-text">PDP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+dom_pdp+`</strong></p>
						<p class="card-text">Dirawat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+dom_dirawat+`</strong></p>
						<p class="card-text">Sembuh &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<strong>`+dom_sembuh+`</strong></p>
						<p class="card-text" style="color: red">Meninggal &nbsp;: &nbsp;&nbsp;<strong>`+dom_meninggal+`</strong></p>
					</div>
				</div>
			</div>`);
		
		$('#tampil').append(`
			<div class="col-md-4">
				<div class="card mb-4">
					<div class="card-body">
						<h2 class="card-title text-center"><strong>NTB</strong></h2>
						<p class="card-text">PPTG : &nbsp;&nbsp;<strong>`+ntb_pptg+`</strong></p>
						<p class="card-text">OTG &nbsp;: &nbsp;&nbsp;<strong>`+ntb_otg+`</strong></p>
					</div>
				</div>
			</div>`);
		
		$('#tampil').append(`
			<div class="col-md-4">
				<div class="card mb-4">
					<div class="card-body">
						<h2 class="card-title text-center"><strong>NTB</strong></h2>
						<p class="card-text">Dirawat : &nbsp;&nbsp;<strong>`+ntb_dirawat+`</strong></p>
						<p class="card-text">Sembuh : &nbsp;&nbsp;<strong>`+ntb_sembuh+`</strong></p>
						<p class="card-text">Meninggal : &nbsp;&nbsp;<strong>`+ntb_meninggal+`</strong></p>
						<p class="card-text">Total Positif : &nbsp;&nbsp;<strong>`+ntb_positif+`</strong></p>
						<p class="card-text">Total (PPTG+OTG+ODP+PDP) : &nbsp;&nbsp;<strong>`+ntb_keseluruhan+`</strong></p>
					</div>
				</div>
			</div>`);
		
		$('#tampil').append(`
			<div class="col-md-4">
				<div class="card mb-4">
					<div class="card-body">
						<h2 class="card-title text-center"><strong>NTB</strong></h2>
						<p class="card-text">ODP : &nbsp;&nbsp;<strong>`+ntb_odp+`</strong></p>
						<p class="card-text">PDP &nbsp;: &nbsp;&nbsp;<strong>`+ntb_pdp+`</strong></p>
					</div>
				</div>
			</div>`);
	});
}

tampilkan();
