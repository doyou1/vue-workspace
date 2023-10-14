- references: https://www.youtube.com/watch?v=ADxbGlwhl_s

- frontend => vue3
- backend => express
- db => mysql

### mariadb onoff with brew
- init 
    - brew update
    - brew install mariadb
    - brew services start mariadb
    - mysql.server start

    - mysql -u root
        - 이걸 했을때 Access denied가 나오면 PW 설정을 안했을 가능성이 큼

    - sudo mariadb-secure-installation
        - 이걸 해서 다 권장인 Y 를 택하고 (나중에 설정 변경 가능) 비번을 설정한다

    - mysql -u root -p
        - 이게 나왔을때 내가 설정한 PassWord 를 입력하면 잘 실행됨!!
    - (id: root, pwd: 0000)

- install : `brew install mariadb`
- start : `brew services start mariadb` `mysql.server start`
- stop : `brew services stop mariadb`
- status : `brew services list`

