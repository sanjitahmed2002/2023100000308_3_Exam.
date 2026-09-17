const API_URL = "https://jsonplaceholder.typicode.com/users";

const usersContainer = document.getElementById("users-container");

// Fetch first 6 users
fetch(API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        return response.json();
    })
    .then(users => {
        const firstSixUsers = users.slice(0, 6);

        firstSixUsers.forEach(user => {
            createUserCard(user);
        });
    })
    .catch(error => {
        console.error("Error fetching users:", error);
    });


// Create user card
function createUserCard(user) {
    const card = document.createElement("div");

    card.className = "user-card";
    card.id = `user-${user.id}`;

    card.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <button class="remove-btn">Remove User</button>
    `;

    const removeButton = card.querySelector(".remove-btn");

    removeButton.addEventListener("click", () => {
        removeUser(user.id, card);
    });

    usersContainer.appendChild(card);
}


// Remove user
function removeUser(userId, card) {
    fetch(`${API_URL}/${userId}`, {
        method: "DELETE"
    })
        .then(response => {
            if (response.status === 200) {
                card.remove();
            } else {
                throw new Error("Failed to remove user");
            }
        })
        .catch(error => {
            console.error("Delete error:", error);
        });
}