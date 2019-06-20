var randomProperty = function (obj) {
  var keys = Object.keys(obj)
  return obj[keys[ keys.length * Math.random() << 0]];
};


var names = {
  One: "Beth",
  Emma: "Emma",
  Olivia: "Olivia",
  Ava: "Ava",
  Isabella: "Isabella",
  Sophia: "Sophia",
  Charlotte: "Charlotte",
  Mia: "Mia",
  Amelia: "Amelia",
  Harper: "Harper",
  Evelyn: "Evelyn",
  Abigail: "Abigail",
  Emily: "Emily",
  Elizabeth: "Elizabeth",
  Mila: "Mila",
  Ella: "Ella",
  Avery: "Avery",
  Sofia: "Sofia",
  Camila: "Camila",
  Aria: "Aria",
  Scarlett: "Scarlett",
  Victoria: "Victoria",
  Madison: "Madison",
  Madelyn: "Madelyn",
  Cora: "Cora",
  Hailey: "Hailey",
  Gianna: "Gianna",
  Eliana: "Eliana",
  Josephine: "Josephine",

};

var herName = randomProperty(names);

var paragraphOne = {
    One: 'As a child, I was always restless. I never liked being told what to do and tried to defy the norm even if it brought me harm.',
    Two: "My mother told me I never gave her an trouble as a child. I do not have much evidence to back this up as I do not remember much of my early years. It was a queit and peaceful time for all I can recall.",
    Three: "I don't remember much of my childhood apart from the fact that I lived in an area well endowed with trees. The most vivid memory I have seems to be of me running around in an apple orchard.",
    Four: "As I grow older I seem to remember my childhood even more vividly. it comes to me in distinct images and scenes. One of the sharpest memories seems to be of me reciting a poem at school. It's wonderous how such a seemingly insignificant detail could leave such a deep impression on the mind. I digress. My childood was a peaceful one.",
    Five: "My childhood wasn't ideal by any definition. One of my earliest memories seems to be mother quarelling with father. No matter how hard I try to overwrite that one memory with happy times, I can not."

  };

var paragraphTwo = {
    One: 'I grew up to be mostly introverted. Most of my time was spent reading or solving puzzles. This did not do wonders for my social life.',
    Two: 'Growing up was not easy. Hard times were upon us. Even living hand to mouth was a struggle. Polishing the boots of those that look down on you and yet look for perfection in such menial work is one of the mem ories I definitely do not want to revisit. Yet I never did complain.',
    Three: "I remember being in isolation most of my time growing up. I didn't like to interact with people. The collection of insects I had wasn't a conversation starter, to put it mildly. Being the 'weird kid' did not really do wonders for my confidence.",
    Four: "As years passed I made academics my prime focus in life. I was more career oriented than most kids my age. I found myself buried more in the company of books and less in the company of men.",
    Five: "Growing up was uneventful. I got along fine with people my age and never had problem making friends. I did not have a lot of them but I was never in a lack of company either.",
};

var paragraphThree = {
    One: "It was a few years later that I met "+herName+". Even after all these years I still remember the first time I heard her singing. I never knew what she saw in me but she accepted me for who I was. Those were the happiest few years of my life. It was illness that took her from me. I thought time will erase the grief but it didn't. Stark contrast lies in the fact that her thoughts are the only thing keeping me from taking my own life.",
    Two: "Meeting "+herName+" felt like a breath of new life. I started forgetting my old life as the possibility of this new one played with my mind. After two years of being with her I proposed her and we married. I felt like I had found paradise till I also found that she had cheated on me on not one but several occasions before that. I left it at that, not to act on any hot impulses. I felt like a broken man.",
    Three: "I was never really that popular with women. There were some I had a good time with but they never stayed for long. When I turned twenty five, my parents married me off to "+herName+". I had a son with her. Illness took him from us. We realised we could not go on. Her face reminded me too much of him and it was the same for her. The pain was getting unbearable and we decided that it could not go on. Although "+herName+" and I did not divorce we went our own seperte ways. We visited each other once in a while but the visits got more and more rare.",
    Four: "I was seventen when I first met her. "+herName+" had light grey eyes and jet black hair. Four years I was with her before noticing something out of place. She had a dark side to her, a side she kept hidden. I could not leave her that easily for I had come to love her. I made "+herName+" see numerous doctors to no avail. They gave medicines that made her more and more delirious. I pray to God, you may no have to witness what I did. Life had started waning out of her eyes. In a few years, she was left but a husk of the woman I loved. That was all that was left of her, an occasional memory, a touch. One day I found her overdosed on pills. Whether she took her own life or was it an accident, that we may never know. I knew she was in a better place, it was what she must have wanted. I made my peace with it, but the grief never vanished. It would haunt me in ways I would rather not write here.",
    Five: "I was a mess when "+herName+" came into my life. She had a tendency to fix everything broken. I guess she found a fine specimen in me. We would talk hours beneath the stars. It was a mesmerizing theraputic experience. We spent a good couple of years together. I always believed "+herName+" was the one for me. She moved to a foriegn country for studies. We tried to stay in touch but could not. And so it just gradually died, just like that. I dated many women in my life but none came close to her. Maybe my youthful self had idealised her in my head. Whatever the case, I certainly needed more closure than that. Many a times I planned to pay her a visit in the country, but then I didn't want to disrupt whatever life she might have made for herself. Wherever she was, whatever she did, I only hoped she was content."
};

var paragraphFour = {
    One: "Shortly after that, I moved to Venice and made a humble living working a gondola. I didn't ask for much else. A roof over my head and good food was more than enough fo me. I passed my time reading novels and travelling those worlds unknown. But there was a major part of myself that told me something was amiss.",
    Two: "After a few months, I joined the army. The numerous posters told me it was the right thing to do. mayb it was maybe it wasn't, to judge it is not upon me. It was the only thing resembling direction in my life then. It seemed like a good one too. The war to end all wars was a catchy enough title to give a young person the illusion of the price of immortality. I managed to survive the war and they branded me a war hero. It was only then that I realised it was never gonna end. the war to end all wars had been but a hoax coz there were more wars to come. I mocked my younger self to even believe such a notion. I returned to my hometown.",
    Three: "The bots took over soon after. That's all we ever called them; 'the bots'. The were to simply simulate a person and give experience and practice to soldiers, much like the bots in video games. Supposed to be an insulting term you called bad players, a joke. I was taken to one of their slave camps. Surprisingly the living conditions seemed to be more stable than any of their human counterparts had ever managed to achieve. The food was top noche, the homes are more than comfortable. As days passed I began to miss less and less of the old world and enjoyed the welcoming new one. I realised it wasn't even a slave camp; that's just what the humans preffered to call it. There were no rich or poor anymore, maybe that equality scared some people, the fact that  maybe they weren't special or different. Maybe that they were infact all equal.",
    Four: "I soon found Captain Howard, the most convincing man if I had seen one, made me believe that the sea was calling. I joined his crew as a map maker and recorded the exploits we had. It wasn't half as adventurous a life as people imagined. The fantasised version of exploration was breaking apart in my mind piece by piece but I welcomed the new experiences. Even though all weren't good. The most interesting to note down were storms, it would bring out the best and worst of people. After a few years I had my fill of 'adventure' and looked forward to publishing these exploits in those fancy new priting presses. Being an unfantacised version, they did sell a lot of copies. With the profits I bought a little house close to the sea.",
    Five: "Eventually, I ran off to Alaska and found work as a lumberjack in a distant town. It gave me time for my thoughts and myself. I dated some women there but I still felt incomplete. Lumbering trade boomed shortly after and a string of promotions rendered me a significant sum. I started my own lumbering company. This work kept me distracted enough from the other realitiess of life, to push back memories of "+herName+", so much so that I started loving it. Money poured in but then I found I coud run no longer. I sold the company to a competitor for a profit and returned to my roots."
};

var paragraphFive = {
    One: "Such was my life. Now as the darkness approaches near, I've taken to writing. I write what I remember what comes to me. I write down my sorrows, fears and regrets. It helps me come to terms with my actions and progression. Some of these words may be dark, some bright. I do not write to entertain or make someone's day a little less gloomier. My intention is to show the truth of what is. My judgement and perception grows weaker by the day but this I can do. So I will.",
    Two: "A few years passed. Reality as I knew it, had started fading. Light was playing tricks on my mind. I sometimes saw "+herName+" dancing to the melody of leaves. Seasons were changing faster than they should. Ocassionally, ime stood still as I observed. My bones had given way and the pain came and went. I always wished the last thing I saw be blissful. now the difference had started blurring. I was left a mere observer in the grand scheme of things. The light seemed to be stronger with each passing day. I have these last few words left in me.</br></br> I write so that you may see, so you may know.",
    Three: "Idleness had been my enemy. I came to terms with it in the few years I tried to deal with it. I started doing menial jobs that they would give. My body had started to rebel, but I fought on. This one particular day I slipped and factured two bones. I knew then it was over. maybe I could fight idleness and win. But I certainly could not fight time. hence as I lay on my death bed I write to keep myself occupied. Maybe my words can bring some wisdom to your younger selves. I may not have deep preachings but the simple things I have experienced may help you in your path. Good luck to you, dear reader.",
    Four: "Many years passed. I felt I had lived fully, experienced all I had to in this lifetime. I gradually entered the command sequence that exited me out of the simulator. I took my mind some time to adjust to my original reality. The developers should have put in a better transition to adjust to that. Maybe I should write them a feedback mail. As I went to the kitchen and had a glass of water, I wondered if I should enter the next lifetime today itself. That was definitely a ride. One simulation completed, 3124 to go.",
    Five: "The more time I passed by myself, the more time i had to read. The more I read the more I realised how meaningless everything was. I could not leave myself to my thoughts, my body was too weak for anymore work so I read more. Everything seemed to be void of meaning, the human constructs the chaos that reigned over everything visible, the sheer illusion of choice got to me. I have resigned to these feelings and I wish for freedom.</br></br>I leave whatever I own to those who perhaps will question the same things I do. "+herName+" I truly loved you and always will.</br></br>Farewell."
};

var image = {
    One: "url('darkwood.jpg')",
    Two: "url('back2.jpg')",
    Three: "url('back3.jpg')",
    Four: "url('back4.jpg')",
    Five: "url('back5.jpg')",
    Six: "url('back6.jpg')",
    Seven: "url('back7.jpg')",
    Eight: "url('back8.jpg')",
    Nine: "url('darkwood2.jpg')"
}



document.getElementById("paragraphOne").innerHTML = randomProperty(paragraphOne);
document.getElementById("paragraphTwo").innerHTML = randomProperty(paragraphTwo);
document.getElementById("paragraphThree").innerHTML = randomProperty(paragraphThree);
document.getElementById("paragraphFour").innerHTML = randomProperty(paragraphFour);
document.getElementById("paragraphFive").innerHTML = randomProperty(paragraphFive);
document.body.style.background=randomProperty(image);

function resizeText(multiplier) {
    if (document.getElementById("story").style.fontSize == "") {
      document.getElementById("story").style.fontSize = "1.0em";
    }
    document.getElementById("story").style.fontSize = parseFloat(document.getElementById("story").style.fontSize) + (multiplier * 0.1) + "em";
  }
