const options = {year:'numeric'};
        document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', options);

        let updatedate = Date.parse(document.lastModified);
        document.getElementById('updatedate').textContent = updatedate;