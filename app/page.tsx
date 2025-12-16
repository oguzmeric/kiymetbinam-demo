export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500" />
            <span className="text-sm font-semibold tracking-tight">KıymetBinam</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#nasil">Nasıl Çalışır?</a>
            <a className="hover:text-slate-900" href="#ozellikler">Özellikler</a>
            <a className="hover:text-slate-900" href="#ornek">Örnek Rapor</a>
          </nav>

          <a
            href="#cta"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Ücretsiz Değerle
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/25 to-sky-400/25 blur-3xl" />
          <div className="absolute right-[-200px] top-[120px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-fuchsia-500/15 to-indigo-500/15 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              AI destekli değerleme • 30 sn’de sonuç
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Evinizin gerçek piyasa değerini{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                saniyeler içinde
              </span>{" "}
              öğrenin
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              Yapay zekâ ile konut değeri, kira getirisi ve mahalle karşılaştırmasını tek ekranda görün.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#cta"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Ücretsiz Değerle
              </a>
              <div className="text-xs text-slate-500">Kredi kartı gerekmez • Verileriniz gizli</div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs text-slate-600">
              <Stat title="Anında" value="Sonuç" />
              <Stat title="Mahalle" value="Skoru" />
              <Stat title="Kira" value="Getirisi" />
            </div>
          </div>

          {/* Mock dashboard */}
          <div className="rounded-3xl border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">Örnek Değerleme</div>
                <div className="text-xs text-slate-500">İstanbul • Kadıköy</div>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs text-slate-600">AI Powered</div>
            </div>

            <div className="mt-4 grid gap-3">
              <Card label="Tahmini Satış Değeri" value="₺ 8.450.000" hint="+/- %6 aralık" />
              <div className="grid grid-cols-2 gap-3">
                <Card label="m² Fiyatı" value="₺ 92.500" hint="Bölge ort.: 88.900" />
                <Card label="Kira Getirisi" value="% 4,8" hint="12 ay projeksiyon" />
              </div>

              <div className="rounded-2xl border bg-slate-50 p-4">
                <div className="text-xs text-slate-600">Mahalle Skoru</div>
                <div className="mt-2 flex items-end justify-between">
                  <div className="text-2xl font-bold">8.3</div>
                  <div className="text-xs text-slate-500">Ulaşım • Okul • Yaşam</div>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-white">
                  <div className="h-2 w-[83%] rounded-full bg-gradient-to-r from-indigo-600 to-sky-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="nasil" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Nasıl çalışır?</h2>
        <p className="mt-2 text-sm text-slate-600 md:text-base">
          3 basit adımda değer tahmini alın.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Step n="1" title="Adresi gir" desc="İl/ilçe/mahalle veya tam adres." />
          <Step n="2" title="AI analiz etsin" desc="Bölgesel fiyatlar ve benzer ilanlar." />
          <Step n="3" title="Raporu gör" desc="Değer aralığı, kira, karşılaştırma." />
        </div>
      </section>

      {/* Features */}
      <section id="ozellikler" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Neden KıymetBinam?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Feature title="Gerçek piyasa sinyalleri" desc="Bölgesel trendleri ve benzer ilanları birleştirir." />
            <Feature title="Mahalle bazlı analiz" desc="Ulaşım ve yaşam faktörlerini tek skorla özetler." />
            <Feature title="Kira getirisi tahmini" desc="Kira bandı ve getiri yüzdesiyle yatırım görünümü." />
            <Feature title="Hızlı & sade akış" desc="Önce sonuç, sonra detay." />
          </div>
        </div>
      </section>

      {/* Example */}
      <section id="ornek" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Örnek rapor neleri içerir?</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 md:text-base">
              <li>• Tahmini satış değeri ve güven aralığı</li>
              <li>• m² fiyatı ve bölge karşılaştırması</li>
              <li>• Kira bandı ve yıllık getiri</li>
              <li>• Mahalle skoru ve içgörüler</li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold">Değerleme Özeti</div>
            <div className="mt-4 grid gap-3">
              <Card label="Tahmini Değer" value="₺ 8.1M – ₺ 8.9M" hint="Güven aralığı" />
              <Card label="Kira Bandı" value="₺ 32.000 – ₺ 38.000" hint="Aylık" />
              <Card label="Getiri" value="% 4,6 – % 5,2" hint="Yıllık" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="cta" className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border bg-white p-8 shadow-sm md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-2xl font-bold tracking-tight">Evinizin değeri kaç TL?</div>
              <div className="mt-1 text-sm text-slate-600">30 saniyede öğrenin. Ücretsiz başlayın.</div>
            </div>
            <a
              href="#"
              className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Hemen Öğren
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} KıymetBinam</div>
          <div className="flex gap-4">
            <a className="hover:text-slate-700" href="#">KVKK</a>
            <a className="hover:text-slate-700" href="#">Gizlilik</a>
            <a className="hover:text-slate-700" href="#">İletişim</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white p-3">
      <div className="text-[11px] text-slate-500">{title}</div>
      <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
        {n}
      </div>
      <div className="mt-4 text-base font-semibold">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="text-base font-semibold">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function Card({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-xs text-slate-500">{label}</div>
          <div className="mt-1 text-lg font-bold">{value}</div>
        </div>
        <div className="text-xs text-slate-500">{hint}</div>
      </div>
    </div>
  );
}
