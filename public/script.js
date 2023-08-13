// JavaScript for form submission and validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullname = form.elements.fullname.value;
        const email = form.elements.email.value;

        if (fullname && email) {
            // You can add logic here to process the enrollment data (e.g., send to a server)
            alert('Enrollment successful! Welcome to the Creative Coding Course.');
            form.reset();
            localStorage.setItem('enrolled', 'true');
            window.location.href = 'module1.html';
        } else {
            alert('Please fill in all the fields.');
        }
    });
});

// Check enrollment status on each module page
const isEnrolled = localStorage.getItem('enrolled');

if (!isEnrolled && window.location.pathname !== '/enroll.html' && window.location.pathname !== '/index.html') {
    window.location.href = 'enroll.html';
}

// Handle module buttons
function handleModuleButtonClick(buttonId, modulePath) {
    const moduleButton = document.getElementById(buttonId);

    if (moduleButton) {
        moduleButton.addEventListener('click', () => {
            if (isEnrolled) {
                window.location.href = modulePath;
            } else {
                window.location.href = 'enroll.html';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    handleModuleButtonClick('module2Button', 'module2.html');
    handleModuleButtonClick('module3Button', 'module3.html');
    handleModuleButtonClick('module4Button', 'module4.html');
    handleModuleButtonClick('module5Button', 'module5.html');
    handleModuleButtonClick('module6Button', 'module6.html');
    handleModuleButtonClick('module7Button', 'module7.html');
    handleModuleButtonClick('module8Button', 'module8.html');
    handleModuleButtonClick('module9Button', 'mtk.html');
    handleModuleButtonClick('module10Button', 'module1.html');
   
});





document.addEventListener('DOMContentLoaded', function() {
    const htmlEditor = document.getElementById('html-editor');
    const cssEditor = document.getElementById('css-editor');
    const jsEditor = document.getElementById('js-editor');
    const outputFrame = document.getElementById('output-frame');
    const runButton = document.getElementById('run-button');
    const saveButton = document.getElementById('save-button');
    const loadButton = document.getElementById('load-button');

    runButton.addEventListener('click', function() {
        const htmlCode = htmlEditor.value;
        const cssCode = `<style>${cssEditor.value}</style>`;
        const jsCode = `<script>${jsEditor.value}</script>`;
        const fullCode = `${htmlCode}${cssCode}${jsCode}`;

        outputFrame.contentDocument.open();
        outputFrame.contentDocument.write(fullCode);
        outputFrame.contentDocument.close();
    });

    saveButton.addEventListener('click', function() {
        const savedCode = {
            html: htmlEditor.value,
            css: cssEditor.value,
            js: jsEditor.value,
        };
        localStorage.setItem('savedCode', JSON.stringify(savedCode));
        alert('Code saved successfully!');
    });

    loadButton.addEventListener('click', function() {
        const savedCode = JSON.parse(localStorage.getItem('savedCode'));
        if (savedCode) {
            htmlEditor.value = savedCode.html;
            cssEditor.value = savedCode.css;
            jsEditor.value = savedCode.js;
            alert('Code loaded successfully!');
        } else {
            alert('No saved code found.');
        }
    });
});
 