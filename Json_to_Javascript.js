
// --->> FUNCTION FOR PASS THE JSON TO THE JAVASCRIPT <<<-----------------
// --->> FUNCTION FOR PASS THE JSON TO THE JAVASCRIPT <<<-----------------
// --->> FUNCTION FOR PASS THE JSON TO THE JAVASCRIPT <<<-----------------


// ---> the code:
function Json_to_Jscript(json) {
    var toString = JSON.stringify(json);
    var toJs = JSON.parse(toString);
    console.dir(toJs, { 'maxArrayLength': null }); //--->>> este consologeo nos permite ver todos los objetos en la consola
    // console.log(toJs);
    return toJs;
};

//------>>>> al final esta la llamada (se ejecuta) de la función Json_to_Jscript <<<<<------
//----------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

const Api_Breeds = [
    {
        "name": "Affenpinscher",
        "id": 1,
        "height": "9 - 11.5",
        "weight": "6 - 13",
        "life_span": "10 - 12 years",
        "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
    },
    {
        "name": "Afghan Hound",
        "id": 2,
        "height": "25 - 27",
        "weight": "50 - 60",
        "life_span": "10 - 13 years",
        "temperament": "Aloof, Clownish, Dignified, Independent, Happy",
        "image": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg"
    },
    {
        "name": "African Hunting Dog",
        "id": 3,
        "height": "30",
        "weight": "44 - 66",
        "life_span": "11 years",
        "temperament": "Wild, Hardworking, Dutiful",
        "image": "https://cdn2.thedogapi.com/images/rkiByec47.jpg"
    },
    {
        "name": "Airedale Terrier",
        "id": 4,
        "height": "21 - 23",
        "weight": "40 - 65",
        "life_span": "10 - 13 years",
        "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
        "image": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg"
    },
    {
        "name": "Akbash Dog",
        "id": 5,
        "height": "28 - 34",
        "weight": "90 - 120",
        "life_span": "10 - 12 years",
        "temperament": "Loyal, Independent, Intelligent, Brave",
        "image": "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg"
    },
    {
        "name": "Akita",
        "id": 6,
        "height": "24 - 28",
        "weight": "65 - 115",
        "life_span": "10 - 14 years",
        "temperament": "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
        "image": "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg"
    },
    {
        "name": "Alapaha Blue Blood Bulldog",
        "id": 7,
        "height": "18 - 24",
        "weight": "55 - 90",
        "life_span": "12 - 13 years",
        "temperament": "Loving, Protective, Trainable, Dutiful, Responsible",
        "image": "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg"
    },
    {
        "name": "Alaskan Husky",
        "id": 8,
        "height": "23 - 26",
        "weight": "38 - 50",
        "life_span": "10 - 13 years",
        "temperament": "Friendly, Energetic, Loyal, Gentle, Confident",
        "image": "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg"
    },
    {
        "name": "Alaskan Malamute",
        "id": 9,
        "height": "23 - 25",
        "weight": "65 - 100",
        "life_span": "12 - 15 years",
        "temperament": "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
        "image": "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg"
    },
    {
        "name": "American Bulldog",
        "id": 10,
        "height": "22 - 27",
        "weight": "60 - 120",
        "life_span": "10 - 12 years",
        "temperament": "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant",
        "image": "https://cdn2.thedogapi.com/images/pk1AAdloG.jpg"
    },
    {
        "name": "American Bully",
        "id": 11,
        "height": "14 - 17",
        "weight": "30 - 150",
        "life_span": "8 – 15 years",
        "temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
        "image": "https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg"
    },
    {
        "name": "American Eskimo Dog",
        "id": 12,
        "height": "15 - 19",
        "weight": "20 - 40",
        "life_span": "12 - 15 years",
        "temperament": "Friendly, Alert, Reserved, Intelligent, Protective",
        "image": "https://cdn2.thedogapi.com/images/Bymjyec4m.jpg"
    },
    {
        "name": "American Eskimo Dog (Miniature)",
        "id": 13,
        "height": "9 - 12",
        "weight": "7 - 10",
        "life_span": "13 – 15 years",
        "temperament": "Friendly, Alert, Reserved, Intelligent, Protective",
        "image": "https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg"
    },
    {
        "name": "American Foxhound",
        "id": 14,
        "height": "21 - 28",
        "weight": "65 - 75",
        "life_span": "8 - 15 years",
        "temperament": "Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving",
        "image": "https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg"
    },
    {
        "name": "American Pit Bull Terrier",
        "id": 15,
        "height": "17 - 21",
        "weight": "30 - 60",
        "life_span": "10 - 15 years",
        "temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
        "image": "https://cdn2.thedogapi.com/images/HkC31gcNm.png"
    },
    {
        "name": "American Staffordshire Terrier",
        "id": 16,
        "height": "17 - 19",
        "weight": "50 - 60",
        "life_span": "12 - 15 years",
        "temperament": "Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous",
        "image": "https://cdn2.thedogapi.com/images/rJIakgc4m.jpg"
    },
    {
        "name": "American Water Spaniel",
        "id": 17,
        "height": "15 - 18",
        "weight": "25 - 45",
        "life_span": "10 - 12 years",
        "temperament": "Friendly, Energetic, Obedient, Intelligent, Protective, Trainable",
        "image": "https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg"
    },
    {
        "name": "Anatolian Shepherd Dog",
        "id": 18,
        "height": "27 - 29",
        "weight": "80 - 150",
        "life_span": "11 - 13 years",
        "temperament": "Steady, Bold, Independent, Confident, Intelligent, Proud",
        "image": "https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg"
    },
    {
        "name": "Appenzeller Sennenhund",
        "id": 19,
        "height": "20 - 22",
        "weight": "48 - 55",
        "life_span": "12 – 14 years",
        "temperament": "Reliable, Fearless, Energetic, Lively, Self-assured",
        "image": "https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg"
    },
    {
        "name": "Australian Cattle Dog",
        "id": 21,
        "height": "17 - 20",
        "weight": "44 - 62",
        "life_span": "12 - 14 years",
        "temperament": "Cautious, Energetic, Loyal, Obedient, Protective, Brave",
        "image": "https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg"
    },
    {
        "name": "Australian Kelpie",
        "id": 22,
        "height": "17 - 20",
        "weight": "31 - 46",
        "life_span": "10 - 13 years",
        "temperament": "Friendly, Energetic, Alert, Loyal, Intelligent, Eager",
        "image": "https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg"
    },
    {
        "name": "Australian Shepherd",
        "id": 23,
        "height": "18 - 23",
        "weight": "35 - 65",
        "life_span": "12 - 16 years",
        "temperament": "Good-natured, Affectionate, Intelligent, Active, Protective",
        "image": "https://cdn2.thedogapi.com/images/B1-llgq4m.jpg"
    },
    {
        "name": "Australian Terrier",
        "id": 24,
        "height": "10 - 11",
        "weight": "14 - 16",
        "life_span": "15 years",
        "temperament": "Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous",
        "image": "https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg"
    },
    {
        "name": "Azawakh",
        "id": 25,
        "height": "23 - 29",
        "weight": "33 - 55",
        "life_span": "10 - 13 years",
        "temperament": "Aloof, Affectionate, Attentive, Rugged, Fierce, Refined",
        "image": "https://cdn2.thedogapi.com/images/SkvZgx94m.jpg"
    },
    {
        "name": "Barbet",
        "id": 26,
        "height": "20 - 26",
        "weight": "40 - 65",
        "life_span": "13 – 15 years",
        "temperament": "Obedient, Companionable, Intelligent, Joyful",
        "image": "https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg"
    },
    {
        "name": "Basenji",
        "id": 28,
        "height": "16 - 17",
        "weight": "22 - 24",
        "life_span": "10 - 12 years",
        "temperament": "Affectionate, Energetic, Alert, Curious, Playful, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg"
    },
    {
        "name": "Basset Bleu de Gascogne",
        "id": 29,
        "height": "13 - 15",
        "weight": "35 - 40",
        "life_span": "10 - 14 years",
        "temperament": "Affectionate, Lively, Agile, Curious, Happy, Active",
        "image": "https://cdn2.thedogapi.com/images/BkMQll94X.jpg"
    },
    {
        "name": "Basset Hound",
        "id": 30,
        "height": "14",
        "weight": "50 - 65",
        "life_span": "12 - 15 years",
        "temperament": "Tenacious, Friendly, Affectionate, Devoted, Sweet-Tempered, Gentle",
        "image": "https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg"
    },
    {
        "name": "Beagle",
        "id": 31,
        "height": "13 - 15",
        "weight": "20 - 35",
        "life_span": "13 - 16 years",
        "temperament": "Amiable, Even Tempered, Excitable, Determined, Gentle, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg"
    },
    {
        "name": "Bearded Collie",
        "id": 32,
        "height": "20 - 22",
        "weight": "45 - 55",
        "life_span": "12 - 14 years",
        "temperament": "Self-confidence, Hardy, Lively, Alert, Intelligent, Active",
        "image": "https://cdn2.thedogapi.com/images/A09F4c1qP.jpg"
    },
    {
        "name": "Beauceron",
        "id": 33,
        "height": "24 - 27.5",
        "weight": "80 - 110",
        "life_span": "10 - 12 years",
        "temperament": "Fearless, Friendly, Intelligent, Protective, Calm",
        "image": "https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg"
    },
    {
        "name": "Bedlington Terrier",
        "id": 34,
        "height": "15 - 16",
        "weight": "17 - 23",
        "life_span": "14 - 16 years",
        "temperament": "Affectionate, Spirited, Intelligent, Good-tempered",
        "image": "https://cdn2.thedogapi.com/images/ByK8gx947.jpg"
    },
    {
        "name": "Belgian Malinois",
        "id": 36,
        "height": "22 - 26",
        "weight": "40 - 80",
        "life_span": "12 - 14 years",
        "temperament": "Watchful, Alert, Stubborn, Friendly, Confident, Hard-working, Active, Protective",
        "image": "https://cdn2.thedogapi.com/images/r1f_ll5VX.jpg"
    },
    {
        "name": "Belgian Tervuren",
        "id": 38,
        "height": "22 - 26",
        "weight": "40 - 65",
        "life_span": "10 - 12 years",
        "temperament": "Energetic, Alert, Loyal, Intelligent, Attentive, Protective",
        "image": "https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg"
    },
    {
        "name": "Bernese Mountain Dog",
        "id": 41,
        "height": "23 - 27.5",
        "weight": "65 - 120",
        "life_span": "7 - 10 years",
        "temperament": "Affectionate, Loyal, Intelligent, Faithful",
        "image": "https://cdn2.thedogapi.com/images/S1fFlx5Em.jpg"
    },
    {
        "name": "Bichon Frise",
        "id": 42,
        "height": "9.5 - 11.5",
        "weight": "10 - 18",
        "life_span": "15 years",
        "temperament": "Feisty, Affectionate, Cheerful, Playful, Gentle, Sensitive",
        "image": "https://cdn2.thedogapi.com/images/HkuYlxqEQ.jpg"
    },
    {
        "name": "Black and Tan Coonhound",
        "id": 43,
        "height": "23 - 27",
        "weight": "65 - 100",
        "life_span": "10 - 12 years",
        "temperament": "Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable",
        "image": "https://cdn2.thedogapi.com/images/HJAFgxcNQ.jpg"
    },
    {
        "name": "Bloodhound",
        "id": 45,
        "height": "23 - 27",
        "weight": "80 - 110",
        "life_span": "8 - 10 years",
        "temperament": "Stubborn, Affectionate, Gentle, Even Tempered",
        "image": "https://cdn2.thedogapi.com/images/Skdcgx9VX.jpg"
    },
    {
        "name": "Bluetick Coonhound",
        "id": 47,
        "height": "21 - 27",
        "weight": "45 - 80",
        "life_span": "12 - 14 years",
        "temperament": "Friendly, Intelligent, Active",
        "image": "https://cdn2.thedogapi.com/images/rJxieg9VQ.jpg"
    },
    {
        "name": "Boerboel",
        "id": 48,
        "height": "22 - 27",
        "weight": "110 - 200",
        "life_span": "10 - 12 years",
        "temperament": "Obedient, Confident, Intelligent, Dominant, Territorial",
        "image": "https://cdn2.thedogapi.com/images/HyOjge5Vm.jpg"
    },
    {
        "name": "Border Collie",
        "id": 50,
        "height": "18 - 22",
        "weight": "30 - 45",
        "life_span": "12 - 16 years",
        "temperament": "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg"
    },
    {
        "name": "Border Terrier",
        "id": 51,
        "height": "11 - 16",
        "weight": "11.5 - 15.5",
        "life_span": "12 - 14 years",
        "temperament": "Fearless, Affectionate, Alert, Obedient, Intelligent, Even Tempered",
        "image": "https://cdn2.thedogapi.com/images/HJOpge9Em.jpg"
    },
    {
        "name": "Boston Terrier",
        "id": 53,
        "height": "16 - 17",
        "weight": "10 - 25",
        "life_span": "11 - 13 years",
        "temperament": "Friendly, Lively, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/rkZRggqVX.jpg"
    },
    {
        "name": "Bouvier des Flandres",
        "id": 54,
        "height": "23.5 - 27.5",
        "weight": "70 - 110",
        "life_span": "10 - 15 years",
        "temperament": "Protective, Loyal, Gentle, Intelligent, Familial, Rational",
        "image": "https://cdn2.thedogapi.com/images/Byd0xl5VX.jpg"
    },
    {
        "name": "Boxer",
        "id": 55,
        "height": "21.5 - 25",
        "weight": "50 - 70",
        "life_span": "8 - 10 years",
        "temperament": "Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm",
        "image": "https://cdn2.thedogapi.com/images/ry1kWe5VQ.jpg"
    },
    {
        "name": "Boykin Spaniel",
        "id": 56,
        "height": "14 - 18",
        "weight": "25 - 40",
        "life_span": "10 - 14 years",
        "temperament": "Friendly, Energetic, Companionable, Intelligent, Eager, Trainable",
        "image": "https://cdn2.thedogapi.com/images/ryHJZlcNX.jpg"
    },
    {
        "name": "Bracco Italiano",
        "id": 57,
        "height": "21.5 - 26.5",
        "weight": "55 - 88",
        "life_span": "10 - 12 years",
        "temperament": "Stubborn, Affectionate, Loyal, Playful, Companionable, Trainable",
        "image": "https://cdn2.thedogapi.com/images/S13yZg5VQ.jpg"
    },
    {
        "name": "Briard",
        "id": 58,
        "height": "22 - 27",
        "weight": "70 - 90",
        "life_span": "10 - 12 years",
        "temperament": "Fearless, Loyal, Obedient, Intelligent, Faithful, Protective",
        "image": "https://cdn2.thedogapi.com/images/rkVlblcEQ.jpg"
    },
    {
        "name": "Brittany",
        "id": 59,
        "height": "17.5 - 20.5",
        "weight": "30 - 45",
        "life_span": "12 - 14 years",
        "temperament": "Agile, Adaptable, Quick, Intelligent, Attentive, Happy",
        "image": "https://cdn2.thedogapi.com/images/HJWZZxc4X.jpg"
    },
    {
        "name": "Bull Terrier",
        "id": 61,
        "height": "21 - 22",
        "weight": "50 - 70",
        "life_span": "10 - 12 years",
        "temperament": "Trainable, Protective, Sweet-Tempered, Keen, Active",
        "image": "https://cdn2.thedogapi.com/images/VSraIEQGd.jpg"
    },
    {
        "name": "Bull Terrier (Miniature)",
        "id": 62,
        "height": "10 - 14",
        "weight": "25 - 33",
        "life_span": "11 – 14 years",
        "temperament": "Trainable, Protective, Sweet-Tempered, Keen, Active, Territorial",
        "image": "https://cdn2.thedogapi.com/images/BkKZWlcVX.jpg"
    },
    {
        "name": "Bullmastiff",
        "id": 64,
        "height": "24 - 27",
        "weight": "100 - 130",
        "life_span": "8 - 12 years",
        "temperament": "Docile, Reliable, Devoted, Alert, Loyal, Reserved, Loving, Protective, Powerful, Calm, Courageous",
        "image": "https://cdn2.thedogapi.com/images/r1ifZl5E7.jpg"
    },
    {
        "name": "Cairn Terrier",
        "id": 65,
        "height": "9 - 10",
        "weight": "13 - 14",
        "life_span": "14 - 15 years",
        "temperament": "Hardy, Fearless, Assertive, Gay, Intelligent, Active",
        "image": "https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg"
    },
    {
        "name": "Cane Corso",
        "id": 67,
        "height": "23.5 - 27.5",
        "weight": "88 - 120",
        "life_span": "10 - 11 years",
        "temperament": "Trainable, Reserved, Stable, Quiet, Even Tempered, Calm",
        "image": "https://cdn2.thedogapi.com/images/r15m-lc4m.jpg"
    },
    {
        "name": "Cardigan Welsh Corgi",
        "id": 68,
        "height": "10.5 - 12.5",
        "weight": "25 - 38",
        "life_span": "12 - 14 years",
        "temperament": "Affectionate, Devoted, Alert, Companionable, Intelligent, Active",
        "image": "https://cdn2.thedogapi.com/images/SyXN-e9NX.jpg"
    },
    {
        "name": "Catahoula Leopard Dog",
        "id": 69,
        "height": "20 - 26",
        "weight": "50 - 95",
        "life_span": "10 - 12 years",
        "temperament": "Energetic, Inquisitive, Independent, Gentle, Intelligent, Loving",
        "image": "https://cdn2.thedogapi.com/images/BJcNbec4X.jpg"
    },
    {
        "name": "Caucasian Shepherd (Ovcharka)",
        "id": 70,
        "height": "24 - 33.5",
        "weight": "80 - 100",
        "life_span": "10 - 12 years",
        "temperament": "Alert, Quick, Dominant, Powerful, Calm, Strong",
        "image": "https://cdn2.thedogapi.com/images/r1rrWe5Em.jpg"
    },
    {
        "name": "Cavalier King Charles Spaniel",
        "id": 71,
        "height": "12 - 13",
        "weight": "13 - 18",
        "life_span": "10 - 14 years",
        "temperament": "Fearless, Affectionate, Sociable, Patient, Playful, Adaptable",
        "image": "https://cdn2.thedogapi.com/images/HJRBbe94Q.jpg"
    },
    {
        "name": "Chesapeake Bay Retriever",
        "id": 76,
        "height": "21 - 26",
        "weight": "55 - 80",
        "life_span": "10 - 13 years",
        "temperament": "Affectionate, Intelligent, Quiet, Dominant, Happy, Protective",
        "image": "https://cdn2.thedogapi.com/images/9BXwUeCc2.jpg"
    },
    {
        "name": "Chinese Crested",
        "id": 78,
        "height": "11 - 13",
        "weight": "10 - 13",
        "life_span": "10 - 14 years",
        "temperament": "Affectionate, Sweet-Tempered, Lively, Alert, Playful, Happy",
        "image": "https://cdn2.thedogapi.com/images/B1pDZx9Nm.jpg"
    },
    {
        "name": "Chinese Shar-Pei",
        "id": 79,
        "height": "18 - 20",
        "weight": "45 - 60",
        "life_span": "10 years",
        "temperament": "Suspicious, Affectionate, Devoted, Reserved, Independent, Loving",
        "image": "https://cdn2.thedogapi.com/images/B1ruWl94Q.jpg"
    },
    {
        "name": "Chinook",
        "id": 80,
        "height": "22 - 26",
        "weight": "50 - 90",
        "life_span": "12 - 15 years",
        "temperament": "Friendly, Alert, Dignified, Intelligent, Calm",
        "image": "https://cdn2.thedogapi.com/images/Sypubg54Q.jpg"
    },
    {
        "name": "Chow Chow",
        "id": 81,
        "height": "17 - 20",
        "weight": "40 - 70",
        "life_span": "12 - 15 years",
        "temperament": "Aloof, Loyal, Independent, Quiet",
        "image": "https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg"
    },
    {
        "name": "Clumber Spaniel",
        "id": 84,
        "height": "17 - 20",
        "weight": "55 - 85",
        "life_span": "10 - 12 years",
        "temperament": "Affectionate, Loyal, Dignified, Gentle, Calm, Great-hearted",
        "image": "https://cdn2.thedogapi.com/images/rkeqWgq4Q.jpg"
    },
    {
        "name": "Cocker Spaniel",
        "id": 86,
        "height": "14 - 15",
        "weight": "20 - 30",
        "life_span": "12 - 15 years",
        "temperament": "Trainable, Friendly, Affectionate, Playful, Quiet, Faithful",
        "image": "https://cdn2.thedogapi.com/images/1lFmrzECl.jpg"
    },
    {
        "name": "Cocker Spaniel (American)",
        "id": 87,
        "height": "14 - 15",
        "weight": "20 - 30",
        "life_span": "12 - 15 years",
        "temperament": "Outgoing, Sociable, Trusting, Joyful, Even Tempered, Merry",
        "image": "https://cdn2.thedogapi.com/images/HkRcZe547.jpg"
    },
    {
        "name": "Coton de Tulear",
        "id": 89,
        "height": "9 - 11",
        "weight": "9 - 15",
        "life_span": "13 - 16 years",
        "temperament": "Affectionate, Lively, Playful, Intelligent, Trainable, Vocal",
        "image": "https://cdn2.thedogapi.com/images/SyviZlqNm.jpg"
    },
    {
        "name": "Dalmatian",
        "id": 92,
        "height": "19 - 23",
        "weight": "50 - 55",
        "life_span": "10 - 13 years",
        "temperament": "Outgoing, Friendly, Energetic, Playful, Sensitive, Intelligent, Active",
        "image": "https://cdn2.thedogapi.com/images/SkJ3blcN7.jpg"
    },
    {
        "name": "Doberman Pinscher",
        "id": 94,
        "height": "24 - 28",
        "weight": "66 - 88",
        "life_span": "10 years",
        "temperament": "Fearless, Energetic, Alert, Loyal, Obedient, Confident, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/HyL3bl94Q.jpg"
    },
    {
        "name": "Dogo Argentino",
        "id": 95,
        "height": "23.5 - 27",
        "weight": "80 - 100",
        "life_span": "10 - 12 years",
        "temperament": "Friendly, Affectionate, Cheerful, Loyal, Tolerant, Protective",
        "image": "https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg"
    },
    {
        "name": "Dutch Shepherd",
        "id": 98,
        "height": "22 - 24.5",
        "weight": "50 - 70",
        "life_span": "15 years",
        "temperament": "Reliable, Affectionate, Alert, Loyal, Obedient, Trainable",
        "image": "https://cdn2.thedogapi.com/images/BkE6Wg5E7.jpg"
    },
    {
        "name": "English Setter",
        "id": 101,
        "height": "24 - 25",
        "weight": "45 - 80",
        "life_span": "12 years",
        "temperament": "Strong Willed, Mischievous, Affectionate, Energetic, Playful, Companionable, Gentle, Hard-working, Intelligent, Eager, People-Oriented",
        "image": "https://cdn2.thedogapi.com/images/By4A-eqVX.jpg"
    },
    {
        "name": "English Shepherd",
        "id": 102,
        "height": "18 - 23",
        "weight": "44 - 66",
        "life_span": "10 - 13 years",
        "temperament": "Kind, Energetic, Independent, Adaptable, Intelligent, Bossy",
        "image": "https://cdn2.thedogapi.com/images/H1QyMe5EQ.jpg"
    },
    {
        "name": "English Springer Spaniel",
        "id": 103,
        "height": "19 - 20",
        "weight": "35 - 50",
        "life_span": "12 - 14 years",
        "temperament": "Affectionate, Cheerful, Alert, Intelligent, Attentive, Active",
        "image": "https://cdn2.thedogapi.com/images/Hk0Jfe5VQ.jpg"
    },
    {
        "name": "English Toy Spaniel",
        "id": 104,
        "height": "10",
        "weight": "8 - 14",
        "life_span": "10 - 12 years",
        "temperament": "Affectionate, Reserved, Playful, Gentle, Happy, Loving",
        "image": "https://cdn2.thedogapi.com/images/SkIgzxqNQ.jpg"
    },
    {
        "name": "English Toy Terrier",
        "id": 105,
        "height": "10 - 12",
        "weight": "6 - 8",
        "life_span": "12 - 13 years",
        "temperament": "Stubborn, Alert, Companionable, Intelligent, Cunning, Trainable",
        "image": "https://cdn2.thedogapi.com/images/SJ6eMxqEQ.jpg"
    },
    {
        "name": "Eurasier",
        "id": 107,
        "height": "20.5 - 23.5",
        "weight": "40 - 70",
        "life_span": "12 - 14 years",
        "temperament": "Alert, Reserved, Intelligent, Even Tempered, Watchful, Calm",
        "image": "https://cdn2.thedogapi.com/images/S1VWGx9Nm.jpg"
    },
    {
        "name": "Field Spaniel",
        "id": 108,
        "height": "17 - 18",
        "weight": "35 - 50",
        "life_span": "11 - 15 years",
        "temperament": "Docile, Cautious, Sociable, Sensitive, Adaptable, Familial",
        "image": "https://cdn2.thedogapi.com/images/SkJfGecE7.jpg"
    },
    {
        "name": "Finnish Lapphund",
        "id": 110,
        "height": "16 - 21",
        "weight": "33 - 53",
        "life_span": "12 - 15 years",
        "temperament": "Friendly, Keen, Faithful, Calm, Courageous",
        "image": "https://cdn2.thedogapi.com/images/S1KMGg5Vm.jpg"
    },
    {
        "name": "Finnish Spitz",
        "id": 111,
        "height": "15.5 - 20",
        "weight": "23 - 28",
        "life_span": "12 - 15 years",
        "temperament": "Playful, Loyal, Independent, Intelligent, Happy, Vocal",
        "image": "https://cdn2.thedogapi.com/images/3PjHlQbkV.jpg"
    },
    {
        "name": "French Bulldog",
        "id": 113,
        "height": "11 - 12",
        "weight": "28",
        "life_span": "9 - 11 years",
        "temperament": "Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright",
        "image": "https://cdn2.thedogapi.com/images/HyWNfxc47.jpg"
    },
    {
        "name": "German Pinscher",
        "id": 114,
        "height": "17 - 20",
        "weight": "25 - 45",
        "life_span": "12 - 14 years",
        "temperament": "Spirited, Lively, Intelligent, Loving, Even Tempered, Familial",
        "image": "https://cdn2.thedogapi.com/images/B1u4zgqE7.jpg"
    },
    {
        "name": "German Shepherd Dog",
        "id": 115,
        "height": "22 - 26",
        "weight": "50 - 90",
        "life_span": "10 - 13 years",
        "temperament": "Alert, Loyal, Obedient, Curious, Confident, Intelligent, Watchful, Courageous",
        "image": "https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg"
    },
    {
        "name": "German Shorthaired Pointer",
        "id": 116,
        "height": "21 - 25",
        "weight": "45 - 70",
        "life_span": "12 - 14 years",
        "temperament": "Boisterous, Bold, Affectionate, Intelligent, Cooperative, Trainable",
        "image": "https://cdn2.thedogapi.com/images/SJqBMg5Nm.jpg"
    },
    {
        "name": "Giant Schnauzer",
        "id": 119,
        "height": "23.5 - 27.5",
        "weight": "65 - 90",
        "life_span": "10 - 12 years",
        "temperament": "Strong Willed, Kind, Loyal, Intelligent, Dominant, Powerful",
        "image": "https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg"
    },
    {
        "name": "Glen of Imaal Terrier",
        "id": 120,
        "height": "12.5 - 14",
        "weight": "32 - 40",
        "life_span": "12 - 15 years",
        "temperament": "Spirited, Agile, Loyal, Gentle, Active, Courageous",
        "image": "https://cdn2.thedogapi.com/images/H1oLMe94m.jpg"
    },
    {
        "name": "Golden Retriever",
        "id": 121,
        "height": "21.5 - 24",
        "weight": "55 - 75",
        "life_span": "10 - 12 years",
        "temperament": "Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident",
        "image": "https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg"
    },
    {
        "name": "Gordon Setter",
        "id": 123,
        "height": "23 - 27",
        "weight": "45 - 80",
        "life_span": "10 - 12 years",
        "temperament": "Fearless, Alert, Loyal, Confident, Gay, Eager",
        "image": "https://cdn2.thedogapi.com/images/SJ5vzx5NX.jpg"
    },
    {
        "name": "Great Dane",
        "id": 124,
        "height": "28 - 32",
        "weight": "110 - 190",
        "life_span": "7 - 10 years",
        "temperament": "Friendly, Devoted, Reserved, Gentle, Confident, Loving",
        "image": "https://cdn2.thedogapi.com/images/B1Edfl9NX.jpg"
    },
    {
        "name": "Great Pyrenees",
        "id": 125,
        "height": "25 - 32",
        "weight": "85 - 115",
        "life_span": "10 - 12 years",
        "temperament": "Strong Willed, Fearless, Affectionate, Patient, Gentle, Confident",
        "image": "https://cdn2.thedogapi.com/images/B12uzg9V7.png"
    },
    {
        "name": "Greyhound",
        "id": 127,
        "height": "27 - 30",
        "weight": "50 - 70",
        "life_span": "10 - 13 years",
        "temperament": "Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered",
        "image": "https://cdn2.thedogapi.com/images/ryNYMx94X.jpg"
    },
    {
        "name": "Griffon Bruxellois",
        "id": 128,
        "height": "9 - 11",
        "weight": "12",
        "life_span": "10 – 15 years",
        "temperament": "Self-important, Inquisitive, Alert, Companionable, Sensitive, Watchful",
        "image": "https://cdn2.thedogapi.com/images/ryoYGec4Q.jpg"
    },
    {
        "name": "Harrier",
        "id": 129,
        "height": "18 - 22",
        "weight": "40 - 60",
        "life_span": "12 - 15 years",
        "temperament": "Outgoing, Friendly, Cheerful, Sweet-Tempered, Tolerant, Active",
        "image": "https://cdn2.thedogapi.com/images/B1IcfgqE7.jpg"
    },
    {
        "name": "Havanese",
        "id": 130,
        "height": "8.5 - 11.5",
        "weight": "7 - 13",
        "life_span": "14 - 15 years",
        "temperament": "Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/rkXiGl9V7.jpg"
    },
    {
        "name": "Irish Setter",
        "id": 134,
        "height": "24 - 27",
        "weight": "35 - 70",
        "life_span": "10 - 11 years",
        "temperament": "Affectionate, Energetic, Lively, Independent, Playful, Companionable",
        "image": "https://cdn2.thedogapi.com/images/S1osGeqVm.jpg"
    },
    {
        "name": "Irish Terrier",
        "id": 135,
        "height": "18",
        "weight": "25 - 27",
        "life_span": "12 - 16 years",
        "temperament": "Respectful, Lively, Intelligent, Dominant, Protective, Trainable",
        "image": "https://cdn2.thedogapi.com/images/By-hGecVX.jpg"
    },
    {
        "name": "Irish Wolfhound",
        "id": 137,
        "height": "30 - 35",
        "weight": "105 - 180",
        "life_span": "6 - 8 years",
        "temperament": "Sweet-Tempered, Loyal, Dignified, Patient, Thoughtful, Generous",
        "image": "https://cdn2.thedogapi.com/images/Hyd2zgcEX.jpg"
    },
    {
        "name": "Italian Greyhound",
        "id": 138,
        "height": "13 - 15",
        "weight": "7 - 15",
        "life_span": "12 - 15 years",
        "temperament": "Mischievous, Affectionate, Agile, Athletic, Companionable, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/SJAnzg9NX.jpg"
    },
    {
        "name": "Japanese Chin",
        "id": 140,
        "height": "8 - 11",
        "weight": "4 - 9",
        "life_span": "12 - 14 years",
        "temperament": "Alert, Loyal, Independent, Intelligent, Loving, Cat-like",
        "image": "https://cdn2.thedogapi.com/images/r1H6feqEm.jpg"
    },
    {
        "name": "Japanese Spitz",
        "id": 141,
        "height": "12 - 15",
        "weight": "15 - 19",
        "life_span": "10 – 16 years",
        "temperament": "Affectionate, Obedient, Playful, Companionable, Intelligent, Proud",
        "image": "https://cdn2.thedogapi.com/images/HksaMxqNX.jpg"
    },
    {
        "name": "Keeshond",
        "id": 142,
        "height": "17 - 18",
        "weight": "35 - 45",
        "life_span": "12 - 15 years",
        "temperament": "Agile, Obedient, Playful, Quick, Sturdy, Bright",
        "image": "https://cdn2.thedogapi.com/images/S1GAGg9Vm.jpg"
    },
    {
        "name": "Komondor",
        "id": 144,
        "height": "25.5 - 27.5",
        "weight": "80 - 100",
        "life_span": "10 - 12 years",
        "temperament": "Steady, Fearless, Affectionate, Independent, Gentle, Calm",
        "image": "https://cdn2.thedogapi.com/images/Bko0fl547.jpg"
    },
    {
        "name": "Kooikerhondje",
        "id": 145,
        "height": "14 - 16",
        "weight": "20 - 30",
        "life_span": "12 - 15 years",
        "temperament": "Benevolent, Agile, Alert, Intelligent, Active, Territorial",
        "image": "https://cdn2.thedogapi.com/images/kOMy84GQE.jpg"
    },
    {
        "name": "Kuvasz",
        "id": 147,
        "height": "26 - 30",
        "weight": "70 - 115",
        "life_span": "8 - 10 years",
        "temperament": "Clownish, Loyal, Patient, Independent, Intelligent, Protective",
        "image": "https://cdn2.thedogapi.com/images/BykZ7ecVX.jpg"
    },
    {
        "name": "Labrador Retriever",
        "id": 149,
        "height": "21.5 - 24.5",
        "weight": "55 - 80",
        "life_span": "10 - 13 years",
        "temperament": "Kind, Outgoing, Agile, Gentle, Intelligent, Trusting, Even Tempered",
        "image": "https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg"
    },
    {
        "name": "Lagotto Romagnolo",
        "id": 151,
        "height": "16 - 19",
        "weight": "24 - 35",
        "life_span": "14 - 16 years",
        "temperament": "Keen, Loyal, Companionable, Loving, Active, Trainable",
        "image": "https://cdn2.thedogapi.com/images/ryzzmgqE7.jpg"
    },
    {
        "name": "Lancashire Heeler",
        "id": 153,
        "height": "10 - 12",
        "weight": "6 - 13",
        "life_span": "12 – 15 years",
        "temperament": "Clever, Friendly, Alert, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/S1RGml5Em.jpg"
    },
    {
        "name": "Leonberger",
        "id": 155,
        "height": "25.5 - 31.5",
        "weight": "120 - 170",
        "life_span": "6 - 8 years",
        "temperament": "Obedient, Fearless, Loyal, Companionable, Adaptable, Loving",
        "image": "https://cdn2.thedogapi.com/images/ByrmQlqVm.jpg"
    },
    {
        "name": "Lhasa Apso",
        "id": 156,
        "height": "10 - 11",
        "weight": "12 - 18",
        "life_span": "12 - 15 years",
        "temperament": "Steady, Fearless, Friendly, Devoted, Assertive, Spirited, Energetic, Lively, Alert, Obedient, Playful, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/SJp7Qe5EX.jpg"
    },
    {
        "name": "Maltese",
        "id": 161,
        "height": "8 - 10",
        "weight": "4 - 7",
        "life_span": "15 - 18 years",
        "temperament": "Playful, Docile, Fearless, Affectionate, Sweet-Tempered, Lively, Responsive, Easygoing, Gentle, Intelligent, Active",
        "image": "https://cdn2.thedogapi.com/images/B1SV7gqN7.jpg"
    },
    {
        "name": "Miniature American Shepherd",
        "id": 165,
        "height": "13 - 18",
        "weight": "20 - 40",
        "life_span": "12 - 15 years",
        "temperament": "Energetic, Loyal, Intelligent, Trainable",
        "image": "https://cdn2.thedogapi.com/images/BkHHQgcN7.jpg"
    },
    {
        "name": "Miniature Pinscher",
        "id": 167,
        "height": "10 - 12.5",
        "weight": "8 - 11",
        "life_span": "15 years",
        "temperament": "Clever, Outgoing, Friendly, Energetic, Responsive, Playful",
        "image": "https://cdn2.thedogapi.com/images/Hy3H7g94X.jpg"
    },
    {
        "name": "Miniature Schnauzer",
        "id": 168,
        "height": "12 - 14",
        "weight": "11 - 20",
        "life_span": "12 - 14 years",
        "temperament": "Fearless, Friendly, Spirited, Alert, Obedient, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/SJIUQl9NX.jpg"
    },
    {
        "name": "Newfoundland",
        "id": 171,
        "height": "26 - 28",
        "weight": "100 - 150",
        "life_span": "8 - 10 years",
        "temperament": "Sweet-Tempered, Gentle, Trainable",
        "image": "https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg"
    },
    {
        "name": "Norfolk Terrier",
        "id": 172,
        "height": "9 - 10",
        "weight": "11 - 12",
        "life_span": "12 - 15 years",
        "temperament": "Self-confidence, Fearless, Spirited, Companionable, Happy, Lovable",
        "image": "https://cdn2.thedogapi.com/images/B1ADQg94X.jpg"
    },
    {
        "name": "Norwich Terrier",
        "id": 176,
        "height": "10",
        "weight": "11 - 12",
        "life_span": "12 - 15 years",
        "temperament": "Hardy, Affectionate, Energetic, Sensitive, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/BkgKXlqE7.jpg"
    },
    {
        "name": "Nova Scotia Duck Tolling Retriever",
        "id": 177,
        "height": "17 - 21",
        "weight": "35 - 50",
        "life_span": "12 - 14 years",
        "temperament": "Outgoing, Alert, Patient, Intelligent, Loving",
        "image": "https://cdn2.thedogapi.com/images/SyYtQe5V7.jpg"
    },
    {
        "name": "Old English Sheepdog",
        "id": 178,
        "height": "21",
        "weight": "60 - 100",
        "life_span": "10 - 12 years",
        "temperament": "Sociable, Bubbly, Playful, Adaptable, Intelligent, Loving",
        "image": "https://cdn2.thedogapi.com/images/HkZ57lq4m.jpg"
    },
    {
        "name": "Olde English Bulldogge",
        "id": 179,
        "height": "15 - 19",
        "weight": "65 – 85",
        "life_span": "9 – 14 years",
        "temperament": "Friendly, Alert, Confident, Loving, Courageous, Strong",
        "image": "https://cdn2.thedogapi.com/images/B1d5me547.jpg"
    },
    {
        "name": "Papillon",
        "id": 181,
        "height": "8 - 11",
        "weight": "3 - 12",
        "life_span": "13 - 17 years",
        "temperament": "Hardy, Friendly, Energetic, Alert, Intelligent, Happy",
        "image": "https://cdn2.thedogapi.com/images/SkJj7e547.jpg"
    },
    {
        "name": "Pekingese",
        "id": 183,
        "height": "6 - 9",
        "weight": "14",
        "life_span": "14 - 18 years",
        "temperament": "Opinionated, Good-natured, Stubborn, Affectionate, Aggressive, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/ByIiml9Nm.jpg"
    },
    {
        "name": "Pembroke Welsh Corgi",
        "id": 184,
        "height": "10 - 12",
        "weight": "25 - 30",
        "life_span": "12 - 14 years",
        "temperament": "Tenacious, Outgoing, Friendly, Bold, Playful, Protective",
        "image": "https://cdn2.thedogapi.com/images/rJ6iQeqEm.jpg"
    },
    {
        "name": "Perro de Presa Canario",
        "id": 185,
        "height": "22 - 25.5",
        "weight": "88 - 110",
        "life_span": "10 - 12 years",
        "temperament": "Strong Willed, Suspicious, Gentle, Dominant, Calm",
        "image": "https://cdn2.thedogapi.com/images/S1V3Qeq4X.jpg"
    },
    {
        "name": "Pharaoh Hound",
        "id": 188,
        "height": "21 - 25",
        "weight": "40 - 60",
        "life_span": "12 - 14 years",
        "temperament": "Affectionate, Sociable, Playful, Intelligent, Active, Trainable",
        "image": "https://cdn2.thedogapi.com/images/Byz6mgqEQ.jpg"
    },
    {
        "name": "Plott",
        "id": 189,
        "height": "20 - 25",
        "weight": "40 - 60",
        "life_span": "12 - 14 years",
        "temperament": "Bold, Alert, Loyal, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/B1i67l5VQ.jpg"
    },
    {
        "name": "Pomeranian",
        "id": 193,
        "height": "8 - 12",
        "weight": "3 - 7",
        "life_span": "15 years",
        "temperament": "Extroverted, Friendly, Sociable, Playful, Intelligent, Active",
        "image": "https://cdn2.thedogapi.com/images/HJd0XecNX.jpg"
    },
    {
        "name": "Poodle (Miniature)",
        "id": 196,
        "height": "11 - 15",
        "weight": "15 - 17",
        "life_span": "12 – 15 years",
        "image": "https://cdn2.thedogapi.com/images/Hkxk4ecVX.jpg"
    },
    {
        "name": "Poodle (Toy)",
        "id": 197,
        "height": "9 - 11",
        "weight": "6 - 9",
        "life_span": "18 years",
        "image": "https://cdn2.thedogapi.com/images/rJFJVxc4m.jpg"
    },
    {
        "name": "Pug",
        "id": 201,
        "height": "10 - 12",
        "weight": "14 - 18",
        "life_span": "12 - 14 years",
        "temperament": "Docile, Clever, Charming, Stubborn, Sociable, Playful, Quiet, Attentive",
        "image": "https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg"
    },
    {
        "name": "Puli",
        "id": 204,
        "height": "16 - 17",
        "weight": "25 - 35",
        "life_span": "12 - 16 Years years",
        "temperament": "Energetic, Agile, Loyal, Obedient, Intelligent, Faithful",
        "image": "https://cdn2.thedogapi.com/images/ryPgVl5N7.jpg"
    },
    {
        "name": "Pumi",
        "id": 205,
        "height": "15 - 18.5",
        "weight": "18 - 33",
        "life_span": "13 - 15 years",
        "temperament": "Lively, Reserved, Intelligent, Active, Protective, Vocal",
        "image": "https://cdn2.thedogapi.com/images/SyRe4xcN7.jpg"
    },
    {
        "name": "Rat Terrier",
        "id": 207,
        "height": "10 - 13",
        "weight": "8 - 25",
        "life_span": "12 - 18 years",
        "temperament": "Affectionate, Lively, Inquisitive, Alert, Intelligent, Loving",
        "image": "https://cdn2.thedogapi.com/images/HkXWNl9E7.jpg"
    },
    {
        "name": "Redbone Coonhound",
        "id": 208,
        "height": "21 - 27",
        "weight": "45 - 80",
        "life_span": "10 - 12 years",
        "temperament": "Affectionate, Energetic, Independent, Companionable, Familial, Unflappable",
        "image": "https://cdn2.thedogapi.com/images/HJMzEl5N7.jpg"
    },
    {
        "name": "Rhodesian Ridgeback",
        "id": 209,
        "height": "24 - 27",
        "weight": "75 - 80",
        "life_span": "10 - 12 years",
        "temperament": "Strong Willed, Mischievous, Loyal, Dignified, Sensitive, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/By9zNgqE7.jpg"
    },
    {
        "name": "Rottweiler",
        "id": 210,
        "height": "22 - 27",
        "weight": "75 - 110",
        "life_span": "8 - 10 years",
        "temperament": "Steady, Good-natured, Fearless, Devoted, Alert, Obedient, Confident, Self-assured, Calm, Courageous",
        "image": "https://cdn2.thedogapi.com/images/r1xXEgcNX.jpg"
    },
    {
        "name": "Russian Toy",
        "id": 211,
        "height": "7.5 - 10.5",
        "weight": "3 - 6",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/HkP7Vxc4Q.jpg"
    },
    {
        "name": "Saint Bernard",
        "id": 212,
        "height": "25.5 - 27.5",
        "weight": "130 - 180",
        "life_span": "7 - 10 years",
        "temperament": "Friendly, Lively, Gentle, Watchful, Calm",
        "image": "https://cdn2.thedogapi.com/images/_Qf9nfRzL.png"
    },
    {
        "name": "Saluki",
        "id": 213,
        "height": "23 - 28",
        "weight": "35 - 65",
        "life_span": "12 - 14 years",
        "temperament": "Aloof, Reserved, Intelligent, Quiet",
        "image": "https://cdn2.thedogapi.com/images/fjFIuehNo.jpg"
    },
    {
        "name": "Samoyed",
        "id": 214,
        "height": "19 - 23.5",
        "weight": "50 - 60",
        "life_span": "12 - 14 years",
        "temperament": "Stubborn, Friendly, Sociable, Lively, Alert, Playful",
        "image": "https://cdn2.thedogapi.com/images/S1T8Ee9Nm.jpg"
    },
    {
        "name": "Schipperke",
        "id": 216,
        "height": "10 - 13",
        "weight": "10 - 16",
        "life_span": "13 - 15 years",
        "temperament": "Fearless, Agile, Curious, Independent, Confident, Faithful",
        "image": "https://cdn2.thedogapi.com/images/SyBvVgc47.jpg"
    },
    {
        "name": "Scottish Deerhound",
        "id": 218,
        "height": "28 - 32",
        "weight": "70 - 130",
        "life_span": "8 - 10 years",
        "temperament": "Docile, Friendly, Dignified, Gentle",
        "image": "https://cdn2.thedogapi.com/images/SkNjqx9NQ.jpg"
    },
    {
        "name": "Scottish Terrier",
        "id": 219,
        "height": "10",
        "weight": "18 - 22",
        "life_span": "11 - 13 years",
        "temperament": "Feisty, Alert, Independent, Playful, Quick, Self-assured",
        "image": "https://cdn2.thedogapi.com/images/Bklnce5NX.jpg"
    },
    {
        "name": "Shetland Sheepdog",
        "id": 221,
        "height": "13 - 16",
        "weight": "30",
        "life_span": "12 - 14 years",
        "temperament": "Affectionate, Lively, Responsive, Alert, Loyal, Reserved, Playful, Gentle, Intelligent, Active, Trainable, Strong",
        "image": "https://cdn2.thedogapi.com/images/rJa29l9E7.jpg"
    },
    {
        "name": "Shiba Inu",
        "id": 222,
        "height": "13.5 - 16.5",
        "weight": "17 - 23",
        "life_span": "12 - 16 years",
        "temperament": "Charming, Fearless, Keen, Alert, Confident, Faithful",
        "image": "https://cdn2.thedogapi.com/images/Zn3IjPX3f.jpg"
    },
    {
        "name": "Shih Tzu",
        "id": 223,
        "height": "8 - 11",
        "weight": "9 - 16",
        "life_span": "10 - 18 years",
        "temperament": "Clever, Spunky, Outgoing, Friendly, Affectionate, Lively, Alert, Loyal, Independent, Playful, Gentle, Intelligent, Happy, Active, Courageous",
        "image": "https://cdn2.thedogapi.com/images/BkrJjgcV7.jpg"
    },
    {
        "name": "Shiloh Shepherd",
        "id": 225,
        "height": "26 - 30",
        "weight": "120 - 140",
        "life_span": "9 – 14 years",
        "temperament": "Outgoing, Loyal, Companionable, Gentle, Loving, Trainable",
        "image": "https://cdn2.thedogapi.com/images/SJJxjecEX.jpg"
    },
    {
        "name": "Siberian Husky",
        "id": 226,
        "height": "20 - 23.5",
        "weight": "35 - 60",
        "life_span": "12 years",
        "temperament": "Outgoing, Friendly, Alert, Gentle, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/S17ZilqNm.jpg"
    },
    {
        "name": "Silky Terrier",
        "id": 228,
        "height": "9 - 10",
        "weight": "8 - 10",
        "life_span": "12 - 15 years",
        "temperament": "Friendly, Responsive, Inquisitive, Alert, Quick, Joyful",
        "image": "https://cdn2.thedogapi.com/images/ByzGsl5Nm.jpg"
    },
    {
        "name": "Smooth Fox Terrier",
        "id": 232,
        "height": "15.5",
        "weight": "up - 18",
        "life_span": "12 - 14 years",
        "temperament": "Fearless, Affectionate, Alert, Playful, Intelligent, Active",
        "image": "https://cdn2.thedogapi.com/images/Syszjx9Em.jpg"
    },
    {
        "name": "Soft Coated Wheaten Terrier",
        "id": 233,
        "height": "16 - 18",
        "weight": "30 - 40",
        "life_span": "12 - 15 years",
        "temperament": "Affectionate, Spirited, Energetic, Playful, Intelligent, Faithful",
        "image": "https://cdn2.thedogapi.com/images/HJHmix5NQ.jpg"
    },
    {
        "name": "Spanish Water Dog",
        "id": 235,
        "height": "16 - 20",
        "weight": "30 - 50",
        "life_span": "12 - 15 years",
        "temperament": "Trainable, Diligent, Affectionate, Loyal, Athletic, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/HJf4jl9VX.jpg"
    },
    {
        "name": "Spinone Italiano",
        "id": 236,
        "height": "22.5 - 27.5",
        "weight": "61 - 85",
        "life_span": "10 - 12 years",
        "temperament": "Docile, Friendly, Affectionate, Loyal, Patient, Gentle",
        "image": "https://cdn2.thedogapi.com/images/rk5Eoe5Nm.jpg"
    },
    {
        "name": "Staffordshire Bull Terrier",
        "id": 238,
        "height": "14 - 16",
        "weight": "24 - 38",
        "life_span": "12 - 14 years",
        "temperament": "Reliable, Fearless, Bold, Affectionate, Loyal, Intelligent, Courageous",
        "image": "https://cdn2.thedogapi.com/images/H1zSie9V7.jpg"
    },
    {
        "name": "Standard Schnauzer",
        "id": 239,
        "height": "17.5 - 19.5",
        "weight": "30 - 50",
        "life_span": "13 - 15 years",
        "temperament": "Trainable, Good-natured, Devoted, Lively, Playful, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/tmzeu6ID_.jpg"
    },
    {
        "name": "Swedish Vallhund",
        "id": 242,
        "height": "11.5 - 13.5",
        "weight": "20 - 30",
        "life_span": "12 - 14 years",
        "temperament": "Fearless, Friendly, Energetic, Alert, Intelligent, Watchful",
        "image": "https://cdn2.thedogapi.com/images/HJ-Dix94Q.jpg"
    },
    {
        "name": "Thai Ridgeback",
        "id": 243,
        "height": "20 - 24",
        "weight": "35 - 55",
        "life_span": "10 - 12 years",
        "temperament": "Protective, Loyal, Independent, Intelligent, Loving, Familial",
        "image": "https://cdn2.thedogapi.com/images/zv89hR-O8.jpg"
    },
    {
        "name": "Tibetan Mastiff",
        "id": 244,
        "height": "24 - 26",
        "weight": "85 - 140",
        "life_span": "10 - 14 years",
        "temperament": "Strong Willed, Tenacious, Aloof, Stubborn, Intelligent, Protective",
        "image": "https://cdn2.thedogapi.com/images/SkM9sec47.jpg"
    },
    {
        "name": "Tibetan Spaniel",
        "id": 245,
        "height": "10",
        "weight": "9 - 15",
        "life_span": "12 - 15 years",
        "temperament": "Willful, Aloof, Assertive, Independent, Playful, Intelligent, Happy",
        "image": "https://cdn2.thedogapi.com/images/Hyjcol947.jpg"
    },
    {
        "name": "Tibetan Terrier",
        "id": 246,
        "height": "14 - 17",
        "weight": "20 - 24",
        "life_span": "12 - 15 years",
        "temperament": "Affectionate, Energetic, Amiable, Reserved, Gentle, Sensitive",
        "image": "https://cdn2.thedogapi.com/images/6f5n_42mB.jpg"
    },
    {
        "name": "Toy Fox Terrier",
        "id": 248,
        "height": "8 - 11",
        "weight": "4 - 9",
        "life_span": "12 - 15 years",
        "temperament": "Friendly, Spirited, Alert, Loyal, Playful, Intelligent",
        "image": "https://cdn2.thedogapi.com/images/B17ase9V7.jpg"
    },
    {
        "name": "Treeing Walker Coonhound",
        "id": 250,
        "height": "20 - 27",
        "weight": "45 - 80",
        "life_span": "10 - 13 years",
        "temperament": "Clever, Affectionate, Confident, Intelligent, Loving, Trainable",
        "image": "https://cdn2.thedogapi.com/images/SkRpsgc47.jpg"
    },
    {
        "name": "Vizsla",
        "id": 251,
        "height": "21 - 24",
        "weight": "50 - 65",
        "life_span": "10 - 14 years",
        "temperament": "Affectionate, Energetic, Loyal, Gentle, Quiet",
        "image": "https://cdn2.thedogapi.com/images/r1o0jx9Em.jpg"
    },
    {
        "name": "Weimaraner",
        "id": 253,
        "height": "23 - 27",
        "weight": "55 - 90",
        "life_span": "12 - 15 years",
        "temperament": "Steady, Aloof, Stubborn, Energetic, Alert, Intelligent, Powerful, Fast",
        "image": "https://cdn2.thedogapi.com/images/SyU12l9V7.jpg"
    },
    {
        "name": "Welsh Springer Spaniel",
        "id": 254,
        "height": "17 - 19",
        "weight": "35 - 55",
        "life_span": "12 - 15 years",
        "temperament": "Stubborn, Friendly, Affectionate, Loyal, Playful, Active",
        "image": "https://cdn2.thedogapi.com/images/BJ1gnx5Vm.jpg"
    },
    {
        "name": "West Highland White Terrier",
        "id": 256,
        "height": "10 - 11",
        "weight": "15 - 22",
        "life_span": "15 - 20 years",
        "temperament": "Hardy, Friendly, Alert, Independent, Gay, Active, Courageous",
        "image": "https://cdn2.thedogapi.com/images/Bkdx2g5Em.jpg"
    },
    {
        "name": "Whippet",
        "id": 257,
        "height": "18 - 22",
        "weight": "25 - 35",
        "life_span": "12 - 15 years",
        "temperament": "Friendly, Affectionate, Lively, Gentle, Intelligent, Quiet",
        "image": "https://cdn2.thedogapi.com/images/Hyv-ne94m.jpg"
    },
    {
        "name": "White Shepherd",
        "id": 258,
        "height": "22 - 25",
        "weight": "60 - 85",
        "life_span": "12 – 14 years",
        "temperament": "Self-confidence, Aloof, Fearless, Alert, Companionable, Eager",
        "image": "https://cdn2.thedogapi.com/images/r14M3e9E7.jpg"
    },
    {
        "name": "Wire Fox Terrier",
        "id": 259,
        "height": "13 - 16",
        "weight": "15 - 19",
        "life_span": "13 – 14 years",
        "temperament": "Fearless, Friendly, Bold, Keen, Alert, Quick",
        "image": "https://cdn2.thedogapi.com/images/SJ6f2g9EQ.jpg"
    },
    {
        "name": "Wirehaired Pointing Griffon",
        "id": 260,
        "height": "20 - 24",
        "weight": "45 - 70",
        "life_span": "12 - 14 years",
        "temperament": "Loyal, Gentle, Vigilant, Trainable, Proud",
        "image": "https://cdn2.thedogapi.com/images/Bkam2l9Vm.jpg"
    },
    {
        "name": "Wirehaired Vizsla",
        "id": 261,
        "height": "21.5 - 25",
        "weight": "45 - 65",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/r1I4hl5Em.jpg"
    },
    {
        "name": "Xoloitzcuintli",
        "id": 262,
        "height": "10 - 23",
        "weight": "9 - 31",
        "life_span": "12 - 14 years",
        "temperament": "Cheerful, Alert, Companionable, Intelligent, Protective, Calm",
        "image": "https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg"
    },
    {
        "name": "Yorkshire Terrier",
        "id": 264,
        "height": "8 - 9",
        "weight": "4 - 7",
        "life_span": "12 - 16 years",
        "temperament": "Bold, Independent, Confident, Intelligent, Courageous",
        "image": "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg"
    }
];



// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------

Json_to_Jscript(Api_Breeds);


