importScripts("jquery.nodom.js");
importScripts("bandwidth.js");
importScripts("memory-size.js");

let _that 			= self;
let _GET_DATA_LINK 	= '';
let _PATH_TO_LIB 	= '';
let _PARAMS_FILTER 	= [];
let _page 			= [];
let _pageSize 		= 10;
let _total 			= 0;

self.onmessage = function(e){

	try {

		switch(e.data.type) {
			case "init" 	: init(e.data.configs); break;
			case "update"	: break;
			case "load" 	: 
				load( _GET_DATA_LINK, 
					{
						page 		 : 0,
						pageSize 	 : _pageSize,
						paramsFilter : e.data.paramsFilter || {colum : 123, column2 : 'ajsdhgjsdhg'}
					}
				); 
				break;

			default : break;
		}

	} catch (ex) {
		console.log(ex.message);
	}
}



function init(configs){
	_GET_DATA_LINK 	= configs.linkGetData;
	_PATH_TO_LIB 	= configs.pathToLib + 'exportJS/';
	_PARAMS_FILTER  = configs.paramsFilter;

	//getBandwidth(_PATH_TO_LIB);

}

function load(url, params){

	if(!!url){

		try {

			let http = new XMLHttpRequest();

			http.open("GET", url + '?' + jQuery.param(params) , true);

			http.onprogress = function (e) {
				//console.log(e.loaded, e.total);
			};
			
			http.onreadystatechange = function() {

			    if(http.readyState == 4 && http.status == 200) {

			    	if(!!http.responseText){

			    		let firstPage = JSON.parse(http.responseText);

			    		if(!!firstPage && !!firstPage.res){

			    			_that.postMessage({type: 'push', pageData : firstPage});
			    			params.page++;
			    			//_that.postMessage({type: 'log', log : {firstPage : firstPage, page : params.page}});
			    			if(params.page < firstPage.total) loadPage(params, firstPage.total);
			    			else {
			    				_that.postMessage({type: 'end', message : 'End'});
			    			}

			    			delete firstPage;

			    		} else {
			    			_that.postMessage({type: 'log', log : "Faled!"});
			    		}

			    	}
			    	delete http;
			        
			    }
			};

			http.send();


		} catch (ex) {
			_that.postMessage({type: 'log', log : ex.message});
		}
	}

	let count_loop = 0;
	function loadPage( params, totalPage){

		$.ajax({
			url: _GET_DATA_LINK,
			type: 'POST',
			dataType: 'json',
			data: params,
			xhr: function () {
		        var xhr = new window.XMLHttpRequest();
		        //Download progress
		        xhr.addEventListener("progress", function (evt) {
		            if (evt.lengthComputable) {
		                var percentComplete = evt.loaded / evt.total;
		                console.log(Math.round(percentComplete * 100) + "%");
		            }
		            
		        }, false);
		        return xhr;
		    },
		})
		.done(function(data) {
			_that.postMessage({type: 'push', pageData : data});
			if(++params.page < totalPage){
				count_loop = 0;
				loadPage(params, totalPage);
			} else {
				_that.postMessage({type: 'end', message : 'End'});
			}
			delete data;
		})
		.fail(function(err) {
			count_loop++;
			if(count_loop == 5){
				_that.postMessage({type: 'log', log : "Faled!"});
				_that.postMessage({type: 'end', message : 'End'});
			}
			if(count_loop < 5)
				loadPage(params, totalPage);

			_that.postMessage({type: 'log', log : "Faled!"});
		})
		.always(function() {
			//_that.postMessage({type: 'view', log : "Faled!"});
		});
		
	}

	function multiLoad(total){
		let loop = [];
		while(total-- > 1){ loop.push(total);}
		loop.sort();
		loop.forEach(function(val){

			params.page++;

			let xhr = $.ajax({
				url: url,
				type: 'POST',
				dataType: 'json',
				cookie : null,
				cache : false,
				data: params,
			})
			.done(function(data) {
				//_that.postMessage({type: 'log', log : JSON.parse(data)});
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete", Object.keys(this));
				delete xhr;
			});
			

		});
	}

}


