# ExportJS
==========

Licensing Information: READ LICENSE
---
Project source can be downloaded from https://github.com/LongHK27/ExportJS.git
----

Author & Contributor List
-----------
Hoang Long - LongHK

All other known bugs and fixes can be sent to hoanglong270195@gmail.com

Reported bugs/fixes will be submitted to correction.

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

How to import
---------------


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
1. `exit` commands works 75% of the time under normal use and testing

2. `^C` works but when calling it from rshell with nothing running, will produce an error pertaining to a vector out of range. (GDB debugging still in progress)
