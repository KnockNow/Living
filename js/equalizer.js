(function($){
  $(function(){
      var BPM = 128.0;

      var audio = document.getElementById('audio-player');
      var canvas = document.getElementById('equalizer');

      var canvasCtx = canvas.getContext('2d');
      var audioCtx = new window.AudioContext();
      var audioSrc = audioCtx.createMediaElementSource(audio);
      var analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;

      audioSrc.connect(analyser);
      audioSrc.connect(audioCtx.destination); // Output song

      var bufferLength = analyser.frequencyBinCount;
      var dataArray = new Uint8Array(bufferLength);
      analyser.getByteTimeDomainData(dataArray);

      // reqFrame instance to cancel window.requestAnimationFrame
      var REQ_FRAME = null;
      var CANVAS_WIDTH = Math.floor(canvas.width);
      var CANVAS_HEIGHT = Math.floor(canvas.height);

      $(window).resize(function() {
          // We need to get the element from nativ JS because
          // the function of jQuery width have an issue sometimes return 100 (in % instead in pixel)
          var canvas = document.getElementById('equalizer');

          CANVAS_WIDTH = canvas.width;
      });

      // Draw frequencies of song in canvas
      function draw() {
        REQ_FRAME = window.requestAnimationFrame(draw);

        analyser.getByteTimeDomainData(dataArray);

        // Background canvas
        canvasCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        canvasCtx.fillStyle = 'rgb(34,36,40)';
        canvasCtx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Line
        var style;

        if (sessionStorage.getItem('customColor')){
          style = sessionStorage.getItem('customColor');
        } else {
          // Sum trame frequencies
          var sum = dataArray.reduce(function(a, b) {
            return a + b;
          }, 0);

          // Calcul the average of sum trame frequencies
          var sumMoy = sum / analyser.fftSize;

          if (sumMoy >= 20 && sumMoy < 65) {
            style = 'green';
          } else if (sumMoy >= 65 && sumMoy <= 90) {
            style = 'orange';
          } else if (sumMoy >= 90) {
            style = 'red';
          } else {
            style = 'white';
          }
        }

        canvasCtx.strokeStyle = style;
        canvasCtx.lineWidth = 0.5;


        canvasCtx.beginPath();

        var sliceWidth = CANVAS_WIDTH * 1.0 / bufferLength;
        var x = 0;
        for(var i = 0; i < bufferLength; i++) {

          // (Beat Per Minute) Use to manage speed frame for canvas stroke.
          // The algorithm to get BPM for a song is very complex.
          // This is why we set this variable manualy.
          var v = dataArray[i] / BPM;
          var y = v * CANVAS_HEIGHT / 2;

          if(i === 0) {
            canvasCtx.moveTo(x, y);
          } else {
            canvasCtx.lineTo(x, y);
          }

          x += sliceWidth;
        }

        canvasCtx.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT / 2);
        canvasCtx.stroke();
    };

    $(audio).on('play', function() {
      draw();
    });

    $(audio).on('pause', function() {
      window.cancelAnimationFrame(REQ_FRAME);
    });

  });
})(jQuery);
