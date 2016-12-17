require("/public/js/module/PCASClass.js")
new PCAS("province","city","area");

function previewImage(file)
{
	var html = "<img src='{0}'/>";

	if (file.files && file.files[0])
	{
		var reader = new FileReader();

		reader.onload = function(evt){

			$("#uploadPreview").html( html.tpl(evt.target.result) )

		}
		reader.readAsDataURL(file.files[0]);
	}
}

$("#uploadfile").change(function () {
	previewImage(this)
})