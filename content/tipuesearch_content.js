var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://mdecd2024.github.io/2a-midag1/content/index.html \n 網誌:  https://mdecd2024.github.io/2a-midag1/blog \n 簡報:\xa0 https://mdecd2024.github.io/2a-midag1/reveal \n 倉儲:  https://github.com/mdecd2024/2a-midag1 \n \n 各組員倉儲 \n 41123101  https://github.com/41123101/cd2024 \n 41123120  https://github.com/41123120/cd2024 \n 41123124  https://github.com/probe2004/cd2024 \n 41123140 \n 41123146\xa0 https://github.com/41123146ray/cd2024 \n 41123150 \n 41136113 \n 41136113\xa0 https://github.com/QIUKZ/cd2024 \n 41136123\xa0 https://github.com/4YuLa /cd2024 \n 各組員網誌 \n 41123101  https://41123101.github.io/cd2024/blog/ \n 41123120 \n 41123124 \xa0 https://probe2004.github.io/cd2024/blog \n 41123140 \n 41123146\xa0 \n 41123150 \n 41136113 \n 41136113\xa0 \n 41136123 \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Codespaces', 'text': 'https://github.com/codespaces \n', 'tags': '', 'url': 'Codespaces.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n', 'tags': '', 'url': 'Brython.html'}, {'title': '作業討論區', 'text': '常見問題 \n 關於codespaces使用方法，都在賴群有步驟，或是可以到41123124的網誌查看。 \n 網誌轉換的問題 ./gen_blog輸入後enter，有時可能因為網路或是replit沒有更新那麼快，建議commit以及push完畢再重新整理一下再check一次。 \n 這週要做甚麼，可以先到老師的blog看看每週進度，接著做做看，有遇到瓶頸都可以在群組討論。 \n 可以透過github裡面的codespaces進行更新，也可以從replit打開的網站來修改。 \n 近期使用動態網站來更新群組網站會出現git衝突問題，這時候要到shell輸入git push，replit會建議你如何解決，通常會出現git config pull.rebase false這個選項，輸入後他會要求你修正現在的推送，再輸入git add .加入東西給他測試推送，git commit -m "test"，最後git merge統整在一起。 \n', 'tags': '', 'url': '作業討論區.html'}, {'title': '課程心得', 'text': '41123101 \n 41123120 課程心得: \n 從一年級開始接觸github，replit一些基礎的技巧之後，在二下這門課變得輕鬆不少。除了基本的維護倉儲，這學期開始學習網誌的編寫，每週也學習不同領域的知識；例如操作繪圖軟體、幫影片上字幕、透過Chat GPT輔助翻譯論文並統整其內容大綱，這些都有別於以往的課程專注於單一領域的學習，更有多方學習的效果。 \n 41123124\xa0 課程心得: \n 對於網站編寫的流程有一點點的了解，經常在滑社群網站也會看到很多關於java或是html的廣告教學，不禁會讓我想到我們使用replit建立的靜態網站，想必這在未來會是一大趨勢。但是在這些作業完成的前提之下，我可能還需要學習如何管理一個群組，像是組員的進度不一致或是 大家遇到一樣的問題卡關 的時候，常有每個人都不知道怎麼做而愣在一旁，我自己透過詢問老師以及chatGPT有得到相當大的解答。再將資訊給組員參考。除了寫程式以外更了解到這些原理的背後運作方式，有效率的消化多方面不同的改版，最後可以在網路上共同完成。老師提到現今的機械企業在處理眾多改版以及客戶以及工程師溝通上的問題，我們所學習的協同設計就應該要可以融合在CAD上，在零件上的討論修改等等。修這門課可以讓我在未來更有競爭裡且對於我自己想走的路線是頗有幫助的，雖然語言程式真的很難。 \n 41123140 \n 41123146\xa0 \n 課程中學到很多,像是網站的編寫跟繪圖的技巧,常常會卡關,但是組長都會協助我,讓我可以學到更多東西 \n 41123150 \n 41136113 課程心得: \n 在協同產品設計這門課中，我學到了很多關於團隊合作和管理項目的知識。這門課和傳統的上課方式不同。我的組別使用了多種工具和平台，比如Github、Replit、Odoo、NX、Coppeliasim等，來協同工作和管理我們的專案。在這門課上，我們學習了如何使用這些工具來完成任務，同時還意識到團隊分工的重要性。透過合作，我們可以更快速、更有效地完成每週的任務。使用程式來控制物體的運動，並利用AI等新興技術，讓我感受到技術的力量和可能性。在協同產品設計的過程中，我體會到團隊合作的重要性，也學到了如何在多個人協作的情況下保持項目的進度和品質。這門課教會了我如何在實際環境中使用技術，同時讓我理解到通過合作和溝通，可以達到比個人單打獨鬥更好的效果。 \n 41136123\xa0 課程心得:\xa0 \n 在該課程中，我學到了我平常不會接觸的github網站建立等技巧，過程中常常會遇到問題，但經過各組員的協助加上老師的幫助還是可以解決這些問題，在該課程中我學到了很多。 \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': '課程心得.html'}]};