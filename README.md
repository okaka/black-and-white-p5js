# black-and-white-p5js
「白黒p5.js」掲載サンプルコード公開用リポジトリです。

## このリポジトリの使い方

以下のリストは、書籍「白黒p5.js」の各章・節に対応しています。  
各リンク文言は、誌面の掲載コードのキャプションにおおむね対応しており、リンクをクリックすると該当のコードにジャンプします。
コードをコピーして、[p5.js Web Editor](https://editor.p5js.org/)にペーストしてお使いください。

※ 万が一、コードに誤りがあった場合は、issueなどでお知らせいただけると助かります。

## クイックスタート
[最終的なコード](quick/complete.js)

## p5.jsの基本

### 移動と回転
- [原点を移動する](basic/translate_square.js)
- [回転を試みる前のコード](basic/rotate_square_before.js)
- [回転を試みた後のコード](basic/rotate_square_after.js)
- [四角形の描画原点を中央に移動](basic/rotate_rectmode.js)

### `push()`と`pop()`
[四角形の入れ子を敷き詰める](basic/pushpop_correct.js)

## よく使う機能と関数

### `for()`
[四角形を敷き詰める](methods/forloop.js)

### `random()`
[ランダムな大きさの円をランダムに配置](methods/random.js)

### `randomGaussian()`
[画面中央に小さな四角形をたくさん描く](methods/gaussian.js)

### `sin()`と`cos()`
- [sin()とcos()で円を描く](methods/sincos_circle_point.js)
- [円周上に小さな円を並べる](methods/sincos_circle_circle.js)
- [さらに加工](methods/sincos_circle_random.js)

## もしかしたら役にたつTips集

### ミニ関数を貯めておく
- [noiseLineShape()関数](tips/noise_line_shape.js)
- [noiseLineShape()関数の応用例](tips/noise_line_shape_arrange.js)

## ひとり個展をたのしむ

### `scale()`で拡大
[キャンバス縦横サイズを400pxから1000pxに拡大](print/scale.js)

### `scale()`でうまくいかない時
- [ドットを敷き詰めた四角形を並べる](print/dot_squares_before.js)
- [基本サイズを設定してサイズ変更をしやすくする](print/dot_squares_after.js)
