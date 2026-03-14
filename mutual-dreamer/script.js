/* ================= POST DREAM ================= */

function postDream() {
    const text = document.getElementById("dreamText")?.value.trim();
    if (!text) return;

    let dreams = JSON.parse(localStorage.getItem("dreams")) || [];

    dreams.push({
        text: text,
        likes: 0,
        comments: []
    });

    localStorage.setItem("dreams", JSON.stringify(dreams));
    window.location.href = "home.html";
}

/* ================= PROFILE FORM ================= */

const form = document.getElementById("profileForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const dreamerId = document.getElementById("dreamerId").value;
        const country = document.getElementById("country").value;

        localStorage.setItem("profileName", name);
        localStorage.setItem("profileId", dreamerId);
        localStorage.setItem("profileCountry", country);

        alert("Profile Saved!");
        location.reload();
    });
}

/* ================= LOAD PROFILE DISPLAY ================= */

const displayName = document.getElementById("displayName");
const displayId = document.getElementById("displayId");
const displayCountry = document.getElementById("displayCountry");

if (displayName) {
    displayName.innerText = localStorage.getItem("profileName") || "Not Set";
}
if (displayId) {
    displayId.innerText = localStorage.getItem("profileId") || "Not Set";
}
if (displayCountry) {
    displayCountry.innerText = localStorage.getItem("profileCountry") || "Not Set";
}

/* ================= FOLLOWERS DEMO ================= */

let followers = ["Dreamer_101", "Dreamer_202"];
let following = ["Dreamer_303"];

const followersList = document.getElementById("followersList");
const followingList = document.getElementById("followingList");

if (followersList) {
    followersList.innerHTML = "";
    followers.forEach(user => {
        let li = document.createElement("li");
        li.innerText = user;
        followersList.appendChild(li);
    });

    const followersCount = document.getElementById("followersCount");
    if (followersCount) followersCount.innerText = followers.length;
}

if (followingList) {
    followingList.innerHTML = "";
    following.forEach(user => {
        let li = document.createElement("li");
        li.innerText = user;
        followingList.appendChild(li);
    });

    const followingCount = document.getElementById("followingCount");
    if (followingCount) followingCount.innerText = following.length;
}

/* ================= STORY COUNT ================= */

const storyCountElement = document.getElementById("storyCount");
if (storyCountElement) {
    let dreams = JSON.parse(localStorage.getItem("dreams")) || [];
    storyCountElement.innerText = dreams.length;
}

/* ================= CONNECT SYSTEM ================= */

const connectBtn = document.getElementById("connectBtn");
const connectionStatus = document.getElementById("connectionStatus");

// Example current user
let currentUser = "Dreamer_001";

// Example profile owner
let profileOwner = localStorage.getItem("profileId") || "Dreamer_002";

if (connectBtn) {

    // Hide button if own profile
    if (currentUser === profileOwner) {
        connectBtn.style.display = "none";
    }

    connectBtn.addEventListener("click", () => {
        connectionStatus.innerText = "Connected 🌙";
        connectBtn.innerText = "Connected";
        connectBtn.disabled = true;
    });
}