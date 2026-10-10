# ماڵپەڕی BO SAYITEKI FOTOGRAFI

## بارکردنی کۆدەکان لە GitHub
1. فایلەکەی `BO-Sayiteki-GitHub.zip` لە چاتەکە دابگرە و **Extract / Unzip** بکە.
2. لە [GitHub](https://github.com) هەژمارەکەت بکەرەوە، **New repository** هەڵبژێرە، ناوێک بۆ repository بنووسە و **Private** هەڵبژێرە.
3. لە repositoryی نوێکە **Add file → Upload files** بکە.
4. ناوەڕۆکی فۆڵدەری `github-upload` بار بکە؛ خۆی ZIP ـەکە بار مەکە. `index.html` و `styles.css` دەبێت لە ڕەگی repository بن، و فۆڵدەری `images`یش لەگەڵیان بێت.
5. **Commit changes** بکە.

بارکردنی فایل لە وێبگەڕدا هەر فایلێک دەبێت کەمتر لە 25 MiB بێت و هەتا 100 فایل بەیەکجار بار دەکرێت. ڕێنمایی فەرمی: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

## تێبینیی گرنگ دەربارەی بڵاوکردنەوە
ئەم هەنگاوە کۆدەکان لە هەژماری GitHub ـتدا دەپارێزێت. بڵاوکردنەوەی ماڵپەڕ بە GitHub Pages هەنگاوێکی جیاوازە. GitHub Pages بە پلانی Free بۆ repositoryی گشتی بەردەستە؛ ئەگەر repository ـەکە تایبەت بێت، بڵاوکردنەوە لە Pages پێویستی بە پلانی پارەدان هەیە. بێ ئاگاداری مەیکە بە Public، چونکە ئەوە کۆد و فایلەکانی ناو repository بۆ خەڵک ئاشکرا دەکات. زانیاریی فەرمی: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## گۆڕینی وێنەکان
وێنەی نوێ بە WebP لە فۆڵدەری `images` دابنێ. لە `index.html`، بەشی `<figure class="photo-card">` ـی وێنەیەک بدۆزەرەوە و ناوی فایل لە `src`، پێناسە لە `alt`، ناونیشان و جۆر/ساڵ لە `<figcaption>` بگۆڕە. پاشان **Commit changes** بکە.

تێبینی: بۆ ئەوەی لینکی پەیوەندی نامەیەک بۆ ئیمەیڵی خۆت بکاتەوە، ئیمەیڵەکەت لە `app.js` زیاد بکە. زانیاری نهێنی لە repository یان نامەکاندا دانەمەزرێنە.
