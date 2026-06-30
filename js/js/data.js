function q(id, category, level, question, translation, choices, answer, pronunciation, meaning, explanation, wrongExplanation, related){
  return {
    id,
    category,
    level,
    question,
    translation,
    choices,
    answer,
    pronunciation,
    meaning,
    explanation,
    wrongExplanation,
    related
  };
}

const questionBank = [
  q("NEG-0001","否定","★★★","Saya ___ makan pagi.","私はまだ朝食を食べていません。",["tidak","bukan","belum","jangan"],"belum","ブルム","belum＝まだ〜ない","belum は「まだ〜していない」という意味です。",{tidak:"tidak は通常の否定です。",bukan:"bukan は名詞の否定です。",jangan:"jangan は禁止です。"},["sudah＝もう","makan＝食べる","pagi＝朝"]),
  q("NEG-0002","否定","★★★","Dia ___ guru.","彼・彼女は先生ではありません。",["tidak","bukan","belum","jangan"],"bukan","ブカン","bukan＝〜ではない","guru は名詞なので bukan を使います。",{tidak:"tidak は動詞・形容詞の否定です。",belum:"belum はまだ〜ないです。",jangan:"jangan は禁止です。"},["guru＝先生","murid＝生徒"]),
  q("NEG-0003","否定","★★★","Saya ___ tahu alamatnya.","私はその住所を知りません。",["tidak","bukan","belum","jangan"],"tidak","ティダッ","tidak＝〜しない","tahu は動詞なので tidak を使います。",{bukan:"bukan は名詞の否定です。",belum:"belum はまだ〜ないです。",jangan:"jangan は禁止です。"},["tahu＝知る","alamat＝住所"]),
  q("NEG-0004","否定","★★★","___ duduk di sini!","ここに座らないでください。",["Tidak","Bukan","Belum","Jangan"],"Jangan","ジャンガン","jangan＝〜しないで","禁止表現では jangan を使います。",{Tidak:"tidak は普通の否定です。",Bukan:"bukan は名詞の否定です。",Belum:"belum はまだ〜ないです。"},["duduk＝座る","di sini＝ここで"]),

  q("FREQ-0001","頻度","★★★","Saya ___ belajar bahasa Indonesia.","私はいつもインドネシア語を勉強します。",["selalu","sering","jarang","tidak pernah"],"selalu","スラル","selalu＝いつも","頻度が最も高い語です。",{sering:"sering は『よく』です。",jarang:"jarang は『めったに〜ない』です。","tidak pernah":"tidak pernah は『一度も〜ない』です。"},["selalu＝いつも","sering＝よく","jarang＝めったに〜ない"]),
  q("FREQ-0002","頻度","★★★","Saya ___ minum kopi.","私はめったにコーヒーを飲みません。",["selalu","sering","kadang-kadang","jarang"],"jarang","ジャラン","jarang＝めったに〜ない","頻度が低い時に使います。",{selalu:"selalu は『いつも』です。",sering:"sering は『よく』です。","kadang-kadang":"kadang-kadang は『ときどき』です。"},["kopi＝コーヒー","teh＝お茶"]),
  q("FREQ-0003","頻度","★★☆","Dia ___ datang terlambat.","彼・彼女はよく遅れて来ます。",["selalu","sering","jarang","tidak pernah"],"sering","スリン","sering＝よく","sering は『よく・しばしば』です。",{selalu:"selalu は『いつも』です。",jarang:"jarang は『めったに〜ない』です。","tidak pernah":"一度も〜ないです。"},["datang＝来る","terlambat＝遅れる"]),
  q("FREQ-0004","頻度","★★☆","Saya ___ makan di restoran.","私はときどきレストランで食べます。",["selalu","sering","kadang-kadang","tidak pernah"],"kadang-kadang","カダンカダン","kadang-kadang＝ときどき","中くらいの頻度を表します。",{selalu:"いつもです。",sering:"よくです。","tidak pernah":"一度も〜ないです。"},["restoran＝レストラン","makan＝食べる"]),

  q("COUNT-0001","助数詞","★★★","dua ___ guru","2人の先生",["orang","ekor","buah","lembar"],"orang","オラン","orang＝人用助数詞","人を数える時は orang を使います。",{ekor:"ekor は動物用です。",buah:"buah は物・果物用です。",lembar:"lembar は紙用です。"},["dua orang＝2人","guru＝先生"]),
  q("COUNT-0002","助数詞","★★★","tiga ___ kucing","3匹の猫",["orang","ekor","buah","lembar"],"ekor","エコール","ekor＝動物用助数詞","動物を数える時は ekor を使います。",{orang:"orang は人用です。",buah:"buah は物・果物用です。",lembar:"lembar は紙用です。"},["kucing＝猫","anjing＝犬"]),
  q("COUNT-0003","助数詞","★★☆","empat ___ apel","4個のりんご",["orang","ekor","buah","lembar"],"buah","ブア","buah＝物・果物用助数詞","果物や物を数える時は buah を使います。",{orang:"人用です。",ekor:"動物用です。",lembar:"紙用です。"},["apel＝りんご","pisang＝バナナ"]),
  q("COUNT-0004","助数詞","★★☆","lima ___ kertas","5枚の紙",["orang","ekor","buah","lembar"],"lembar","ルンバル","lembar＝紙用助数詞","紙を数える時は lembar を使います。",{orang:"人用です。",ekor:"動物用です。",buah:"物・果物用です。"},["kertas＝紙","surat＝手紙"]),

  q("QTY-0001","不特定数量","★★★","Saya punya ___ teman.","私はたくさん友だちがいます。",["banyak","sedikit","semua","cukup"],"banyak","バニャッ","banyak＝たくさん","量が多いことを表します。",{sedikit:"少しです。",semua:"すべてです。",cukup:"十分です。"},["teman＝友だち","orang＝人"]),
  q("QTY-0002","不特定数量","★★☆","Saya membeli ___ apel.","私はいくつかりんごを買いました。",["beberapa","semua","cukup","tidak pernah"],"beberapa","ブブラパ","beberapa＝いくつか","不特定の複数を表します。",{semua:"すべてです。",cukup:"十分です。","tidak pernah":"一度も〜ないです。"},["beberapa orang＝何人か","apel＝りんご"]),
  q("QTY-0003","不特定数量","★★☆","___ orang datang ke kelas.","何人かの人が教室に来ました。",["beberapa","semua","cukup","sedikit"],"beberapa","ブブラパ","beberapa＝何人か・いくつか","beberapa orang で『何人かの人』です。",{semua:"すべてです。",cukup:"十分です。",sedikit:"少しです。"},["kelas＝教室","datang＝来る"]),
  q("QTY-0004","不特定数量","★★☆","kata semua の意味は？","semua の意味を選びます。",["少し","十分","すべて","いくつか"],"すべて","スムア","semua＝すべて","全体を表す語です。",{少し:"sedikit です。",十分:"cukup です。",いくつか:"beberapa です。"},["semua orang＝すべての人"]),

  q("PLACE-0001","場所","★★★","Buku itu ada ___ meja.","その本は机の上にあります。",["di atas","di bawah","di depan","di belakang"],"di atas","ディ アタス","di atas＝〜の上","meja は机なので、机の上は di atas meja です。",{"di bawah":"〜の下です。","di depan":"〜の前です。","di belakang":"〜の後ろです。"},["buku＝本","meja＝机"]),
  q("PLACE-0002","場所","★★☆","Kucing tidur ___ kursi.","猫は椅子の下で寝ています。",["di atas","di bawah","di depan","di belakang"],"di bawah","ディ バワ","di bawah＝〜の下","椅子の下は di bawah kursi です。",{"di atas":"〜の上です。","di depan":"〜の前です。","di belakang":"〜の後ろです。"},["kucing＝猫","kursi＝椅子"]),
  q("PLACE-0003","場所","★★☆","Sekolah ada ___ rumah saya.","学校は私の家の近くにあります。",["dekat","jauh","di atas","di bawah"],"dekat","ドゥカット","dekat＝近い","dekat は距離が近いことを表します。",{jauh:"遠いです。","di atas":"上です。","di bawah":"下です。"},["rumah＝家","sekolah＝学校"]),
  q("PLACE-0004","場所","★★☆","Bank ada ___ kantor pos.","銀行は郵便局の隣にあります。",["di samping","di atas","di bawah","di dalam"],"di samping","ディ サンピング","di samping＝〜の隣","隣を表す時は di samping を使います。",{"di atas":"上です。","di bawah":"下です。","di dalam":"中です。"},["bank＝銀行","kantor pos＝郵便局"]),

  q("PREP-0001","前置詞","★★★","Saya pergi ___ sekolah.","私は学校へ行きます。",["di","ke","dari","dan"],"ke","ク","ke＝〜へ","移動先を表す時は ke を使います。",{di:"場所を表します。",dari:"〜からです。",dan:"〜とです。"},["pergi＝行く","sekolah＝学校"]),
  q("PREP-0002","前置詞","★★★","Ibu memasak ___ dapur.","母は台所で料理します。",["di","ke","dari","untuk"],"di","ディ","di＝〜で・〜に","場所を表す時は di を使います。",{ke:"〜へです。",dari:"〜からです。",untuk:"〜のためです。"},["dapur＝台所","memasak＝料理する"]),
  q("PREP-0003","前置詞","★★☆","Dia datang ___ Jakarta.","彼・彼女はジャカルタから来ました。",["di","ke","dari","atau"],"dari","ダリ","dari＝〜から","出発点を表す時は dari を使います。",{di:"〜で・〜にです。",ke:"〜へです。",atau:"またはです。"},["datang＝来る","Jakarta＝ジャカルタ"]),

  q("ME-0001","me動詞","★★★","baca の正しい me-形は？","baca の me形を選びます。",["membaca","menbaca","mengbaca","menybaca"],"membaca","ムンバチャ","membaca＝読む","baca は membaca になります。",{menbaca:"誤った形です。",mengbaca:"誤った形です。",menybaca:"誤った形です。"},["buku＝本","koran＝新聞"]),
  q("ME-0002","me動詞","★★★","tulis の正しい me-形は？","tulis の me形を選びます。",["menulis","memulis","mengulis","menyulis"],"menulis","ムヌリス","menulis＝書く","tulis は t が消えて menulis になります。",{memulis:"誤った形です。",mengulis:"誤った形です。",menyulis:"誤った形です。"},["surat＝手紙","pensil＝鉛筆"]),
  q("ME-0003","me動詞","★★★","sapu の正しい me-形は？","sapu の me形を選びます。",["menyapu","mensapu","memsapu","mengsapu"],"menyapu","ムニャプ","menyapu＝掃く","sapu は s が消えて menyapu になります。",{mensapu:"誤った形です。",memsapu:"誤った形です。",mengsapu:"誤った形です。"},["lantai＝床","kamar＝部屋"]),
  q("ME-0004","me動詞","★★☆","Ibu ___ sayur.","母は野菜を料理します。",["memasak","berlari","bermain","bertemu"],"memasak","ムマサック","memasak＝料理する","sayur を料理するので memasak です。",{berlari:"走るです。",bermain:"遊ぶです。",bertemu:"会うです。"},["sayur＝野菜","dapur＝台所"]),

  q("BER-0001","ber動詞","★★☆","Kami ___ di kantor.","私たちは会社で働きます。",["bekerja","membaca","mencuci","membeli"],"bekerja","ブクルジャ","bekerja＝働く","di kantor と相性がよいのは bekerja です。",{membaca:"読むです。",mencuci:"洗うです。",membeli:"買うです。"},["kantor＝会社・事務所"]),
  q("BER-0002","ber動詞","★★☆","Anak-anak ___ di taman.","子どもたちは公園で遊びます。",["bermain","membuka","menjual","mengirim"],"bermain","ブルマイン","bermain＝遊ぶ","公園で遊ぶので bermain です。",{membuka:"開けるです。",menjual:"売るです。",mengirim:"送るです。"},["anak-anak＝子どもたち","taman＝公園"]),
  q("BER-0003","ber動詞","★★☆","Dia ___ ke sekolah.","彼・彼女は学校へ歩いて行きます。",["berjalan","mencari","memasak","membaca"],"berjalan","ブルジャラン","berjalan＝歩く","ke sekolah と一緒に使えます。",{mencari:"探すです。",memasak:"料理するです。",membaca:"読むです。"},["jalan＝道","sekolah＝学校"]),

  q("DAY-0001","曜日","★★☆","Jumat の意味は？","Jumat の意味を選びます。",["木曜日","金曜日","土曜日","水曜日"],"金曜日","ジュマット","Jumat＝金曜日","曜日問題はE級頻出です。",{木曜日:"Kamis です。",土曜日:"Sabtu です。",水曜日:"Rabu です。"},["Senin＝月曜日","Selasa＝火曜日","Rabu＝水曜日"]),
  q("MONTH-0001","月","★★☆","Agustus の意味は？","Agustus の意味を選びます。",["7月","8月","9月","10月"],"8月","アグストゥス","Agustus＝8月","月名問題です。",{"7月":"Juli です。","9月":"September です。","10月":"Oktober です。"},["Januari＝1月","Desember＝12月"]),
  q("NUM-0001","数字","★★☆","dua belas の意味は？","dua belas の意味を選びます。",["2","12","20","22"],"12","ドゥア ブラス","dua belas＝12","belas は11〜19で使います。",{"2":"dua です。","20":"dua puluh です。","22":"dua puluh dua です。"},["sebelas＝11","tiga belas＝13"]),
  q("READ-0001","読解","★★★","Ibu minum air karena haus.","母はなぜ水を飲みますか？",["お腹が空いたから","喉が渇いたから","眠いから","忙しいから"],"喉が渇いたから","ハウス","karena haus＝喉が渇いたから","karena は理由を表します。",{"お腹が空いたから":"lapar です。","眠いから":"mengantuk です。","忙しいから":"sibuk です。"},["air＝水","minum＝飲む","karena＝〜だから"])
 ];
  q("DAY-0002","曜日","★★☆","Senin の意味は？","Senin の意味を選びます。",["月曜日","火曜日","水曜日","木曜日"],"月曜日","スニン","Senin＝月曜日","曜日問題はE級頻出です。",{火曜日:"Selasa です。",水曜日:"Rabu です。",木曜日:"Kamis です。"},["Selasa＝火曜日","Rabu＝水曜日"]),
  q("DAY-0003","曜日","★★☆","Selasa の意味は？","Selasa の意味を選びます。",["日曜日","火曜日","金曜日","土曜日"],"火曜日","スラサ","Selasa＝火曜日","曜日を覚える問題です。",{日曜日:"Minggu です。",金曜日:"Jumat です。",土曜日:"Sabtu です。"},["Senin＝月曜日","Rabu＝水曜日"]),
  q("DAY-0004","曜日","★★☆","Rabu の意味は？","Rabu の意味を選びます。",["水曜日","木曜日","金曜日","月曜日"],"水曜日","ラブ","Rabu＝水曜日","曜日問題です。",{木曜日:"Kamis です。",金曜日:"Jumat です。",月曜日:"Senin です。"},["Selasa＝火曜日","Kamis＝木曜日"]),
  q("DAY-0005","曜日","★★☆","Kamis の意味は？","Kamis の意味を選びます。",["火曜日","木曜日","土曜日","日曜日"],"木曜日","カミス","Kamis＝木曜日","曜日問題です。",{火曜日:"Selasa です。",土曜日:"Sabtu です。",日曜日:"Minggu です。"},["Rabu＝水曜日","Jumat＝金曜日"]),
  q("DAY-0006","曜日","★★☆","Sabtu の意味は？","Sabtu の意味を選びます。",["金曜日","土曜日","日曜日","月曜日"],"土曜日","サブトゥ","Sabtu＝土曜日","曜日問題です。",{金曜日:"Jumat です。",日曜日:"Minggu です。",月曜日:"Senin です。"},["Jumat＝金曜日","Minggu＝日曜日"]),

  q("MONTH-0002","月","★★☆","Januari の意味は？","Januari の意味を選びます。",["1月","2月","3月","4月"],"1月","ジャヌアリ","Januari＝1月","月名問題です。",{"2月":"Februari です。","3月":"Maret です。","4月":"April です。"},["Februari＝2月","Maret＝3月"]),
  q("MONTH-0003","月","★★☆","Februari の意味は？","Februari の意味を選びます。",["1月","2月","5月","6月"],"2月","フェブルアリ","Februari＝2月","月名問題です。",{"1月":"Januari です。","5月":"Mei です。","6月":"Juni です。"},["Januari＝1月","Maret＝3月"]),
  q("MONTH-0004","月","★★☆","Maret の意味は？","Maret の意味を選びます。",["3月","4月","7月","8月"],"3月","マレット","Maret＝3月","月名問題です。",{"4月":"April です。","7月":"Juli です。","8月":"Agustus です。"},["April＝4月","Mei＝5月"]),
  q("MONTH-0005","月","★★☆","Mei の意味は？","Mei の意味を選びます。",["4月","5月","6月","7月"],"5月","メイ","Mei＝5月","月名問題です。",{"4月":"April です。","6月":"Juni です。","7月":"Juli です。"},["April＝4月","Juni＝6月"]),
  q("MONTH-0006","月","★★☆","Desember の意味は？","Desember の意味を選びます。",["9月","10月","11月","12月"],"12月","デセンベル","Desember＝12月","月名問題です。",{"9月":"September です。","10月":"Oktober です。","11月":"November です。"},["November＝11月","Januari＝1月"]),

  q("NUM-0002","数字","★★☆","sebelas の意味は？","sebelas の意味を選びます。",["10","11","12","20"],"11","スブラス","sebelas＝11","11は khusus に sebelas と言います。",{"10":"sepuluh です。","12":"dua belas です。","20":"dua puluh です。"},["sepuluh＝10","dua belas＝12"]),
  q("NUM-0003","数字","★★☆","tiga belas の意味は？","tiga belas の意味を選びます。",["3","13","30","300"],"13","ティガ ブラス","tiga belas＝13","belas は11〜19です。",{"3":"tiga です。","30":"tiga puluh です。","300":"tiga ratus です。"},["empat belas＝14","lima belas＝15"]),
  q("NUM-0004","数字","★★☆","dua puluh の意味は？","dua puluh の意味を選びます。",["12","20","22","200"],"20","ドゥア プル","dua puluh＝20","puluh は10の位です。",{12:"dua belas です。",22:"dua puluh dua です。",200:"dua ratus です。"},["tiga puluh＝30","empat puluh＝40"]),
  q("NUM-0005","数字","★★☆","empat puluh lima の意味は？","empat puluh lima の意味を選びます。",["14","40","45","54"],"45","ウンパット プル リマ","empat puluh lima＝45","empat puluh＝40、lima＝5です。",{14:"empat belas です。",40:"empat puluh です。",54:"lima puluh empat です。"},["lima puluh＝50","empat＝4"]),
  q("NUM-0006","数字","★★☆","seratus の意味は？","seratus の意味を選びます。",["10","100","1000","10000"],"100","スラトゥス","seratus＝100","ratus は百の位です。",{10:"sepuluh です。",1000:"seribu です。",10000:"sepuluh ribu です。"},["dua ratus＝200","seribu＝1000"]),

  q("VOC-0001","語彙","★★☆","perawat の意味は？","perawat の意味を選びます。",["医者","看護師","先生","運転手"],"看護師","プラワット","perawat＝看護師","職業語彙です。",{医者:"dokter です。",先生:"guru です。",運転手:"sopir です。"},["dokter＝医者","pasien＝患者"]),
  q("VOC-0002","語彙","★★☆","apotik の意味は？","apotik の意味を選びます。",["病院","薬局","学校","銀行"],"薬局","アポティック","apotik＝薬局","薬を買う場所です。",{病院:"rumah sakit です。",学校:"sekolah です。",銀行:"bank です。"},["obat＝薬","dokter＝医者"]),
  q("VOC-0003","語彙","★★☆","rumah sakit の意味は？","rumah sakit の意味を選びます。",["学校","病院","市場","郵便局"],"病院","ルマ サキット","rumah sakit＝病院","sakit は病気・痛いという意味です。",{学校:"sekolah です。",市場:"pasar です。",郵便局:"kantor pos です。"},["sakit＝病気","dokter＝医者"]),
  q("VOC-0004","語彙","★★☆","pasar の意味は？","pasar の意味を選びます。",["市場","学校","公園","駅"],"市場","パサール","pasar＝市場","買い物に関係する場所です。",{学校:"sekolah です。",公園:"taman です。",駅:"stasiun です。"},["membeli＝買う","harga＝値段"]),
  q("VOC-0005","語彙","★★☆","lapar の意味は？","lapar の意味を選びます。",["眠い","疲れた","空腹である","喉が渇いた"],"空腹である","ラパール","lapar＝空腹である","状態を表す語です。",{眠い:"mengantuk です。",疲れた:"capai です。",喉が渇いた:"haus です。"},["makan＝食べる","haus＝喉が渇いた"])
,
