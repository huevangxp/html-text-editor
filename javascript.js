function displayResults(){
    let codeHTML = document.getElementById('html').value;
    let codeCSS = document.getElementById('css').value;
    let codeJAVASCRIPT = document.getElementById('javascript').value;

    let results = document.getElementById('result');
    
    results.contentDocument.body.innerHTML = `${codeHTML}<style>${codeCSS}</style>`;
    results.contentWindow.eval(codeJAVASCRIPT);
}