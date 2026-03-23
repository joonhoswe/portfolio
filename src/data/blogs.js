import charlie from '../assets/blog_images/wf.jpg';
import wf_office from '../assets/blog_images/wf_office.jpg';

export const blogs = [
  {
    id: 1,
    title: "Summer 2025: NYC life, APIs, Beli-maxxing",
    date: "March 23, 2026",
    summary: "Reflecting on my summer in New York",
    content: [
      {
        type: 'image',
        src: wf_office,
        alt: 'Wells Fargo Office',
        caption: 'Wells Fargo Office in Hudson Yards'
      },
      `Last summer, I was lucky enough to live out the dream I had imagined since starting college: work as a software engineer in NYC. 
      
      Joining Wells Fargo's Chief Technology Office as an intern on the Network Automation team, I worked on a very early-stage project where I got to write the core APIs for device authentication across the network and help design the database schema.`,
      
      {
        type: 'image',
        src: charlie,
        alt: 'Me and CEO Charlie Scharf!',
        caption: 'Selfie with CEO Charlie Scharf!'
      },
      
      `will finish once i'm done studying today :)`
    ]
  },
  {
    id: 2,
    title: "All Things Pole Vault",
    date: "TBD, 2026",
    summary: "Random bits and pieces from my time as a pole vaulter.",
    content: "Full content here..."
  },
];