// Course List Array (from the assignment)
const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
    { code: "WDD 231", name: "Web & Computer Programming", credits: 3, completed: false },
    { code: "CSE 110", name: "Programming Principles", credits: 2, completed: true },
    { code: "CSE 111", name: "Intermediate Programming", credits: 3, completed: false },
    { code: "WDD 330", name: "Advanced JavaScript", credits: 3, completed: false }
];

// Function to display courses dynamically
function renderCourses(filter = "all") {
    const container = document.getElementById("course-container");
    container.innerHTML = ""; // Clear previous courses

    // Apply filtering logic
    const filteredCourses = courses.filter(course => {
        if (filter === "all") return true;
        return course.code.startsWith(filter); // Matches "WDD" or "CSE"
    });

    // Render course cards
    filteredCourses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course");
        if (course.completed) courseCard.classList.add("completed"); // Style completed courses

        courseCard.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Status:</strong> ${course.completed ? "✅ Completed" : "⏳ In Progress"}</p>
        `;
        container.appendChild(courseCard);
    });

    // Calculate total credits displayed
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("total-credits").textContent = totalCredits;
}

// Event listeners for filter buttons
document.addEventListener("DOMContentLoaded", () => {
    renderCourses(); // Load all courses initially

    document.getElementById("all-courses").addEventListener("click", () => renderCourses("all"));
    document.getElementById("wdd-courses").addEventListener("click", () => renderCourses("WDD"));
    document.getElementById("cse-courses").addEventListener("click", () => renderCourses("CSE"));
});