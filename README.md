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
````
var xlsx = new XLSX({
    			fileName		:  ,
    			pathToLib		:  ,
    			linkGetData 	:  ,
    			paramsFilter 	:  ,
    			columnNames	 	:  ,
    			dataTemplate 	:  ,
    			xlsxTemplate	:  ,
    			rowStyleReq		:
    		});
````
Tham số:
1. `filename` : Tên file excel.
2. `pathToLib` : đường dẫn tới thư mục (thư mục cha) chứa `exportJS`.
3. `linkGetData` : đường dẫn lấy dữ liệu.
4. `paramsFilter` : các điều kiện lọc dữ liệu.
5. `columnNames` : Tên của các cột trong file excel.
6. `dataTemplate` : Tên của các trường trong CSDL tương ứng với các cột `columnNames`.
7. `xlsxTemplate` : Template của file excel mẫu.
8. `rowStyleReq` : Yêu cầu về style đối với từng dòng dữ liệu trong file excel.

------------------------------------------------------------


1. `filename`:
-------------
Tên file excel (*) không bao gồm đuôi file .xlsx

2. `pathToLib`:
--------------
Đường dẫn tới thư mục (thư mục cha) chứa `exportJS`. (*) đường dẫn không bao gồm `exportJS`

3. `linkGetData`:
----------------
Đường dẫn đến controller lấy dữ liệu.



Program reviewed by the University of California, Riverside.
------------------------------------------------------------
Basic Overview of Command Shells: [HERE](http://linuxgazette.net/111/ramankutty.html)

This program is developed to write a simple command shell called "RShell."

- It will offer similarities such as the normal BASH Command shell.

- Execute the command of ls to a file (with given instructions above)

- Can call all commands of BASH with execv function

- Have special built in command "exit" to exit RSHELL and return to your local SHELL


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
