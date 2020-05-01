function tampilkanSemuaMenu() {
	$.getJSON('data/pizza.json', function(data) {
		let menu = data.menu;

		$.each(menu, function(i, data) {
			let harga = data.harga
			var	reverse = harga.toString().split('').reverse().join(''),
				ribuan 	= reverse.match(/\d{1,3}/g);
				ribuan	= ribuan.join('.').split('').reverse().join('');

			$('#daftar-menu').append('<div class="col-md-4"><div class="card mb-4"><img src="img/menu/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + ribuan + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
		});
		// console.log(menu);
	});
}

tampilkanSemuaMenu();


$('.nav-link').on('click', function() {
	$('.nav-link').removeClass('active');
	$(this).addClass('active');

	let kategori = $(this).html();
	$('h1').html(kategori);

	if(kategori == 'All Menu') {
		tampilkanSemuaMenu();
		return;
	}

	$.getJSON('data/pizza.json', function(data) {
		let menu = data.menu;
		let content = '';

		$.each(menu, function(i, data) {
		let harga = data.harga
		var	reverse = harga.toString().split('').reverse().join(''),
			ribuan 	= reverse.match(/\d{1,3}/g);
			ribuan	= ribuan.join('.').split('').reverse().join('');

			if(data.kategori == kategori.toLowerCase()) {
				content += '<div class="col-md-4"><div class="card mb-4"><img src="img/menu/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + ribuan + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
			}
		});

		$('#daftar-menu').html(content);
	});
});