
let video = document.getElementById('video');
        let canvas = document.getElementById('canvas')
        let context = canvas.getContext('2d');

        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia;
        
        if(navigator.getUserMedia){
            navigator.getUserMedia({video: true}, streamWebCam, throwError);
        };

        function streamWebCam(stream) {
            // video.src = window.URL.createObjectURL(stream); = unactualized
            
            video.srcObject= (stream);
            video.play();
        }
        function throwError(e){
            alert(e.name);
        }
        function snap(){
            canvas.width = video.clientWidth;
            canvas.heigth = video.clientHeight;
            context.drawImage(video, 0, 0);
        }