

function getMembershipLevel(level) {
    switch (level) {
      case 1:
        return "Member";
      case 2:
        return "Silver";
      case 3:
        return "Gold";
      default:
        return "Unknown";
    }
  }


  
  // Function to create and display the member cards
  async function loadMembers() {
    try {
      const response = await fetch('data/members.json');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const members = await response.json();
      const membersContainer = document.querySelector('.member-container');

      if (!membersContainer) {
        console.error('The element with class "member-container" was not found in the DOM.');
        return;
      }

      membersContainer.innerHTML = '';

      members.forEach((member) => {
        const card = document.createElement('div');
        card.classList.add('member-card');
        


        if (members.membershipLevel === 3) {
          card.classList.add('gold-member');
        } else if (members.membershipLevel === 2) {
          card.classList.add('silver-member');
        }

      
        card.innerHTML = `
          <div class="member-image">
            <img src="${member.image}" alt="${member.name} logo" loading="lazy" height="300px" width="400px">
          </div>
          <div class="member-details">
            <h3>${member.name}</h3>
            <p class="membership-level ${getMembershipLevel(member.membershipLevel).toLowerCase()}-level">
              ${getMembershipLevel(member.membershipLevel)}
            </p>
            <p class="member-address">
                <span>${member.address.street}</span>
                <span>${member.address.city}</span>
                <span>${member.address.state}</span>
                <span>${member.address.country}</span>
                <span>${member.address.postalCode}</span>
            </p>
            <p class="member-phone">${member.phoneNumber}</p>
            <p class="member-website"> ${member.websiteUrl} </p>
            <p class="member-description">${member.description}</p>
            <div class="member-stats">
              <p>startdate: ${member.membershipStartDate}</p>
            <p>Employees: ${member.employee}</p>
            </div>
          </div>
        `;

        membersContainer.appendChild(card);
      });


    } catch (error) {
      console.error('Error loading members:', error);
      const membersContainer = document.querySelector('.member-container');
      if (membersContainer) {
        membersContainer.innerHTML = '<p class="error-message">Failed to load member information. Please try again later.</p>';
      }
    }
  }
  

  
  document.addEventListener('DOMContentLoaded', loadMembers);






  
  