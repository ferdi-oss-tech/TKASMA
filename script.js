const questions = [
  {type:"single",q:"Apa yang dimaksud dengan manajemen perkantoran?",opts:["Kegiatan mengelola informasi, pekerjaan, dan sumber daya kantor agar tujuan organisasi tercapai","Kegiatan menjual produk kepada pelanggan saja","Kegiatan memproduksi barang di pabrik","Kegiatan mengatur investasi pribadi","Kegiatan mengirim barang ke luar negeri"],ans:[0],exp:"Manajemen perkantoran mengoordinasikan pekerjaan administratif, informasi, fasilitas, dan sumber daya kantor."},
  {type:"single",q:"Fungsi manajemen yang berkaitan dengan penetapan tujuan dan cara mencapainya disebut …",opts:["Pengawasan","Perencanaan","Pengorganisasian","Pengarahan","Pengarsipan"],ans:[1],exp:"Perencanaan menetapkan tujuan, langkah, jadwal, dan sumber daya yang diperlukan."},
  {type:"single",q:"Dokumen yang digunakan untuk menyampaikan informasi resmi dari satu pihak kepada pihak lain adalah …",opts:["Buku kas pribadi","Catatan belanja","Surat dinas","Daftar menu","Kartu permainan"],ans:[2],exp:"Surat dinas merupakan sarana komunikasi resmi dalam kegiatan organisasi."},
  {type:"multi",q:"Manakah yang termasuk tujuan pengelolaan arsip yang baik?",opts:["Memudahkan penemuan kembali dokumen","Menjaga keamanan dan keutuhan informasi","Membuat semua dokumen mudah diakses oleh siapa pun tanpa batas","Mendukung bukti dan pertanggungjawaban kegiatan","Menghilangkan seluruh dokumen lama tanpa penilaian"],ans:[0,1,3],exp:"Arsip yang dikelola dengan baik harus mudah ditemukan, aman, utuh, dan mendukung bukti kegiatan. Akses tetap perlu dibatasi sesuai kewenangan."},
  {type:"single",q:"Buku agenda surat masuk terutama digunakan untuk …",opts:["Mencatat daftar hadir karyawan","Mencatat surat yang diterima kantor","Menghitung persediaan barang","Mencatat transaksi penjualan","Menyusun jadwal cuti"],ans:[1],exp:"Buku agenda surat masuk merekam data surat yang diterima, seperti tanggal, nomor, pengirim, dan perihal."},
  {type:"single",q:"Sikap yang paling tepat ketika menerima telepon resmi kantor adalah …",opts:["Menjawab sesuka hati","Membiarkan telepon berdering selama mungkin","Menyebutkan nama dan unit kerja dengan sopan","Langsung menutup telepon","Berbicara dengan teman saat penelepon menunggu"],ans:[2],exp:"Petugas perlu menjawab dengan sopan, memperkenalkan unit kerja, mendengarkan, dan mencatat pesan secara tepat."},
  {type:"multi",q:"Pilih contoh perilaku profesional di lingkungan kantor.",opts:["Menjaga kerahasiaan dokumen","Datang tepat waktu","Menyebarkan informasi internal kepada orang luar","Berkomunikasi dengan sopan","Mengabaikan prosedur keselamatan"],ans:[0,1,3],exp:"Profesionalisme mencakup kerahasiaan, disiplin, dan komunikasi yang baik."},
  {type:"single",q:"Perangkat yang paling sesuai untuk mengolah data angka dan membuat tabel perhitungan adalah …",opts:["Aplikasi presentasi","Aplikasi pengolah kata saja","Aplikasi spreadsheet","Pemutar musik","Aplikasi menggambar saja"],ans:[2],exp:"Spreadsheet seperti Microsoft Excel atau LibreOffice Calc digunakan untuk tabel, rumus, dan analisis angka."},
  {type:"single",q:"Dalam tata ruang kantor, prinsip ergonomi bertujuan untuk …",opts:["Memperbanyak dekorasi ruangan","Meningkatkan kenyamanan, keselamatan, dan efisiensi kerja","Membuat semua meja berjauhan","Mengurangi pencahayaan","Menghilangkan seluruh tempat penyimpanan"],ans:[1],exp:"Ergonomi menyesuaikan lingkungan dan peralatan kerja dengan kebutuhan manusia."},
  {type:"multi",q:"Apa saja informasi yang umumnya perlu dicatat saat menerima surat masuk?",opts:["Tanggal diterima","Nama atau asal pengirim","Perihal surat","Kata sandi pribadi penerima","Nomor surat jika tersedia"],ans:[0,1,2,4],exp:"Pencatatan surat biasanya meliputi tanggal penerimaan, pengirim, perihal, dan nomor surat. Kata sandi pribadi bukan data surat."},
  {type:"single",q:"Notulen rapat adalah dokumen yang berisi …",opts:["Daftar harga barang saja","Ringkasan jalannya rapat, keputusan, dan tindak lanjut","Data rekening pribadi semua peserta","Iklan produk kantor","Daftar inventaris kendaraan pribadi"],ans:[1],exp:"Notulen mencatat pokok pembahasan, keputusan, peserta atau hal penting, serta tindak lanjut rapat."},
  {type:"single",q:"Jika sebuah dokumen bersifat rahasia, tindakan yang tepat adalah …",opts:["Mengunggahnya ke media sosial","Membagikannya ke semua orang","Menyimpannya dengan aman dan membatasi akses sesuai kewenangan","Meninggalkannya di ruang umum","Mengirimnya ke alamat yang belum diverifikasi"],ans:[2],exp:"Dokumen rahasia perlu dilindungi dan hanya diakses oleh pihak yang berwenang."},
  {type:"multi",q:"Manakah yang termasuk kegiatan administrasi perkantoran?",opts:["Mengelola surat-menyurat","Menjadwalkan rapat","Mengarsipkan dokumen","Menyusun laporan kegiatan","Mengabaikan pencatatan inventaris"],ans:[0,1,2,3],exp:"Surat-menyurat, penjadwalan, pengarsipan, dan pelaporan merupakan kegiatan administrasi kantor."},
  {type:"single",q:"Tujuan utama pengawasan dalam manajemen adalah …",opts:["Mencari kesalahan untuk mempermalukan pegawai","Memastikan pekerjaan sesuai rencana dan melakukan perbaikan bila diperlukan","Menghapus semua aturan kerja","Menggantikan seluruh fungsi perencanaan","Menambah pekerjaan tanpa alasan"],ans:[1],exp:"Pengawasan membandingkan pelaksanaan dengan standar, menemukan penyimpangan, dan membantu tindakan korektif."},
  {type:"single",q:"Saat mengirim email resmi, bagian subjek sebaiknya …",opts:["Dikosongkan selalu","Diisi dengan kalimat yang tidak berhubungan","Menjelaskan pokok pesan secara singkat dan jelas","Diisi seluruh isi email","Berisi kata sandi akun"],ans:[2],exp:"Subjek yang jelas membantu penerima memahami tujuan email dan mengelolanya."},
  {type:"multi",q:"Pilih praktik pengelolaan waktu yang efektif.",opts:["Menyusun prioritas pekerjaan","Membagi tugas berdasarkan tenggat waktu","Menunda semua pekerjaan hingga batas akhir","Menggunakan daftar tugas","Menyediakan waktu untuk mengevaluasi progres"],ans:[0,1,3,4],exp:"Prioritas, tenggat, daftar tugas, dan evaluasi progres membantu pekerjaan selesai tepat waktu."},
  {type:"single",q:"Daftar inventaris kantor berfungsi untuk …",opts:["Mencatat aset dan perlengkapan yang dimiliki kantor","Mencatat percakapan pribadi","Menggantikan semua laporan keuangan","Menyimpan surat tanpa klasifikasi","Menentukan nilai ujian siswa"],ans:[0],exp:"Daftar inventaris membantu mengetahui jenis, jumlah, kondisi, dan lokasi aset kantor."},
  {type:"single",q:"Ketika menemukan kesalahan pada laporan yang akan dikirim, sebaiknya pegawai …",opts:["Tetap mengirim tanpa memeriksa","Menghapus laporan dan tidak memberi tahu siapa pun","Memeriksa sumber data, memperbaiki kesalahan, lalu memvalidasi kembali","Mengubah angka agar terlihat bagus","Menyalahkan rekan kerja terlebih dahulu"],ans:[2],exp:"Laporan perlu diverifikasi, diperbaiki berdasarkan data yang benar, lalu diperiksa kembali sebelum dikirim."},
  {type:"multi",q:"Manakah tindakan yang mendukung pelayanan prima kepada tamu kantor?",opts:["Menyambut tamu dengan sopan","Mendengarkan kebutuhan tamu","Memberikan informasi yang benar sesuai kewenangan","Membiarkan tamu tanpa penjelasan","Menjaga sikap profesional"],ans:[0,1,2,4],exp:"Pelayanan prima mengutamakan kesopanan, pemahaman kebutuhan, informasi akurat, dan profesionalisme."},
  {type:"single",q:"Mengapa prosedur operasional standar (SOP) diperlukan di kantor?",opts:["Agar pekerjaan dilakukan secara konsisten dan jelas","Agar pegawai tidak perlu berkomunikasi","Agar semua dokumen menjadi rahasia","Agar pekerjaan selalu lebih lambat","Agar tidak ada evaluasi"],ans:[0],exp:"SOP memberi panduan langkah kerja agar hasil konsisten, aman, dan dapat dievaluasi."}
];

const $ = (id) => document.getElementById(id);
const pages = {home:$("homePage"), quiz:$("quizPage"), result:$("resultPage")};
let student = {name:"",className:"",school:""};
let current = 0;
let answers = Array.from({length:questions.length}, () => []);
let examActive = false;
let warningActive = false;
let countdownTimer = null;
let audioContext = null;
let alarmTimer = null;
let quizStartedAt = 0;

$("currentYear").textContent = new Date().getFullYear();

function showPage(which){
  Object.entries(pages).forEach(([key,el])=>el.classList.toggle("hidden",key!==which));
  window.scrollTo({top:0,behavior:"smooth"});
}
function sortedEqual(a,b){
  return a.length===b.length && [...a].sort((x,y)=>x-y).every((v,i)=>v===[...b].sort((x,y)=>x-y)[i]);
}
function renderQuiz(){
  const q=questions[current];
  $("questionCount").textContent=`Soal ${current+1} dari ${questions.length}`;
  $("answeredCount").textContent=`${answers.filter(a=>a.length>0).length}/${questions.length} terjawab`;
  $("progressBar").style.width=`${((current+1)/questions.length)*100}%`;
  $("prevBtn").disabled=current===0;
  $("prevBtn").style.opacity=current===0?".45":"1";
  $("nextBtn").classList.toggle("hidden",current===questions.length-1);
  $("finishBtn").classList.toggle("hidden",current!==questions.length-1);
  const inputType=q.type==="multi"?"checkbox":"radio";
  const letters=["A","B","C","D","E"];
  $("questionContainer").innerHTML=`
    <div class="question-card">
      <span class="question-type">${q.type==="multi"?"☑ PILIHAN GANDA KOMPLEKS":"◉ PILIHAN GANDA"}</span>
      <h2 class="question-title">${current+1}. ${q.q}</h2>
      <p class="question-help">${q.type==="multi"?"Pilih semua jawaban yang benar. Jawaban dinilai benar jika seluruh pilihan tepat.":"Pilih satu jawaban yang paling tepat."}</p>
      <div class="options-list">${q.opts.map((opt,i)=>`
        <label class="option">
          <input type="${inputType}" name="question-${current}" value="${i}" ${answers[current].includes(i)?"checked":""} aria-label="Pilihan ${letters[i]}">
          <span class="option-letter">${letters[i]}</span><span class="option-text">${opt}</span>
        </label>`).join("")}
      </div>
    </div>`;
  $("questionContainer").querySelectorAll("input").forEach(input=>input.addEventListener("change",()=>{
    const value=Number(input.value);
    if(q.type==="multi"){
      if(input.checked){if(!answers[current].includes(value))answers[current].push(value);}
      else answers[current]=answers[current].filter(v=>v!==value);
    }else answers[current]=[value];
    renderNav();
    $("answeredCount").textContent=`${answers.filter(a=>a.length>0).length}/${questions.length} terjawab`;
  }));
  renderNav();
}
function renderNav(){
  $("questionNav").innerHTML=questions.map((q,i)=>`<button type="button" class="nav-question ${i===current?"active":""} ${answers[i].length?"answered":""}" data-index="${i}" aria-label="Buka soal ${i+1}">${i+1}</button>`).join("");
  $("questionNav").querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{current=Number(btn.dataset.index);renderQuiz();}));
}
function startExam(){
  student={name:$("studentName").value.trim(),className:$("studentClass").value.trim(),school:$("schoolName").value.trim()};
  if(!student.name||!student.className||!student.school)return;
  current=0;answers=Array.from({length:questions.length},()=>[]);
  $("quizStudent").textContent=`Peserta: ${student.name} • ${student.className}`;
  examActive=true;warningActive=false;quizStartedAt=Date.now();
  showPage("quiz");renderQuiz();
}
function finishExam(){
  examActive=false;warningActive=false;stopAlarm();
  if(countdownTimer){clearInterval(countdownTimer);countdownTimer=null;}
  $("warningOverlay").classList.add("hidden");
  const correct=questions.reduce((n,q,i)=>n+(sortedEqual(answers[i],q.ans)?1:0),0);
  const wrong=questions.length-correct;
  const score=Math.round((correct/questions.length)*100);
  $("resultName").textContent=student.name;$("resultClass").textContent=student.className;$("resultSchool").textContent=student.school;
  $("finalScore").textContent=score;$("correctCount").textContent=correct;$("wrongCount").textContent=wrong;
  $("scoreMessage").textContent=score>=90?"Luar biasa! Pemahaman Anda sangat baik.":score>=75?"Bagus! Terus pertahankan dan tingkatkan.":score>=60?"Cukup baik, pelajari kembali materi yang belum dikuasai.":"Tetap semangat! Pelajari pembahasan dan coba lagi.";
  $("resultSymbol").textContent=score>=75?"✓":"↗";
  $("reviewList").innerHTML=questions.map((q,i)=>{
    const good=sortedEqual(answers[i],q.ans);
    const letters=["A","B","C","D","E"];
    const chosen=answers[i].length?answers[i].slice().sort((a,b)=>a-b).map(v=>letters[v]).join(", "):"Tidak dijawab";
    const correctAnswer=q.ans.slice().sort((a,b)=>a-b).map(v=>letters[v]).join(", ");
    return `<div class="review-item"><h4>${i+1}. ${q.q}</h4><p class="${good?"review-good":"review-bad"}">${good?"✓ Benar":"✕ Salah"} · Jawaban Anda: ${chosen}</p><p><b>Jawaban benar:</b> ${correctAnswer}</p><p>${q.exp}</p></div>`;
  }).join("");
  $("reviewList").classList.add("hidden");$("reviewToggle").setAttribute("aria-expanded","false");$("reviewToggle").innerHTML='Lihat pembahasan jawaban <span>＋</span>';
  showPage("result");
}
function returnHome(){
  examActive=false;warningActive=false;stopAlarm();
  if(countdownTimer){clearInterval(countdownTimer);countdownTimer=null;}
  $("warningOverlay").classList.add("hidden");
  $("studentForm").reset();
  student={name:"",className:"",school:""};
  showPage("home");
}
function startAlarm(){
  stopAlarm();
  try{
    const AudioCtx=window.AudioContext||window.webkitAudioContext;
    if(!AudioCtx)return;
    audioContext=new AudioCtx();
    const beep=()=>{
      if(!audioContext||audioContext.state==="closed"||!warningActive)return;
      const osc=audioContext.createOscillator();const gain=audioContext.createGain();
      osc.type="sawtooth";osc.frequency.value=880;gain.gain.value=.045;
      osc.connect(gain);gain.connect(audioContext.destination);osc.start();
      osc.stop(audioContext.currentTime+.18);
    };
    beep();alarmTimer=setInterval(beep,500);
  }catch(e){/* Alarm audio bergantung pada izin browser. */}
}
function stopAlarm(){
  if(alarmTimer){clearInterval(alarmTimer);alarmTimer=null;}
  if(audioContext){audioContext.close().catch(()=>{});audioContext=null;}
}
function triggerTabWarning(){
  if(!examActive||warningActive)return;
  warningActive=true;
  $("warningOverlay").classList.remove("hidden");
  let remaining=10;
  $("countdownValue").textContent=remaining;$("countdownText").textContent=remaining;
  startAlarm();
  countdownTimer=setInterval(()=>{
    remaining--;
    $("countdownValue").textContent=remaining;$("countdownText").textContent=remaining;
    if(remaining<=0){clearInterval(countdownTimer);countdownTimer=null;returnHome();}
  },1000);
}
$("studentForm").addEventListener("submit",e=>{e.preventDefault();startExam();});
$("prevBtn").addEventListener("click",()=>{if(current>0){current--;renderQuiz();}});
$("nextBtn").addEventListener("click",()=>{if(current<questions.length-1){current++;renderQuiz();}});
$("finishBtn").addEventListener("click",()=>{
  const unanswered=answers.filter(a=>!a.length).length;
  if(unanswered>0&&!confirm(`Masih ada ${unanswered} soal yang belum dijawab. Tetap akhiri ujian?`))return;
  finishExam();
});
$("retryBtn").addEventListener("click",startExam);
$("homeBtn").addEventListener("click",returnHome);
$("reviewToggle").addEventListener("click",()=>{
  const hidden=$("reviewList").classList.toggle("hidden");
  $("reviewToggle").setAttribute("aria-expanded",String(!hidden));
  $("reviewToggle").innerHTML=`${hidden?"Lihat":"Sembunyikan"} pembahasan jawaban <span>${hidden?"＋":"−"}</span>`;
});
// Browser tidak menyediakan API yang bisa memastikan bahwa kejadian blur berasal dari pembukaan tab baru.
// Karena itu, perpindahan fokus/tab saat ujian diperlakukan sebagai aktivitas meninggalkan halaman.
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")triggerTabWarning();});
window.addEventListener("blur",()=>triggerTabWarning());
window.addEventListener("pageshow",()=>{if(examActive&&document.visibilityState==="hidden")triggerTabWarning();});
