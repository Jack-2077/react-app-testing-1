const quotes = [
  {
    text: "Drainage! Drainage, Eli, you boy. Drained dry. I'm so sorry. Here, if you have a milkshake, and I have a milkshake, and I have a straw. There it is, that's a straw, you see? You watching? And my straw reaches across the room, and starts to drink your milkshake. I... drink... your... milkshake! I drink it up! Did you think your song and dance and your superstition would help you, Eli? I am the Third Revelation! I am who the Lord has chosen!",
    id: 1,
  },
  {
    text: 'It was there at that round window in the far heights, lonely and forgotten, that I began to feel sorry for her. Sorry for the whole situation. I began to think about the contract and the danger that was apparent. Although the admins tried to arrange things in the safest way possible, kids get themselves into predicaments that can end in tragedy. It did for Aeva; it could for us. And for what?',
    id: 2,
  },
  {
    text: "If you are able to step out of your own skin and view your body as in a dream, you see some pretty eye-opening things about yourself. People say that they can do that all the time, but they can't. One usually goes their entire life oblivious to what they are, and that's fine. But in my circumstance, I had the very rare occasion to see myself from the outside looking in.",
    id: 2,
  },
  {
    text: "What do tigers dream of when they take their little tiger snooze? Do they dream of mauling zebras or Halle Berry in her Catwoman suit? Don't you worry your pretty striped head, we're gonna get you back to Tyson and your cozy tiger bed. And then we're gonna find our best friend Doug, and then we're gonna give him a best friend hug. Doug, Doug, oh, Doug, Dougie, Dougie, Doug, Doug! But if he's been murdered by crystal meth tweakers... well then we're shit out of luck.",
    id: 3,
  },
  {
    text: "Don't you realize that being nice just makes you get hurt? Look at yourself. You made all these great friends... But now, you'll probably never see them again. Not to mention how much they've been set back by you. Hurts, doesn't it? If you had just gone through without caring about anyone, you wouldn't have to feel bad now. So I don't get it. If you really did everything the right way, why did things still end up like this?",
    id: 4,
  },
  {
    text: "He strolled to the counter where another cup of my favourite coffee-a frothy cappuccino-was placed. Kabir set it in the front of me, smiling gently. I am sure, one day, I will be here, pouring coffee and fetching people their orders, as I listen to you up there. The place is going to be packed; you will see. He smiled at the thought and I wondered for a moment if this was my dream or his. Of course, as friends, even our dreams would work in unison, wouldn't they?",
    id: 5,
  },
  {
    text: "Every single step that we take is influenced by others. Only the part that we hide from everyone else and keep deep within our heart, is our own. Go, live that part. Live your life. Don't let your dreams die within you. Trust me, your struggle, your fight, will be worth the risk in opening yourself up. Get up. Inhale the air of passion. Start your journey. Grab your dreams. Enjoy your mistakes. Dance to the rhythm of your heartbeats. Smile. Laugh. Love. Live.",
    id: 6,
  },
  {
    text: "You send me something like that and then you don't pick up your phone? I'm trying to have a nice peaceful dinner with my family, which is something you wouldn't understand because you don't have one. You wanna play mind games with me? Huh? Well so whatever you meant by your little link, I meant when I said I want you out of my apartment tonight! And I want confirmation! By text, not a link. Via text, \"Howie, I am gone!\" Don't you call me!",
    id: 7,
  },
  {
    text: "But would you kindly ponder this question: What would your good do if evil didn't exist, and what would the earth look like if all the shadows disappeared? After all, shadows are cast by things and people. Here is the shadow of my sword. But shadows also come from trees and living beings. Do you want to strip the earth of all trees and living things just because of your fantasy of enjoying naked light? You're stupid.",
    id: 8,
  },
  {
    text: "Kabir, the manager, paused in his duties and addressed me, When are you going to stop dreaming about being an author, Meera, and finally write a book? His voice might have sounded stern to an outsider, but Kabir had become my good friend. I'm not sure when, but at some point while I was becoming a regular visitor to his cafe, our casual conversation had blossomed into a warm friendship. He respected my opinions, and I treasured his. I don't know, I said, frowning.",
    id: 9,
  },
  {
    text: "I walked back home. The narrow lanes of the old city were bustling with the evening crowd. My house and Ishaan's were only half a kilometre apart. Everything in my world fell between this distance. I passed by the Nana park, extra packed with kids playing cricket as India had won the match. I played here almost every day of my school life. We still come here sometimes, but now we prefer the abandoned bank branch compound near my home.",
    id: 10,
  },
  {
    text: 'Last night I dreamt I went to Manderley again. It seemed to me I stood by the iron gate leading to the drive, and for a while I could not enter for the way was barred to me. There was a padlock and a chain upon the gate. I called in my dream to the lodge-keeper, and had no answer, and peering closer through the rusted spokes of the gate I saw that the lodge was uninhabited. No smoke came from the chimney, and the little lattice windows gaped forlorn.',
    id: 11,
  },
  {
    text: "Emma puts her head on Wallace's shoulder but she won't say anything either, can't bring herself to. No one does. No one ever does. Silence is their way of getting by, because if they are silent long enough, then this moment of minor discomfort will pass for them, will fold down into the landscape of the evening as if it never happened. Only Wallace will remember it. That's the frustrating part. Wallace is the only one for whom this is a humiliation.",

    id: 12,
  },
  {
    text: "When you don't know that you're wrong, or just how wrong you are. My feet are always heavy, as I inch toward the door. I thought we'd leave us for ourselves, a hundred times before, but I guess we're always leaving, even when we look the same. And it eases me somehow to know that even this will change. If you've got some light in you, then go before it's gone - burn your fire for no witness, it's the only way it's done.",
    id: 13,
  },
  {
    text: 'During my lifetime I have dedicated myself to this struggle of the African people. I have fought against white domination, and I have fought against black domination. I have cherished the ideal of a democratic and free society in which all persons live together in harmony and with equal opportunities. It is an ideal which I hope to live for and to achieve. But if needs be, it is an ideal for which I am prepared to die.',
    id: 14,
  },
];

function pickRandomeQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const item = quotes[randomIndex];
  return item.text;
}

export default pickRandomeQuote;
