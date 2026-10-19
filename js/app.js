/**
 * Lernovique - Core Client Script
 * Handles Theme Toggling, Auth State, Routing, Notifications, Modals, and Interactive components
 */

document.addEventListener("DOMContentLoaded", () => {
  initializeTheme();
  initializeAuthUI();
  setupGlobalEvents();
});

// ==========================================================================
// Theme Management (Light / Dark Mode with LocalStorage persistence)
// ==========================================================================
function initializeTheme() {
  const savedTheme = localStorage.getItem("lernovique_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const nextTheme = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("lernovique_theme", nextTheme);
  updateThemeIcon(nextTheme);
  showToast(`Switched to ${nextTheme.toUpperCase()} mode`, "info");
}

function updateThemeIcon(theme) {
  const themeBtns = document.querySelectorAll(".theme-toggle-btn");
  themeBtns.forEach(btn => {
    if (theme === "dark") {
      btn.innerHTML = `<i class="fa-solid fa-sun" style="color: #F59E0B;"></i>`;
      btn.setAttribute("title", "Switch to Light Mode");
      btn.setAttribute("aria-label", "Switch to Light Mode");
    } else {
      btn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
      btn.setAttribute("title", "Switch to Dark Mode");
      btn.setAttribute("aria-label", "Switch to Dark Mode");
    }
  });
}

// ==========================================================================
// Toast Notifications
// ==========================================================================
function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "fa-check-circle";
  if (type === "error") icon = "fa-triangle-exclamation";
  if (type === "warning") icon = "fa-circle-exclamation";
  if (type === "info") icon = "fa-circle-info";

  toast.innerHTML = `
    <i class="fa-solid ${icon}" style="font-size: 1.15rem;"></i>
    <div style="flex:1;">${message}</div>
    <button style="background:none; border:none; color:inherit; cursor:pointer; opacity:0.6;" onclick="this.parentElement.remove()" aria-label="Close notification">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(40px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Helper for Auth session & Current User
function getCurrentUser() {
  if (typeof initializeLernoviqueStorage === "function") {
    initializeLernoviqueStorage();
  }
  try {
    const rawUser = localStorage.getItem("lernovique_user");
    if (rawUser) {
      const u = JSON.parse(rawUser);
      if (u && u.name) {
        if (!u.firstName) {
          const parts = (u.name || "").trim().split(" ");
          u.firstName = parts[0] || "User";
          u.lastName = parts.slice(1).join(" ") || "";
        }
        return u;
      }
    }
    const rawAuth = localStorage.getItem("lernovique_auth");
    if (rawAuth) {
      const parsed = JSON.parse(rawAuth);
      if (parsed && parsed.user) return parsed.user;
    }
  } catch (e) {
    console.error("Error getting current user", e);
  }
  return (typeof LERNOVIQUE_DEFAULT_DATA !== "undefined" && LERNOVIQUE_DEFAULT_DATA.currentUser) 
    ? LERNOVIQUE_DEFAULT_DATA.currentUser 
    : {
        id: "usr_student",
        name: "Aarav Sharma",
        firstName: "Aarav",
        lastName: "Sharma",
        email: "student@edu.com",
        role: "student",
        rollNo: "CS2023-084",
        department: "Computer Science & Engineering",
        phone: "+91 98230 44102",
        avatar: "AS",
        semester: "Semester 5 (Fall 2026)",
        university: "Apex Institute of Technology, Pune",
        gpa: 8.84,
        enrolledCourses: ["des-201", "cse-301", "cse-302", "aim-401"]
      };
}

// ==========================================================================
// Auth Handling & Session
// ==========================================================================
function initializeAuthUI() {
  const auth = getAuthSession();
  const currentUser = getCurrentUser();
  const userNameEls = document.querySelectorAll(".auth-user-name");
  const userAvatarEls = document.querySelectorAll(".auth-user-avatar");
  const userRoleEls = document.querySelectorAll(".auth-user-role");
  const userRollEls = document.querySelectorAll(".auth-user-roll");
  const userDeptEls = document.querySelectorAll(".auth-user-dept");

  if (auth && auth.isLoggedIn && currentUser) {
    userNameEls.forEach(el => el.textContent = currentUser.name);
    userAvatarEls.forEach(el => {
      const initials = currentUser.avatar || (currentUser.firstName ? currentUser.firstName[0] : "") + (currentUser.lastName ? currentUser.lastName[0] : "");
      el.textContent = initials.toUpperCase() || "US";
    });
    userRoleEls.forEach(el => el.textContent = currentUser.role === "faculty" ? "Faculty" : "Student");
    userRollEls.forEach(el => el.textContent = currentUser.role === "faculty" ? (currentUser.employeeId || currentUser.rollNo || "FAC-EMP-101") : (currentUser.rollNo || "CS2026-001"));
    userDeptEls.forEach(el => el.textContent = currentUser.department || "Computer Science & Engineering");

    // Dynamic greeting banner check
    const welcomeBanners = document.querySelectorAll(".welcome-user-banner");
    welcomeBanners.forEach(banner => {
      banner.textContent = currentUser.firstName || currentUser.name;
    });

    // Conditional visibility
    document.querySelectorAll(".auth-only").forEach(el => el.style.display = "");
    document.querySelectorAll(".guest-only").forEach(el => el.style.display = "none");
    
    // Role specific visibility
    if (currentUser.role === "faculty") {
      document.querySelectorAll(".role-student-only").forEach(el => el.style.display = "none");
      document.querySelectorAll(".role-faculty-only").forEach(el => el.style.display = "");
    } else {
      document.querySelectorAll(".role-faculty-only").forEach(el => el.style.display = "none");
      document.querySelectorAll(".role-student-only").forEach(el => el.style.display = "");
    }
  } else {
    document.querySelectorAll(".auth-only").forEach(el => el.style.display = "none");
    document.querySelectorAll(".guest-only").forEach(el => el.style.display = "");
  }
}

function handleLogin(email, password, role) {
  const data = getLernoviqueData();
  let user = null;

  // Check if there is an existing registered user with this email
  const registeredUsers = data.registeredUsers || [];
  const foundUser = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

  if (foundUser) {
    user = Object.assign({}, foundUser);
  } else if (email.toLowerCase() === "student@edu.com") {
    user = Object.assign({}, data.currentUser);
    user.role = "student";
  } else if (email.toLowerCase() === "faculty@edu.com") {
    user = Object.assign({}, data.facultyUser);
    user.role = "faculty";
  } else {
    // New email login fallback: construct user from email prefix
    const rawName = email.split("@")[0].replace(/[._-]/g, " ");
    const formattedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    const parts = formattedName.split(" ");
    const initials = parts.map(w => w[0]).join("").toUpperCase().slice(0, 2);
    const isFac = role === "faculty" || email.includes("faculty");

    user = {
      id: "usr_" + Date.now(),
      name: formattedName,
      firstName: parts[0] || formattedName,
      lastName: parts.slice(1).join(" ") || "",
      email: email,
      role: isFac ? "faculty" : "student",
      rollNo: isFac ? undefined : "CS2026-" + Math.floor(100 + Math.random() * 900),
      employeeId: isFac ? "FAC-EMP-" + Math.floor(100 + Math.random() * 900) : undefined,
      phone: "+91 98765 43210",
      avatar: initials || "US",
      department: "Computer Science & Engineering",
      semester: isFac ? undefined : "Semester 5 (Fall 2026)",
      university: "Apex Institute of Technology, Pune",
      gpa: isFac ? undefined : 8.50,
      enrolledCourses: ["des-201", "cse-301"]
    };

    // Store new user in registeredUsers
    if (!data.registeredUsers) data.registeredUsers = [];
    data.registeredUsers.push(user);
    saveLernoviqueData(data);
  }

  setCurrentUser(user);
  setAuthSession(true, user);
  showToast(`Welcome back, ${user.name}!`, "success");
  
  setTimeout(() => {
    if (user.role === "faculty") {
      window.location.href = "faculty-dashboard.html";
    } else {
      window.location.href = "dashboard.html";
    }
  }, 700);
}

function handleLogout() {
  // Clear only the active session, never clear registeredUsers or other users' stored slices!
  setAuthSession(false, null);
  localStorage.removeItem("lernovique_user");
  showToast("Logged out successfully", "info");
  setTimeout(() => {
    const isInsidePages = window.location.pathname.includes("/pages/");
    window.location.href = isInsidePages ? "../index.html" : "index.html";
  }, 500);
}

// Protect pages from unauthenticated access
function checkProtectedPage() {
  const auth = getAuthSession();
  if (!auth || !auth.isLoggedIn) {
    showToast("Please log in to access this portal page", "warning");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 800);
  }
}

// ==========================================================================
// Tabs & Accordions
// ==========================================================================
function setupGlobalEvents() {
  // Mobile sidebar drawer
  const mobileToggle = document.querySelector(".mobile-toggle-btn");
  const sidebar = document.querySelector(".sidebar");
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // Tabs
  document.querySelectorAll(".tabs-nav").forEach(tabContainer => {
    const tabButtons = tabContainer.querySelectorAll(".tab-btn");
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-tab");
        const parentSection = tabContainer.closest(".tabs-parent") || document;
        
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        parentSection.querySelectorAll(".tab-pane").forEach(pane => {
          pane.classList.remove("active");
        });

        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.add("active");
        }
      });
    });
  });

  // Modal close via backdrop or cancel buttons
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// Formatters & Utility Helpers
// ==========================================================================
function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" });
  } catch(e) {
    return dateStr;
  }
}

function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
