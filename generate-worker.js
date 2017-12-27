
/**
 *  Import liblary
 */
importScripts("jquery.nodom.js");
importScripts("helper.js");

 //------------------------------------ GENERATE WORKER ---------------------------------------------//
 
 const 	_GENERATE_WORKER = self;
 var 	_template;
 var  	_dataTemplate;
 var  	_columnId = [];
 var 	helper = new Helper()

 try {

	let _bufferData = [];			// 

	// - Main thread: receive request message from export.js
	self.onmessage = function(e){

		try {

			switch(e.data.type) {
				
				case 'init' :
					_template = e.data.template;
					_dataTemplate = e.data.dataTemplate;
					for(let i = 1; i <= _dataTemplate.length; i++){
						_columnId.push(getColumnID(i));
					}

					break;
				case 'addHeader' :
					if(!!Object.keys(e.data.headers)) {
						_template.sheet.content += generateRow(e.data.headers);
						_template.sheet.count++;
					}

					break;
				case 'push' :
					_bufferData.push(e.data.pageData);
					e.data.pageData.data.forEach(function(item, index){
						_template.sheet.content += generateRow(item);
						_template.sheet.count++;
						//var log = 'Số dòng đã tạo: ' + (index + (_bufferData.length - 1) * e.data.pageData.data.length + 1) + '/' + (e.data.pageData.total * e.data.pageData.data.length);
						var log = {
							row : (index + (_bufferData.length - 1) * e.data.pageData.data.length + 1),
							total : (e.data.pageData.total * e.data.pageData.data.length)
						}
						_GENERATE_WORKER.postMessage({type : 'log', log : log});
					});


					break;
				case 'get' :
					_template.sharedStrings.start += ' count="' + _template.sharedStrings.count + '" uniqueCount="' + _template.sharedStrings.uniqueCount + '">';
					_GENERATE_WORKER.postMessage({type : 'save', template : _template});
					break;
				case 'show' :
					//_GENERATE_WORKER.postMessage({type : 'show', data : _bufferData});

					//_GENERATE_WORKER.postMessage({type : 'show', data : _template.sheet.content});
					break;

				default : break;
			}

		} catch (ex) {
			console.log(ex.message);
		}
	}

	// <row r="1" spans="1:12" ht="23.25" customHeight="1" x14ac:dyDescent="0.35"><c r="A1" s="17" t="s"><v>0</v></c></row>
	function generateRow(rowData) {

		let rowString = _template.sheet.attributes != '' ? '<row r="' + (_template.sheet.count + 1) + '" ' + _template.sheet.attributes + '>': '<row r="' + (_template.sheet.count + 1) + '">';
		//let rowString ='<row r="' + (_template.sheet.count + 1) + '">';
		
		if(!!rowData) {

			_dataTemplate.forEach(function(value, index){
				if(rowData[value] != undefined && rowData[value] != null) rowString += generateCol(_template.sheet.count + 1, index, rowData[value]);
			});
		}

		rowString += '</row>';
		return rowString;
	}

	function generateCol (row, col, val) {

	   let ret = '';
	   let style = !!Object.keys(_template.sheet.columnStyle).length ? ' s="' + _template.sheet.columnStyle[col] + '" ' : '';

	   if(typeof val === "number") ret = '<c r="' + _columnId[col] + row + '"' + style + '><v>' + val + '</v></c>';
	   else{

	       let hash_code = helper.hashJavaDJB2(val.toString());

	       // Nếu sharedString ko có giá trị nào thì update SharedString và trả về kết quả
	       if(_template.sharedStrings.count == 0){

	           	_template.sharedStrings.hashTable.hashCode.push(hash_code);
	        	_template.sharedStrings.hashTable.index[hash_code] = 0;

	           	ret = '<c r="' + _columnId[col] + row + '"' + style + ' t="s"><v>' + '0' + '</v></c>';		// kết quả trả về
	           	_template.sharedStrings.content = '<si><t>' + val.toString() +'</t></si>';	// thêm mới vào trong SharedString

	           	_template.sharedStrings.uniqueCount++;
	           	_template.sharedStrings.count++;
	       }
	       else{
	       		// Tìm trong bảng hashcode >> nếu có thì lấy index trong object index >> nếu ko có thì update lại bảng hashTable
	           let serchResult = helper.binary_search(hash_code, _template.sharedStrings.hashTable.hashCode, 0, _template.sharedStrings.hashTable.hashCode.length - 1);

	           //Nếu đã có trong bảng hashCode >> lấy vị trí của giá trị đó trng bảng index
	           if(serchResult.result == 1){
	           		console.log(val, serchResult.index);
	           		_GENERATE_WORKER.postMessage({type : 'show', data : { hash : _template.sharedStrings.hashTable, hashCode : hash_code}});
	               ret = '<c r="' + _columnId[col] + row + '"' + style + ' t="s"><v>' + _template.sharedStrings.hashTable.index[hash_code] + '</v></c>';
	           }
	           else{ // Nếu ko có trong bảng hashCode

	               _template.sharedStrings.hashTable.hashCode.splice(serchResult.index, 0, hash_code); // Thêm giá trị mới vào bảng hashCode

	               _template.sharedStrings.hashTable.index[hash_code] = JSON.parse(JSON.stringify(_template.sharedStrings.uniqueCount));

	               ret = '<c r="' + _columnId[col] + row + '"' + style + ' t="s"><v>' + _template.sharedStrings.uniqueCount + '</v></c>';
	               _template.sharedStrings.content += '<si><t>' + val.toString() +'</t></si>';

	               _template.sharedStrings.uniqueCount++;
	               _template.sharedStrings.count++;
	           }
	       }
	   }
	   
	   return ret;
	};

	var getColumnID = function(col){
		var name = ["A", "B", "C", "D", "E", 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	  
	 	var n = '';
	 	while(!!col){
	 		var d = col % 27;
			n = name[(d - 1) > 0 ? d - 1 : 0] + n;
			col = Math.floor(col/27);
		}
	  
		return n;
	}
	
 } catch (e) {
 	console.log(e);
 	///_GENERATE_WORKER.postMessage({type : 'show', data : JSON.stringify(e)});
 }
