click_to_convert.addEventListener('click',function(){ 
    var speech = true; 
    window.SpeechRecognition = window.webkitSpeechRecognition; 
    const recognition = new SpeechRecognition(); 
    recognition.interimResults = true; 
    recognition.lang ='ar' 
 
    recognition.addEventListener('result', e=>{ 
        const transcript = Array.from(e.results) 
        .map(result =>result[0]) 
        .map(result =>result.transcript) 
        .join('') 
 
        document.getElementById("convert_text").innerHTML = transcript; 
        convert_text.innerHtMl = transcript; 
    }) 
    if(speech == true){ 
        recognition.start(); 
    } 
})