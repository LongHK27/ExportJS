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

+, Clone / Download thư viện và copy thư mục `exportJS` vào project.

+, Include vào project: import `export.js` file

    `<script type="text-javascript" src="path_to_exportJS_dir/export.js"></script>`
    
Ex:

    `<script type="text-javascript" src="http://building-export.ex.com/assets/js/ExportJS/export.js"></script>`
    
Once you have cloned the directory to your local machine, follow the directions below:
--------------------------------------------------------------------------------------
1. `cd` into `rshell` directory

2. Call `make`

3. `cd` into `bin`

4. Call `rshell`

5. Can do steps 3 & 4 by calling `bin/rshell`

RShell will now open up instead of BASH and you can execute almost all to nothing commands as included in the regular terminal.


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
