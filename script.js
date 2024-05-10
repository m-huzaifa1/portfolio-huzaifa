// dark mode functionality

let darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

const enableDarkMode = () => {
    darkModeEnabled = true;
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkModeEnabled', 'true');
}

const disableDarkMode = () => {
    darkModeEnabled = false;
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkModeEnabled', 'false');
}

document.addEventListener('DOMContentLoaded', () => {
    darkModeButton.checked = darkModeEnabled;
    document.body.classList.toggle('dark-mode', darkModeEnabled);
});

const darkModeButton = document.getElementById('darkModeButton');

darkModeButton.addEventListener('change', () => {
    if (darkModeButton.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// download resume functionality

function downloadResume () {
    var resumeUrl = './img/muhammad huzaifa resume.pdf';

    var downloadAnchor = document.createElement('a');
    downloadAnchor.href = resumeUrl;

    downloadAnchor.download = 'muhammad_huzaifa_resume.pdf';

    downloadAnchor.click();

    downloadAnchor.remove();
}