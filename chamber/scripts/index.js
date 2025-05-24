async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const members = await response.json();
    const membership = document.querySelector('.member-section');

    membership.innerHTML = ``;
    
    // Loop through each member and log their name
    members.forEach(member => {
        const displayMembers = document.createElement('div');
        displayMembers.classList.add('display-card');

    

        if(member.membershipLevel === 2){
            members.sort(()=> Math.random() -0.5)
            .slice(0, 1, 2);
            displayMembers.innerHTML = `<img src="${member.image}" alt="${member.name} loading="lazy" height="100" width="150" object-fit="contain">
            <h3>${member.name}<h3>
            <p>Membership level: Silver ${member.membershipLevel}</p>
            <p>Company Address: <span> ${member.address.street}</span> <span>${member.address.city}</span> <span>${member.address.state}</span> <span>${member.address.country}</span></p>
            <p>phone: ${member.phoneNumber}</p>
            <p>website: ${member.websiteUrl}</p>`;
        }

        membership.appendChild(displayMembers);
        
    });

   
    return members;
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
}

getMembers();

