(function($){
  $(function(){
      var audio = document.getElementById('audio-player');
      var canvas = document.getElementById('equalizer');

      var canvasCtx = canvas.getContext('2d');
      var audioCtx = new window.AudioContext();
      var audioSrc = audioCtx.createMediaElementSource(audio);
      var analyser = audioCtx.createAnalyser();
      // analyser.fftSize = 2048;

      audioSrc.connect(analyser);

      var bufferLength = analyser.frequencyBinCount;
      var dataArray = new Uint8Array(bufferLength);
      analyser.getByteTimeDomainData(dataArray);

      // reqFrame instance to cancel window.requestAnimationFrame
      var REQ_FRAME = null;
      var CANVAS_WIDTH = canvas.width;
      var CANVAS_HEIGHT = canvas.height;

      function draw() {
        REQ_FRAME = window.requestAnimationFrame(draw);

        analyser.getByteTimeDomainData(dataArray);

        // Background canvas
        canvasCtx.fillStyle = 'rgb(192,57,43)';
        canvasCtx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Line
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

        canvasCtx.beginPath();

        var sliceWidth = CANVAS_WIDTH * 1.0 / bufferLength;
        var x = 0;
        for(var i = 0; i < bufferLength; i++) {

          // 128.0 (Beat Per Minute) Speed for line
          // The algorithm to get BPM for a song is very complex
          var v = dataArray[i] / 128.0;
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