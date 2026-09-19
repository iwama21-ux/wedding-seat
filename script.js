// =========================
// ゲストデータ（A〜Hテーブル・歴代総理大臣仮データ）
// =========================

const tables = {
  "A": [
    { name: "小野 光太郎", relation: "新郎高専友人", img: "images/ono.png", description: "責任感が強く、何もかも引っ張っていってくれる人。高専時代ではバレー部の部長をやっており、問題児だらけの同世代をまとめていました。遠くに転勤して少しずつ会う機会が少なくなってきたけど、「信頼」はずっと続いてます！" },
    { name: "北向 拓人", relation: "新郎高専友人", img: "images/takuto.png", description: "人柄が良く超温和な思いやりの溢れる紳士。高専時代でよく部活の女子練中はいつも一緒に筋トレしてました。最近、自分磨きもしていてとても尊敬してます！" },
    { name: "日登 広大", relation: "新郎高専友人", img: "images/hinobori2.png", description: "コミュ力お化け。学校で一緒に歩いてると色んな人と会話しだすので、めっちゃ疎外感を感じるので要注意。陸上部は球技が下手というのを覆すほど色んな球技が上手い。最近パパになりましたね。これからもよろしく！" },
    { name: "西野 崇行", relation: "新郎高専友人", img: "images/nishino.png", description: "めちゃくちゃ頭が良い人。授業聞かずとも理解をしている天才、寮ではみんなの先生になってました。一方で授業中に教卓の中に隠れて先生を驚かせたりする問題児でもありました。内緒だけど世界で1番好きなのはラブライブ。" },
    { name: "町屋 秀幸", relation: "新郎高専友人", img: "images/machiya.png", description: "バスケ部じゃないのにバスケが上手いで有名なシャイボーイ。青森に住んでいるので、町屋が東京来たタイミングでみんなで集まるというのが定番化してきてそう。これからも年2回くらいは遊びに来てな。" },
    { name: "長内 大輔", relation: "新郎高専先輩", img: "images/daisuke.png", description: "出会ってから1,2年間はめっちゃ怖かった。けど仲良くなってからはとても良い先輩。進学するか悩んでいた時に背中を押してくれたあの宅飲み未だに覚えてます！" },
    { name: "杉沢 直樹", relation: "新郎大学院友人兼送迎係", img: "images/sugisawa.png", description: "いつの間にか仲良くなってた謎の人。大学院ではお互い車持ってたから飲み会次の日の朝は送迎し合っていた。空気の読み方が異常に上手いハイスペ後輩！最近飲みにいけてないから行きたいなぁ。誘ってくれ。" }
  ],
  "B": [
    { name: "菅原 博人", relation: "NaCoTe", img: "images/hiroto.png", description: "お酒、ラーメン、バレーといえばこの男。分け隔てなくコミュニケーションを取れるのは本当に才能だと思う。こう見えて彼女を大切にしているところも点数が高い。博人在るところに笑顔あり。今後とも皆んなを引っ張っていってくれ！" },
    { name: "堀 夏樹", relation: "NaCoTe", img: "images/hori.png", description: "バレーに命を売ったと言ってもいいほど、バレーを愛している男。優しさと気遣いも兼ね備えており最高の男。結婚式終わったあと「今日めっちゃ楽しかった」ってテンション高く言って欲しいです！" },
    { name: "福元 義久", relation: "NaCoTe", img: "images/test.png", description: "身体能力抜群のムキムキ青年。バレーチーム内では年下の方にも関わらず練習、大会、飲み会など引っ張っていってくれている(たぶん)頼もしい存在です！これからも中心メンバーとして引っ張っていってくれ" },
    { name: "野村 規幸", relation: "tNaCoTe", img: "images/nomu.png", description: "破天荒に魅せたいように見えるが、真面目なところが垣間見えるのが面白い。バレーに本気で向き合っているとこ尊敬してます。1点ネガティブなことを言うと、飲み会の時に荷物を全て置いて帰るタイプの人でもある。" },
    { name: "青木・ぐー・大地", relation: "料理人", img: "images/daichi.png", description: "仲が良くなってくるとそれに応じて口が悪くなっていくツンデレです。何を隠そう、この人は料理が超上手なんです。特に肉料理は絶品！得意料理はグーのすき焼き。また作ってくれるの期待してます！" },
    { name: "及川 大志", relation: "NaCoTe", img: "images/taishi.png", description: "学力もさることながら地頭も凄く良い。さらに身体能力が高く、音楽、料理の才能もあり、コミュ力お化けの正にパーフェクトヒューマン。あまり言う機会もないので、このタイミングで。めちゃ尊敬してます！" },
    { name: "小澤 萌", relation: "NaCoTe", img: "images/megumi.png", description: "お酒飲んでダウンしているイメージしかないです。昔は急な飲み会とか河原で飲んだりとか楽しかったなぁ。ともやとかともきとかと飲んだ飲み会楽しかったなぁ。なんて思っている今日このごろ。直近でまた飲みに行こうな" },
    { name: "坂本 千咲", relation: "NaCoTe", img: "images/chisaki.png", description: "高専時代の女子チームのセッター。現役の時はお互いにライバル意識持っててバチバチしてた。コート離れたらまぁ仲良かった気はするかな。朝ごはんはちゃんと食べること。これ大事！" }
  ],
  "C": [
    { name: "泉 雛花", relation: "新婦大学友人", img: "images/hina.png", description: "オーストラリアにもアメリカにも、ひながいたからできた経験がいっぱい！何事にも真面目で一生懸命なところがかっこよくて、尊敬してる！たまに出る真顔のツッコミが面白い（笑）。笑う時は目をつぶって上を向いて、お腹を抱えるかのけぞって笑うひな！頼りになる、みんなのまとめ役です♪" },
    { name: "仲野 晴香", relation: "新婦大学友人", img: "images/haruka.png", description: "とっても感情が分かりやすくて、保育メンの母のような存在のはるか！何事にも丁寧で、一生懸命取り組む姿が素敵です！ちなみにLINEの返信は友だち1遅いです（笑）。ドライブでは歌いながら琵琶湖を楽しんだな♪いつも運転ありがとう！うさぎみたいに可愛らしいところも大好き！" },
    { name: "松井 千春", relation: "新婦大学友人", img: "images/chiharu.png", description: "どんなことでも大笑いしてるちはる！ちはるの沸騰するような笑い声につられて、いつもみんなで大爆笑（笑）。大学帰りの電車でも、周りが寝静まっている中でも、2人で声を抑えながら酸欠になるほどケラケラ笑ったな！いつも周りを明るくしてくれる、太陽みたいな存在です！" },
    { name: "藤田 沙帆", relation: "新婦大学友人", img: "images/saho.png", description: "東京に泊まりに来てくれた時は、乗り換えをミスりながら閉店ギリギリのハンバーグ屋さんへ全力ダッシュ！「間に合った！」と思ったら、まさかの「本日売り切れ」の看板（笑）。2人で看板の前にすがりついて絶望したのも、今では良い思い出です！ボケもツッコミもこなすザ・大阪人で、いつも周りを笑わせてくれます！" },
    { name: "深沢 弥生", relation: "新婦大学友人", img: "images/test.png", description: "明治期の政治家です。" },
    { name: "速水 渚早", relation: "新婦大学友人", img: "images/test.png", description: "明治期の政治家です。" }
  ],
  "D": [
    { name: "伊東 絢女", relation: "新婦元職場同僚", img: "images/itou.png", description: "新卒で初めてできた先輩！ポンコツな私にいつも優しく、たくさんのことを教えてくれました。頭の回転が早く、本当にシゴデキすぎる人です！姉御肌で情に熱いところもかっこよくて、憧れています！人生で初めてあんなに酔ったのは、伊東先生とのワイン飲み放題でした（笑）。自分の限界を知り、大人の飲み方も教わりました（笑）" },
    { name: "中村 愛美", relation: "新婦元職場同僚", img: "images/nakamura.png", description: "2年目で同じクラスになった先輩！子どもたちの前でバレンタインデーの日について全力で演技した私たち（笑）。毎日の保育が本当に楽しかったです！元気いっぱいで、コミュ力が高く、すぐに距離を縮められるところに憧れます！そのおかげで、職場の人たちにも心を開くことができました。行動力もピカイチです♪" }
  ],
  "E": [
    { name: "宮田 隆平", relation: "新郎元職場同僚", img: "images/ryuhe.png", description: "ムキムキイケメン。公園にいた野生のカエルを躊躇うことなく平気で掴んで人を追いかけ回す狂人笑。旅行前に家に泊まった時の宮田家バーが忘れられないです！" },
    { name: "手塚 寛人", relation: "新郎元職場同僚", img: "images/tezuka.png", description: "まじで謎男。結構飲みに行ってる気がするけど手塚という男が何なのかまだ謎。けど飲み会や旅行に来てくれるということは良い人だと思う！合コンに男1人で参戦する度胸ありまくり男！" },
    { name: "羽賀 拓人", relation: "新郎元職場同僚", img: "images/haga.png", description: "酒をのんで一度寝たらまじで起きない。すき家のテーブルで寝始めたときはまじで焦りました。なんか最近は沖縄めっちゃ行ってるなぁって、いいなぁって思ってます。同期のまとめ役！" },
    { name: "寺島 隆太", relation: "新郎元職場同僚", img: "images/taraji.png", description: "同期きっての優男！性格はめちゃくちゃ穏やかで怒ったところを想像できない。旅行行ったときに1人だけ二日酔いでダウンしていたの覚えてます！屍で唯一まともな人！" },
    { name: "齋藤 友里", relation: "新郎元職場同僚", img: "images/yurinee.png", description: "出産おめでと！二次会の誘いを強い意志で断れるの尊敬してます。新宿西口？のとこであかねに追いかけ回されてるのめっちゃおもろかった！姉御肌のお嬢様です！" },
    { name: "平山 亜鐘", relation: "新郎元職場同僚", img: "images/akane.png", description: "結婚おめでと！まさか結婚するとは。。昔は会社にすっぴんで来てたけど今はどうなんかな？博多弁の破天荒女です！" }
  ],
  "F": [
    { name: "田村 梨緒", relation: "NaCoTe", img: "images/rio.png", description: "team.NaCoTeの今のボス。仕事にバレー、他にも諸々で色々大変そう。知らんけど。昔はめぐみとかと飲みに行ってたけど最近は行けてないな。また行こうな。あと、ちゃんとバレー来なよ" },
    { name: "高橋 楓", relation: "NaCoTe", img: "images/kaede.png", description: "2児のママになって最近バレーに復活！たぶんナコテとして練習いくのは俺と同じくらいの少頻度だから練習で会うのは奇跡かも。また一緒にバレーするの楽しみにしてます！" },
    { name: "田村 理子", relation: "NaCoTe", img: "images/tamuriko2.png", description: "たぶんですが、何事にも一生懸命に向き合って努力できる子です。比較的飲み会とかで会っている気がするので近況は結構知っているかも。またバレー終わりとか飲みに誘ってください。" },
    { name: "南舘 克哉", relation: "NaCoTe", img: "images/katsuya.png", description: "イケメンとはこの人のためにあるんじゃないかというくらいカッコいい。さらに運動神経？も良く高専時代ではバレー素人ながら、スタメンをはっていた経歴を持つ。これからもカッコいい克哉であり続けてな！" },
    { name: "南舘 菜々", relation: "NaCoTe", img: "images/nana.png", description: "克哉の嫁。というのがきっかけで仲良くなりました。とても朗らかで表情豊かな印象！年に1回くらい開催されるホームパーティいつも楽しみにしてます！またお誘いお待ちしてます" },
    { name: "南舘 こはる", relation: "新郎友人御令嬢", img: "images/koharu.png", description: "南舘家の長女。可愛すぎる！可愛いは世界を救う！会う度に成長していて、気がつけばもう小学生！？これからの人生に幸あれ！" },
    { name: "南舘 ひより", relation: "新郎友人御令嬢", img: "images/hiyori.png", description: "南舘家の次女。尊すぎる！尊いは世界を変える！会う度に成長していて、気がつけばもう年中さん！？これからの人生に幸あれ！" },
    { name: "南舘 うらら", relation: "新郎友人御令嬢", img: "images/urara.png", description: "南舘家の三女。麗しすぎる！麗しいは世界を平和にする！まだ会ったことがないのではじめましてです！これからの人生に幸あれ！" }
  ],
  "G": [
    { name: "山口 咲", relation: "新婦高校友人", img: "images/saki.png", description: "昔からの友だちみたいな雰囲気があって、一緒にいると素でいられる心地の良い存在！帰り道は基本、2人で歌って踊りながら歩いています♪ツボが浅すぎて、いつもうるさいくらい笑っています！ここだけの話、ちょっとお口が悪いです（笑）。いつも2人でぺちゃくちゃ言い合いながら、楽しく過ごしています！" },
    { name: "飯田 美喜", relation: "新婦高校友人", img: "images/miki.png", description: "多趣味で好きなことがいーっぱい！趣味も仕事も大忙しだけど、どちらも手を抜かず全力で楽しんでいます！おしゃべりが大好きで、いつも話題が豊富♪みきと話しているとあっという間に時間が過ぎます！食べることも大好きで、トッピングできるものやプラスできるものは絶対に追加するとこるも、みきらしくて大好き！" },
    { name: "秋吉 瑞季", relation: "新婦高校友人", img: "images/mizuki.png", description: "つるぴかメンバーのお母さん的存在！笑い声はジェットコースター型で、急に声が大きくなります！丁寧な暮らしをしていて、お米を土鍋で炊いたり、おしゃれな陶器のお皿に盛り付けたりと、いつも美味しそうなご飯を作っています！BBQでの燻製べーコン入りホットサンドは美味しすぎて、毎回楽しみにしています♪" }
  ],
  "H": [
    { name: "岩間 サヨ", relation: "新郎祖母", img: "images/bachan.png", description: "子供の頃は嫌すぎて泣きながら行っていた民謡。今思えば他人とは違うことをやる勇気と同時に嫌なことをある程度はやり切る忍耐力を身につけれました。ありがとう！これからも時々帰ると思うから、健康で長生きしてください！" },
    { name: "岩間 頌太朗", relation: "新郎兄", img: "images/ani.png", description: "とっても弟思いの兄です！最後の１つの唐揚げは譲ってくれるし、高専の合格祝いでWii を買ってくれたり、野球の試合を観に仙台に行ったらわざわざ観覧席まで来てこれでご飯でも食べろって5000円置いて試合見ずに帰ったり…常に兄として弟を気にかけてくれてたなと思います。これからもカッコいい兄として弟のお世話よろしく！" },
    { name: "岩間 智美", relation: "新郎義姉", img: "images/test.png", description: "可愛い朱里と蒼斗のお母さんかつ兄の奥さん！実家ではじぃじとばばぁが甘やかすから、わがままになった2人を叱っているイメージがちょっとだけあります(笑)。叱ってあげる愛情というのも間近で学ばせてもらえてとても感謝です！" },
    { name: "岩間 朱里", relation: "新郎姪", img: "images/test.png", description: "可愛いあかりちゃん！0歳の時のあかりを抱っこしたのを思い出すと、もうこんなに大きくなったんだと驚きと感動が溢れてきます！これからも元気いっぱいに小学校楽しんでね！" },
    { name: "岩間 蒼斗", relation: "新郎甥", img: "images/test.png", description: "かっこいいあおとくん！最近はこうじ君大好き！って言ってくれるようになってたまらなく愛おしいです！これからも元気いっぱいのびのびと大きくなってね！" },
    { name: "岩間 孝雄", relation: "新郎父", img: "images/chichi.png", description: "昔から当たり前に家事をしていること、ベビースターを1本ずつ食べるとこ、自分で作れ！といいながらもなんだかんだラーメン作ってくれるとこ、こっそりお小遣いくれたこと、お酒で気が大きくなって子供のお願いを何でもいいよって言ってくれること、その事を次の日全く覚えてないこと。全てが父さんの良い所だと思います！世界で一番尊敬してます！これからも健康に元気でいてください" },
    { name: "岩間 圭子", relation: "新郎母", img: "images/haha.png", description: "小学校のお弁当の日に味噌汁ごはん入れたり、カレーにバナナいれて食べれるものじゃなくなったりと思い出せば色んな思い出が出てきます。そんな思い出の全てが私のかけがえのない宝物です。これまでたくさんの愛情を注いできてくれてありがとう！これからは恩返しできるよう頑張ります！" }
  ],
  "I": [
    { name: "水口 ゆりな", relation: "新婦親戚", img: "images/yurinei.png", description: "親戚の中で唯一の同い年！生まれた時から旅行やお出かけをたくさんして、思い出がいっぱい♪ パティシエのゆりねえは、家に遊びに行くたびに可愛くて美味しいスイーツを作ってくれます！見た目も味も最高で、「さすがプロ！」と毎回感動しています♡" },
    { name: "水口 情次", relation: "新婦親戚", img: "images/joji.png", description: "私が通っていた高校で、体育の先生もしているじょーじのおっちゃん！お家には生徒からの寄せ書きや、生徒が描いた大きな似顔絵が飾ってあって、たくさんの生徒から愛されているのが伝わってきます！今でも毎日のようにランニングをしていて尊敬です！" },
    { name: "多田 まりや", relation: "新婦親戚", img: "images/marinei.png", description: "親戚のちびちゃんずの中で1番年上の優しいお姉ちゃん！昔からポケモンが大好きで、ぬいぐるみもたくさん♪ 3姉妹の長女だけど、妹2人に注意されている姿がなんだか面白い（笑）。「いる？」と聞かれた食べ物は何でも「いる！」と言っちゃう食いしん坊さん♪" },
    { name: "中島 凛音", relation: "新婦従妹", img: "images/rion.png", description: "私が高校生の時に生まれたりおん！りおんの成長を近くで見れたことが本に嬉しくて、「やっぱり保育士になりたい！」と思わせてくれた大切な存在です♡小さい頃から笑顔いっぱいで、いつも癒されています！一緒にダンスを踊ったり、おままごとをしたり、楽しい思い出がいっぱい♪だいすきだよ♡" },
    { name: "中島 辰徳", relation: "新婦叔父", img: "images/tachan.png", description: "生まれた頃からずっと近くにいた存在！中島家では珍しいくらい、穏やかで優しい人です！（笑）りおんが生まれてからも、ディズニーやユニバにも一緒にたくさん連れて行ってくれて、楽しい思い出がいっぱいです！いつも可愛がってくれてありがとう！" },
    { name: "森 明美", relation: "新婦親戚", img: "images/aminei.png", description: "実家のすぐ近くに住んでいるあみねえ！昔から今も、親戚ちびちゃんずの集まり場といえばあみねぇの家♪「行けばいる！」という安心感があって、いつも明るく迎えてくれる優しい存在です！縫い物も上手で、ポーチや手袋を作ってくれました！いつも使ってます！" }
  ],
  "J": [
    { name: "大矢 素来", relation: "親戚従弟", img: "images/sora.png", description: "戦後の総理です。" },
    { name: "大矢 彩生", relation: "親戚従兄", img: "images/saiki.png", description: "昭和後期の総理です。" },
    { name: "大矢 聡子", relation: "新婦叔母", img: "images/satoko.png", description: "新潟に住んでいるお母さんの妹で、穏やかで話し方がかわいい！前に地元のテレビに出たとき、頑張って標準語で話したつもりが、オンエアを見てみると思っていた以上に訛っててショックを受けた話がめちゃくちゃ面白かった（笑）。私の大好きな笹団子もいつも送ってくれてありがとう！" },
    { name: "大矢 友和", relation: "新婦叔父", img: "images/tomokazu.png", description: "昭和後期の総理です。" },
    { name: "中山 タヅ", relation: "新婦祖母", img: "images/obachan.png", description: "新潟に行くたびに作ってくれる「だいかい」が大好きで、いつもおかわりしちゃいます！お米の乾燥やじゃがいも掘り、ずんだもち作りなど、普段なかなかできない体験もたくさんさせてくれました。初めて雪かきをしたときは、しんどすぎて、おばあちゃんが毎年やっていることに改めて尊敬しました！" },
    { name: "中島 広稀", relation: "新婦弟", img: "images/test.png", description: "昭和後期の総理です。" },
    { name: "中島 妙子", relation: "新婦母", img: "images/mayahaha.png", description: "昭和期の総理です。" },
    { name: "中島 静", relation: "新婦父", img: "images/mayachichi.png", description: "昭和期の総理です。" }
  ]
};

// =========================
// 要素取得
// =========================

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const tableTitle = document.getElementById("table-title");
const guestList = document.getElementById("guest-list");

const seatView = document.querySelector(".seat-view");
const guestView = document.querySelector(".guest-view");

const modalName = document.getElementById("modal-name");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");
const backBtn = document.querySelector(".back");

// =========================
// 表示切り替え
// =========================

function showSeatView() {
  seatView.classList.remove("is-hidden");
  guestView.classList.add("is-hidden");

  // 全てのゲストボタンを再表示
  document.querySelectorAll('#guest-list button').forEach(btn => {
    btn.style.display = 'inline-block';
  });
}

function showGuestView(guest) {
  modalName.textContent = guest.name;
  modalText.innerHTML = `
    <p><strong>関係性:</strong> ${guest.relation}</p>
    <p>${guest.description}</p>
  `;

  modalImg.style.display = "none";
  modalImg.src = "";

  if (guest.img) {
    modalImg.onload = () => modalImg.style.display = "block";
    modalImg.src = guest.img;
  }

  // 他のゲストボタンを非表示
  document.querySelectorAll('#guest-list button').forEach(btn => {
    if (btn.textContent !== guest.name) {
      btn.style.display = 'none';
    }
  });

  seatView.classList.add("is-hidden");
  guestView.classList.remove("is-hidden");
}

// =========================
// モーダル制御
// =========================

function openTable(tableId) {
  tableTitle.textContent = `テーブル${tableId}`;
  guestList.innerHTML = "";

  const guests = tables[tableId] || [];

  guests.forEach(guest => {
    const btn = document.createElement("button");
    btn.textContent = guest.name;
    btn.addEventListener("click", () => showGuestView(guest));
    guestList.appendChild(btn);
  });

  showSeatView();
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

// =========================
// イベント登録
// =========================

document.querySelectorAll(".table").forEach(btn => {
  btn.addEventListener("click", () => {
    openTable(btn.dataset.table);
  });
});

backBtn.addEventListener("click", showSeatView);
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
