$(() => {
	$('#penyakit').select2()
	$("#diagnosa_input").submit(function (ev) {
		ev.preventDefault();
		const data = new FormData(this);
		$.ajax({
			type: "POST",
			url: "http://localhost/aplikasi/diagnosa/api/diagnosa_input",
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			success: function () {
				console.log('success');
			}
		});
	})
})