(function() {

    var urls = [
        'http://localhost:3001/main.bundle.js',
        'http://localhost:3002/main.bundle.js'
    ]

    var promises = []

    urls.map(url => {
        var promise = new Promise(function(resolve, reject) {

            var script = document.createElement('script');
            script.src = url;
    
            script.addEventListener('load', function() {
                resolve(script);
            }, false);
    
            script.addEventListener('error', function() {
                reject(script);
                console.log('was rej');
            }, false);
    
            document.body.appendChild(script);
        });
    })
    Promise.all(promises);

    window["micro-front-end-context"] = true;
    window["mountCounter"]("counter");
    window["mountTodo"]("todo");

})();