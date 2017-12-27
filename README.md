# ExportJS
----------
File List
---------
```
.:

README.md

./exportJS          : copy directory to project.

./ExportJS-Tools    : use to auto generate excel file template.

```
```
/exportJS:

    export.js           : include to script tag

    generate-worker.js

    get-data-worker.js

    helper.js

    jszip.min.js

    FileSaver.min.js

    jquery-nodom.js
    
```

Getting started
---------------
1. `./exportJS`         : Thư mục chứa thư viện.
2. `./ExportJS-Tools`   : Thư mục chứa tool hỗ trợ tạo template của file excel mẫu - tạo tham số đầu vào cho hàm nếu file excel có cấu trúc style theo mẫu đã được định nghĩa.

+ Clone / Download thư viện và copy thư mục `exportJS` vào project.

+ Include vào project: import `export.js` file

    `<script type="text-javascript" src="path_to_exportJS_dir/export.js"></script>`
    
Ex:
    
    `<script type="text-javascript" src="http://building-export.ex.com/assets/js/ExportJS/export.js"></script>`
    
(*) Nếu project chưa có thư viện FontAwesome (v4.7.0) thì phải khai báo thêm:

    `<script src="https://use.fontawesome.com/2e1c1f0db0.js"></script>`
    
How to use:
--------------------------------------------------------------------------------------
``
var xlsx = new XLSX({
    			fileName	:  ,
    			pathToLib	:  ,
    			linkGetData 	:  ,
    			paramsFilter 	:  ,
    			columnNames	 : ,
    			dataTemplate 	:  ,
    			xlsxTemplate	:  ,
    			rowStyleReq	:
    		});
``
Tham số:
1. `filename` : Tên file excel.
2. `pathToLib` : đường dẫn tới thư mục (thư mục cha) chứa `exportJS`.
3. `linkGetData` : đường dẫn lấy dữ liệu.
4. `paramsFilter` : các điều kiện lọc dữ liệu.
5. `columnNames` : Tên của các cột trong file excel.
6. `dataTemplate` : Tên của các trường trong CSDL tương ứng với các cột `columnNames`.
7. `xlsxTemplate` : Template của file excel mẫu.
8. `rowStyleReq` : Yêu cầu về style đối với từng dòng dữ liệu trong file excel.


filename
-------------
Tên file excel (*) tên file không bao gồm đuôi file .xlsx

pathToLib
--------------
Đường dẫn tới thư mục (thư mục cha) chứa `exportJS`. (*) đường dẫn không bao gồm `exportJS`

linkGetData
----------------
Đường dẫn đến controller lấy dữ liệu.

paramsFilter
-------------
Các điều kiện lọc dữ liệu: kiểu Object:

Ex :

`
    paramsFilter = {
        columnName_1 : 'filter value of column 1',
        columnName_2 : 'filter value of column 2',
        ...
        columnName_n : 'filter value of column n',
    }

`

(*) Cách nhận `paramsFilter` trong controller (PHP code):

    `$paramsFilter = $_REQUEST['paramsFilter'];`
    
`$paramsFilter` sẽ có các thuộc tính như đối tượng khai báo đầu vào. Tất cả các giá trị nhận được đều dưới dạng string

(*) Các tham số mặc định:
 1. page : trang dữ liệu cần lấy.
 2. pageSize : kích thước trang dữ liệu.
 
 (*) Các tham số yêu cầu trả về:
 1. res : trạng thái lấy dữ liệu thành công hay thất bại.
 2. total : tổng số trang dữ liệu.
 3. data : dữ liệu của 1 trang.
 
 Ex: (PHP code)
 
 ``
            $ret        = (object)[];
            $ret->res   = 1;
            $ret->total = $total_page; 
            $ret->data  = array();
          
 ``

columnNames
--------------
Kiểu : `Array(string)`.

Tên của các cột trong file excel.

dataTemplate
-------------
Kiểu : `Array(string)`.

Tên của các trường trong CSDL tương ứng với các cột `columnNames`.

rowStyleReq
------------

Kiểu : `Object`

Form : `{ definedInTheLastLine : boolean, keepData: boolean}`.

1. Nếu trong tempalte file có định nghĩa style cho từng dòng dữ liệu ( VD : căn giữa/trái/phải , in nghiêng/Đậm, font chữ, ...) ở cuối thì tham số `definedInTheLastLine` = `true`. Yêu cầu phải có tham số đầu vào cho `xlsxTemplate`.
2. Nếu muốn giữ lại dữ liệu dòng định nghĩa style thì tham số `keepData` = `true`.

xlsxTemplate
-------------

Định nghĩa mẫu file excel:

Ex : 

`

    var _rel = "";
    var wb  = "";
    var sharedString = "";
    var theme = "";
    var styles = "";
    var sheet_text = "";
    
    var xlsxTemplate_1 = {
		    	_rel 	: _rel,
		    	sheet  	: sheet_text,
		    	sharedString : sharedString,
		    	styles	: styles,
		    	theme 	: theme,
		    	workbook : wb
		    };
            
    let xlsx = new XLSX({
    			...
    			xlsxTemplate	: xlsxTemplate_1,
                ...
    		});
            
`
Chạy file `index.html` trong thư mục `ExportJS-Tools`:
1. Chọn file excel mẫu.
2. Copy kết quả (Đừng ấn nút `copy`).

System Requie
-------------

Browser support : Worker, ES6

Chạy tốt nhất trên UC Desktop.


Bugs
---

Licensing Information: READ LICENSE

Project source can be downloaded from https://github.com/LongHK27/ExportJS.git

-----------
Author & Contributor List
-----------
Hoang Long - LongHK

All other known bugs and fixes can be sent to hoanglong270195@gmail.com

Reported bugs/fixes will be submitted to correction.
