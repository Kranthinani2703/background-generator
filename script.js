
document.getElementById('generate').addEventListener('click', function() {
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  });