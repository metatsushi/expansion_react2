# Book APIを使ったBookListの作成

- とりあえず講義通りのサイト作成に加えて、本のイメージ、著書など各種情報をBookdataから抽出
- ReactではReturnするHTMLの中の最上位の要素は1つにまとめられていることが必要ということ理解した
- 例えばliとかdivが最上位に複数並んでいるとErrorになるので注意が必要

- Booklist.jsxファイルの中の、
- const result = getData?.(language).then((response) => 
-   setBookData(response)
- のところの、resultは変数設定しているが後ろで受けておらず、どう使っているのかわからなかったので確認したい
- react内でのstyleの当て方は波カッコ2つ{{}}にすること、プロパティにハイフンを含む場合はキャメルケースに入れ替えること、値は’’で括ることも必要
