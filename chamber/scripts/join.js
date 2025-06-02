
const membershipLevels = [
  {
    id: 'np',
    name: 'NP Membership',
    displayName: 'Non-Profit Membership',
    price: 0,
    priceDisplay: 'Free',
    description: 'Designed for non-profit organizations',
    benefits: [
      'Basic member directory listing',
      'Access to member resources',
      'Monthly newsletter',
      'Community forum access'
    ],
    color: '#6B7280', // Gray
    popular: false
  },
  {
    id: 'bronze',
    name: 'Bronze Membership',
    displayName: 'Bronze Membership',
    price: 299,
    priceDisplay: '$299/year',
    description: 'Perfect for small businesses and startups',
    benefits: [
      'Enhanced directory listing with logo',
      'Access to member resources',
      'Monthly newsletter',
      'Community forum access',
      '10% discount on events',
      'Quarterly networking events'
    ],
    color: '#CD7F32', // Bronze
    popular: false
  },
  {
    id: 'silver',
    name: 'Silver Membership',
    displayName: 'Silver Membership',
    price: 599,
    priceDisplay: '$599/year',
    description: 'Ideal for growing businesses',
    benefits: [
      'Premium directory listing with logo and description',
      'Access to member resources',
      'Monthly newsletter',
      'Community forum access',
      '20% discount on events',
      'Quarterly networking events',
      'Monthly training webinars',
      'Job board posting privileges',
      'Social media promotion (2x per month)'
    ],
    color: '#C0C0C0', // Silver
    popular: true
  },
  {
    id: 'gold',
    name: 'Gold Membership',
    displayName: 'Gold Membership',
    price: 999,
    priceDisplay: '$999/year',
    description: 'Maximum benefits for established businesses',
    benefits: [
      'Featured directory listing with logo, description, and photos',
      'Access to member resources',
      'Monthly newsletter',
      'Community forum access',
      '30% discount on events',
      'All networking events included',
      'Weekly training webinars and workshops',
      'Unlimited job board postings',
      'Social media promotion (weekly)',
      'Homepage spotlight rotation (monthly)',
      'Exclusive gold member events',
      'Priority customer support',
      'Annual business consultation session'
    ],
    color: '#FFD700', // Gold
    popular: false
  }
];

const button1 = document.querySelector('#open-button1');
const button2 = document.querySelector('#open-button2');
const button3 = document.querySelector('#open-button3');
const button4 = document.querySelector('#open-button4');

const dialogBox = document.querySelector('#dialog-box');

const dialogArea = document.querySelector('#dialog-content');

const closebutton = document.querySelector('#close-button');


button1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogArea.innerHTML = `
    <p> ${membershipLevels[0].displayName} </p>
    <p> ${membershipLevels[0].description}</p> 
    <p>the cost is: ${membershipLevels[0].priceDisplay} <p>
    <p>benefits are : ${membershipLevels[0].benefits.join(', ')}<p>`;
});

button2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogArea.innerHTML = `
    <h5> ${membershipLevels[1].displayName} </h5>
    <p> ${membershipLevels[1].description}</p> 
    <p>the cost is: ${membershipLevels[1].priceDisplay} <p>
    <p>benefits are : ${membershipLevels[1].benefits.join(', ')}<p>`;
});

button3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogArea.innerHTML = `
    <p> ${membershipLevels[2].displayName} </p>
    <p> ${membershipLevels[2].description}</p> 
    <p>the cost is: ${membershipLevels[2].priceDisplay} <p>
    <p>benefits are : ${membershipLevels[2].benefits.join(', ')}<p>`;
});

button4.addEventListener('click', () => {
    dialogBox.showModal();
    dialogArea.innerHTML = `
    <p> ${membershipLevels[3].displayName} </p>
    <p> ${membershipLevels[3].description}</p> 
    <p>the cost is: ${membershipLevels[3].priceDisplay} <p>
    <p>benefits are : ${membershipLevels[3].benefits.join(', ')}<p>`;
});

closebutton.addEventListener('click', () => {
    dialogBox.close();
})

