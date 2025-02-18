document.addEventListener("DOMContentLoaded", function(){
    const verseText = document.getElementById("verseText")
    const generateBtn = document.getElementById("generateBtn")
    const clearBtn = document.getElementById("clearBtn")

    const verses = [
        "Proverbs 3:5-6 - Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        "Isaiah 41:10 - So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
        "Philippians 4:6-7 - Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
        "Joshua 1:9 - Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        "2 Corinthians 12:9 - But he said to me, ‘My grace is sufficient for you, for my power is made perfect in weakness.’ Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me.",
        "Romans 8:28 - And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        "John 3:16 - For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        "Romans 5:8 - But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
        "Ephesians 2:8-9 - For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
        "Psalm 119:105 - Your word is a lamp for my feet, a light on my path.",
        "James 1:5 - If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
        "Colossians 3:2 - Set your minds on things above, not on earthly things.",
        "Matthew 6:33 - But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
        "Psalm 23:1 - The Lord is my shepherd, I lack nothing.",
        "1 Peter 5:7 - Cast all your anxiety on him because he cares for you.",
        "Deuteronomy 31:6 - Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.",
        "Hebrews 11:1 - Now faith is confidence in what we hope for and assurance about what we do not see.",
        "Matthew 11:28 - Come to me, all you who are weary and burdened, and I will give you rest.",
        "Psalm 46:1 - God is our refuge and strength, an ever-present help in trouble.",
        "Romans 12:12 - Be joyful in hope, patient in affliction, faithful in prayer.",
        "Psalm 37:4 - Take delight in the Lord, and he will give you the desires of your heart.",
        "Galatians 6:9 - Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
        "Isaiah 40:31 - But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
        "Jeremiah 29:11 - For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        "Psalm 55:22 - Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.",
        "2 Timothy 1:7 - For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
        "Proverbs 18:10 - The name of the Lord is a fortified tower; the righteous run to it and are safe.",
        "1 Corinthians 10:13 - No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.",
        "Philippians 1:6 - Being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.",
        "Lamentations 3:22-23 - Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
        "1 John 4:19 - We love because he first loved us.",
        "Psalm 34:18 - The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
        "Romans 15:13 - May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
        "Luke 6:31 - Do to others as you would have them do to you.",
        "Ephesians 4:32 - Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
        "Matthew 22:37-39 - Jesus replied: ‘Love the Lord your God with all your heart and with all your soul and with all your mind.’ This is the first and greatest commandment. And the second is like it: ‘Love your neighbor as yourself.’",
        "John 14:6 - Jesus answered, ‘I am the way and the truth and the life. No one comes to the Father except through me.’",
        "1 Thessalonians 5:16-18 - Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus.",
        "Isaiah 26:3 - You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
        "Hebrews 13:8 - Jesus Christ is the same yesterday and today and forever.",
        "Psalm 19:14 - May these words of my mouth and this meditation of my heart be pleasing in your sight, Lord, my Rock and my Redeemer.",
        "Matthew 5:14-16 - You are the light of the world. A town built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it gives light to everyone in the house. In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
        "2 Corinthians 5:7 - For we live by faith, not by sight."
    ]

    generateBtn.addEventListener("click", function(){
        const randomVerse = Math.floor(Math.random() * verses.length)
        verseText.textContent = `"${verses[randomVerse]}"`
    })

    clearBtn.addEventListener("click", function(){
        verseText.textContent = '["Insert Bible Verse Here"]'
    })
})
