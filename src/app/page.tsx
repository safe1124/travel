import Image from "next/image";

const arrivalRoute = [
  ["11:10", "東京・成田空港 出発", "LJ202 / 搭乗ゲートと手荷物条件を前日に確認"],
  ["13:40", "仁川国際空港 到着", "入国審査、交通カード、通信設定を済ませる"],
  ["AREX", "空港鉄道 → 弘大入口駅", "空港鉄道でソウル市内へ。荷物が多い日は混雑時間に注意"],
  ["GJ", "京義・中央線 → 清凉里駅", "弘大入口駅で乗り換え、清凉里駅で下車"],
  ["HOTEL", "Hotel The Designers Cheongnyangni", "チェックイン後、身軽になって1日目の観光へ"],
];

const stats = [
  ["4 Days", "ソウル集中モデルコース"],
  ["LJ202", "13:40 仁川国際空港到着"],
  ["Cheongnyangni", "清凉里を旅の 拠点に"],
  ["LJ209", "最終日14:45空港到着目標"],
];

const itinerary = [
  {
    day: "DAY 01",
    date: "5月2日 土曜日",
    title: "王宮、明洞、市場でソウルの定番へ",
    image: "/images/photos/gyeongbokgung.jpg",
    tags: ["明洞", "景福宮", "広蔵市場"],
    route: "清凉里 → 明洞 → 景福宮 → 広蔵市場 → 清凉里",
    meal: "広蔵市場でピンデトッ、キンパ、ユッケ、屋台スイーツを少しずつ。",
    note: "到着日なので無理に詰め込みすぎず、ソウルらしい景色と市場の雰囲気を短く濃く楽しみます。",
    timeline: [
      { title: "日本から出発", detail: "成田空港から出発。LJ202便のゲート条件を再確認しましょう。" },
      { title: "仁川空港到着 & 移動", detail: "入国審査と交通カード準備。AREXでソウル市内へ移動。" },
      { title: "景福宮 & 明洞散策", detail: "王宮の景色を楽しみ、明洞でショッピングと両替を済ませます。" },
      { title: "広蔵市場で夕食", detail: "市場の活気を楽しみながら、屋台料理でソウルの夜を開始。" },
    ],
  },
  {
    day: "DAY 02",
    date: "5月3日 日曜日",
    title: "弘大、HYBE、江南でKカルチャー",
    image: "/images/photos/hongdae.jpg",
    tags: ["弘大", "HYBE本社", "江南駅"],
    route: "清凉里 → 弘大 → 龍山/HYBE → 江南駅 → 清凉里",
    meal: "弘大でカフェ、夜は江南で韓国チキンまたはパスタ。",
    note: "若者の街・弘大、K-POP関連スポット、洗練された江南を組み合わせるトレンド重視の日です。",
    timeline: [
      { title: "弘大でカフェ巡り", detail: "若者の街で最新のカフェや雑貨店をゆっくり回ります。" },
      { title: "龍山 & HYBE本社", detail: "K-POPの聖地へ移動。周辺のカフェやショップもチェック。" },
      { title: "江南駅エリアへ", detail: "洗練されたビル群と最新トレンドが集まるエリアを散策。" },
      { title: "江南でチキン & ビール", detail: "定番の韓国チキンで2日目の思い出を締めくくります。" },
    ],
  },
  {
    day: "DAY 03",
    date: "5月4日 月曜日",
    title: "ロッテワールドとミュージアム",
    image: "/images/photos/lotte-world.jpg",
    tags: ["ロッテワールド", "ロッテワールドタワー", "国立中央博物館"],
    route: "清凉里 → 蚕室 → ロッテワールド → ロッテタワー → 国立中央博物館",
    meal: "昼はテーマパーク内、夜はモダンコリアンやファインダイニングを予約。",
    note: "午前から動くと効率的です。展望台や博物館はチケット時間と閉館時間を先に確認します。",
    timeline: [
      { title: "ロッテワールド", detail: "午前から入場して、アトラクションを効率よく回ります。" },
      { title: "ロッテワールドタワー", detail: "展望台からの絶景を楽しみ、モールでショッピング。" },
      { title: "国立中央博物館", detail: "韓国の歴史と文化に触れる、落ち着いた午後の時間。" },
      { title: "モダンコリアンの夕食", detail: "予約したレストランで、少し贅沢な韓国料理を堪能。" },
    ],
  },
  {
    day: "DAY 04",
    date: "5月5日 火曜日",
    title: "東大門、清渓川、教保文庫から空港へ",
    image: "/images/photos/cheonggyecheon.jpg",
    tags: ["東大門市場", "清渓川", "光化門 教保文庫"],
    route: "清凉里 → 東大門 → 清渓川 → 光化門 → 仁川国際空港",
    meal: "朝はソルロンタン、昼は軽め。空港移動前に荷物を増やしすぎない。",
    note: "帰国日は午前だけ観光。14:45までに仁川国際空港へ着くことを最優先にします。",
    timeline: [
      { title: "東大門 & 朝食", detail: "朝食にソルロンタン。活気ある東大門市場を散策します。" },
      { title: "光化門 & 教保文庫", detail: "文房具やお土産を調達. 清渓川を軽く散歩してリラックス。" },
      { title: "仁川空港へ移動", detail: "14:45到着を目指して、空港鉄道でスムーズに移動。" },
      { title: "帰国便搭乗", detail: "LJ209便で日本へ。旅の 思い出を振り返りながら帰路に。" },
    ],
  },
];

const spotGallery = [
  ["明洞", "到着日に歩きやすいショッピングエリア", "/images/photos/myeongdong.jpg"],
  ["広蔵市場", "屋台料理とローカルな熱気を感じる夜", "/images/photos/gwangjang.jpg"],
  ["国立中央博物館", "韓国の歴史と展示を短時間でも楽しめる場所", "/images/photos/museum.jpg"],
  ["教保文庫", "本、文具、お土産をまとめて探せる光化門の定番", "/images/photos/kyobo.jpg"],
  ["東大門市場", "最終日の買い物に便利な大型マーケット", "/images/photos/dongdaemun.jpg"],
  ["清渓川", "都心の移動中に挟みやすい散歩道", "/images/photos/cheonggyecheon.jpg"],
];

const foodCards = [
  {
    name: "ソルロンタン",
    subName: "ソルロンタン",
    image: "/images/photos/seolleongtang.jpg",
    tip: "朝食におすすめ。塩、コショウ、ネギを自分で入れて味を整えます。",
  },
  {
    name: "カンジャンケジャン",
    subName: "カンジャンケジャン",
    image: "/images/photos/gejang.jpg",
    tip: "予約推奨のご飯泥棒。辛いものが苦手な友人にも案内しやすい韓国料理です。",
  },
  {
    name: "韓国チキン",
    subName: "韓国チキン",
    image: "/images/photos/chicken.jpg",
    tip: "2日目の夜におすすめ. フライドとヤンニョムの 半々が無難です。",
  },
];

const moreFoods = [
  ["チョッパル", "チョッパル", "夜食にも向く豚足料理。サンチュ、ニンニク、マッククスと一緒に。"],
  ["チュクミ炒め", "チュクミ炒め", "辛さを確認して注文。最後に炒め飯で締めると満足度が高いです。"],
  ["パスタ", "パスタ", "弘大、漢南、江南の カジュアルレストランで選びやすい選択肢。"],
  ["ファインダイニング", "ファインダイニング", "3日目の夜に予約できると特別感が出ます。モダンコリアンが好相性。"],
];

const prepTips = [
  ["地図", "Naver MapまたはKakaoMapを事前に入れ、韓国語の店名も保存。"],
  ["交通", "T-money系交通カードを空港または駅でチャージ。"],
  ["支払い", "カード中心でOK。市場用に少額の現金を準備。"],
  ["予約", "ロッテ系チケット、展望台、ファインダイニングは前日までに確認。"],
  ["荷物", "帰国日は朝に荷造りを完了し、買い物しすぎない。"],
  ["撮影", "HYBE周辺や店舗内では撮影可否と警備案内に従う。"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17212b]">
      <section className="relative min-h-[92vh] overflow-hidden bg-[#17212b] text-white">
        <Image
          src="/images/photos/gyeongbokgung.jpg"
          alt="景福宮の実際の写真"
          fill
          priority
          className="object-cover opacity-72"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,22,28,.90),rgba(10,22,28,.62),rgba(10,22,28,.18))]" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-12">
          <nav className="top-nav flex flex-wrap items-center justify-between gap-4 text-sm font-black">
            <span className="tracking-wide">SEOUL 2026 PRIVATE GUIDE</span>
            <div className="nav-links">
              <a className="nav-pill" href="#schedule">旅程</a>
              <a className="nav-pill" href="#spots">写真</a>
              <a className="nav-pill" href="#food">食事</a>
              <a className="nav-pill" href="#departure">帰国</a>
            </div>
          </nav>

          <div className="grid gap-10 py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div className="hero-copy max-w-3xl">
              <p className="hero-kicker mb-5 inline-flex rounded-md border border-white/24 bg-white/14 px-3 py-2 text-sm font-black backdrop-blur">
                2026.05.02 - 05.05 / Tokyo to Seoul
              </p>
              <h1 className="hero-title">
                <span className="block">山下家の</span>
                <span className="block"></span>
                <span className="block text-[#ffd166]">ソウル4日間</span>
                <span className="block text-[#ffd166]">旅行ガイド</span>
              </h1>
              <p className="hero-lede mt-6 max-w-2xl text-lg leading-8 text-white/82">
                空港到着、清凉里ホテル、王宮、市場、K-POP、ロッテワールド、教保文庫、帰国便まで、
                実際の写真と一緒に確認できる旅行会社風ランディングページです。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="primary-cta" href="#schedule">モデルコースを見る</a>
                <a className="secondary-cta" href="#spots">写真で雰囲気を見る</a>
              </div>
            </div>

            <aside className="hero-panel">
              <div className="flex items-start justify-between gap-4 border-b border-white/14 pb-5">
                <div>
                  <p className="text-sm font-black text-[#ffd166]">Arrival Route</p>
                  <h2 className="mt-1 text-2xl font-black">LJ202 到着後の移動</h2>
                </div>
                <span className="rounded-md bg-[#ff6b57] px-3 py-2 text-sm font-black">May 2</span>
              </div>
              <div className="mt-5 space-y-4">
                {arrivalRoute.map(([time, label, detail]) => (
                  <div className="grid grid-cols-[76px_minmax(0,1fr)] gap-4" key={label}>
                    <span className="rounded-md bg-white/12 px-3 py-2 text-center text-sm font-black">{time}</span>
                    <div className="min-w-0">
                      <p className="route-label font-black">{label}</p>
                      <p className="route-detail mt-1 text-sm leading-6 text-white/64">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div className="metric-card" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="schedule" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="section-heading">
          <p>Model Course</p>
          <h2>4日間のスケジュール</h2>
        </div>
        <div className="mt-8 grid gap-6">
          {itinerary.map((day, index) => (
            <article className="itinerary-card" key={day.day}>
              <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
                <Image
                  src={day.image}
                  alt={`${day.title}の写真`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <span className="absolute left-5 top-5 rounded-md bg-white/92 px-3 py-2 text-sm font-black text-[#17212b]">
                  {day.day}
                </span>
              </div>
              <div className="p-5 sm:p-7">
                <p className="text-sm font-black text-[#db4c40]">{day.date}</p>
                <h3 className="mt-2 text-3xl font-black leading-tight">{day.title}</h3>
                <p className="mt-4 leading-7 text-[#43515b]">{day.note}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {day.tags.map((tag) => (
                    <span className="stop-chip" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  <div className="mini-note">
                    <span>Route</span>
                    <p>{day.route}</p>
                  </div>
                  <div className="mini-note">
                    <span>Meal Plan</span>
                    <p>{day.meal}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {["朝", "昼", "夕方", "夜"].map((time, stepIndex) => (
                    <div className="timeline-row" key={`${day.day}-${time}`}>
                      <strong>{time}</strong>
                      <div>
                        <h4>{day.timeline?.[stepIndex]?.title || "移動と観光を調整"}</h4>
                        <p>{day.timeline?.[stepIndex]?.detail || "混雑、天気、営業時間に合わせて順番を微調整できます。"}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="spots" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="section-heading">
            <p>Real Photos</p>
            <h2>実際の写真で見る訪問スポット</h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {spotGallery.map(([title, caption, image]) => (
              <article className="spot-card" key={title}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                  <Image
                    src={image}
                    alt={`${title}の写真`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="starbucks-guide" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="section-heading">
          <p>Cafe Recommendation</p>
          <h2>おすすめのスターバックス</h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 bg-white p-4 sm:p-8">
          <div className="relative aspect-[3/4] w-full sm:aspect-[707/1000]">
            <Image
              src="/images/starbucks-guide.png"
              alt="おすすめのスターバックス 7つの特別な店舗"
              fill
              className="object-contain"
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          </div>
        </div>
      </section>

      <section id="food" className="bg-[#17212b] py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="section-heading light">
            <p>Gastronomy</p>
            <h2>韓国で食べてほしいもの</h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {foodCards.map((food) => (
              <article className="food-photo-card" key={food.name}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                  <Image src={food.image} alt={`${food.name}の写真`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="p-5">
                  <p className="food-timing">Photo Pick</p>
                  <h3>{food.name}</h3>
                  <p className="jp">{food.subName}</p>
                  <p>{food.tip}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {moreFoods.map(([name, subName, tip]) => (
              <div className="more-food" key={name}>
                <strong>{name}</strong>
                <span>{subName}</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packing-list" className="mx-auto max-w-7xl">
        <div className="section-heading">
          <p>Travel Essentials</p>
          <h2>荷物リスト</h2>
        </div>
        <div className="mt-8 overflow-hidden rounded-[2rem] shadow-2xl border border-gray-100 bg-white p-4 sm:p-8">
          <div className="relative aspect-[3/4] w-full sm:aspect-[707/1000]">
            <Image
              src="/images/packing-list-2.png"
              alt="荷物リスト"
              fill
              className="object-contain"
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="section-heading">
          <p>Before The Trip</p>
          <h2>現地で困らないための準備</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {prepTips.map(([title, text]) => (
            <div className="prep-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="departure" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="departure-band">
          <div>
            <p className="text-sm font-black uppercase text-[#ffd166]">Return Journey</p>
            <h2>最終日は14:45までに仁川国際空港へ</h2>
            <p>
              東大門市場、清渓川、光化門の 教保文庫は午前中にまとめます。
              昼食後は空港鉄道で仁川へ向かい、チェックインと保安検査の 時間を確保してください。
            </p>
          </div>
          <div className="flight-box">
            <span>Flight</span>
            <strong>LJ209</strong>
            <p>ICN arrival target 14:45</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#17212b] px-5 py-12 text-center text-white">
        <h2 className="text-2xl font-black">Japan to Korea Travel Guide</h2>
        <p className="mx-auto mt-4 max-w-3xl text-xs leading-6 text-white/42">
          Photo credits: Wikimedia Commons contributors including Janine Dupree, U0894629, Bgag,
          Richard Mortel, Teemeah, SJ Yang, Startandstar.
        </p>
      </footer>
    </main>
  );
}
