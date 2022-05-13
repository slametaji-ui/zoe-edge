var QuotesList = [
    'We cannot solve our problems with the same thinking we used when we created them.', 'If you want to live a happy life, tie it to a goal, not to people or objects', 'The best way to find yourself is to lose yourself in the service of others.', 'The only way to do great work is to love what you do.', "Don't let the noise of others opinions drown out your own inner voice.", "There can be no greater gift than that of giving one's time and energy to helping others without expecting anything in return.", 'A good head and a good heart are always a formidable combination.'];

var len = QuotesList.length;
var index = Math.floor(Math.random() * len);

var quotes = QuotesList[index]

document.getElementById("quotes").innerHTML = '"' + quotes + '"';


