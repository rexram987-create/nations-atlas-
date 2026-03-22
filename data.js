const atlasData = {
  // ==========================================
  // אזור 1: חצי האי ערב (Arabian Peninsula)
  // ==========================================
  arabia: [
    {
      id: 'sa',
      flagUrl: 'https://flagcdn.com/w640/sa.png',
      hebrew: {
        name: 'ערב הסעודית',
        fullName: 'הממלכה הערבית הסעודית',
        yearText: '1932 (איחוד הממלכה)',
        firstLeader: { name: 'המלך עבד אל-עזיז אבן סעוד (מייסד הממלכה)', lifeYears: '1875 – 1953' },
        vexillology: 'דגל ערב הסעודית מורכב מרקע ירוק עמוק, המסמל את דת האסלאם ואת צבעו המועדף של הנביא מוחמד. במרכז הדגל מופיעה "השהאדה" (הכרזת האמונה האסלאמית: "אין אלוה מבלעדי אללה, מוחמד שליח אללה") הכתובה בקליגרפיה ערבית מסוג "ת\'ולות\'". מתחת לכיתוב מופיע חרב בצבע לבן המצביעה שמאלה (כיוון הקריאה בערבית), אשר נוספה לדגל כדי לסמל חומרה בהחלת הצדק, עוצמה צבאית, ואת הניצחונות של בית סעוד. בשל קדושת הכיתוב, חל איסור מוחלט להוריד את הדגל לחצי התורן באות אבל, והדגל מיוצר כך שהכיתוב קריא מימין לשמאל משני צדדיו.',
        etymology: [
          { part: 'אל-ממלכה', meaning: '"הממלכה" - מעיד על שיטת הממשל המונרכית האבסולוטית במדינה.' },
          { part: 'אל-ערביה', meaning: '"הערבית" - מציין את השיוך הגיאוגרפי והאתני של תושבי המדינה לחצי האי ערב.' },
          { part: 'א-סעודיה', meaning: '"הסעודית" - על שם "בית סעוד", משפחת המלוכה השולטת. השם נגזר משמו של סעוד בן מוחמד אבן מוקרין, אבי השושלת מהמאה ה-18. משמעות השם "סעוד" בערבית היא "מזל טוב" או "אושר".' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: 'Saudi Arabia',
        fullName: 'Kingdom of Saudi Arabia',
        yearText: '1932 (Unification of the Kingdom)',
        firstLeader: { name: 'King Abdulaziz Ibn Saud (Founder of the Kingdom)', lifeYears: '1875 – 1953' },
        vexillology: 'The flag of Saudi Arabia features a deep green background, symbolizing Islam and the favorite color of the Prophet Muhammad. In the center is the "Shahada" (the Islamic declaration of faith: "There is no deity but Allah, Muhammad is the Messenger of Allah") written in Thuluth Arabic calligraphy. Below the inscription is a white sword pointing left (the direction of reading Arabic), added to symbolize strictness in applying justice, military strength, and the victories of the House of Saud. Due to the sacredness of the text, it is strictly forbidden to lower the flag to half-mast during mourning, and it is manufactured so the text is legible from right to left on both sides.',
        etymology: [
          { part: 'Al-Mamlaka', meaning: '"The Kingdom" - indicates the absolute monarchical system of government in the country.' },
          { part: 'Al-Arabiya', meaning: '"The Arab" - denotes the geographical and ethnic affiliation of the country\'s inhabitants to the Arabian Peninsula.' },
          { part: 'As-Saudiya', meaning: '"Saudi" - named after the "House of Saud", the ruling royal family. The name is derived from Saud bin Muhammad Al Muqrin, the patriarch of the dynasty from the 18th century. The meaning of the name "Saud" in Arabic is "good fortune" or "happiness".' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      }
    },
    {
      id: 'ye',
      flagUrl: 'https://flagcdn.com/w640/ye.png',
      hebrew: {
        name: 'תימן',
        fullName: 'הרפובליקה של תימן',
        yearText: '1990 (איחוד צפון ודרום תימן)',
        firstLeader: { name: 'הנשיא עלי עבדאללה צאלח (מנהיג האיחוד)', lifeYears: '1947 – 2017' },
        vexillology: 'דגל תימן אומץ עם איחוד המדינה ב-22 במאי 1990. הוא מורכב משלושה פסים אופקיים בצבעי הלאומיות הכלל-ערבית (פאן-ערביים). הפס האדום העליון מסמל את דם המרטירים שניגר למען אחדות ועצמאות המדינה; הפס הלבן האמצעי מסמל עתיד מזהיר, שלום וטוהר; והפס השחור התחתון מסמל את העבר החשוך של המדינה, תקופת הפיצול, וההתגברות על המכשולים ההיסטוריים.',
        etymology: [
          { part: 'אל-ימן', meaning: 'מקור השם שנוי במחלוקת היסטורית אך מבוסס על השורש הערבי י-מ-ן (Y-M-N).' },
          { part: 'פירוש גיאוגרפי (ימין)', meaning: 'המשמעות הנפוצה ביותר היא "ימין". בימי קדם, כאשר אדם עמד בחצי האי ערב ופניו לכיוון מזרח (כיוון זריחת השמש), אזור תימן נמצא בצד ימין (דרום), בעוד סוריה (א-שאם) נמצאת משמאל (צפון).' },
          { part: 'פירוש ברכה (יומן/Yumn)', meaning: 'פירוש נוסף נגזר מהמילה "יומן" שמשמעותה שגשוג, ברכה ואושר. רומאים קראו לאזור "Arabia Felix" (ערב המאושרת/הפוריה) בשל אדמתה הפוריה לעומת המדבר הצחיח בשאר חצי האי.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: 'Yemen',
        fullName: 'Republic of Yemen',
        yearText: '1990 (Unification of North and South Yemen)',
        firstLeader: { name: 'President Ali Abdullah Saleh (Leader of the Unification)', lifeYears: '1947 – 2017' },
        vexillology: 'The flag of Yemen was adopted with the unification of the country on May 22, 1990. It consists of three horizontal stripes in the Pan-Arab colors. The upper red stripe symbolizes the blood of martyrs shed for the unity and independence of the state; the middle white stripe symbolizes a bright future, peace, and purity; and the lower black stripe symbolizes the dark past of the state, the period of division, and overcoming historical obstacles.',
        etymology: [
          { part: 'Al-Yaman', meaning: 'The origin of the name is historically disputed but is based on the Arabic root Y-M-N.' },
          { part: 'Geographical Meaning (Right)', meaning: 'The most common meaning is "right". In ancient times, when a person stood in the Arabian Peninsula facing east (the direction of the sunrise), the region of Yemen was on the right side (south), while Syria (Al-Sham) was on the left (north).' },
          { part: 'Blessing Meaning (Yumn)', meaning: 'Another interpretation is derived from the word "Yumn", which means prosperity, blessing, and happiness. Romans called the area "Arabia Felix" (Happy/Fertile Arabia) due to its fertile land compared to the arid desert in the rest of the peninsula.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      }
    },
    {
      id: 'om',
      flagUrl: 'https://flagcdn.com/w640/om.png',
      hebrew: {
        name: 'עומאן',
        fullName: 'סולטנות עומאן',
        yearText: '1650 (גירוש הפורטוגלים) / 1970 (כינון המדינה המודרנית)',
        firstLeader: { name: 'הסולטאן קאבוס בן סעיד (מכונן עומאן המודרנית)', lifeYears: '1940 – 2020' },
        vexillology: 'דגל עומאן אומץ רשמית ב-1970. הוא מורכב משלושה פסים אופקיים (לבן, אדום וירוק) ופס אנכי אדום בצד התורן. הצבע הלבן מסמל שלום ושגשוג, ומייצג היסטורית את האימאמות של עומאן; האדום מסמל את הקרבות שניהל העם העומאני נגד פולשים זרים ואת הדם שנשפך, ומייצג את סולטנות מוסקט; הירוק מסמל את "ההר הירוק" (ג\'בל אח\'דר) ואת הפוריות של הארץ. בקנטון (הפינה השמאלית העליונה) מופיע סמל המדינה: פגיון חנג\'ר מסורתי מונח מעל שתי חרבות מוצלבות, המייצג את כלי הנשק ההיסטוריים ואת גאוות העם.',
        etymology: [
          { part: 'עומאן', meaning: 'מקור השם העתיק לוט בערפל, וישנן מספר סברות מרכזיות המוסברות להלן.' },
          { part: 'מקור אנושי / היסטורי', meaning: 'יש המייחסים את השם לדמות היסטורית בשם עומאן בן איברהים אל-ח\'ליל, או עומאן בן סובחאן. אחרים מקשרים זאת לשבט "אזד" שהיגר לאזור מתימן.' },
          { part: 'מקור בלשני', meaning: 'בשפה הערבית, ישנה סברה שהשם נגזר מהפועל שמשמעותו "להתיישב במקום" או להישאר במקום מנוחה ושלום.' },
          { part: 'מקור גיאוגרפי/קלאסי', meaning: 'השם הוזכר כבר בכתביו של פליניוס הזקן במאה ה-1 לספירה כ-"Omana", שם של עיר או אזור מסחר חשוב במפרץ.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: 'Oman',
        fullName: 'Sultanate of Oman',
        yearText: '1650 (Expulsion of the Portuguese) / 1970 (Modern State)',
        firstLeader: { name: 'Sultan Qaboos bin Said (Founder of Modern Oman)', lifeYears: '1940 – 2020' },
        vexillology: 'The flag of Oman was officially adopted in 1970. It consists of three horizontal stripes (white, red, and green) and a vertical red stripe at the hoist. White symbolizes peace and prosperity, historically representing the Imamate of Oman; red symbolizes the battles fought by the Omani people against foreign invaders and the blood shed, representing the Sultanate of Muscat; green represents the "Green Mountain" (Jebel Akhdar) and the fertility of the land. In the canton (upper left corner) is the national emblem: a traditional Khanjar dagger superimposed on two crossed swords, representing historical weapons and national pride.',
        etymology: [
          { part: 'Oman', meaning: 'The origin of the ancient name is shrouded in mystery, with several main theories explained below.' },
          { part: 'Human/Historical Origin', meaning: 'Some attribute the name to a historical figure named Oman bin Ibrahim al-Khalil, or Oman bin Subhan. Others link it to the "Azd" tribe that migrated to the area from Yemen.' },
          { part: 'Linguistic Origin', meaning: 'In Arabic, there is a theory that the name is derived from a verb meaning "to settle in a place" or to remain in a place of rest and peace.' },
          { part: 'Geographical/Classical Origin', meaning: 'The name was mentioned in the writings of Pliny the Elder in the 1st century AD as "Omana", the name of an important trading city or region in the Gulf.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      }
    },
    {
      id: 'ae',
      flagUrl: 'https://flagcdn.com/w640/ae.png',
      hebrew: {
        name: 'איחוד האמירויות הערביות',
        fullName: 'איחוד האמירויות הערביות',
        yearText: '1971 (הקמת האיחוד)',
        firstLeader: { name: 'השייח\' זאיד בן סולטאן אל נהיאן (מייסד האיחוד)', lifeYears: '1918 – 2004' },
        vexillology: 'הדגל עוצב על ידי נער בן 19 (עבדאללה מוחמד אל-מעינה) ואומץ ב-2 בדצמבר 1971. הדגל משתמש בצבעי הלאומיות הכלל-ערבית. הוא מורכב מפס אנכי אדום בצד התורן, ושלושה פסים אופקיים (ירוק, לבן, שחור). האדום מסמל גבורה, אומץ לב, כוח וחוזק; הירוק מסמל תקווה, שמחה, אהבה, ופריחה חקלאית; הלבן מסמל שלום, טוהר וכנות; והשחור (בניגוד לתפיסה השגויה של נפט) מסמל את תבוסת האויבים וחוזק המוח במלחמה.',
        etymology: [
          { part: 'איחוד', meaning: '"דאוולת אל-מותחידה" (המדינה המאוחדת) - מציין את הפדרציה וההסכם הפוליטי שאיחד את 7 האמירויות העצמאיות לישות מדינית אחת.' },
          { part: 'האמירויות', meaning: 'צורת הרבים של "אמירות" (Imarah). אמירות היא טריטוריה הנשלטת על ידי "אמיר" (נסיך או מפקד). המילה "אמיר" עצמה נגזרת מהשורש א-מ-ר שמשמעותו לצוות, לפקד או להנהיג.' },
          { part: 'הערביות', meaning: 'התייחסות לזהות האתנית, התרבותית והשפה של האוכלוסייה, ולמיקום הגיאוגרפי בחצי האי ערב.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: 'United Arab Emirates',
        fullName: 'United Arab Emirates',
        yearText: '1971 (Formation of the Union)',
        firstLeader: { name: 'Sheikh Zayed bin Sultan Al Nahyan (Founder of the Union)', lifeYears: '1918 – 2004' },
        vexillology: 'The flag was designed by a 19-year-old boy (Abdullah Mohammed Al Maainah) and adopted on December 2, 1971. The flag uses the Pan-Arab colors. It consists of a vertical red stripe at the hoist, and three horizontal stripes (green, white, black). Red symbolizes bravery, courage, strength, and power; green symbolizes hope, joy, love, and agricultural prosperity; white symbolizes peace, purity, and honesty; and black (contrary to the misconception of oil) symbolizes the defeat of enemies and strength of mind in war.',
        etymology: [
          { part: 'United', meaning: '"Dawlat Al-Muttahida" (The United State) - denotes the federation and political agreement that united the 7 independent emirates into a single political entity.' },
          { part: 'Emirates', meaning: 'The plural of "Emirate" (Imarah). An emirate is a territory ruled by an "Emir" (prince or commander). The word "Emir" itself is derived from the Arabic root A-M-R, which means to command or to lead.' },
          { part: 'Arab', meaning: 'A reference to the ethnic and cultural identity and language of the population, and their geographical location in the Arabian Peninsula.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      }
    },
    {
      id: 'kw',
      flagUrl: 'https://flagcdn.com/w640/kw.png',
      hebrew: {
        name: 'כווית',
        fullName: 'מדינת כווית',
        yearText: '1961 (עצמאות מבריטניה)',
        firstLeader: { name: 'השייח\' עבדאללה א-סאלם א-סבאח (אמיר העצמאות)', lifeYears: '1895 – 1965' },
        vexillology: 'הדגל אומץ עם קבלת העצמאות ב-1961. צורתו ייחודית וכוללת טרפז שחור צמוד לתורן, יחד עם שלושה פסים אופקיים: ירוק, לבן ואדום. הצבעים מבוססים על פואמה מפורסמת של המשורר הערבי ספי א-דין אל-חילי מהמאה ה-14: "לבנים הם מעשינו (טוהר ושלום), שחורים הם שדות הקרב שלנו (תבוסת האויב), ירוקים הם שטחי המרעה שלנו (אדמה פוריה), ואדומות הן חרבותינו (דם האויבים בקרב)".',
        etymology: [
          { part: 'אל-כווית', meaning: 'השם הוא צורת הקטנה (דימינוטיב) של המילה הערבית "כות" (كوت - Kut).' },
          { part: 'משמעות כות', meaning: 'המילה "כות" מתייחסת למבצר, מצודה או בית מבוצר שנבנה בקרבת מקור מים. בניית המבצר סיפקה הגנה ומקום אגירת אספקה.' },
          { part: 'הקשר היסטורי', meaning: 'השם מתייחס למצודה קטנה שנבנתה באזור במאה ה-17 על ידי בני שבט באני ח\'אלד, סביבה התפתחה עיר המדינה שמהווה היום את כווית.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: 'Kuwait',
        fullName: 'State of Kuwait',
        yearText: '1961 (Independence from Britain)',
        firstLeader: { name: 'Sheikh Abdullah Al-Salim Al-Sabah (Emir of Independence)', lifeYears: '1895 – 1965' },
        vexillology: 'The flag was adopted upon gaining independence in 1961. Its shape is unique, featuring a black trapezoid next to the hoist, along with three horizontal stripes: green, white, and red. The colors are based on a famous poem by the 14th-century Arab poet Safi al-Din al-Hilli: "White are our deeds (purity and peace), black are our battlefields (defeat of the enemy), green are our pastures (fertile land), and red are our swords (blood of enemies in battle).',
        etymology: [
          { part: 'Al-Kuwait', meaning: 'The name is a diminutive form of the Arabic word "Kut" (كوت).' },
          { part: 'Meaning of Kut', meaning: 'The word "Kut" refers to a fortress, citadel, or fortified house built near a water source. Building the fortress provided protection and a place to store supplies.' },
          { part: 'Historical Context', meaning: 'The name refers to a small fortress built in the area in the 17th century by the Bani Khalid tribe, around which the city-state that is today Kuwait developed.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      }
    },
    {
      id: 'bh',
      flagUrl: 'https://flagcdn.com/w640/bh.png',
      hebrew: {
        name: 'בחריין',
        fullName: 'ממלכת בחריין',
        yearText: '1971 (עצמאות מבריטניה)',
        firstLeader: { name: 'האמיר עיסא בן סלמאן אל ח\'ליפה (אמיר העצמאות)', lifeYears: '1933 – 1999' },
        vexillology: 'דגל בחריין מורכב מפס לבן בצד התורן ושטח אדום נרחב המופרדים על ידי קו משונן (זיגזג) בעל חמישה משולשים לבנים. הצבע האדום הוא צבעם המסורתי של מדינות המפרץ, המיוחס היסטורית לכת הח\'וארג\' האסלאמית. הפס הלבן הוסף במאה ה-19 כסמל ל"הסכמי השלום" (Truce) שנחתמו עם בריטניה (ומכאן הכינוי ההיסטורי "חוף הפיראטים" שהפך ל"חוף שביתת הנשק"). חמשת המשולשים הלבנים מייצגים את חמשת עמודי האסלאם. צורת הזיגזג שונתה לאורך השנים (בעבר היו יותר משולשים), ונקבעה רשמית ל-5 משולשים בשנת 2002.',
        etymology: [
          { part: 'אל', meaning: 'ה\' הידיעה בשפה הערבית.' },
          { part: 'בחריין', meaning: 'צורת הזוגי (Dual) של המילה הערבית "בחר" (بحر) שמשמעותה ים. כלומר: "שני הימים".' },
          { part: 'מקור "שני הימים"', meaning: 'ישנם מספר הסברים. המקובל ביותר והגיאולוגי מתייחס לתופעת טבע ייחודית באזור: נביעות מים מתוקים (אקוויפרים תת-קרקעיים) הנובעות מקרקעית הים אל תוך מי הים המלוחים של המפרץ. הסבר חלופי מתייחס לשני המפרצים המקיפים את האי המרכזי.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: 'Bahrain',
        fullName: 'Kingdom of Bahrain',
        yearText: '1971 (Independence from Britain)',
        firstLeader: { name: 'Emir Isa bin Salman Al Khalifa (Emir of Independence)', lifeYears: '1933 – 1999' },
        vexillology: 'The flag of Bahrain consists of a white band on the hoist side and a large red area separated by a zigzag line with five white triangles. Red is the traditional color of the Gulf states, historically attributed to the Islamic Kharijite sect. The white band was added in the 19th century as a symbol of the "Truces" signed with Britain (hence the historical nickname "Pirate Coast" which became the "Trucial Coast"). The five white triangles represent the Five Pillars of Islam. The zigzag shape has changed over the years (there used to be more triangles), and was officially set to 5 triangles in 2002.',
        etymology: [
          { part: 'Al', meaning: 'The definite article "The" in the Arabic language.' },
          { part: 'Bahrain', meaning: 'The dual form of the Arabic word "Bahr" (بحر) which means sea. Therefore: "The Two Seas".' },
          { part: 'Origin of "Two Seas"', meaning: 'There are several explanations. The most accepted and geological one refers to a unique natural phenomenon in the area: freshwater springs (underground aquifers) erupting from the seabed into the salty seawater of the Persian Gulf. An alternative explanation refers to the two gulfs surrounding the main island.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      }
    },
    {
      id: 'qa',
      flagUrl: 'https://flagcdn.com/w640/qa.png',
      hebrew: {
        name: 'קטר',
        fullName: 'מדינת קטר (Qatar)',
        yearText: '1971 (עצמאות מבריטניה)',
        firstLeader: { name: 'השייח\' אחמד בן עלי אל ת\'אני (אמיר העצמאות)', lifeYears: '1922 – 1977' },
        vexillology: 'דגלה של קטר הוא הדגל הלאומי היחיד בעולם שרוחבו גדול ביותר מפי שניים מגובהו (יחס של 11:28). הדגל מורכב מפס לבן בצד התורן, ושטח בצבע ערמון (Maroon) מופרד על ידי קו משונן בעל 9 חודים. 9 החודים מסמלים את הכללתה של קטר בתור "האמירות התשיעית" במדינות המפרץ שחתמו על ההסכם עם בריטניה (1916). צבע הערמון, המכונה "קטר רד", הינו ייחודי. היסטורית הוא נבע משימוש בצבע סגול-אדום שהופק מרכיכות ימיות באזור, או מתופעה בה דגלים שהיו צבועים באדום מסורתי דהו וקיבלו גוון חום-ערמוני בשל חשיפה ארוכה לשמש הקופחת של המדבר, וקטר החליטה לאמץ גוון זה באופן רשמי.',
        etymology: [
          { part: 'קטר', meaning: 'מקור השם נטוע עמוק בעת העתיקה והתפתח בשפות שונות.' },
          { part: 'רקע קלאסי ומפות עתיקות', meaning: 'השם מופיע לראשונה במפותיו של הגיאוגרף הרומי-יווני תלמי (Ptolemy) מהמאה ה-2 לספירה. תלמי ציין עיירה בשם "קטרה" (Catara) או "קטאראי" (Catharrei) בחצי האי. משערים שהכוונה הייתה לעיר ההיסטורית החשובה זובארה, שהיוותה מרכז סחר מרכזי.' },
          { part: 'מקור לשוני ושורשים', meaning: 'מבחינה אטימולוגית-ערבית, יש המקשרים את השם לשורש ק-ט-ר (q-t-r) שמשמעותו טפטוף, נזילה של מים, או הוצאת קטורת/עשן. ייתכן שהשם ניתן בעקבות כמות מסוימת של בארות מים או גשמים באזור יחסית לסביבה המדברית החריבה, או בעקבות סחר בקטורת.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: 'Qatar',
        fullName: 'State of Qatar',
        yearText: '1971 (Independence from Britain)',
        firstLeader: { name: 'Sheikh Ahmad bin Ali Al Thani (Emir of Independence)', lifeYears: '1922 – 1977' },
        vexillology: 'The flag of Qatar is the only national flag in the world with a width more than twice its height (a ratio of 11:28). The flag consists of a white band on the hoist side, and a maroon area separated by a serrated line with 9 points. The 9 points signify Qatar\'s inclusion as the "ninth emirate" of the Gulf states that signed a treaty with Britain in 1916. The maroon color, known as "Qatar Red", is unique. Historically, it originated from the use of a purple-red dye extracted from marine mollusks in the area, or from a phenomenon where flags traditionally dyed red faded to a brownish-maroon shade due to long exposure to the scorching desert sun, and Qatar decided to officially adopt this shade.',
        etymology: [
          { part: 'Qatar', meaning: 'The origin of the name is deeply rooted in antiquity and evolved in different languages.' },
          { part: 'Classical Background', meaning: 'The name first appears in the maps of the Greco-Roman geographer Ptolemy in the 2nd century AD. He noted a town called "Catara" or "Catharrei" in the peninsula. It is believed this referred to the important historical city of Zubarah, which was a major trading center.' },
          { part: 'Linguistic Roots', meaning: 'From an Arabic-etymological perspective, some link the name to the root Q-T-R which means dripping, trickling of water, or the emission of incense/smoke. The name might have been given due to a certain number of water wells or rainfall in the area relative to the arid desert surroundings, or due to the incense trade.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      }
    }
  ],

  // ==========================================
  // אזור 2: המזרח התיכון (Middle East)
  // ==========================================
  middleEast: [
    {
      id: 'eg',
      flagUrl: 'https://i.postimg.cc/CRsnLNqJ/egypt.png',
      hebrew: {
        name: 'מצרים',
        fullName: 'רפובליקת מצרים הערבית',
        yearText: '1922 (עצמאות) / 1952 (הקמת הרפובליקה)',
        firstLeader: { name: 'מוחמד נגיב (הנשיא הראשון של הרפובליקה)', lifeYears: '1901 – 1984' },
        vexillology: 'דגל מצרים הנוכחי אומץ ב-1984. הוא מורכב משלושה פסים אופקיים בצבעי השחרור הערבי (אדום, לבן ושחור), במרכזם "עיט צלאח א-דין" בצבע זהב. הצבע האדום מסמל את מאבקה של מצרים לעצמאות ואת דם החללים שנשפך. הלבן מסמל את עתידה המזהיר של האומה והשאיפה לשלום, ואילו השחור מסמל את תקופת העבר החשוכה של הדיכוי והכיבוש הזר (הבריטי). במרכז הפס הלבן ניצב העיט, סמל לעוצמה, כוח וריבונות, אשר מחזיק במגילה עליה כתוב בערבית שם המדינה: "רפובליקת מצרים הערבית".',
        etymology: [
          { part: 'מִצְרַיִם (מִצְר / Misr)', meaning: 'מקור השם השמי נגזר מהשורש מ-צ-ר. משמעותו המקורית היא "מצר", "גבול", או "מקום צר". השם מתייחס ככל הנראה לרצועת האדמה הצרה והפוריה שמשני צידי נהר הנילוס, או למיקומה כגבול בין יבשות.' },
          { part: 'אג\'יפט (Egypt)', meaning: 'השם הלועזי נגזר מהמילה היוונית "Aigyptos", אשר מקורה בשם המצרי העתיק "Hwt-ka-Ptah" (משכן רוחו של האל פתח) – שמה של עיר הבירה העתיקה ממפיס.' },
          { part: 'קֶמֶט (Kemet)', meaning: 'השם המקורי שבו קראו המצרים הקדמונים לארצם. הפירוש הוא "האדמה השחורה", כהתייחסות לאדמת הסחף הכהה והפוריה שהותיר הנילוס לאחר הצפותיו, בניגוד ל"דשרט" (האדמה האדומה) שסימלה את המדבר העקר.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: '', fullName: '', yearText: '', firstLeader: { name: '', lifeYears: '' }, vexillology: '', etymology: [], extendedHistory: '', leaderEtymology: ''
      }
    },
    {
      id: 'jo',
      flagUrl: 'https://i.postimg.cc/cvBt4mnX/jordqn.png',
      hebrew: {
        name: 'ירדן',
        fullName: 'הממלכה הירדנית ההאשמית',
        yearText: '1946 (עצמאות מבריטניה)',
        firstLeader: { name: 'המלך עבדאללה הראשון (מייסד הממלכה)', lifeYears: '1882 – 1951' },
        vexillology: 'דגל ירדן מבוסס על דגל "המרד הערבי הגדול" כנגד האימפריה העות\'מאנית. הוא מורכב משלושה פסים אופקיים המייצגים את חליפויות האסלאם ההיסטוריות: הפס השחור מייצג את החליפות העבאסית, הלבן את החליפות האומיית, והירוק את החליפות הפאטמית. המשולש האדום בצד התורן מייצג את השושלת ההאשמית השלטת ואת המרד הערבי. במרכז המשולש האדום מופיע כוכב לבן בעל שבעה קודקודים. הכוכב מסמל את שבעת הפסוקים של סורת "אל-פאתחה" (הסורה הפותחת את הקוראן), וכן את האחדות של העמים הערביים.',
        etymology: [
          { part: 'ירדן (Jordan)', meaning: 'המדינה קרויה על שמו של נהר הירדן (עבר הירדן המזרחי), המהווה את גבולה המערבי.' },
          { part: 'מקור השם השמי', meaning: 'שם הנהר נגזר מהשורש השמי י-ר-ד. משמעותו היא "לרדת" או "לזרום מטה", מה שמשקף נאמנה את הטופוגרפיה של הנהר הצונח בחדות מהר החרמון ועד לנקודה הנמוכה בעולם בים המלח.' },
          { part: 'ההאשמית', meaning: 'מתייחס למשפחת המלוכה השלטת, השושלת ההאשמית. המשפחה מייחסת את שושלת היוחסין שלה להאשם אבן עבד מנאף, שהיה סבא-רבא של הנביא מוחמד, מייסד האסלאם.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: '', fullName: '', yearText: '', firstLeader: { name: '', lifeYears: '' }, vexillology: '', etymology: [], extendedHistory: '', leaderEtymology: ''
      }
    },
    {
      id: 'sy',
      flagUrl: 'https://i.postimg.cc/v4txHzVv/syria.webp',
      hebrew: {
        name: 'סוריה',
        fullName: 'הרפובליקה הערבית הסורית',
        yearText: '1946 (עצמאות מצרפת)',
        firstLeader: { name: 'שוכרי אל-קוותלי (נשיא סוריה העצמאית)', lifeYears: '1891 – 1967' },
        vexillology: 'דגל סוריה הנוכחי הונף לראשונה ב-1958 עם הקמת "הרפובליקה הערבית המאוחדת" (איחוד פוליטי קצר ימים עם מצרים). הדגל עושה שימוש בצבעי הלאומיות הכלל-ערבית (אדום, לבן ושחור). האדום מסמל את דם הקדושים המעונים ואת ההקרבה למען חירות האומה; הלבן מסמל את החליפות האומיית (שבירתה הייתה בדמשק) ואת עתידה הבהיר של המדינה; והשחור מסמל את החליפות העבאסית ואת ימי החושך של הדיכוי. שני הכוכבים הירוקים במרכז סימלו במקור את שתי המדינות החברות באיחוד (מצרים וסוריה), וכיום הם מייצגים את המחויבות הסורית לאחדות ערבית, כאשר הצבע הירוק מייצג את האסלאם והחליפות הפאטמית.',
        etymology: [
          { part: 'סוּרְיָה (Syria)', meaning: 'השם נגזר מהשפה היוונית העתיקה שהגדירה את כל אזור הלבנט.' },
          { part: 'קשר היסטורי לאשור', meaning: 'אטימולוגים וחוקרים מסכימים כיום כי "סוריה" היא למעשה שיבוש או קיצור של המילה "אשור" (Assyria), האימפריה העתיקה ששלטה באזור. היוונים השמיטו את ה-א\' התחילית. חפירות ארכיאולוגיות בטורקיה אישרו כי בכתובות דו-לשוניות, המילה הלווית "סורה" תורגמה כ"אשור".' },
          { part: 'אַ-שָּׁאם (Al-Sham)', meaning: 'שמו הערבי המסורתי של האזור. משמעות השורש היא "שמאל" או "צפון". זאת משום שאדם העומד בחצי האי ערב (החיג\'אז) כשפניו אל עבר זריחת השמש במזרח, ימצא את אזור סוריה בצד שמאל (צפון), בעוד שתימן תמצא מימינו.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: '', fullName: '', yearText: '', firstLeader: { name: '', lifeYears: '' }, vexillology: '', etymology: [], extendedHistory: '', leaderEtymology: ''
      }
    },
    {
      id: 'lb',
      flagUrl: 'https://i.postimg.cc/XrkB78CL/lebanon.webp',
      hebrew: {
        name: 'לבנון',
        fullName: 'הרפובליקה הלבנונית',
        yearText: '1943 (עצמאות מצרפת)',
        firstLeader: { name: 'בשארה אל-ח\'ורי (הנשיא הראשון)', lifeYears: '1890 – 1964' },
        vexillology: 'דגל לבנון אומץ עם קבלת העצמאות ב-1943. הוא מורכב משלושה פסים אופקיים (אדום, לבן, אדום), כאשר הפס הלבן המרכזי רחב פי שניים מכל פס אדום (יחס הידוע כ"פס ספרדי"). במרכז הפס הלבן מתנוסס ארז הלבנון בצבע ירוק, כאשר על פי החוק הוא חייב לגעת בשני הפסים האדומים. הפסים האדומים מסמלים את דם המרטירים שניגר בהגנה על האומה מפני פולשים זרים לאורך ההיסטוריה. הפס הלבן מסמל את השלג המכסה את פסגות הרי הלבנון, המייצג טוהר ושלום. הארז (Cedrus libani) הוא הסמל ההיסטורי והעתיק ביותר של האזור, המייצג קדושה, חוסן, נצחיות וכוח התמודדות מול סערות.',
        etymology: [
          { part: 'לְבָנוֹן (Lebanon)', meaning: 'מקור השם טמון בשורש השמי העתיק ל-ב-ן (L-B-N), שמשמעותו היא הצבע "לבן".' },
          { part: 'משמעות גיאוגרפית', meaning: 'השם מתייחס ישירות לפסגות הגבוהות של רכס "הר הלבנון", המושלגות ומכוסות לבן בחלקים נרחבים של השנה. מראה זה של הרים מושלגים היה נדיר ובולט מאוד בנוף של המזרח התיכון החם, ולכן העניק לאזור כולו את שמו.' },
          { part: 'היסטוריה קדומה', meaning: 'שם זה הוא אחד משמות המדינות העתיקים ביותר בעולם שנותרו ללא שינוי לאורך אלפי שנים. הוא מופיע באפוס השומרי "עלילות גילגמש", בכתבים מצריים עתיקים, וכמובן פעמים רבות מאוד בתנ"ך היהודי (למשל: "כְּבוֹד הַלְּבָנוֹן נִתַּן לָהּ").' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: '', fullName: '', yearText: '', firstLeader: { name: '', lifeYears: '' }, vexillology: '', etymology: [], extendedHistory: '', leaderEtymology: ''
      }
    },
    {
      id: 'iq',
      flagUrl: 'https://i.postimg.cc/PCQvr4wQ/iraq.webp',
      hebrew: {
        name: 'עיראק',
        fullName: 'רפובליקת עיראק',
        yearText: '1932 (עצמאות מבריטניה)',
        firstLeader: { name: 'המלך פייסל הראשון (מלך עיראק המודרנית)', lifeYears: '1885 – 1933' },
        vexillology: 'דגל עיראק עבר שינויים רבים לאורך ההיסטוריה המודרנית. הגרסה הנוכחית (שאומצה סופית ב-2008) מורכבת משלושת פסי הלאומיות הערבית (אדום, לבן, שחור). האדום מסמל אומץ לב ודם הלוחמים, הלבן מסמל נדיבות, טוהר ואצילות, והשחור מסמל את הניצחונות ההיסטוריים של האסלאם והחליפות העבאסית. במרכז הפס הלבן כתוב "התכביר" האסלאמי ("אללה אכבר" - האל הוא הגדול מכולם) בצבע ירוק (צבע האסלאם), בכתב כופי מסורתי ועתיק. בעבר היו בדגל שלושה כוכבים ירוקים (שסימלו אחדות, חירות וסוציאליזם בתקופת מפלגת הבעת\'), אך הם הוסרו כדי להתנתק משלטונו של סדאם חוסיין.',
        etymology: [
          { part: 'עיראק (Iraq)', meaning: 'שם ערבי הנמצא בשימוש רציף מאז המאה ה-6 לספירה לכל הפחות.' },
          { part: 'מקור ארמי/שומרי', meaning: 'הדעה המחקרית הרווחת ביותר היא שהשם גלגול של העיר השומרית העתיקה והאגדית "ארך" (Uruk, המוזכרת גם במקרא), שהייתה מהערים הראשונות בהיסטוריה האנושית באזור מסופוטמיה.' },
          { part: 'פירוש מילולי ערבי', meaning: 'בשפה הערבית, המילה "עיראק" יכולה להיות מתורגמת כ"חוף", "גדה", או "קצה". הפירוש מתייחס למיקומה הגיאוגרפי של הארץ על גדות הנהרות הגדולים, החידקל והפרת, או כקצה הגבול של המדבר הערבי הגדול בו נפגשת האדמה עם אזור פורה. פירוש נוסף בערבית מתייחס ל"שורשים עמוקים", כרמז לאדמתה הפוריה.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: '', fullName: '', yearText: '', firstLeader: { name: '', lifeYears: '' }, vexillology: '', etymology: [], extendedHistory: '', leaderEtymology: ''
      }
    },
    {
      id: 'tr',
      flagUrl: 'https://i.postimg.cc/pmJ5XZFf/turkey.webp',
      hebrew: {
        name: 'טורקיה',
        fullName: 'רפובליקת טורקיה (Türkiye)',
        yearText: '1923 (הקמת הרפובליקה על חורבות האימפריה)',
        firstLeader: { name: 'מוסטפא כמאל אטאטורק (אבי האומה ומייסד הרפובליקה)', lifeYears: '1881 – 1938' },
        vexillology: 'הדגל הטורקי, המכונה בשפה המקומית "אל באיראק" (Al Bayrak - הדגל האדום), מורכב מרקע אדום חזק שעליו מוטבעים סהר וכוכב בעל חמישה קודקודים בצבע לבן. הצבע האדום מסמל היסטורית את דמם של חיילי הצבא הטורקי שנפלו בקרבות, במיוחד במהלך מלחמת העצמאות הטורקית. הסהר והכוכב הם סמלים עתיקים של עמי הערבות הטורקיים שאומצו בהמשך כסמל מובהק של דת האסלאם והאימפריה העות\'מאנית. על פי אגדה טורקית מפורסמת ומכוננת, עיצוב הדגל נולד כאשר השתקפות של חצי סהר וכוכב הופיעה בתוך שלולית דם עצומה של לוחמים טורקים לאחר "קרב קוסובו" ההיסטורי בשנת 1389.',
        etymology: [
          { part: 'טורקיה (Türkiye)', meaning: 'שם המדינה מורכב מהכינוי האתני לעמים "הטורקים", בתוספת סיומת גיאוגרפית שיוכית.' },
          { part: 'משמעות "טורק"', meaning: 'בשפות הטורקיות הקדומות (Old Turkic), המילה "Türk" נושאת את המשמעות של "חזק", "עוצמתי", "אמיץ" או "זה שנוצר/נולד (ברוך כישרון)". במקור, זה היה שמה של קונפדרציית שבטים במרכז אסיה הידועה כ"גקטורקים" (הטורקים השמימיים/הכחולים) במאה ה-6.' },
          { part: 'הסיומת "-יה" (-iye)', meaning: 'הסיומת נלקחה מהשפה הערבית (והיוונית/לטינית הקדומה -ia), ומשמעותה "הארץ של". יחד המשמעות היא "ארצם של הטורקים (החזקים)". לאחרונה, המדינה דרשה שהעולם ישתמש בהגייה הטורקית המקורית (Türkiye) במקום באנגלוז (Turkey) כדי למנוע בלבול עם תרנגול ההודו.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: '', fullName: '', yearText: '', firstLeader: { name: '', lifeYears: '' }, vexillology: '', etymology: [], extendedHistory: '', leaderEtymology: ''
      }
    },
    {
      id: 'ir',
      flagUrl: 'https://i.postimg.cc/9DYwFp7t/iran.webp',
      hebrew: {
        name: 'איראן',
        fullName: 'הרפובליקה האסלאמית של איראן',
        yearText: '1979 (הקמת הרפובליקה האסלאמית)',
        firstLeader: { name: 'האייתוללה רוחאללה ח\'ומייני (המנהיג העליון הראשון)', lifeYears: '1902 – 1989' },
        vexillology: 'דגל איראן הנוכחי אומץ ב-1980 לאחר המהפכה האסלאמית. הוא שומר על צבעי הדגל ההיסטורי (ירוק, לבן ואדום), אך מחליף את סמל ה"אריה והשמש" המלוכני בסמלים אסלאמיים. הירוק מסמל את דת האסלאם, צמיחה וטבע. הלבן מסמל שלום, כנות וטוהר. האדום מסמל אומץ לב והקרבה (מרטיריות). במרכז הפס הלבן מופיע סמל איראן (מעוצב כארבעה סהרים וחרב), היוצר ויזואלית פרח צבעוני (לזכר הנופלים) ומרכיב קליגרפית את המילה "אללה". בנוסף, לאורך קווי התפר בין הפס הלבן לפסים הצבעוניים, כתוב ה"תכביר" ("אללה אכבר") 22 פעמים בכתב כופי מסוגנן, המייצגים את ה-22 בחודש בַּהְמַן, הוא תאריך הניצחון בלוח השנה האיראני.',
        etymology: [
          { part: 'איראן (Iran)', meaning: 'השם נגזר ישירות מפרסית אמצעית "Ērān" ומפרסית עתיקה "Aryānām".' },
          { part: 'משמעות "אריאן"', meaning: 'התרגום המילולי והישיר של המילה הוא "ארצם של הארים" או "ארץ האצילים". המילה העתיקה "אריה" (Arya) בשפות ההודו-איראניות משמעותה "אציל", "מכובד" או "בן חורין".' },
          { part: 'מפרס לאיראן', meaning: 'בעוד המערב כינה את האזור "פרס" (Persia) - על שם מחוז פַארס (Pars) ממנו יצאו המלכים העתיקים כמו כורש הגדול - תושבי המקום תמיד קראו לארצם "איראן". בשנת 1935, רזא שאה פהלווי דרש רשמית מהקהילה הבינלאומית להפסיק להשתמש בשם היווני "פרס", ולאמץ את השם "איראן", המייצג את כלל הקבוצות האתניות המרכיבות את האומה ולא רק את הפרסים.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: '', fullName: '', yearText: '', firstLeader: { name: '', lifeYears: '' }, vexillology: '', etymology: [], extendedHistory: '', leaderEtymology: ''
      }
    }
  ],

  // ==========================================
  // אזור 3: צפון אפריקה / המגרב (North Africa)
  // ==========================================
  northAfrica: [
    {
      id: 'dz',
      flagUrl: 'https://i.postimg.cc/gJS8XGjF/algeria.webp',
      hebrew: {
        name: 'אלג\'יריה',
        fullName: 'הרפובליקה האלג\'יראית הדמוקרטית העממית',
        yearText: '1962 (עצמאות מצרפת)',
        firstLeader: { name: 'אחמד בן בלה (הנשיא הראשון)', lifeYears: '1916 – 2012' },
        vexillology: 'דגל אלג\'יריה אומץ רשמית עם קבלת העצמאות ב-1962. הוא מורכב משני חצאים אנכיים שווים בצבעים ירוק (בצד התורן) ולבן. במרכז הדגל מוטבעים סהר וכוכב בעל חמישה קודקודים בצבע אדום בוהק. הצבע הירוק מסמל את דת האסלאם, הלבן מסמל טוהר, שלום ואת תנועת ההתנגדות הלאומית בהנהגת האמיר עבד אל-קאדר, והצבע האדום (בסהר ובכוכב) מסמל את הדם הרב של השהידים (החללים) שנשפך במהלך מלחמת העצמאות העקובה מדם נגד השלטון הצרפתי. הסהר והכוכב עצמם הם סמלים מסורתיים של האסלאם.',
        etymology: [
          { part: 'אל-ג\'זאאִ\'ר (Al-Jaza\'ir)', meaning: 'שמה הערבי המקורי של המדינה ושל עיר הבירה (אלג\'יר). פירוש המילה בערבית הוא "האיים".' },
          { part: 'ההקשר הגיאוגרפי', meaning: 'השם "האיים" מתייחס לארבעה איים קטנים שהיו ממוקמים ממש מול חופי עיר הבירה העתיקה. בשנת 1525 שולבו איים אלו לחלק מהיבשת עצמה (על ידי בניית שובר גלים וחיבור אדמה), אך השם נשאר והורחב בהמשך על ידי הצרפתים (Algeria) לתיאור כל הטריטוריה הנרחבת של המדינה.' },
          { part: 'מקור קדום', meaning: 'השם המלא שניתן לעיר על ידי מייסדה במאה העשירית (בולע\'ין אבן זרי) היה "ג\'זאא\'ר בני מזע\'אנה" (האיים של שבט בני מזע\'אנה הברברי).' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: '', fullName: '', yearText: '', firstLeader: { name: '', lifeYears: '' }, vexillology: '', etymology: [], extendedHistory: '', leaderEtymology: ''
      }
    },
    {
      id: 'ly',
      flagUrl: 'https://i.postimg.cc/n9YMc4RQ/lybia.webp',
      hebrew: {
        name: 'לוב',
        fullName: 'מדינת לוב',
        yearText: '1951 (עצמאות מהאיטלקים / הקמת הממלכה)',
        firstLeader: { name: 'המלך אידריס הראשון (מלך לוב)', lifeYears: '1889 – 1983' },
        vexillology: 'דגל לוב הנוכחי אומץ מחדש ב-2011 לאחר נפילת משטר קדאפי (שהשתמש בדגל ירוק חלק). זהו דגלה המקורי של ממלכת לוב מ-1951. הוא מורכב משלושה פסים אופקיים בצבעים אדום, שחור וירוק, כאשר הפס השחור האמצעי רחב פי שניים מהאחרים, ובמרכזו סהר וכוכב לבנים. שלושת הצבעים מייצגים את שלושת חבלי הארץ ההיסטוריים של לוב: האדום מסמל את חבל פזאן ואת דם ההרוגים במאבק בקולוניאליזם האיטלקי; השחור (עם הסהר והכוכב) הוא דגלה של מסדר הסנוסים ההיסטורי ומייצג את חבל קירנאיקה ואת דת האסלאם; והירוק מסמל את אזור טריפוליטניה ואת השגשוג והפוריות.',
        etymology: [
          { part: 'לוב (Libya)', meaning: 'השם הוא עתיק יומין ומקורו בכתבים המצריים הקדמונים.' },
          { part: 'שבט ה"ליבו"', meaning: 'במצרית עתיקה הופיע השם "ליבו" (Libu או Ribu) שהתייחס לאחד השבטים הברבריים המרכזיים שחיו ממערב לנהר הנילוס.' },
          { part: 'ההרחבה היוונית', meaning: 'היוונים אימצו את השם הזה והפכו אותו ל-"Libya", אך השתמשו בו בצורה רחבה כדי לתאר את כל יבשת אפריקה המוכרת להם (ממערב למצרים ולנהר הנילוס). רק בעת המודרנית (החל מ-1934 תחת השלטון האיטלקי) צומצם השם חזרה לטריטוריה המגדירה את מדינת לוב של ימינו.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: '', fullName: '', yearText: '', firstLeader: { name: '', lifeYears: '' }, vexillology: '', etymology: [], extendedHistory: '', leaderEtymology: ''
      }
    },
    {
      id: 'ma',
      flagUrl: 'https://i.postimg.cc/1Vc45GCF/morocoo.webp',
      hebrew: {
        name: 'מרוקו',
        fullName: 'ממלכת מרוקו',
        yearText: '1956 (עצמאות מצרפת וספרד)',
        firstLeader: { name: 'המלך מוחמד החמישי (מלך העצמאות)', lifeYears: '1909 – 1961' },
        vexillology: 'דגל מרוקו מורכב מרקע אדום חזק ואחיד, ובמרכזו פנטגרם (כוכב בעל חמישה קודקודים המורכב מקווים מצטלבים) בצבע ירוק. הצבע האדום עמוס במשמעות היסטורית: הוא מייצג את "השושלת העלאווית" השולטת במדינה (המייחסת את מוצאה לנביא מוחמד), וכן מסמל אומץ, כוח, וגבורה. הצבע הירוק של הכוכב הוא הצבע המסורתי של האסלאם. הפנטגרם עצמו מוכר בהיסטוריה האסלאמית כ"חותם שלמה" (המלך שלמה). חמשת קודקודי הכוכב מסמלים באופן רשמי את חמשת עמודי האסלאם, וכן מסמלים את הקשר בין אלוהים לאומה.',
        etymology: [
          { part: 'אל-מַעְ\'רִב (Al-Maghrib)', meaning: 'שמה הרשמי בערבית. פירושו "המערב" או "מקום שקיעת השמש". בעבר הרחוק נקראה "אל-מע\'רב אל-אקצא" (המערב הקיצון), שכן היא הייתה הנקודה המערבית ביותר הידועה בעולם האסלאמי.' },
          { part: 'מרוקו (Morocco)', meaning: 'השם הלועזי של המדינה נוצר משיבוש (פורטוגזי/ספרדי) של שמה של עיר הבירה ההיסטורית – "מרקש" (Marrakesh).' },
          { part: 'משמעות "מרקש"', meaning: 'מקור השם "מרקש" נטוע בשפה הברברית העתיקה: "Amur n Akush" (אמור נ\' אקוש), שמשמעותו הציורית היא "ארץ האל" או "אדמת אלוהים".' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: '', fullName: '', yearText: '', firstLeader: { name: '', lifeYears: '' }, vexillology: '', etymology: [], extendedHistory: '', leaderEtymology: ''
      }
    },
    {
      id: 'tn',
      flagUrl: 'https://i.postimg.cc/30CWJXSv/tunisia.webp',
      hebrew: {
        name: 'תוניסיה',
        fullName: 'הרפובליקה התוניסאית',
        yearText: '1956 (עצמאות מצרפת)',
        firstLeader: { name: 'חביב בורגיבה (הנשיא הראשון ואבי האומה)', lifeYears: '1903 – 2000' },
        vexillology: 'דגל תוניסיה מורכב ממשטח אדום שעליו מעגל לבן במרכז. בתוך המעגל ממוקמים סהר וכוכב מחומש (בעל חמישה קודקודים) בצבע אדום. הדגל דומה מאוד לדגל האימפריה העות\'מאנית (שתוניסיה הייתה חלק ממנה במשך מאות שנים), וזהו אכן המקור לעיצובו, אך בניגוד לדגל הטורקי – הסהר התוניסאי מקיף את הכוכב. הצבע האדום הבוהק מסמל את דם הקדושים (השהידים) אשר נהרגו במאבקים ובמלחמות נגד השלטון הטורקי ואחר כך הצרפתי. המעגל הלבן מסמל שלום, והסהר והכוכב הם סמלים מסורתיים ומובהקים של דת האסלאם והזהות המוסלמית של המדינה.',
        etymology: [
          { part: 'תוניסיה (Tunisia)', meaning: 'שם המדינה נגזר ישירות משמה של עיר הבירה שלה, תוניס (Tunis). השם הצרפתי שנוצר הוסיף את הסיומת המקובלת "יה" (-ia) כדי לציין "ארץ תוניס".' },
          { part: 'מקור ברברי', meaning: 'חוקרים רבים קושרים את השם לשורש הברברי "ת-נ-ס" (Tns), שמשמעותו "לשכב", "לחנות" או "להקים מחנה". העיר תוניס שימשה היסטורית כנקודת חניה בטוחה או חניון לילה למטיילים ושיירות לפני הגיעם לקרתגו העתיקה.' },
          { part: 'הקשר פיניקי/פוני', meaning: 'השערה אטימולוגית חלופית קושרת את השם לאלה הפונית הקדומה והמרכזית של קרתגו – תנית (Tanit), שהייתה אלת הירח, הפוריות והעיר עצמה.' }
        ],
        extendedHistory: '',
        leaderEtymology: ''
      },
      english: {
        name: '', fullName: '', yearText: '', firstLeader: { name: '', lifeYears: '' }, vexillology: '', etymology: [], extendedHistory: '', leaderEtymology: ''
      }
    }
  ]
};

// חשיפת האובייקט כדי שיהיה ניתן לקרוא אותו מקבצי ה-HTML של גיטהאב
if (typeof window !== 'undefined') {
  window.atlasData = atlasData;
}
