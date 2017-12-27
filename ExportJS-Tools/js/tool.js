
$(function() {

	$("#copy_btn").click(function(){
		alert("0k!");
		var $temp = $("<textarea>");
		$temp.multipleLine
		var element = $("pre code")[0];
		$("body").append($temp);
		$temp.val($(element).text()).select();
		document.execCommand("copy");
	 	$temp.remove();
	});

	var utf8_to_b64 = function ( str ) {
	    return btoa(unescape(encodeURIComponent( str )));
	}

	var b64_to_utf8 = function ( str ) {
	    return decodeURIComponent(escape(atob( str )));
	}
	
	var code = $('pre code')[0];

	hljs.configure({useBR: true});

	hljs.initHighlightingOnLoad(code);

	$("#file").on("change", function(evt) {

	    function handleFile(f) {
	        
	        JSZip.loadAsync(f).then(function (zip) {

	        	code.innerHTML = "";

				Object.keys(zip.files).forEach(function (filename) {
					zip.files[filename].async('string').then(function (fileData) {

						if(filename.indexOf('_rel') > -1 && filename.indexOf('xl') > -1){
							code.innerHTML += 'var _rel 		= "' + utf8_to_b64(fileData) + '";<br/>';
						}
						if(filename.indexOf('styles') > -1){
							code.innerHTML += 'var styles 		= "' + utf8_to_b64(fileData) + '";<br/>';
						}
						if(filename.indexOf('sharedString') > -1){
							code.innerHTML += 'var sharedString 	= "' + utf8_to_b64(fileData) + '";<br/>';
						}
						if(filename.indexOf('theme') > -1){
							code.innerHTML += 'var theme 		= "' + utf8_to_b64(fileData) + '";<br/>';
						}
						if(filename.indexOf('workbook') > -1 && filename.indexOf('_rel') == -1){
							code.innerHTML += 'var wb 			= "' + utf8_to_b64(fileData) + '";<br/>';
						}
						if(filename.indexOf('sheet') > -1){
							code.innerHTML += 'var sheet_text 		= "' + utf8_to_b64(fileData) + '";<br/>';
						}

			    	});

			  	});

				setTimeout(function(){
					code.innerHTML += "var xlsxTemplate = {<br/>"
						    	+ "	_rel 		: _rel,<br/>"
						    	+ "	sheet  		: sheet_text,<br/>"
						    	+ "	sharedString 	: sharedString,<br/>"
						    	+ "	styles		: styles,<br/>"
						    	+ "	theme 		: theme,<br/>"
						    	+ "	workbook 	: wb <br/>"
						    +"}; <br/><br/>";

					code.innerHTML += 'let xlsx = new XLSX({<br/>'
    							+ '	pathToLib	: "___v1/js/",<br/>'
    							+ '	linkGetData 	: "___",<br/>'
    							+ '	paramsFilter 	: [],								// Filter <br/>' 
    							+ '	columnNames	: [],								// Header column name in xlsx file : columnNames has in xlsxTemnplate >> no declaration required.<br/>'
    							+ '	dataTemplate 	: [], 								// column name in table (database)<br/>'
    							+ '	xlsxTemplate	: xlsxTemplate,							// xlsx template : style, theme, sharedString, workbook, sheet, relationship<br/>'
    							+ '	rowStyleReq	: {definedInTheLastLine : true, keepData: false}<br/>'
    						+ '});<br/>';
				}, 1000);
				
				console.log(hljs);

			})

	    }

	    var files = evt.target.files;
	    for (var i = 0; i < files.length; i++) {
	        handleFile(files[i]);
	    }
	});	
});
