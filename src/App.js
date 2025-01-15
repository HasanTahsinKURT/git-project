import React, { useEffect } from "react";
import "./App.css";
import GitKomutlari from "./GitKomutlari";

function App() {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const onScroll = () => {
      if (window.scrollY > 10) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Git Teknolojisi</h1>
      </header>
      <nav>
        <a href="#introduction">Git Nedir?</a>
        <a href="#advantages">Avantajlar ve Dezavantajlar</a>
        <a href="#examples">Örnek Uygulamalar</a>
        <a href="#career">Kariyer Planı</a>
      </nav>
      <main>
        <section id="introduction">
          <h2><strong>Git Nedir? Tarihçesi ve Teknik Özellikleri</strong></h2>
          <p>
            Git, yazılım geliştirme süreçlerinde vazgeçilmez bir aracı olan versiyon kontrol sistemidir. Linus Torvalds tarafından 2005 yılında Linux Kernel projesi için geliştirilmiştir. O zamandan beri yazılımcı topluluğu tarafından yaygın olarak benimsenmiş ve günümüzde yazılım geliştirmenin temel taşı haline gelmiştir.
          </p>
          <p><strong>Tarihçesi:</strong> Git’in gelişim öyküsü, merkezi versiyon kontrol sistemlerinin (Subversion, CVS) eksikliklerini gidermek için bir çözüm arayışıyla başlar. Linus Torvalds, kendi özgür ve hızlı versiyon kontrol sistemini oluşturarak, kod paylaşımını daha kolay ve etkili hale getirmeyi amaçlamıştır.</p>
          <h3><strong>Teknik Özellikleri:</strong></h3>
          <ul>
            <li><strong>Dağıtık Mimari:</strong> Git, merkezi olmayan bir yapı sunar. Bu, her kullanıcının yerel bir depo (“repository”) kopyası tutması anlamına gelir. Bağlantı olmadığı durumlarda bile geliştiriciler kod ile çalışmaya devam edebilir.</li>
            <li><strong>Snapshot Modeli:</strong> Git, dosyaları izlemek için bir snapshot (anlık görüntü) modeli kullanır. Bu, her değişikliğin tam bir kaydını oluşturur.</li>
            <li><strong>Kolay Dal (Branch) Yönetimi:</strong> Git, projelerde farklı dallar oluşturarak geliştiricilere paralel olarak çalışma esnekliği sağlar. Çatışma olmadan birleştirme (merge) yapmak da oldukça basittir.</li>
            <li><strong>Performans:</strong> Komutların hızlı çalışması için optimize edilmiştir. Commit alımı, branch değişimi veya gönderim işlemleri saniyeler içinde tamamlanabilir.</li>
          </ul>
        </section>
        <section id="advantages">
          <h2><strong>Avantajları ve Dezavantajları</strong></h2>
          <p>Git, yazılımcıların en sık kullandığı araçlardan biri olarak çok sayıda avantaj sunarken, bazı zorluklarla da karşılaşılabilir.</p>

          <h3><strong>Avantajları:</strong></h3>
          <ul>
            <li><strong>Güvenilirlik:</strong> Git, kodunuzun her bir değişikliğini kayıt altına alarak, zaman içinde geriye dönüp inceleme yapmanıza olanak tanır. Bu, özellikle ekip projelerinde olası hataların çabuk bulunmasını sağlar.</li>
            <li><strong>Verimlilik:</strong> Yerel depo yapısı sayesinde geliştiriciler internet bağlantısı olmadan dahi çalışmaya devam edebilir.</li>
            <li><strong>Esneklik:</strong> Çeşitli projeler ve uygulamalar için kolayca uyarlanabilir. Özellikle çok kullanıcılı ekip projelerinde etkilidir.</li>
            <li><strong>Topluluk ve Dökümanlar:</strong> Git’in yaygın bir topluluğu vardır, bu da sorunlarla ilgili çok sayıda çözüm ve rehber bulabileceğiniz anlamına gelir.</li>
          </ul>

          <h3><strong>Dezavantajları:</strong></h3>
          <ul>
            <li><strong>Karmaşık Kullanım:</strong> Git’e yeni başlayanlar için komutları ve kavramları anlamak zorlayıcı olabilir.</li>
            <li><strong>Merge Çatışmaları:</strong> Ekip projelerinde merge (çakışma) sorunları yaşanabilir ve bu sorunlar bazen uzun sürebilir.</li>
            <li><strong>Çok Sayıda Araç:</strong> Git’in etrafında birçok eklenti ve arayüz (örneğin, GitHub, GitLab) olması bazı kullanıcılar için kafa karışık olabilir.</li>
          </ul>
        </section>
        <section id="examples">
          <h2><strong>Örnek Uygulamalar</strong></h2>
          <p>Git, farklı alanlarda ve projelerde kullanılan çok yönlü bir teknolojidir. İşte bazı uygulama alanları:</p>

          <ul>
            <li><strong>Açık Kaynak Projeler:</strong> Çok kullanıcılı projelerde, dünyanın her yerinden geliştiricilerin bir arada çalışmasını sağlar. Örneğin, Python, Linux Kernel veya Çeşitli JavaScript Framework’leri Git ile yönetilmektedir.</li>
            <li><strong>Akademik Projeler:</strong> Öğrenciler ve akademisyenler, projelerinde versiyon kontrolü yapmak ve değişiklikleri izlemek için Git kullanabilir.</li>
            <li><strong>DevOps Uygulamaları:</strong> Git, sürekli entegrasyon (CI) ve sürekli teslimat (CD) süreçlerinde temel taş görevi görür.</li>
            <li><strong>Eğitim ve Staj Projeleri:</strong> Yeni yazılımcılar, Git kullanarak takım çalışması deneyimi kazanabilir.</li>
          </ul>
          <GitKomutlari />
        </section>
        <section id="career">
          <h2><strong>Kendi Kariyer Planım</strong></h2>
          <p>Yazılım geliştirme alanında öne çıkmak ve özellikle DevOps ile Git ekosisteminde uzmanlaşmak benim uzun vadeli hedefimdir. Git, yazılım geliştirme ve sürüm kontrolü için kritik bir araç haline gelmiştir ve bu alandaki yetkinliğimi artırarak, modern yazılım projelerinde etkili bir rol oynamayı amaçlıyorum. Aşağıda, bu hedefime ulaşmak için belirlediğim adımlar bulunmaktadır:</p>

          <h3><strong>Kısa Vadeli Planlar:</strong></h3>
          <ul>
            <li><strong>GitHub ve GitLab gibi platformlarda aktif projeler oluşturmak:</strong> Projelerimi paylaşarak, açık kaynak dünyasında daha fazla katkı sağlamak ve topluluklarla etkileşime geçmek istiyorum.</li>
            <li><strong>Git’in ileri komutları konusunda uzmanlaşmak:</strong> rebase, cherry-pick, stash gibi gelişmiş Git komutlarını kullanarak, sürüm kontrolündeki yetkinliğimi artırmayı hedefliyorum.</li>
            <li><strong>Yazılım geliştirme topluluklarına katılmak:</strong> Forumlar, konferanslar ve meetuplara katılarak sektördeki yenilikleri takip etmek ve daha fazla deneyim kazanmak.</li>
          </ul>

          <h3><strong>Orta Vadeli Planlar:</strong></h3>
          <ul>
            <li><strong>CI/CD pipeline’ları oluşturmak:</strong> DevOps süreçlerinin temel taşlarından biri olan sürekli entegrasyon ve teslimat (CI/CD) pipeline’larını kurarak, otomasyon ve verimlilik artırıcı çözümler geliştirmek.</li>
            <li><strong>AWS, Docker gibi teknolojilerle entegrasyon yapmak:</strong> Bulut bilişim ve konteyner teknolojileri kullanarak, yazılım geliştirme ve dağıtım süreçlerini daha verimli hale getirmek.</li>
            <li><strong>DevOps kültürünü anlamak ve uygulamak:</strong> Ekiplerde DevOps kültürünü benimseyerek, yazılım geliştirme süreçlerini hızlandırmak ve kaliteli yazılımlar üretmek.</li>
          </ul>

          <h3><strong>Uzun Vadeli Planlar:</strong></h3>
          <ul>
            <li><strong>Çok uluslu şirketlerde DevOps mühendisi olarak çalışmak:</strong> DevOps mühendisliği ve Git yönetimi konusunda liderlik yaparak, büyük ve ölçeklenebilir projelerin başarıyla tamamlanmasında etkin bir rol oynamak.</li>
            <li><strong>Git ve yazılım geliştirme süreçleri hakkında eğitim ve rehber içerikler oluşturmak:</strong> Topluluğa katkı sağlamak için, Git, DevOps ve yazılım geliştirme hakkında blog yazıları, videolar ve eğitim içerikleri üretmek.</li>
            <li><strong>Yazılım geliştirme süreçlerinin iyileştirilmesi için liderlik yapmak:</strong> Ekiplerin verimliliğini artıracak süreç iyileştirmeleri önermek ve uygulamak, böylece projelerin daha hızlı ve etkili bir şekilde tamamlanmasını sağlamak.</li>
          </ul>
        </section>

      </main>
      <footer>
        <p>Bu içerik <a href="https://github.com/">GitHub Pages</a> üzerinden yayınlanmıştır.</p>
        <p><strong>İsimler ve Öğrenci Numaraları:</strong></p>
        <ul>
          <li>Hasan Tahsin KURT - 210710025</li>
          <li>Alperen İLGAZ - 210710027</li>
          <li>Onuralp ÇALMAŞUR - 210710045</li>
          <li>Eray GÜNNER - 210710052</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;