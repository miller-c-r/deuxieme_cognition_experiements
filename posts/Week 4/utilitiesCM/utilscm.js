function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    csvFile = new Blob(blobParts:[csv], options: {type: "text/csv"});

    downloadLink = document.createElement(tagName:"a");

    downloadLink.download = filename;

    downloadLink.href = window.URL.createObjectURL(csvFile);

    downloadLink.style.displa = 'none';

    
    //add link to DOM
    document.body.appendChild(downloadLink);

    downloadLink.click();

}