function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hVNPaotcu/model.json' , modelReady);
}

function modelReady()
{
    classifier.classify(gotResults)
}

function gotResults(error , results)
{
    console.log(results)
    random_number_r = Math.floor ( Math.random() * 255 ) +1;
    random_number_g = Math.floor ( Math.random() * 255 ) +1;
    random_number_b = Math.floor ( Math.random() * 255 ) +1;
    document.getElementById("result_label").innerHTML = "I Can Hear - " + results[0].label
    document.getElementById("result_confidence").innerHTML = "Accuracy -  " + (results[0].confidence  * 100).toFixed(2)  + "%"
    document.getElementById("result_label").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_r+")";
    image1 = document.getElementById("Cat")
    image2 = document.getElementById("Cow")
    image3 = document.getElementById("Dog")
    image4 = document.getElementById("Lion")
    
    if (results[0].label == "Meow") {
        console.log("Clap")
        image1.src = "giphy.gif"
        image2.src = "cow.jpg"
        image3.src = "dog.jpg"
        image4.src = "lion.jpeg"
    }
    else if (results[0].label == "Moo") {
        image1.src = "cat.png"
        image2.src = "teonor.gif"
        image3.src = "dog.jpg"
        image4.src = "lion.jpeg"
    }
    else if (results[0].label == "Bark") {
        image1.src = "cat.png"
        image2.src = "cow.jpg"
        image3.src = "tenor (1).gif"
        image4.src = "lion.jpeg"
    }
    else if(results[0].label == "Roar") {
        image1.src = "cat.png"
        image2.src = "cow.png"
        image3.src = "dog.jpg"
        image4.src = "67b403ff82b678f0500a5ab2ee0ca26a.gif"
    }
}


