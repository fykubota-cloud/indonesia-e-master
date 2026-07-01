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
  q("READ-0001","読解","★★★","Ibu minum air karena haus.","母はなぜ水を飲みますか？",["お腹が空いたから","喉が渇いたから","眠いから","忙しいから"],"喉が渇いたから","ハウス","karena haus＝喉が渇いたから","karena は理由を表します。",{"お腹が空いたから":"lapar です。","眠いから":"mengantuk です。","忙しいから":"sibuk です。"},["air＝水","minum＝飲む","karena＝〜だから"]),
 
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
  q("VOC-0005","語彙","★★☆","lapar の意味は？","lapar の意味を選びます。",["眠い","疲れた","空腹である","喉が渇いた"],"空腹である","ラパール","lapar＝空腹である","状態を表す語です。",{眠い:"mengantuk です。",疲れた:"capai です。",喉が渇いた:"haus です。"},["makan＝食べる","haus＝喉が渇いた"]),

  q("ME-0005","me動詞","★★★","kirim の正しい me-形は？","kirim の me形を選びます。",["mengirim","menirim","memirim","menyirim"],"mengirim","ムギリム","mengirim＝送る","kirim は k が消えて mengirim になります。",{menirim:"誤った形です。",memirim:"誤った形です。",menyirim:"誤った形です。"},["surat＝手紙","paket＝荷物"]),
  q("ME-0006","me動詞","★★☆","Saya ___ surat.","私は手紙を書きます。",["menulis","membaca","menyapu","mengirim"],"menulis","ムヌリス","menulis＝書く","surat を書くので menulis が正解です。",{membaca:"読むです。",menyapu:"掃くです。",mengirim:"送るです。"},["surat＝手紙","pensil＝鉛筆"]),
  q("ME-0007","me動詞","★★☆","Dia ___ buku.","彼・彼女は本を読みます。",["membaca","menulis","memasak","mencuci"],"membaca","ムンバチャ","membaca＝読む","buku を読むので membaca です。",{menulis:"書くです。",memasak:"料理するです。",mencuci:"洗うです。"},["buku＝本","koran＝新聞"]),
  q("ME-0008","me動詞","★★☆","Ibu ___ pakaian.","母は服を洗います。",["mencuci","membeli","membaca","menjual"],"mencuci","ムンチュチ","mencuci＝洗う","pakaian は服なので、服を洗う＝mencuci pakaian です。",{membeli:"買うです。",membaca:"読むです。",menjual:"売るです。"},["pakaian＝服","air＝水"]),
  q("ME-0009","me動詞","★★☆","Saya ___ nasi goreng.","私はナシゴレンを食べます。",["makan","memasak","membaca","menulis"],"makan","マカン","makan＝食べる","E級では makan はそのまま出ることも多いです。",{memasak:"料理するです。",membaca:"読むです。",menulis:"書くです。"},["nasi＝ご飯","goreng＝揚げる・炒める"]),
  q("ME-0010","me動詞","★★★","ambil の正しい me-形は？","ambil の me形を選びます。",["mengambil","menambil","memambil","menyambil"],"mengambil","ムンガンビル","mengambil＝取る","母音で始まる語根は meng- になることが多いです。",{menambil:"誤った形です。",memambil:"誤った形です。",menyambil:"誤った形です。"},["ambil＝取る","uang＝お金"]),

  q("BER-0004","ber動詞","★★☆","berlari の意味は？","berlari の意味を選びます。",["歩く","走る","働く","会う"],"走る","ブルラリ","berlari＝走る","lari は走る、berlari も走るという意味です。",{歩く:"berjalan です。",働く:"bekerja です。",会う:"bertemu です。"},["jalan＝道・歩く","lari＝走る"]),
  q("BER-0005","ber動詞","★★☆","bertemu の意味は？","bertemu の意味を選びます。",["遊ぶ","会う","働く","話す"],"会う","ブルトゥム","bertemu＝会う","人と会う時に使います。",{遊ぶ:"bermain です。",働く:"bekerja です。",話す:"berbicara です。"},["teman＝友だち","orang＝人"]),
  q("BER-0006","ber動詞","★★☆","Mereka ___ sepak bola.","彼らはサッカーをします。",["bermain","bekerja","berjalan","bertemu"],"bermain","ブルマイン","bermain＝遊ぶ・プレーする","スポーツをする場合も bermain を使えます。",{bekerja:"働くです。",berjalan:"歩くです。",bertemu:"会うです。"},["sepak bola＝サッカー","anak-anak＝子どもたち"]),
  q("BER-0007","ber動詞","★★☆","Saya ___ dengan teman.","私は友だちと話します。",["berbicara","berlari","bekerja","berjalan"],"berbicara","ブルビチャラ","berbicara＝話す","dengan teman＝友だちと、なので berbicara が自然です。",{berlari:"走るです。",bekerja:"働くです。",berjalan:"歩くです。"},["bicara＝話す","teman＝友だち"]),
  q("BER-0008","ber動詞","★★☆","Dia ___ di kantor.","彼・彼女は会社で働きます。",["bekerja","bermain","berlari","bertemu"],"bekerja","ブクルジャ","bekerja＝働く","di kantor＝会社で、なので bekerja が正解です。",{bermain:"遊ぶです。",berlari:"走るです。",bertemu:"会うです。"},["kantor＝会社","pekerjaan＝仕事"]),

  q("READ-0002","読解","★★★","Ani pergi ke pasar untuk membeli sayur.","アニは何を買うために市場へ行きますか？",["果物","野菜","本","薬"],"野菜","サユール","sayur＝野菜","membeli sayur は『野菜を買う』です。",{果物:"buah です。",本:"buku です。",薬:"obat です。"},["pasar＝市場","membeli＝買う"]),
  q("READ-0003","読解","★★★","Budi belajar bahasa Indonesia setiap malam.","ブディはいつインドネシア語を勉強しますか？",["毎朝","毎晩","毎週","毎月"],"毎晩","スティアップ マラム","setiap malam＝毎晩","malam は夜、setiap は毎〜です。",{毎朝:"setiap pagi です。",毎週:"setiap minggu です。",毎月:"setiap bulan です。"},["belajar＝勉強する","malam＝夜"]),
  q("READ-0004","読解","★★☆","Rina tidak suka kopi, tetapi suka teh.","リナが好きな飲み物は何ですか？",["コーヒー","お茶","水","牛乳"],"お茶","テー","teh＝お茶","tidak suka kopi なのでコーヒーは好きではありません。tetapi suka teh＝しかしお茶は好きです。",{コーヒー:"kopi です。",水:"air です。",牛乳:"susu です。"},["kopi＝コーヒー","tetapi＝しかし"]),
  q("READ-0005","読解","★★☆","Ayah bekerja di rumah sakit.","父はどこで働いていますか？",["学校","病院","市場","駅"],"病院","ルマ サキット","rumah sakit＝病院","di rumah sakit は『病院で』です。",{学校:"sekolah です。",市場:"pasar です。",駅:"stasiun です。"},["ayah＝父","bekerja＝働く"]),
  q("READ-0006","読解","★★★","Saya belum mandi karena air dingin.","私はなぜまだ入浴していませんか？",["水が冷たいから","眠いから","忙しいから","お腹が空いたから"],"水が冷たいから","アイル ディンギン","air dingin＝冷たい水","karena は理由を表します。",{眠いから:"mengantuk です。",忙しいから:"sibuk です。",お腹が空いたから:"lapar です。"},["belum＝まだ〜ない","mandi＝入浴する"]),
  q("NEG-0011","否定","★★★","Saya ___ dokter.","私は医者ではありません。",["tidak","bukan","belum","jangan"],"bukan","ブカン","bukan＝〜ではない","dokter は名詞なので bukan を使います。",{"tidak":"動詞・形容詞の否定です。","belum":"まだ〜ないです。","jangan":"禁止です。"},["dokter＝医者","perawat＝看護師"]),
  q("NEG-0012","否定","★★★","Dia ___ datang.","彼・彼女は来ません。",["tidak","bukan","belum","jangan"],"tidak","ティダッ","tidak＝〜しない","datang は動詞なので tidak を使います。",{"bukan":"名詞の否定です。","belum":"まだ来ていないです。","jangan":"禁止です。"},["datang＝来る","pergi＝行く"]),
  q("NEG-0013","否定","★★★","Saya ___ selesai.","私はまだ終わっていません。",["tidak","bukan","belum","jangan"],"belum","ブルム","belum＝まだ〜ない","selesai は『終わる』。まだ終わっていないので belum です。",{"tidak":"終わらない、という通常否定です。","bukan":"名詞の否定です。","jangan":"禁止です。"},["selesai＝終わる","sudah＝もう"]),
  q("NEG-0014","否定","★★★","___ masuk!","入らないでください。",["Tidak","Bukan","Belum","Jangan"],"Jangan","ジャンガン","jangan＝〜しないで","禁止表現なので Jangan を使います。",{"Tidak":"通常の否定です。","Bukan":"名詞の否定です。","Belum":"まだ〜ないです。"},["masuk＝入る","keluar＝出る"]),
  q("NEG-0015","否定","★★☆","Ini ___ rumah saya.","これは私の家ではありません。",["tidak","bukan","belum","jangan"],"bukan","ブカン","bukan＝〜ではない","rumah saya は名詞句なので bukan を使います。",{"tidak":"動詞・形容詞の否定です。","belum":"まだ〜ないです。","jangan":"禁止です。"},["rumah＝家","ini＝これ"]),

  q("FREQ-0005","頻度","★★★","Dia ___ membaca buku.","彼・彼女はよく本を読みます。",["selalu","sering","jarang","tidak pernah"],"sering","スリン","sering＝よく","頻度が高い時に sering を使います。",{"selalu":"いつもです。","jarang":"めったに〜ないです。","tidak pernah":"一度も〜ないです。"},["membaca＝読む","buku＝本"]),
  q("FREQ-0006","頻度","★★★","Saya ___ pergi ke bioskop.","私はめったに映画館へ行きません。",["selalu","sering","kadang-kadang","jarang"],"jarang","ジャラン","jarang＝めったに〜ない","頻度が低いことを表します。",{"selalu":"いつもです。","sering":"よくです。","kadang-kadang":"ときどきです。"},["pergi＝行く","bioskop＝映画館"]),
  q("FREQ-0007","頻度","★★☆","Kami ___ makan bersama.","私たちはときどき一緒に食べます。",["selalu","sering","kadang-kadang","tidak pernah"],"kadang-kadang","カダンカダン","kadang-kadang＝ときどき","中くらいの頻度です。",{"selalu":"いつもです。","sering":"よくです。","tidak pernah":"一度も〜ないです。"},["bersama＝一緒に","makan＝食べる"]),
  q("FREQ-0008","頻度","★★★","Saya ___ merokok.","私は一度もタバコを吸ったことがありません。",["selalu","sering","jarang","tidak pernah"],"tidak pernah","ティダッ プルナ","tidak pernah＝一度も〜ない","経験として一度もない時に使います。",{"selalu":"いつもです。","sering":"よくです。","jarang":"めったに〜ないです。"},["merokok＝タバコを吸う","pernah＝〜したことがある"]),
  q("FREQ-0009","頻度","★★☆","Ibu ___ memasak di rumah.","母はいつも家で料理します。",["selalu","sering","jarang","tidak pernah"],"selalu","スラル","selalu＝いつも","頻度が最も高い表現です。",{"sering":"よくです。","jarang":"めったに〜ないです。","tidak pernah":"一度も〜ないです。"},["memasak＝料理する","rumah＝家"]),

  q("COUNT-0005","助数詞","★★★","satu ___ dokter","1人の医者",["orang","ekor","buah","lembar"],"orang","オラン","orang＝人用助数詞","人を数える時は orang です。",{"ekor":"動物用です。","buah":"物・果物用です。","lembar":"紙用です。"},["dokter＝医者","satu orang＝1人"]),
  q("COUNT-0006","助数詞","★★★","dua ___ anjing","2匹の犬",["orang","ekor","buah","lembar"],"ekor","エコール","ekor＝動物用助数詞","犬など動物を数える時は ekor です。",{"orang":"人用です。","buah":"物用です。","lembar":"紙用です。"},["anjing＝犬","kucing＝猫"]),
  q("COUNT-0007","助数詞","★★☆","tiga ___ rumah","3軒の家",["orang","ekor","buah","lembar"],"buah","ブア","buah＝物を数える助数詞","家など物を数える時に buah を使えます。",{"orang":"人用です。","ekor":"動物用です。","lembar":"紙用です。"},["rumah＝家","tiga＝3"]),
  q("COUNT-0008","助数詞","★★☆","dua ___ surat","2枚の手紙",["orang","ekor","buah","lembar"],"lembar","ルンバル","lembar＝紙用助数詞","手紙・紙など薄いものには lembar を使います。",{"orang":"人用です。","ekor":"動物用です。","buah":"物用です。"},["surat＝手紙","kertas＝紙"]),
  q("COUNT-0009","助数詞","★★★","lima ___ siswa","5人の生徒",["orang","ekor","buah","lembar"],"orang","オラン","orang＝人用助数詞","siswa は人なので orang を使います。",{"ekor":"動物用です。","buah":"物用です。","lembar":"紙用です。"},["siswa＝生徒","guru＝先生"]),

  q("QTY-0005","不特定数量","★★☆","Saya punya ___ uang.","私は少しお金を持っています。",["banyak","sedikit","semua","beberapa"],"sedikit","スディキット","sedikit＝少し","量が少ないことを表します。",{"banyak":"たくさんです。","semua":"すべてです。","beberapa":"いくつかです。"},["uang＝お金","punya＝持つ"]),
  q("QTY-0006","不特定数量","★★★","___ siswa belajar di kelas.","すべての生徒が教室で勉強しています。",["Banyak","Sedikit","Semua","Beberapa"],"Semua","スムア","semua＝すべて","全員を表すので semua を使います。",{"Banyak":"たくさんです。","Sedikit":"少しです。","Beberapa":"何人かです。"},["siswa＝生徒","kelas＝教室"]),
  q("QTY-0007","不特定数量","★★☆","Saya melihat ___ kucing.","私は何匹かの猫を見ました。",["banyak","sedikit","beberapa","semua"],"beberapa","ブブラパ","beberapa＝いくつか・何匹か","不特定の複数を表します。",{"banyak":"たくさんです。","sedikit":"少しです。","semua":"すべてです。"},["melihat＝見る","kucing＝猫"]),
  q("QTY-0008","不特定数量","★★☆","Makanan ini ___ untuk saya.","この食べ物は私には十分です。",["banyak","sedikit","cukup","semua"],"cukup","チュクップ","cukup＝十分","量が足りている時に使います。",{"banyak":"たくさんです。","sedikit":"少しです。","semua":"すべてです。"},["makanan＝食べ物","untuk＝〜のために"]),
  q("QTY-0009","不特定数量","★★☆","Di kelas ada ___ orang.","教室にはたくさんの人がいます。",["banyak","sedikit","cukup","beberapa"],"banyak","バニャッ","banyak＝たくさん","人数が多いことを表します。",{"sedikit":"少しです。","cukup":"十分です。","beberapa":"何人かです。"},["di kelas＝教室に","orang＝人"]),

  q("PLACE-0005","場所","★★★","Tas ada ___ kursi.","かばんは椅子の上にあります。",["di atas","di bawah","di depan","di belakang"],"di atas","ディ アタス","di atas＝〜の上","椅子の上は di atas kursi です。",{"di bawah":"下です。","di depan":"前です。","di belakang":"後ろです。"},["tas＝かばん","kursi＝椅子"]),
  q("PLACE-0006","場所","★★☆","Mobil ada ___ rumah.","車は家の前にあります。",["di atas","di bawah","di depan","di belakang"],"di depan","ディ ドゥパン","di depan＝〜の前","家の前は di depan rumah です。",{"di atas":"上です。","di bawah":"下です。","di belakang":"後ろです。"},["mobil＝車","rumah＝家"]),
  q("PLACE-0007","場所","★★☆","Kamar mandi ada ___ dapur.","浴室は台所の後ろにあります。",["di depan","di belakang","di atas","di bawah"],"di belakang","ディ ブラカン","di belakang＝〜の後ろ","後ろを表す表現です。",{"di depan":"前です。","di atas":"上です。","di bawah":"下です。"},["kamar mandi＝浴室","dapur＝台所"]),
  q("PLACE-0008","場所","★★☆","Ayah ada ___ rumah.","父は家の中にいます。",["di dalam","di luar","di atas","di bawah"],"di dalam","ディ ダラム","di dalam＝〜の中","家の中は di dalam rumah です。",{"di luar":"外です。","di atas":"上です。","di bawah":"下です。"},["ayah＝父","rumah＝家"]),
  q("PLACE-0009","場所","★★☆","Anak-anak bermain ___ rumah.","子どもたちは家の外で遊んでいます。",["di dalam","di luar","di atas","di bawah"],"di luar","ディ ルアル","di luar＝〜の外","家の外は di luar rumah です。",{"di dalam":"中です。","di atas":"上です。","di bawah":"下です。"},["bermain＝遊ぶ","anak-anak＝子どもたち"]),

  q("PREP-0004","前置詞","★★★","Saya belajar ___ rumah.","私は家で勉強します。",["di","ke","dari","dan"],"di","ディ","di＝〜で・〜に","場所を表すので di を使います。",{"ke":"〜へです。","dari":"〜からです。","dan":"〜とです。"},["belajar＝勉強する","rumah＝家"]),
  q("PREP-0005","前置詞","★★★","Kami pulang ___ sekolah.","私たちは学校から帰ります。",["di","ke","dari","atau"],"dari","ダリ","dari＝〜から","出発点を表します。",{"di":"〜で・〜にです。","ke":"〜へです。","atau":"またはです。"},["pulang＝帰る","sekolah＝学校"]),
  q("PREP-0006","前置詞","★★☆","Dia pergi ___ pasar.","彼・彼女は市場へ行きます。",["di","ke","dari","untuk"],"ke","ク","ke＝〜へ","移動先なので ke を使います。",{"di":"場所です。","dari":"〜からです。","untuk":"〜のためです。"},["pergi＝行く","pasar＝市場"]),
  q("READ-0007","読解","★★★","Tono pergi ke apotik untuk membeli obat.","トノは何を買うために薬局へ行きますか？",["薬","本","野菜","服"],"薬","オバット","obat＝薬","membeli obat は『薬を買う』です。",{"本":"buku です。","野菜":"sayur です。","服":"pakaian です。"},["apotik＝薬局","membeli＝買う"]),
  q("READ-0008","読解","★★★","Saya tidak pergi karena hujan.","私はなぜ行きませんか？",["雨だから","暑いから","眠いから","忙しいから"],"雨だから","フジャン","hujan＝雨","karena hujan は『雨だから』です。",{"暑いから":"panas です。","眠いから":"mengantuk です。","忙しいから":"sibuk です。"},["tidak pergi＝行かない","karena＝〜だから"])
];
