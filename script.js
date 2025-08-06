const hadithData = [
    { id: 1, heading: "The Best Remembrance", matn: "أَفْضَلُ الذِّكْرِ : لَا إِلَهَ إِلَّا اللَّهُ", translation: "The best remembrance (zikr) is La ilaha illallah.", explanation: "This means saying 'There is no god but Allah' is the most special way to remember Him. It's like the most important secret code for talking to Allah and acknowledging His Oneness.", practicalLesson: "Always remember Allah by saying 'La ilaha illallah' often. It makes your heart happy and strong, and it's the foundation of your faith." },
    { id: 2, heading: "Deeds and Intentions", matn: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ", translation: "The reward of deeds depends upon the intentions.", explanation: "Allah looks at why you do something, not just what you do. If you help someone to make Allah happy, that's what truly counts and earns you reward.", practicalLesson: "Before you do anything good, like sharing your toys or helping with chores, think in your heart: 'I'm doing this for Allah.' Your pure intention makes the action more valuable." },
    { id: 3, heading: "Religion is Sincerity", matn: "الدِّينُ النَّصِيحَةُ", translation: "Religion is sincerity (advising each other).", explanation: "Being a good Muslim means being honest and wanting good for others, and also gently advising them towards what's right. It's about genuine goodwill for the community.", practicalLesson: "Be a true friend by always telling the truth and helping your friends do good things, even if it's hard. Always wish well for others." },
    { id: 4, heading: "Ease of Islam", matn: "إِنَّ الدِّينَ يُسْرُ", translation: "Indeed the religion (Islam) is very easy.", explanation: "Islam is simple and not meant to be difficult or burdensome. Allah makes it easy for us to worship Him and live a good life, with flexibility in its practices.", practicalLesson: "Don't think Islam is too hard! Just try your best to do good things, and Allah will make it easy for you and help you." },
    { id: 5, heading: "The Cool Prayers", matn: "مَنْ صَلَّى الْبَرْدَيْنِ، دَخَلَ الْجَنَّةَ", translation: "He who offers cool prayer (Fajr & Asr) will enter Jannah.", explanation: "Fajr (morning) and Asr (afternoon) prayers are special because they are often done when people are tired or busy. Praying them earns great rewards and shows dedication.", practicalLesson: "Try your best to wake up for Fajr and pray Asr on time every day. It's a special way to earn a high place in Jannah!" },
    { id: 6, heading: "Purity and Faith", matn: "الطُّهُورُ شَطْرُ الْإِيْمَانِ", translation: "Purity is half of Iman (faith).", explanation: "Being clean in your body, clothes, and surroundings is very important in Islam. It shows your faith and love for Allah, as cleanliness is a sign of inner purity.", practicalLesson: "Always keep yourself, your clothes, and your room clean. It makes you closer to Allah and reflects your faith." },
    { id: 7, heading: "Conveying Knowledge", matn: "بَلِّغُوا عَنِّي وَلَوْ آيَةً", translation: "Convey from me even if it is one sentence.", explanation: "This means if you learn something good about Islam, even a small thing like a verse or a Hadith, share it with others to spread the message.", practicalLesson: "If you learn a new dua or a good habit from the Prophet (PBUH), share it with your family and friends! Don't keep good knowledge to yourself." },
    { id: 8, heading: "Prayer in Early Time", matn: "أَفْضَلُ الْأَعْمَالِ الصَّلَاةُ فِي أَوَّلِ وَقْتِهَا", translation: "One of the best deeds is to offer Salat in its early time.", explanation: "Praying as soon as the prayer time begins is better than delaying it. It shows you prioritize your duty to Allah and are eager to worship Him.", practicalLesson: "When you hear the adhan (call to prayer), try to pray right away without waiting. Allah loves those who are prompt in their worship!" },
    { id: 9, heading: "Fasting for Allah", matn: "الصَّوْمُ لِيْ وَأَنَا أَجْزِي بِهِ", translation: "(Allah said): The fasting is for Me, so I will give the reward for it.", explanation: "Fasting is a very personal act of worship between you and Allah. Only Allah truly knows if you are fasting, so He gives a special, immense reward for it.", practicalLesson: "When you fast, remember you are doing it only for Allah, and He will give you amazing and unique rewards for your sincerity!" },
    { id: 10, heading: "Learning and Teaching Quran", matn: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ", translation: "The best among you is the one who learns the Quran and teaches it.", explanation: "Learning the Quran and then helping others learn it too is a very noble act in the sight of Allah. It spreads His divine message.", practicalLesson: "Learn to read the Quran and understand its meaning. Then, help your younger siblings or friends learn it too! Be a source of Quranic knowledge." },
    { id: 11, heading: "Spreading Salam", matn: "أَفْشُوا السَّلَامَ بَيْنَكُمْ", translation: "Spread Salam (greetings) among yourselves.", explanation: "Saying 'Assalamu Alaikum' to others spreads peace, love, and blessings among Muslims, making the community strong and harmonious.", practicalLesson: "Always say 'Assalamu Alaikum' with a smile when you meet other Muslims, even if you don't know them well. It spreads peace." },
    { id: 12, heading: "Fasting as a Shield", matn: "الصَّوْمُ جُنَّةً", translation: "Fasting is a shield.", explanation: "Fasting protects you from sins in this world by controlling your desires, and from the Fire of Hell in the Hereafter.", practicalLesson: "When you fast, remember it's like a shield protecting you from bad things and making you strong against temptations." },
    { id: 13, heading: "Scholars are Heirs of Prophets", matn: "إِنَّ الْعُلَمَاءَ وَرَثَةُ الْأَنْبِيَاءِ", translation: "Indeed the scholars are the heirs of the Prophets.", explanation: "Islamic scholars carry on the knowledge and teachings of the Prophets, guiding people to the right path and preserving the faith.", practicalLesson: "Respect and listen to Islamic teachers and scholars, as they teach us about Allah and His Prophet (PBUH) and guide us in our deen." },
    { id: 14, heading: "Salam Before Speech", matn: "السَّلَامُ قَبْلَ الْكَلَامِ", translation: "Say Salam before you speak.", explanation: "Starting a conversation with 'Assalamu Alaikum' brings blessings, establishes good etiquette, and initiates communication with peace.", practicalLesson: "When you want to talk to someone, always say 'Assalamu Alaikum' first. It's a polite and blessed way to begin any conversation." },
    { id: 15, heading: "Comfort in Prayer", matn: "جُعِلَتْ قُرَّةُ عَيْنِي فِي الصَّلَاةِ", translation: "My comfort (of eyes) has been kept in prayer (Salah).", explanation: "The Prophet Muhammad (PBUH) found his greatest joy, peace, and spiritual refreshment in performing Salah. It was his ultimate comfort.", practicalLesson: "When you pray, try to feel calm and happy, knowing that you are talking to Allah, who loves you and listens to you." },
    { id: 16, heading: "Shirk Leads to Hell", matn: "مَنْ مَاتَ يُشْرِكُ بِاللَّهِ شَيْئًا دَخَلَ النَّارَ", translation: "He who dies associating anything with Allah would enter the Fire of Hell.", explanation: "Shirk (associating partners with Allah) is the gravest sin. It means believing that someone or something else has Allah's power or deserves worship alongside Him.", practicalLesson: "Always remember that Allah is the ONLY God, and only He deserves our worship, prayers, and complete devotion." },
    { id: 17, heading: "Believer as a Mirror", matn: "الْمُؤْمِنُ مِرْآةُ الْمُؤْمِنِ", translation: "A believer is a mirror for his brother (other believer).", explanation: "Just like a mirror shows you what you look like, a true believer helps their brother see their good and bad qualities so they can improve themselves.", practicalLesson: "Be a good friend by helping your Muslim friends become better, by gently pointing out mistakes and celebrating their good deeds." },
    { id: 18, heading: "Charity Extinguishes Sin", matn: "الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ النَّارَ الْمَاءُ", translation: "Charity extinguishes sin as water extinguishes fire.", explanation: "Giving charity (sadaqah) can wipe away your sins, just like water puts out a fire. It's a powerful way to seek forgiveness.", practicalLesson: "If you accidentally do something wrong, try to give some charity (even a little) to help erase that mistake and make Allah happy." },
    { id: 19, heading: "Mercy Begets Mercy", matn: "مَنْ لَا يَرْحَمُ لَا يُرْحَمُ", translation: "The one who does not show mercy will not be shown mercy.", explanation: "Allah is merciful to those who are merciful to His creation. If you are kind and compassionate to others, Allah will be kind to you.", practicalLesson: "Be kind and gentle to everyone – your family, friends, and even animals. Allah loves those who show mercy to His creation." },
    { id: 20, heading: "Backbiter Shall Not Enter Paradise", matn: "لَا يَدْخُلُ الْجَنَّةَ نَمَّامٌ", translation: "Back-biter shall not enter Paradise.", explanation: "Backbiting means talking badly about someone behind their back. It is a serious sin that can keep a person from entering Jannah.", practicalLesson: "Never talk about others behind their backs. If you have something to say, say it kindly to their face or keep quiet." },
    { id: 21, heading: "Silence is Salvation", matn: "مَنْ صَمَتَ نَجَا", translation: "Whoever remained silent is saved.", explanation: "Sometimes, it's better to stay quiet than to speak and say something wrong, hurtful, or that leads to sin. Silence can protect you.", practicalLesson: "Before you speak, think if your words are kind and truthful. If not, it's often best to stay quiet to avoid mistakes." },
    { id: 22, heading: "Patience is Brightness", matn: "الصَّبْرُ ضِيَاءً", translation: "Patience is brightness.", explanation: "Being patient during difficult times is like a light that guides you, illuminates your path, and earns you great rewards from Allah.", practicalLesson: "When things are hard, or you have to wait for something, be patient and trust in Allah. He will make things bright for you." },
    { id: 23, heading: "Father: Door to Paradise", matn: "الْوَالِدُ أَوسَطُ أَبْوَابِ الْجَنَّةِ", translation: "Father is the middle door of Paradise.", explanation: "Being good to your father, and your parents in general, is one of the easiest and most direct ways to enter Jannah.", practicalLesson: "Always listen to your father and treat him with respect and kindness. Being dutiful to parents is a special door to Jannah!" },
    { id: 24, heading: "Muslim Brotherhood", matn: "الْمُسْلِمُ أَخُو الْمُسْلِمِ", translation: "A Muslim is the brother of another Muslim.", explanation: "All Muslims are like one big family; they should care for, support, and help each other in times of need.", practicalLesson: "Treat other Muslims like your own brothers and sisters. Help them, share with them, and be kind to them, for we are one Ummah." },
    { id: 25, heading: "Severing Kinship", matn: "لَا يَدْخُلُ الْجَنَّةَ قَاطِعُ", translation: "The one who severs kinship will not enter Paradise.", explanation: "Maintaining good relationships with your relatives (silat ar-rahim) is very important in Islam. Cutting ties with them without a valid reason is a major sin.", practicalLesson: "Always be good to your family, including your aunts, uncles, and cousins. Visit them and stay in touch to maintain family bonds." },
    { id: 26, heading: "He Who Deceives", matn: "مَن غَشَّ فَلَيْسَ مِنِّي", translation: "He who deceives is not of me.", explanation: "The Prophet Muhammad (PBUH) strongly condemned cheating and dishonesty. A true Muslim is always honest and truthful in all dealings.", practicalLesson: "Always be honest and fair in everything you do, whether playing games, doing your homework, or interacting with others." },
    { id: 27, heading: "Abusing a Muslim", matn: "سِبَابُ الْمُسْلِمِ فَسُوقٌ، وَقِتَالُهُ كُفْرٌ", translation: "Abusing a Muslim is sinful, and fighting him is disbelief.", explanation: "It is a big sin to use bad words or fight with another Muslim. We should always treat each other with respect and avoid conflict.", practicalLesson: "Use good words and never fight with your Muslim brothers and sisters. Be kind, forgiving, and seek peace with them." },
    { id: 28, heading: "World: Believer's Prison", matn: "الدُّنْيَا سِجْنُ الْمُؤْمِنِ", translation: "The world is a prison for the believer.", explanation: "For a believer, this world is like a temporary test or a 'prison' because true comfort and everlasting happiness are only found in Jannah.", practicalLesson: "Don't get too attached to worldly things. Remember that Jannah is our real home and is worth striving for with all our efforts." },
    { id: 29, heading: "Curse on Wrongdoers", matn: "الَا لَعْنَةُ اللَّهِ عَلَى الظَّالِمِينَ", translation: "Behold! The curse of Allah is on the wrongdoers.", explanation: "Allah is displeased with those who commit injustice and harm others. There are severe consequences and Allah's displeasure for their actions.", practicalLesson: "Always be fair and just, and never intentionally hurt or cheat anyone. Allah does not like wrongdoers and their actions." },
    { id: 30, heading: "Every Good Deed is Charity", matn: "كُلُّ مَعْرُوْفِ صَدَقَةً", translation: "Every good deed is charity.", explanation: "You don't just give money as charity. Smiling, helping someone, or being kind are also acts of charity that Allah rewards generously.", practicalLesson: "Even small acts of kindness, like smiling at someone or helping a friend with their books, are considered charity and earn you rewards." },
    { id: 31, heading: "Virtue is Noble Behavior", matn: "الْبِرُّ حُسْنُ الخُلُقِ", translation: "Virtue is noble behavior.", explanation: "Being virtuous means having good manners, being kind, polite, and treating everyone well. It encompasses all excellent qualities.", practicalLesson: "Always try to have the best manners, be respectful to elders, and kind to everyone, just like our beloved Prophet (PBUH)." },
    { id: 32, heading: "Calling to Good", matn: "إِنَّ الدَّالَّ عَلَى الْخَيْرِ كَفَاعِلِهِ", translation: "Whoever calls to good is like the one who does it.", explanation: "If you encourage someone to do a good deed, you get the same reward as if you did it yourself, because you facilitated that good.", practicalLesson: "Encourage your friends and family to do good things, like praying, sharing, or helping others. You'll get rewards for their actions too!" },
    { id: 33, heading: "The Evil Eye", matn: "الْعَيْنُ حَقٌّ", translation: "The evil eye is real.", explanation: "The evil eye is a harmful effect caused by envy or admiration from certain people, which can cause harm to a person or their possessions.", practicalLesson: "When you see something you like or something good happens to you, say 'Masha'Allah' (what Allah has willed) to protect it from any harm." },
    { id: 34, heading: "Bribery is Cursed", matn: "لَعَنَ رَسُولُ اللهِ الرَّاشِيَ وَالْمُرْتَشِيَ", translation: "The Messenger of Allah cursed the briber and the one who takes a bribe.", explanation: "Taking or giving bribes to get something unfairly is a major sin and is strongly forbidden in Islam, as it leads to injustice.", practicalLesson: "Never try to get something unfairly by giving gifts or money to someone in charge. Always be fair and just in all your dealings." },
    { id: 35, heading: "Paradise Surrounded by Hardships", matn: "حُفَّتِ الْجَنَّةُ بِالْمَكَارِهِ", translation: "Paradise is surrounded by hardships.", explanation: "The path to Jannah requires effort, patience, and overcoming challenges and temptations. It's not an easy journey, but the reward is immense.", practicalLesson: "Doing good deeds and following Allah's commands can sometimes be hard, but remember that Jannah is worth all the effort and patience." },
    { id: 36, heading: "Oppression is Darkness", matn: "الظُّلْمُ ظُلُمَاتٌ يَوْمَ الْقِيَامَةِ", translation: "Oppression will be darkness on the Day of Judgment.", explanation: "Treating others unfairly or unjustly will lead to severe consequences and darkness on the Day of Judgment, depriving one of Allah's light.", practicalLesson: "Always be fair and kind to everyone. Never take advantage of others or treat them badly, as it leads to regret on the Day of Judgment." },
    { id: 37, heading: "Modesty is Faith", matn: "الْحَيَاءُ مِنَ الْإِيْمَانِ", translation: "Modesty is a part of faith.", explanation: "Modesty (Haya) means being shy from doing bad things and having good manners. It's a key and beautiful part of being a believer.", practicalLesson: "Be modest in your clothes, speech, and actions. It means being humble and having good behavior in all aspects of your life." },
    { id: 38, heading: "Giving Hand is Better", matn: "الْيَدُ الْعُلْيَا خَيْرٌ مِّنَ الْيَدِ السُّفْلَى", translation: "The upper (giving) hand is better than the lower (receiving) hand.", explanation: "It is better to be the one who gives charity, helps others, and is self-sufficient, than to be the one who receives from others.", practicalLesson: "Try to be a giver, not just a receiver. Help others and share what you have with them whenever you can." },
    { id: 39, heading: "Fear Allah Wherever You Are", matn: "اتَّقِ اللَّهِ حَيْثُ مَا كُنْتَ", translation: "Fear Allah wherever you are.", explanation: "Always be aware of Allah and try to please Him, whether you are alone or with others, and whether you are doing good or facing challenges.", practicalLesson: "Remember that Allah is always watching you, so always try to do good things and avoid bad ones, no matter where you are or who you're with." },
    { id: 40, heading: "Evil Omen is Shirk", matn: "الطَّيَرَةُ مِنَ الشِّرْكِ", translation: "Taking evil omen is from shirk.", explanation: "Believing in superstitions or bad luck based on certain signs (like a black cat or breaking a mirror) is wrong and can be a form of shirk (associating partners with Allah).", practicalLesson: "Don't believe in superstitions or bad luck. Only Allah controls everything, and He decides what happens, so put your trust only in Him." }
];

let currentHadithIndex = 0;

// Get DOM elements
const landingPage = document.getElementById('landing-page');
const hadithPage = document.getElementById('hadith-page');
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-hadith');
const prevButton = document.getElementById('prev-hadith');
const loadingIndicator = document.getElementById('loading-indicator');
const errorMessage = document.getElementById('error-message');

const hadithHeading = document.getElementById('hadith-heading');
const matnUlHadith = document.getElementById('matn-ul-hadith');
const translation = document.getElementById('translation');
const explanation = document.getElementById('explanation');
const practicalLesson = document.getElementById('practical-lesson');

// Event Listeners
startButton.addEventListener('click', () => {
    landingPage.classList.add('hidden');
    hadithPage.classList.remove('hidden');
    loadHadith(0);
});

nextButton.addEventListener('click', () => {
    if (currentHadithIndex < hadithData.length - 1) {
        loadHadith(currentHadithIndex + 1);
    }
});

prevButton.addEventListener('click', () => {
    if (currentHadithIndex > 0) {
        loadHadith(currentHadithIndex - 1);
    }
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (!hadithPage.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') {
            nextButton.click();
        } else if (e.key === 'ArrowLeft') {
            prevButton.click();
        }
    }
});

// Function to load and display Hadith
function loadHadith(index) {
    loadingIndicator.classList.remove('hidden');
    errorMessage.classList.add('hidden');

    setTimeout(() => {
        const hadith = hadithData[index];
        if (hadith) {
            currentHadithIndex = index;
            hadithHeading.textContent = `Hadith ${hadith.id}: ${hadith.heading}`;
            matnUlHadith.textContent = hadith.matn;
            translation.textContent = hadith.translation;
            explanation.textContent = hadith.explanation;
            practicalLesson.textContent = hadith.practicalLesson;

            prevButton.disabled = currentHadithIndex === 0;
            nextButton.disabled = currentHadithIndex === hadithData.length - 1;

            loadingIndicator.classList.add('hidden');
        } else {
            loadingIndicator.classList.add('hidden');
            errorMessage.classList.remove('hidden');
        }
    }, 500);
}