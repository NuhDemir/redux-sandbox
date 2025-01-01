// greeting fonksiyonu, "Good Morning" stringini döner.
// Bu fonksiyonun yan etkisi yoktur, yani dış dünyayı değiştirmez.
function greeting() {
  return "Good Morning";
}

// greet fonksiyonunun referansını message değişkenine atıyoruz.
// Ancak greet fonksiyonu tanımlı değil, bu bir hata oluşturur.
// Doğru fonksiyon adı greeting olmalıdır.
const message = greeting; // Fonksiyonu çağırmıyoruz, sadece referansını atıyoruz

// message değişkeni artık greeting fonksiyonunu işaret ediyor.
// Bu nedenle message() çağrısı greeting() fonksiyonunu çağırır.
console.log(message()); // "Good Morning" çıktısını verir

// printMessage fonksiyonu, bir callback fonksiyonu alır ve bu callback fonksiyonunu çağırır.
// Bu, fonksiyonel programlamanın temel taşlarından biridir: fonksiyonları argüman olarak geçmek.
function printMessage(callback) {
  console.log(callback());
}

// printMessage fonksiyonuna greeting fonksiyonunu argüman olarak geçiyoruz.
// Bu, greeting fonksiyonunun sonucunu konsola yazdırır.
printMessage(greeting); // "Good Morning" çıktısını verir

// createGreeter fonksiyonu, bir fonksiyon döner.
// Bu dönen fonksiyon, "Günaydın" stringini döner.
// Bu, fonksiyonların birinci sınıf vatandaşlar olduğunun bir başka örneğidir: fonksiyonlar döndürülebilir.
function createGreeter() {
  return function () {
    return "Günaydın";
  };
}

// createGreeter fonksiyonunu çağırıyoruz ve dönen fonksiyonu greeter değişkenine atıyoruz.
const greeter = createGreeter(); // createGreeter bir fonksiyon döndürür

// greeter değişkeni artık createGreeter tarafından döndürülen fonksiyonu işaret eder.
// Bu nedenle greeter() çağrısı "Günaydın" stringini döner.
console.log(greeter()); // "Günaydın" çıktısını verir
