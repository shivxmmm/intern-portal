document.addEventListener("DOMContentLoaded", () => {
  const internName = document.getElementById("internName");
  const referralCode = document.getElementById("referralCode");
  const donationsRaised = document.getElementById("donationsRaised");

  // Initial loading state
  internName.textContent = "⏳ Loading...";
  referralCode.textContent = "⏳ Loading...";
  donationsRaised.textContent = "⏳ Loading...";

  fetch("http://localhost:8080/api/intern/details")
    .then(res => {
      if (!res.ok) throw new Error("Network response not ok");
      return res.json();
    })
    .then(data => {
      internName.textContent = data.name || "N/A";
      referralCode.textContent = data.referralCode || "N/A";
      donationsRaised.textContent = `₹${data.donationsRaised ?? "0"}`;
    })
    .catch(() => {
      const fallback = "⚠️ Failed to load";
      internName.textContent = fallback;
      referralCode.textContent = fallback;
      donationsRaised.textContent = fallback;
    });
});
