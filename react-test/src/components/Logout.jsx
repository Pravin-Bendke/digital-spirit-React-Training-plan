import { useEffect } from "react";

function Logout() {

  useEffect(() => {
    let logoutTimer;

    // Function to reset timer
    const resetTimer = () => {
      clearTimeout(logoutTimer);

      logoutTimer = setTimeout(() => {
        alert("Session Expired! Logging out...");

        // Remove user data
        localStorage.removeItem("token");

        // Redirect to login page
        window.location.href = "/login";
      }, 3000); // 30 seconds
    };

    // Events that indicate user activity
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);
    window.addEventListener("scroll", resetTimer);

    // Start timer initially
    resetTimer();

    // Cleanup
    return () => {
      clearTimeout(logoutTimer);

      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
      window.removeEventListener("scroll", resetTimer);
    };
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Move the mouse or press any key to stay logged in.</p>
    </div>
  );
}

export default Logout;