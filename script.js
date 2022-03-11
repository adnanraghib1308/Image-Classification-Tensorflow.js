console.log("hgjhjhg");
const img = document.getElementById('img');
const result = document.getElementById('result');
const accuracy = document.getElementById('accuracy');
const spinner = document.getElementById('spinner');

const recognizeImage = () => {
  // Load the model.
  mobilenet.load().then(model => {
    // Classify the image.
    model.classify(img).then(predictions => {
      const accuracyPercentage = parseFloat(predictions[0].probability * 100).toFixed(2);
      result.innerHTML = "   " + predictions[0].className;
      accuracy.innerHTML = "   " + accuracyPercentage + " %";
      spinner.style.display = 'none';
    });
  });
}

const inpFile = document.getElementById('inpFile');
inpFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const imgUrl = window.URL.createObjectURL(file);

    img.setAttribute('src', imgUrl);
    
    spinner.style.display = "inline";
    recognizeImage();
})