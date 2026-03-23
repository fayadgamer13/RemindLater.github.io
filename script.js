// Gemini: implement download flow without opening a new tab.

function startDownloadDirect(url){
  const a = document.createElement('a');
  a.href = url;
  a.setAttribute('download','RemindLater.apk');
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  setTimeout(()=> a.remove(), 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('downloadBtn');
  const againBtn = document.getElementById('againBtn');
  const fallbackBtn = document.getElementById('fallbackBtn');

  if(downloadBtn){
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = downloadBtn.getAttribute('data-apk');
      startDownloadDirect(url);
      window.location.href = 'thanks.html';
    });
  }

  if(againBtn){
    againBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = againBtn.getAttribute('data-apk');
      startDownloadDirect(url);
    });
  }

  if(fallbackBtn){
    fallbackBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // fallback: open direct URL in same tab as a navigable link
      const parent = document.querySelector('#againBtn') || downloadBtn;
      const url = parent ? parent.getAttribute('data-apk') : 'https://github.com/fayadgamer13/RemindLater/releases/download/downloadapk/app-debug.apk';
      startDownloadDirect(url);
    });
  }
});
