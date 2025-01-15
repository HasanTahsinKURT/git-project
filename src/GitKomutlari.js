import React from "react";
import "./GitKomutlari.css";

const GitKomutlari = () => {
  const komutlar = [
    {
      baslik: "Yeni Bir Git Deposu Oluşturma",
      aciklama: "Bulunduğunuz dizinde yeni bir Git repository oluşturur.",
      kod: "git init",
    },
    {
      baslik: "Mevcut Bir Depoyu Klonlama",
      aciklama: "Belirtilen URL'deki repository’i yerel bilgisayarınıza kopyalar.",
      kod: "git clone https://github.com/kullaniciAdi/projeAdi.git",
    },
    {
      baslik: "Değişiklikleri Takip Etme",
      aciklama: "Çalışma alanınızdaki değişikliklerin durumunu gösterir.",
      kod: "git status",
    },
    {
      baslik: "Değişiklik Ekleme",
      aciklama: "Dosyaları versiyon kontrolüne ekler. Tek bir dosya ya da tüm dosyalar eklenebilir.",
      kod: "git add [dosya_adı]\n# veya tüm dosyalar için:\ngit add .",
    },
    {
      baslik: "Commit Yapma",
      aciklama: "Eklenen değişiklikleri commit eder (işler) ve açıklama ekler.",
      kod: 'git commit -m "Açıklama"',
    },
    {
      baslik: "Push İşlemi",
      aciklama: "Yerel değişikliklerinizi belirtilen dalda uzak depoya gönderir.",
      kod: "git push origin [branch_adı]",
    },
    {
      baslik: "Pull İşlemi",
      aciklama: "Uzaktaki repository'den değişiklikleri alır ve yerel deponuzla birleştirir.",
      kod: "git pull origin [branch_adı]",
    },
    {
      baslik: "Dalları Yönetme",
      aciklama: "Yeni bir dal oluşturur ve dallar arasında geçiş yapabilirsiniz.",
      kod: "git branch [branch_adı]\n# Dal değiştir:\ngit checkout [branch_adı]",
    },
    {
      baslik: "Dalları Birleştirme",
      aciklama: "Belirtilen dalı mevcut dal ile birleştirir.",
      kod: "git merge [branch_adı]",
    },
    {
      baslik: "Diff İşlemi",
      aciklama: "Kodun mevcut hali ile bir önceki commit’i karşılaştırır.",
      kod: "git diff",
    },
    {
      baslik: "Commit Geçmişini Görüntülemek",
      aciklama: "Commit geçmişini görüntüler.",
      kod: "git log",
    },
  ];

  return (
    <div className="git-komutlari">
      <h2>Git Komutları</h2>
      <ul>
        {komutlar.map((komut, index) => (
          <li key={index} className="komut-item">
            <h3>{komut.baslik}</h3>
            <p>{komut.aciklama}</p>
            <pre><code>{komut.kod}</code></pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitKomutlari;