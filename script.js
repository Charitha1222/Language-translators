async function translateText() {
    const text = document.getElementById("textToTranslate").value;
    const targetLanguage = document.getElementById("language").value;

    if (!text) {
        alert("Please enter text to translate.");
        return;
    }

    try {
        const response = await fetch(https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)});
        const data = await response.json();
        const translatedText = data[0][0][0];
        document.getElementById("translatedText").textContent = translatedText;
    } catch (error) {
        console.error("Error translating text:", error);
        alert("Translation failed. Please try again.");
    }
}