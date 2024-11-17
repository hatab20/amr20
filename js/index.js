
        // // تعريف مصفوفة تحتوي على النصوص المختلفة
        // const texts = [
        //     `"You miss 100% of the shots you don't take."`,
        //     "--Wayne Gretzy",
        //     `"It's not what happens to you, but how you react to it that matters."`,
        //     "--Epictetus",
        //     `"Resentment is like drinking poison and waiting for your enemies to die."`,
        //     "--Nelson Mandela"
        // ];

        // // دالة لتغيير النصين إلى نصوص عشوائية عند كل ضغطة على الزر
        // function showRandomTexts() {
        //     // الحصول على عناصر النصوص
        //     const textElement1 = document.getElementById("text1");
        //     const textElement2 = document.getElementById("text2");
            
        //     // توليد فهرسين عشوائيين مختلفين
        //     let randomIndex1 = Math.floor(Math.random() * texts.length);
        //     let randomIndex2;
        //     do {
        //         randomIndex2 = Math.floor(Math.random() * texts.length);
        //     } while (randomIndex2 === randomIndex1);  // التأكد من أن الفهرسين مختلفين

        //     // تحديث النصين بالنصوص العشوائية
        //     textElement1.textContent = texts[randomIndex1];
        //     textElement2.textContent = texts[randomIndex2];
        // }








        var quotes = [
            {
              quotes:
                "“Two things are infinite the universe and human stupidity and Im not sure about the universe.”",
              auther: "Albert Einstein",
            },
            {
              quotes: "“You only live once, but if you do it right, once is enough.”",
              auther: "Mae West",
            },
            {
              quotes:
                "“A friend is someone who knows all about you and still loves you.”",
              auther: "Elbert Hubbard",
            },
            {
              quotes:
                "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”",
              auther: "Steve Jobs",
            },
            {
              quotes:
                "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
              auther: "Mark Twain",
            },
            {
              quotes:
                "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
              auther: "William Shakespeare",
            },
            {
              quotes: "“I have not failed. I've just found 10,000 ways that won't work.”",
              auther: "Thomas A. Edison",
            },
            {
              quotes:
                "“Logic will get you from A to Z; imagination will get you everywhere.”",
              auther: " Albert Einstein",
            },
            {
              quotes:
                "“The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.”",
              auther: " Bob Marley",
            },
            {
              quotes: "“Do what you can, with what you have, where you are.”",
              auther: "Theodore Roosevelt",
            },
            {
              quotes:
                "“I like nonsense, it wakes up the brain cells Fantasy is a necessary ingredient in living.”",
              auther: "Dr.Seuss",
            },
          ];
          
          var lastIndex = -1;
          
          function genratequote() {
            var randomIndex;
            do {
              randomIndex = Math.floor(Math.random() * quotes.length);
            } while (randomIndex === lastIndex);
            lastIndex = randomIndex;
            var newQuote = quotes[randomIndex];
            document.getElementById("quote").innerHTML = newQuote.quotes;
            document.getElementById("auther").innerHTML = newQuote.auther;
          }



      