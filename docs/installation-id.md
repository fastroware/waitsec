# Panduan Instalasi & Penggunaan waitsec

**Bahasa:** [English](./installation.md) | Bahasa Indonesia

Panduan ini ditulis agar siapa saja bisa mengikuti, bahkan kalau Anda belum pernah memakai terminal. Semua perintah siap salin tempel.

---

## Navigasi cepat

- [1. Apa yang Anda pasang](#1-apa-yang-anda-pasang)
- [2. Kebutuhan](#2-kebutuhan)
- [3. Instalasi tercepat](#3-instalasi-tercepat)
- [4. Apa itu "global"](#4-apa-itu-global)
- [5. Instalasi lengkap](#5-instalasi-lengkap)
- [6. Instalasi sebagian](#6-instalasi-sebagian)
- [7. Instalasi per editor](#7-instalasi-per-editor)
- [8. Instalasi manual dengan file aturan](#8-instalasi-manual-dengan-file-aturan)
- [9. Composer dan Laravel](#9-composer-dan-laravel)
- [10. Update dan uninstall](#10-update-dan-uninstall)
- [11. Cara memakainya](#11-cara-memakainya)
- [12. Cek apakah sudah bekerja](#12-cek-apakah-sudah-bekerja)
- [13. Catatan keamanan](#13-catatan-keamanan)
- [14. Mengatasi masalah](#14-mengatasi-masalah)

---

## 1. Apa yang Anda pasang

waitsec adalah kumpulan file instruksi untuk AI coding agent Anda. Ia mengajarkan agent untuk melambat, bertanya sebelum menebak, menjaga perubahan tetap kecil, dan memverifikasi pekerjaannya.

Anda tidak memasang library runtime. Anda memasang file markdown yang dibaca agent supaya perilakunya lebih disiplin.

Ada lima paket:

| Skill | Fungsinya | Kapan dipasang |
| :--- | :--- | :--- |
| `waitsec` | 5 guardrail inti: ask-first, anti-overengineering, small-diff, debug-first, verify-first | Selalu. Ini dasar yang dipakai skill lain. |
| `waitsec-pagemaker` | Membangun halaman web bersih: recon project, preferensi desain, layout responsif, UX, SEO dan GEO, Schema.org, halaman auth, motion, 3D, dan sumber gambar | Anda membuat atau merombak halaman web. |
| `waitsec-code` | Kode bersih: tanpa komentar berisik, fungsi kecil dan fokus, tanpa dependensi mubazir | Anda menulis atau me-refactor kode. |
| `waitsec-ui` | Penahanan frontend: visual anti-slop, mobile-first, teks UI bersih | Anda mengerjakan UI atau design system. |
| `waitsec-quality` | Audit keamanan, tes yang realistis, migrasi database yang aman | Anda menyentuh auth, pembayaran, tes, atau migrasi. |

Skill tambahan merujuk ke skill inti `waitsec`, jadi selalu pasang `waitsec` bersama tambahan apa pun. Lihat [Instalasi sebagian](#6-instalasi-sebagian).

## 2. Kebutuhan

- Node.js 18 atau lebih baru, supaya `npx` jalan. Cek dengan `node -v`.
- Git, supaya folder skill bisa di-clone.
- AI coding agent, misalnya Kilo Code, Cline, Cursor, Claude Code, Antigravity, Gemini CLI, atau Codex.

## 3. Instalasi tercepat

Jalankan ini di folder project Anda:

```bash
npx waitsec
```

Installer menanyakan tiga hal:

1. **Skill yang ingin dipasang.** Kelima skill terpilih secara default. Tekan `Space` untuk membatalkan pilihan skill yang tidak diinginkan, dan `Enter` untuk konfirmasi. Minimal satu skill harus tetap terpilih.
2. **Scope instalasi.** Pilih `This project only` atau `Everywhere (Global)`. Lihat [Apa itu "global"](#4-apa-itu-global).
3. **AI agent atau editor Anda.** Pilih tool yang Anda pakai. Installer menaruh file di lokasi yang diharapkan masing-masing tool.

Selesai. Muat ulang editor Anda dan agent akan membaca aturannya.

## 4. Apa itu "global"

Saat installer menanyakan scope, ia sedang menanyakan di mana file ditulis.

| Scope | Lokasi file | Cocok untuk |
| :--- | :--- | :--- |
| **This project only** | Di dalam folder saat ini, biasanya di folder seperti `.agents/skills/` atau `.claude/skills/`, plus file aturan seperti `.kilorules` | Tim. Aturan ikut repository, jadi semua orang mendapat perilaku yang sama, dan bisa di-commit. |
| **Everywhere (Global)** | Direktori home Anda, misalnya `~/.agents/skills` atau `~/.claude/skills` | Anda pribadi. Semua project di komputer ini mendapat guardrail, bahkan project baru, tanpa menyetel ulang. |

Aturan sederhana:

- Kalau ingin aturannya jadi bagian dari codebase bersama, pasang per project.
- Kalau ingin aturannya aktif di semua pekerjaan Anda di komputer ini, pasang global.
- Bisa keduanya. Instalasi project menang untuk project tersebut.

## 5. Instalasi lengkap

Lengkap artinya kelima skill, sehingga agent punya semua guardrail.

Dengan installer interaktif, cukup biarkan kelima skill tetap terpilih di langkah 1 `npx waitsec`.

Atau pakai skills CLI universal dan pasang semuanya tanpa prompt:

```bash
npx skills add fastroware/waitsec -y
```

Setelah ini, Anda bisa meminta tugas apa pun ke agent, dan skill yang relevan aktif saat dibutuhkan.

## 6. Instalasi sebagian

Kadang Anda hanya ingin satu area, misalnya hanya pembuatan halaman. Itu boleh, tapi ingat aturan dependensinya:

> Setiap skill tambahan menganggap skill inti `waitsec` sudah ada. Jadi instalasi sebagian untuk satu tambahan selalu berarti memasang dua skill: `waitsec` plus tambahan yang diinginkan.

Contoh dengan skills CLI. Salin yang Anda butuhkan:

```bash
# Hanya inti
npx skills add fastroware/waitsec --skill waitsec

# Inti plus page builder
npx skills add fastroware/waitsec --skill waitsec waitsec-pagemaker

# Inti plus UI
npx skills add fastroware/waitsec --skill waitsec waitsec-ui

# Inti plus kode bersih
npx skills add fastroware/waitsec --skill waitsec waitsec-code

# Inti plus kualitas dan keamanan
npx skills add fastroware/waitsec --skill waitsec waitsec-quality
```

Catatan: halaman per-skill di skills.sh menampilkan perintah seperti `npx skills add fastroware/waitsec --skill waitsec`, yang hanya memasang satu skill itu. Untuk tambahan, selalu sertakan `waitsec` di daftar `--skill` seperti contoh di atas.

Dengan installer interaktif `npx waitsec`, instalasi sebagian caranya sama: biarkan `waitsec` dan tambahan tetap terpilih, dan batalkan pilihan sisanya.

## 7. Instalasi per editor

Installer interaktif `npx waitsec` mengurus path-nya untuk Anda. Tabel ini menunjukkan apa yang dibuat.

| Editor atau agent | File aturan | Folder skill |
| :--- | :--- | :--- |
| Kilo Code | `.kilorules` | `.kilo/skills` |
| Cline / Roo Code | `.clinerules` | `.cline/skills` |
| Cursor | `.cursorrules` | `.cursor/skills` |
| Claude Code | `CLAUDE.md` | `.claude/skills` |
| Antigravity / Universal | `AGENTS.md` | `.agents/skills` |
| Codex | `AGENTS.md` | `.codex/skills` |
| Gemini CLI | `GEMINI.md` | `.gemini/skills` |

Kalau Anda memakai lebih dari satu editor, pilih semuanya di langkah 3 dan installer menulis ke setiap lokasi.

## 8. Instalasi manual dengan file aturan

Kalau Anda hanya ingin guardrail sebagai satu file aturan dan tidak ingin folder skill, salin file aturan bawaan ke root project.

Untuk Kilo Code atau Cline:

```bash
curl -o .kilorules https://raw.githubusercontent.com/fastroware/waitsec/main/rules/waitsec.md
```

Untuk Cursor:

```bash
curl -o .cursorrules https://raw.githubusercontent.com/fastroware/waitsec/main/rules/waitsec.md
```

Untuk file pointer universal:

```bash
curl -o AGENTS.md https://raw.githubusercontent.com/fastroware/waitsec/main/rules/AGENTS.md
```

Anda juga bisa menempelkan isi [`rules/waitsec.md`](../rules/waitsec.md) ke kolom Custom Instructions di pengaturan editor.

## 9. Composer dan Laravel

Pasang sebagai dev dependency:

```bash
composer require --dev waitsec/waitsec
```

Lalu jalankan setup interaktif:

```bash
vendor/bin/waitsec
```

Hook Composer juga menyalin file aturan ke `.kilorules` saat install bila belum ada.

## 10. Update dan uninstall

Update dengan skills CLI:

```bash
npx skills update
```

Update dengan instal ulang:

```bash
npx waitsec
```

Kalau folder sudah ada, installer menanyakan mau overwrite atau simpan. Pilih overwrite untuk mendapat versi terbaru.

Untuk uninstall, hapus file yang dibuat installer:

- File aturan, misalnya `.kilorules`, `.clinerules`, `.cursorrules`, atau blok waitsec di dalam `AGENTS.md`, `CLAUDE.md`, atau `GEMINI.md`.
- Folder skill, misalnya `.agents/skills/waitsec`, `.claude/skills/waitsec`, dan folder skill lain yang terpasang.
- Untuk instalasi global, lakukan hal yang sama di direktori home Anda.

Untuk skills CLI, lihat daftar lalu hapus:

```bash
npx skills list
npx skills remove waitsec
```

## 11. Cara memakainya

Setelah terpasang, Anda tidak menjalankan waitsec. AI agent Anda yang menjalankannya.

1. Buka project Anda di editor.
2. Bekerja seperti biasa. Minta fitur, perbaikan, atau halaman.
3. Saat tugas cocok dengan sebuah skill, agent membaca skill itu dan mengikuti aturannya.

Contoh yang bisa langsung Anda ketik:

- "Buatkan landing page untuk SaaS saya."
- "Tambahkan halaman login dengan alur lupa password."
- "Perbaiki tes yang gagal ini."
- "Periksa endpoint ini untuk masalah keamanan."

Yang berubah pada perilaku agent:

- Ia bertanya satu sampai tiga pertanyaan langsung saat ada keputusan yang benar-benar penting, bukan menebak.
- Ia menulis perubahan terkecil yang menyelesaikan tugas.
- Ia membaca error lengkap sebelum mengubah kode.
- Ia menjalankan tes atau build sebelum menyatakan selesai.
- Untuk halaman, ia memeriksa stack dan styling Anda dulu, lalu membangun, lalu memvalidasi SEO dan structured data.

Kalau Anda hanya memasang sebagian skill, hanya itu yang aktif. Misalnya dengan `waitsec` plus `waitsec-pagemaker`, agent mendapat disiplin inti dan page builder, tapi tidak mendapat audit keamanan atau kebersihan kode.

## 12. Cek apakah sudah bekerja

Cek versi installer:

```bash
npx waitsec --version
```

Lihat daftar skill terpasang dengan skills CLI:

```bash
npx skills list
```

Anda juga bisa melihat foldernya sendiri:

```bash
ls .agents/skills
ls .claude/skills
```

Terakhir, tanya agent Anda: "Skill waitsec apa saja yang aktif di project ini?" Agent yang terpasang benar akan menyebutkannya.

## 13. Catatan keamanan

Baca ini sebelum memakai waitsec.

- waitsec menyediakan dokumen instruksi untuk AI agent. Ini panduan, bukan library runtime.
- Kami tidak mengaudit aplikasi Anda dan tidak bisa menjamin kode yang dihasilkan, skill pihak ketiga, atau dependensi aman, benar, atau bebas kerentanan.
- Skill berjalan dengan izin yang sama seperti AI agent Anda, yang bisa membaca dan menulis file serta menjalankan perintah di mesin Anda. Selalu periksa apa yang diubah agent sebelum Anda menjalankan atau merilisnya.
- Berhati-hatilah khususnya pada autentikasi, otorisasi, pembayaran, rahasia (secret), dan migrasi database. Jangan biarkan agent mendorong secret atau menjalankan migrasi destruktif tanpa pengawasan.
- Praktik keamanan di dalam skill, seperti validasi input dan parameterized query, hanyalah saran. Anda bertanggung jawab menguji dan mengamankan project Anda sendiri.
- Skills CLI juga memperingatkan agar Anda memeriksa skill sebelum dipakai. Anggap peringatan itu serius.

Singkatnya: pakai waitsec agar agent Anda lebih hati-hati, bukan sebagai jaminan kode Anda aman.

## 14. Mengatasi masalah

- `npx` tidak dikenali: pasang Node.js 18 atau lebih baru dari nodejs.org, lalu buka ulang terminal.
- Agent mengabaikan aturan: pastikan folder skill ada di lokasi yang dibaca editor, lalu muat ulang editor.
- Installer tidak menemukan agent: pilih editor Anda secara manual di langkah 3.
- Error `npm publish` atau jaringan saat install: cek koneksi lalu coba lagi.
- Anda hanya memasang tambahan: pasang skill inti `waitsec` bersamanya, seperti di [Instalasi sebagian](#6-instalasi-sebagian).
- Perilaku salah: buka issue di https://github.com/fastroware/waitsec/issues dengan editor Anda, prompt Anda, dan apa yang dilakukan agent.
