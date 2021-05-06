function zodiac(){
  var birthmonth = document.getElementById("month").value;
   var birthday = document.getElementById("day").value;
 var result = " unknown because you didn't put a valid date.";


if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18
    ){
        result = ("Aquarius");
     document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";
   document.getElementById("characteristic").innerHTML="You care about your community, Aquarius, and the events of 2020 gave you plenty of chances to keep busy by lending a hand. Whether you became your family's point person and organizer of Zoom holidays or dove into activism, you likely stayed so busy tending to others that you forgot about your own needs. Now, 2021 shines a spotlight on you, precious water bearer, and it's time to step into it.";

    }

    if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
       result = ("Pisces");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=20%>";
      document.getElementById("characteristic").innerHTML="Your psychic and empathic abilities are what make you so magical, Pisces, but the weight of the world in 2020 became too much for you. As a result, you probably used stay-at-home orders to retreat a little bit too much. This year asks you to come out of your fishbowl and grace us with your humor and pretty face. Expect major changes in your friend group that overlap with your love life. Are you secretly in love with your best friend?";

    }
   if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
       result = ("Aries");
      document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=20%>";
     document.getElementById("characteristic").innerHTML="2021 is major for your love life Aries, but only if you drop the drama. As the world starts to heal from the pains of 2020, you need to let go of any habits that may have developed while isolating that no longer serve you. This year brings opportunities for magnificent love, as long as you don't ruin it with an infamous Aries temper tantrum.";
   }

    if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
        result = ("Taurus");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=20%>";
       document.getElementById("characteristic").innerHTML="Last year left you with plenty of time to think, Taurus, and 2021 wants you to act on your desires because you are worth it. This will likely manifest most obviously in your professional life, so don't be surprised if you leave one job for something bigger and better that fills your soul. Practice self-care and don't for a second forget your worth, or else you could risk missing out on an opportunity made for you.";

    }

    if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20
     ){
        result = ("Gemini");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=20%>";
      document.getElementById("characteristic").innerHTML="After the economic chaos of 2020, this year offers you opportunities to rebuild and grow professionally, but it won't be easy for you or anyone else, Gemini. The hard work and effort you put in last year will start to pay off, but you'll need to keep up some of the momentum. An eclipse in your sign brings a burst of unexpected news, further encouraging your personal growth that the new year brings.";

    }

    if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
        result = ("Cancer");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=20%>";
      document.getElementById("characteristic").innerHTML="2020 kept you so busy that you started crab-walking in circles, Cancer. You're an expert when it comes to taking care of other people, but 2021 asks you to let other people take care of you. This may be hard to do, as it can be difficult to admit when you're vulnerable, but I pinkie promise that it's for your own health and happiness.";

    }
    if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
        result = ("Leo");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>";
            document.getElementById("characteristic").innerHTML="You are ruled by the sun, Leo, so you were actually born to be in the spotlight. Social distancing was hard for everyone, but it's possible it affected your sign the most, leaving you to get creative. As the world starts to heal in 2021, you'll feel like a lion trapped in a cage bursting to get out. When you do, you'll want to say yes to every date and every opportunity, but beware of short-term thinking, Leo. Your 2021 mission is to practice patience and be discerning.";

    }
    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
        result = ("Virgo");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=20%>";
        document.getElementById("characteristic").innerHTML="As the healer of the zodiac, 2020 kept you busy, Virgo. When you weren't out there giving out masks and delivering meals you became an emotional net for friends and family, and it's likely you over-extended yourself. This year, it may be helpful to work through the trauma you've experienced, either by getting a therapist, meditating, or simply making more time for long walks. Doing things that make you feel calm and balanced may just help you erect boundaries to bring in healthier relationships.";
    }
    if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
      result = ("Libra");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=20%>";
        document.getElementById("characteristic").innerHTML="As the sign of partnerships and balance, 2020 did a number on you. Not only was the world total chaos, but you had to primarily switch to flirting via sext, which while fun, is not the same as batting your eyelashes in real life. However, you still managed to get your fair share of attention. This year offers a chance at healthy, stable, and long-term love, you just need to keep your eyes and heart open.";
    }
    if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
       result = ("Scorpio");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=20%>";
        document.getElementById("characteristic").innerHTML="The pains of 2020 may have brought out your dark side, Scorpio. That doesn't make you a supervillain but it does mean that you may have raised your stinger a few times to pick fights with those closest to you. But that's okay; if the last year has taught us anything, it's that life can be hard, and we all deserve a little more grace. Now that you know how you react in some situations, do what you can to stop giving in to any overly aggressive tendencies. Your friendships will benefit from keeping a cooler head.";
    }
    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
        result = ("Sagittarius");
       document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Last year was rough on everyone, Sagittarius, but you felt it super hard. As a fire sign who loves to be the life of the party, when parties were canceled, you may have wondered what the point of it all was — and given into doom-scrolling as a substitute. This year, you'll find purpose again. 2021 asks you to prioritize your health, both mental and emotional. You'll feel much better when you start listening and tending to your needs.";
    }

  if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){

        result = ("Capricorn");
     document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=20%>";
     document.getElementById("characteristic").innerHTML="Hello, dear Capricorn. Pay attention, because you're going to like what you read. After the hellscape that was 2020, this year puts your career and money center stage. In particular, you will benefit from leaning into what you love and whatever it is that brings you the most satisfaction. While we all must take what we can get in this economy, this year asks you to take risks and reap the financial rewards.";
    }else if (birthmonth>12||birthday>31){
       alert("Please enter an accurate date ! ");
    }
 document.getElementById("output").innerHTML= result;
}
