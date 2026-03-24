import charlie from '../assets/blog_images/wf.jpg';
import wf_office from '../assets/blog_images/wf_office.jpg';
import nyc_food from '../assets/blog_images/nyc_food.jpg';
import orlando from '../assets/blog_images/orlando.jpg';
import beli from '../assets/blog_images/beli.png';

export const blogs = [
  {
    id: 1,
    title: "Summer 2025: NYC life, APIs, Beli-maxxing",
    date: "March 24, 2026",
    summary: "Reflecting on my summer in New York",
    content: [
      {
        type: 'image',
        src: wf_office,
        alt: 'Wells Fargo Office',
        caption: 'Wells Fargo Office in Hudson Yards'
      },
      `Last summer, I was lucky enough to live out the dream I had imagined since starting college: working as a software engineer in NYC. Growing up in the suburbs of Ohio, every trip to New York made me want to live there: the honking car horns urging you forward, the skyscrapers lifting your eyes and ambitions higher, and, of course, the $1 pizza slice on every corner.`,

      {
        type: 'image',
        src: charlie,
        alt: 'Me and CEO Charlie Scharf!',
        caption: 'Selfie with CEO Charlie Scharf!'
      },
      
      `Joining Wells Fargo's Chief Technology Office as an intern on the Network Automation team, I worked on a very early-stage project where I got to write the core APIs for device authentication across the network and help design the database schema. As I had previous experience with Python and Django from hackathons and personal projects, my manager was kind enough to let me take on harder tickets and experiment with AI to build fun automation tools (such as an automated Confluence doc updater). Overall, I learned so much in just 10 weeks about working with distributed databases, networking (both with coworkers and systems), and the finance and banking industry as a whole.`,
      
      {
        type: 'image',
        src: orlando,
        alt: 'Friends in Orlando',
        caption: 'A handful of the wonderful intern friends I met (Shoutout to Wells Fargo for flying all 1,200+ interns out to Orlando for the first week!)'
      },

      `Growing up, I had only ever visited Times Square and Brooklyn and was oblivious to the other amazing areas in NYC, most notably the Upper West Side. Over the summer, I subleased from a friend at Columbia, giving me a 25-ish minute subway commute from 110th St. down to 34th St. Initially, I was a bit worried about the longer commute, but I didn't mind it at all once I began living there. Thanks to the long subway ride to work, I've now memorized the entire 1 route, learned how to quickly swap subway cars when my initial one has broken A/C, and realized the importance of taking the express trains (something I discovered in my last week there 😅). Having grown attached to the quiet peace and plethora of amazing restaurants in the Upper West Side, I would happily live there in the future.`,

      {
        type: 'image',
        src: beli,
        alt: 'beli ranking',
        caption: 'Lots of damage to my wallet...'
      },

      `Outside of work, I spent most of my time (and money) trying new restaurants and ranking them on Beli (a social network for ranking places to eat). My favorites were Kochi, Adel's Famous Halal Food (shoutout to my friend Yousef for showing me this place!), and Okdongsik. Until this summer, I had never been much of a foodie, nor did I think twice about the food I was eating at a restaurant. However, eating with so many good friends and indulging in exquisite dining experiences was quite eye-opening. A couple of notable realizations from my many meals in NYC were: 1) the true joy of dining is not found in the taste or presentation of the food, but rather in the friends you lock eyes with and smile at while having a mouth full of that first bite; and 2) thinking about the carefully prepared and served food from the chef's perspective, imagining and reflecting on the unique life experiences that led them to create the dish.`,
      
      {
        type: 'image',
        src: nyc_food,
        alt: 'A collection of food I ate',
        caption: 'Some of my favorite bites :)'
      },

      `While I eagerly wait for all the new experiences and bites waiting for me during my summer and fall in the Bay Area, I plan on continuing to reflect on the truly amazing summer I had with my co-interns and friends. NYC will always have a special place in my heart, and I know it's only a matter of time before I return.`,
    ]
  },
  // {
  //   id: 2,
  //   title: "All Things Pole Vault",
  //   date: "TBD, 2026",
  //   summary: "Random bits and pieces from my time as a pole vaulter.",
  //   content: "Full content here..."
  // },
];