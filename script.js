/* =====================================================
   SKILLUP FRONTEND APPLICATION
   Backend-ready architecture

   IMPORTANT:
   No localStorage is used.

   Later:
   db.learners -> MongoDB
   createLearner() -> POST /api/learners
   updateLearner() -> PUT /api/learners/:id
   login -> POST /api/auth/login
===================================================== */


/* =====================================================
   APPLICATION DATA
===================================================== */

const db = {

    learners: [],

    admin: {
        id: "ADM-001",
        name: "Administrator",
        email: "admin@skillup.com",
        password: "admin123",
        role: "admin"
    },

    discussions: [
        {
            title: "How can I improve my problem solving skills?",
            description:
                "I am struggling with programming problems. Any suggestions?",
            author: "Rahul",
            replies: 5,
            time: "2 hours ago"
        },

        {
            title: "Best resources to learn Python?",
            description:
                "Can someone suggest good beginner-friendly Python resources?",
            author: "Priya",
            replies: 3,
            time: "3 hours ago"
        },

        {
            title: "How to prepare for technical interviews?",
            description:
                "Looking for advice on DSA and technical interview preparation.",
            author: "Alex",
            replies: 4,
            time: "1 day ago"
        }
    ]

};


/* =====================================================
   CURRENT SESSION
===================================================== */

let currentUser = null;

let selectedRole = "learner";

let currentPage = "dashboard";

let activeCourse = null;


/* =====================================================
   COURSE DATA
===================================================== */

const courses = [

    {
        id: "C001",

        name: "C Programming",

        skill: "Digital Skills",

        icon: "fa-code",

        description:
            "Learn C programming fundamentals, variables, loops, functions and problem solving.",

        duration: "4 Weeks",

        level: "Beginner",

        video:
            "https://www.youtube.com/embed/KJgsSFOSQv0",

        modules: [
            "Introduction to C",
            "Variables and Data Types",
            "Conditional Statements",
            "Loops",
            "Functions",
            "Arrays",
            "Basic Problem Solving"
        ],

        quiz: [

            {
                question:
                    "Which function is the starting point of a C program?",

                options: [
                    "start()",
                    "main()",
                    "begin()",
                    "run()"
                ],

                answer: "main()"
            },

            {
                question:
                    "Which symbol is used to end a C statement?",

                options: [
                    ".",
                    ":",
                    ";",
                    ","
                ],

                answer: ";"
            },

            {
                question:
                    "Which data type is used for whole numbers?",

                options: [
                    "float",
                    "char",
                    "int",
                    "double"
                ],

                answer: "int"
            },

            {
                question:
                    "Which loop executes its body at least once?",

                options: [
                    "for",
                    "while",
                    "do-while",
                    "if"
                ],

                answer: "do-while"
            },

            {
                question:
                    "Which operator is used for logical AND?",

                options: [
                    "&",
                    "&&",
                    "||",
                    "!"
                ],

                answer: "&&"
            }

        ]

    },


    {
        id: "C002",

        name: "Python Programming",

        skill: "Digital Skills",

        icon: "fa-brands fa-python",

        description:
            "Learn Python syntax, variables, conditions, loops, functions and basic problem solving.",

        duration: "5 Weeks",

        level: "Beginner",

        video:
            "https://www.youtube.com/embed/rfscVS0vtbw",

        modules: [
            "Python Introduction",
            "Variables and Data Types",
            "Conditions",
            "Loops",
            "Functions",
            "Lists and Dictionaries",
            "Mini Project"
        ],

        quiz: [

            {
                question:
                    "Which symbol is used for comments in Python?",

                options: [
                    "//",
                    "#",
                    "/*",
                    "--"
                ],

                answer: "#"
            },

            {
                question:
                    "Which function displays output in Python?",

                options: [
                    "display()",
                    "write()",
                    "print()",
                    "output()"
                ],

                answer: "print()"
            },

            {
                question:
                    "Which keyword defines a function?",

                options: [
                    "function",
                    "define",
                    "def",
                    "fun"
                ],

                answer: "def"
            },

            {
                question:
                    "Which data structure stores key-value pairs?",

                options: [
                    "List",
                    "Tuple",
                    "Dictionary",
                    "Set"
                ],

                answer: "Dictionary"
            },

            {
                question:
                    "Which symbol is used for exponentiation?",

                options: [
                    "^",
                    "**",
                    "//",
                    "%%"
                ],

                answer: "**"
            }

        ]

    },


    {
        id: "C003",

        name: "Web Development",

        skill: "Digital Skills",

        icon: "fa-globe",

        description:
            "Build modern websites using HTML, CSS and JavaScript.",

        duration: "6 Weeks",

        level: "Beginner",

        video:
            "https://www.youtube.com/embed/UB1O30fR-EE",

        modules: [
            "HTML Basics",
            "CSS Styling",
            "Responsive Design",
            "JavaScript Basics",
            "DOM Manipulation",
            "Forms",
            "Mini Website"
        ],

        quiz: [

            {
                question:
                    "Which language is used to structure webpages?",

                options: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Python"
                ],

                answer: "HTML"
            },

            {
                question:
                    "Which language is mainly used for webpage styling?",

                options: [
                    "HTML",
                    "CSS",
                    "C",
                    "SQL"
                ],

                answer: "CSS"
            },

            {
                question:
                    "Which language adds interactivity to webpages?",

                options: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "C"
                ],

                answer: "JavaScript"
            },

            {
                question:
                    "Which tag creates a hyperlink?",

                options: [
                    "<p>",
                    "<a>",
                    "<link>",
                    "<href>"
                ],

                answer: "<a>"
            },

            {
                question:
                    "Which CSS property changes text color?",

                options: [
                    "font",
                    "background",
                    "color",
                    "text"
                ],

                answer: "color"
            }

        ]

    },


    {
        id: "C004",

        name: "Communication Skills",

        skill: "Communication",

        icon: "fa-comments",

        description:
            "Improve speaking, listening, presentation and professional communication.",

        duration: "3 Weeks",

        level: "Beginner",

        video:
            "https://www.youtube.com/embed/3Tq5y4n9a9Q",

        modules: [
            "Communication Basics",
            "Active Listening",
            "Speaking Skills",
            "Body Language",
            "Presentation Skills",
            "Professional Communication"
        ],

        quiz: [

            {
                question:
                    "Which is an important part of active listening?",

                options: [
                    "Interrupting",
                    "Ignoring",
                    "Paying attention",
                    "Changing topic"
                ],

                answer: "Paying attention"
            },

            {
                question:
                    "What helps make communication clear?",

                options: [
                    "Complex words",
                    "Clarity",
                    "Speaking very fast",
                    "Avoiding feedback"
                ],

                answer: "Clarity"
            },

            {
                question:
                    "Body language is an example of:",

                options: [
                    "Written communication",
                    "Non-verbal communication",
                    "Programming",
                    "Database"
                ],

                answer: "Non-verbal communication"
            },

            {
                question:
                    "Good presentations should be:",

                options: [
                    "Unstructured",
                    "Clear and organized",
                    "Very confusing",
                    "Silent"
                ],

                answer: "Clear and organized"
            },

            {
                question:
                    "Feedback helps to:",

                options: [
                    "Improve communication",
                    "Stop communication",
                    "Avoid learning",
                    "Create confusion"
                ],

                answer: "Improve communication"
            }

        ]

    },


    {
        id: "C005",

        name: "Leadership Fundamentals",

        skill: "Leadership",

        icon: "fa-users",

        description:
            "Develop leadership, teamwork, decision-making and professional responsibility.",

        duration: "3 Weeks",

        level: "Intermediate",

        video:
            "https://www.youtube.com/embed/5f3jX2wM0uU",

        modules: [
            "Leadership Basics",
            "Decision Making",
            "Team Building",
            "Conflict Management",
            "Motivation",
            "Leadership Ethics"
        ],

        quiz: [

            {
                question:
                    "A good leader should:",

                options: [
                    "Ignore the team",
                    "Listen to the team",
                    "Avoid responsibility",
                    "Never communicate"
                ],

                answer: "Listen to the team"
            },

            {
                question:
                    "Teamwork requires:",

                options: [
                    "Cooperation",
                    "Competition only",
                    "Silence",
                    "Avoiding communication"
                ],

                answer: "Cooperation"
            },

            {
                question:
                    "Decision making involves:",

                options: [
                    "Choosing between alternatives",
                    "Avoiding choices",
                    "Ignoring information",
                    "Guessing always"
                ],

                answer: "Choosing between alternatives"
            },

            {
                question:
                    "A leader should handle conflict by:",

                options: [
                    "Ignoring it",
                    "Making it worse",
                    "Finding a constructive solution",
                    "Blaming everyone"
                ],

                answer: "Finding a constructive solution"
            },

            {
                question:
                    "Motivation helps a team to:",

                options: [
                    "Lose focus",
                    "Improve performance",
                    "Avoid work",
                    "Stop communication"
                ],

                answer: "Improve performance"
            }

        ]

    },


    {
        id: "C006",

        name: "Problem Solving Mastery",

        skill: "Problem Solving",

        icon: "fa-lightbulb",

        description:
            "Learn logical thinking, analysis and systematic problem-solving techniques.",

        duration: "4 Weeks",

        level: "Intermediate",

        video:
            "https://www.youtube.com/embed/4mdEsouIXGM",

        modules: [
            "Understanding Problems",
            "Logical Thinking",
            "Breaking Problems Down",
            "Algorithms",
            "Decision Making",
            "Practice Problems"
        ],

        quiz: [

            {
                question:
                    "The first step in solving a problem is:",

                options: [
                    "Understanding the problem",
                    "Writing random code",
                    "Ignoring requirements",
                    "Guessing"
                ],

                answer: "Understanding the problem"
            },

            {
                question:
                    "Breaking a large problem into smaller parts is called:",

                options: [
                    "Decomposition",
                    "Compilation",
                    "Execution",
                    "Encryption"
                ],

                answer: "Decomposition"
            },

            {
                question:
                    "An algorithm is:",

                options: [
                    "A step-by-step solution",
                    "A computer virus",
                    "A database",
                    "A programming language"
                ],

                answer: "A step-by-step solution"
            },

            {
                question:
                    "Logical thinking helps us:",

                options: [
                    "Analyze problems",
                    "Avoid thinking",
                    "Create confusion",
                    "Ignore evidence"
                ],

                answer: "Analyze problems"
            },

            {
                question:
                    "Practice improves:",

                options: [
                    "Problem-solving ability",
                    "Confusion",
                    "Errors",
                    "Distraction"
                ],

                answer: "Problem-solving ability"
            }

        ]

    }

];


/* =====================================================
   SKILL LIST
===================================================== */

const skillList = [

    "Communication",
    "Digital Skills",
    "Leadership",
    "Problem Solving",
    "Teamwork",
    "Time Management"

];


/* =====================================================
   BADGES
===================================================== */

const badges = [

    {
        id: "first-course",
        icon: "fa-graduation-cap",
        name: "First Course",
        description: "Complete your first course",
        condition: learner =>
            learner.completedCourses.length >= 1
    },

    {
        id: "quiz-master",
        icon: "fa-star",
        name: "Quiz Master",
        description: "Score 80% or above",
        condition: learner =>
            Object.values(learner.quizResults)
                .some(result => result.percentage >= 80)
    },

    {
        id: "consistent",
        icon: "fa-fire",
        name: "Consistent Learner",
        description: "Complete 3 courses",
        condition: learner =>
            learner.completedCourses.length >= 3
    },

    {
        id: "module-master",
        icon: "fa-layer-group",
        name: "Module Master",
        description: "Complete 5 modules",
        condition: learner =>
            learner.completedCourses.length >= 2
    },

    {
        id: "skill-builder",
        icon: "fa-chart-line",
        name: "Skill Builder",
        description: "Reach 80% in a skill",
        condition: learner =>
            Object.values(learner.skills)
                .some(value => value >= 80)
    },

    {
        id: "active-participant",
        icon: "fa-comments",
        name: "Active Participant",
        description: "Ask a question",
        condition: learner =>
            learner.discussionsAsked > 0
    }

];


/* =====================================================
   UTILITY
===================================================== */

function generateLearnerId() {

    const random =
        Math.floor(
            100000 +
            Math.random() * 900000
        );

    return `LRN-${new Date().getFullYear()}-${random}`;
}


function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
}


function escapeHTML(value) {

    if (!value) return "";

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =====================================================
   LEARNER DATA
===================================================== */

function createLearner(name, email, password) {

    const learner = {

        learnerId: generateLearnerId(),

        name: name,

        email: email,

        password: password,

        role: "learner",

        createdAt:
            new Date().toISOString(),

        skills: {},

        quizResults: {},

        completedCourses: [],

        startedCourses: [],

        skillGaps: [],

        recommendations: [],

        earnedBadges: [],

        certificates: [],

        discussionsAsked: 0,

        notifications: [

            {
                title: "Welcome to SkillUp!",
                message:
                    "Start your learning journey by choosing a course."
            }

        ]

    };

    db.learners.push(learner);

    return learner;
}


/* =====================================================
   FIND LEARNER BY UNIQUE ID
===================================================== */

function getLearnerById(id) {

    return db.learners.find(
        learner =>
            learner.learnerId === id
    );
}


/* =====================================================
   UPDATE LEARNER
===================================================== */

function updateLearner(learner) {

    const index =
        db.learners.findIndex(
            item =>
                item.learnerId === learner.learnerId
        );

    if (index !== -1) {

        db.learners[index] =
            structuredClone(learner);
    }
}


/* =====================================================
   LOGIN
===================================================== */

document
    .getElementById("loginForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();

        const name =
            document
                .getElementById("loginName")
                .value
                .trim();

        const email =
            document
                .getElementById("loginEmail")
                .value
                .trim()
                .toLowerCase();

        const password =
            document
                .getElementById("loginPassword")
                .value;

        /* ADMIN LOGIN */

        if (selectedRole === "admin") {

            if (
                email === db.admin.email &&
                password === db.admin.password
            ) {

                currentUser =
                    structuredClone(db.admin);

                startApplication("admin");

            } else {

                alert(
                    "Invalid admin credentials.\n\n" +
                    "Demo:\n" +
                    "admin@skillup.com\n" +
                    "admin123"
                );
            }

            return;
        }


        /* LEARNER LOGIN */

if (!name) {
    alert("Please enter your name.");
    return;
}

try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

    const data = await response.json();

    if (!response.ok) {
        alert(data.message);
        return;
    }

    // Save JWT token
    localStorage.setItem("token", data.token);

    // Save logged-in user
    currentUser = data.user;

    showToast(`Welcome, ${data.user.name}!`);

    startApplication("learner");

} catch (error) {
    console.error("Login error:", error);
    alert("Unable to connect to the backend.");
}

});


/* =====================================================
   ROLE BUTTONS
===================================================== */

document
    .querySelectorAll(".role-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".role-btn")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                selectedRole =
                    button.dataset.role;

            }
        );

    });


/* =====================================================
   PASSWORD TOGGLE
===================================================== */

document
    .getElementById("togglePassword")
    .addEventListener("click", () => {

        const input =
            document.getElementById(
                "loginPassword"
            );

        if (input.type === "password") {

            input.type = "text";

        } else {

            input.type = "password";

        }

    });


/* =====================================================
   START APPLICATION
===================================================== */

function startApplication(role) {

    document
        .getElementById("loginPage")
        .classList.add("hidden");

    document
        .getElementById("app")
        .classList.remove("hidden");


    if (role === "admin") {

        document
            .getElementById("learnerNav")
            .classList.add("hidden");

        document
            .getElementById("adminNav")
            .classList.remove("hidden");

        currentPage =
            "admin-dashboard";

        updateTopbar();

        showPage("admin-dashboard");

    } else {

        document
            .getElementById("adminNav")
            .classList.add("hidden");

        document
            .getElementById("learnerNav")
            .classList.remove("hidden");

        currentPage =
            "dashboard";

        updateTopbar();

        showPage("dashboard");

    }

}


/* =====================================================
   TOPBAR
===================================================== */

function updateTopbar() {

    document
        .getElementById("topUserName")
        .textContent =
        currentUser.name;

    document
        .getElementById("topUserRole")
        .textContent =
        currentUser.role === "admin"
            ? "Administrator"
            : "Learner";

    document
        .getElementById("topAvatar")
        .textContent =
        currentUser.name
            .charAt(0)
            .toUpperCase();

    const notificationCount =
    document.getElementById("notificationCount");

if (currentUser.role === "learner") {

    notificationCount.textContent =
        (currentUser.notifications || []).length;

} else {

    notificationCount.textContent = "3";

}

}


/* =====================================================
   NAVIGATION
===================================================== */

document
    .querySelectorAll(".nav-item[data-page]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const page =
                    button.dataset.page;

                showPage(page);

            }
        );

    });


function showPage(page) {

    currentPage = page;

    document
        .querySelectorAll(".nav-item[data-page]")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.page === page
            );

        });


    const titles = {

        dashboard:
            [
                "Dashboard",
                "Your learning overview"
            ],

        courses:
            [
                "My Courses",
                "Learn and improve your skills"
            ],

        "skill-tracker":
            [
                "Skill Tracker",
                "Track your competency levels"
            ],

        "skill-gap":
            [
                "Skill Gap Analysis",
                "Identify areas where you need improvement"
            ],

        recommendations:
            [
                "Personalized Training Recommendations",
                "Courses recommended based on your progress"
            ],

        badges:
            [
                "Badges & Achievements",
                "Earn badges by completing milestones"
            ],

        certificates:
            [
                "Certificates",
                "Your course completion certificates"
            ],

        discussions:
            [
                "Discussion Forum",
                "Ask questions and share knowledge"
            ],

        notifications:
            [
                "Notifications",
                "Stay updated with your learning"
            ],

        "admin-dashboard":
            [
                "Admin Dashboard",
                "Overview of platform performance"
            ],

        "admin-learners":
            [
                "Learners",
                "Manage learners"
            ],

        "admin-courses":
            [
                "Courses",
                "Manage learning courses"
            ],

        "admin-analytics":
            [
                "Admin Analytics",
                "Monitor learner progress and outcomes"
            ],

        "admin-discussions":
            [
                "Discussions",
                "Monitor knowledge sharing"
            ],

        "admin-notifications":
            [
                "Notifications",
                "Manage platform notifications"
            ],

        "admin-settings":
            [
                "Settings",
                "Platform settings"
            ]

    };


    const title =
        titles[page] ||
        ["Dashboard", "Overview"];


    document
        .getElementById("pageTitle")
        .textContent = title[0];

    document
        .getElementById("pageSubtitle")
        .textContent = title[1];


    const content =
        document.getElementById(
            "pageContent"
        );


    if (page === "dashboard")

       renderDashboard().then(html => {

         content.innerHTML = html;

    });

    else if (page === "courses")
        renderCourses().then(html => {
            content.innerHTML = html;
    });

    else if (page === "skill-tracker")
        renderSkillTracker().then(html => {
            content.innerHTML = html;
    });
    else if (page === "skill-gap")
        content.innerHTML =
            renderSkillGap();

    else if (page === "recommendations")
        content.innerHTML =
            renderRecommendations();

    else if (page === "badges")
        content.innerHTML =
            renderBadges();

    else if (page === "certificates")
        content.innerHTML =
            renderCertificates();

    else if (page === "discussions")
        content.innerHTML =
            renderDiscussions();

    else if (page === "notifications")
        content.innerHTML =
            renderNotifications();

    else if (page === "admin-dashboard")
        renderAdminDashboard().then(html => {
            content.innerHTML = html;
    });

    else if (page === "admin-learners")
        renderAdminLearners().then(html => {
            content.innerHTML = html;
    });

    else if (page === "admin-courses")
        content.innerHTML =
            renderAdminCourses();

    else if (page === "admin-analytics")
    renderAdminAnalytics().then(html => {
        content.innerHTML = html;
    });
    else if (page === "admin-discussions")
        content.innerHTML =
            renderAdminDiscussions();

    else if (page === "admin-notifications")
        content.innerHTML =
            renderAdminNotifications();

    else if (page === "admin-settings")
        content.innerHTML =
            renderAdminSettings();


    updateTopbar();

}


/* =====================================================
   LEARNER DASHBOARD
===================================================== */

async function renderDashboard() {

    try {
        const token = localStorage.getItem("token");

        const response = await fetch(
            "http://localhost:5000/api/learners/me",
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        const learner = data.user;

        console.log("Learner from backend:", learner);

        const enrolled =
            learner.startedCourses?.length || 0;

        const completed =
            learner.completedCourses?.length || 0;

        
    const quizResults =
        Object.values(
            learner.quizResults || {}
        );

    const avgScore =
        quizResults.length
            ? Math.round(
                quizResults.reduce(
                    (sum, result) =>
                        sum + result.percentage,
                    0
                ) /
                quizResults.length
            )
            : 0;


    const skillValues =
        Object.values(learner.skills || {});

    const overallProgress =
        skillValues.length
            ? Math.round(
                skillValues.reduce(
                    (a, b) => a + b,
                    0
                ) /
                skillValues.length
            )
            : 0;
    const certificates =
        learner.certificates || [];
    const skillGaps =
    learner.skillGaps || [];

const recommendations = [];

skillGaps.forEach(gap => {

    courses.forEach(course => {

        if (
            course.skill === gap.skill &&
            !(learner.completedCourses || []).includes(course.id)
        ) {

            recommendations.push({
                courseId: course.id,
                courseName: course.name,
                skill: course.skill,
                reason:
                    `${course.name} can help improve your ${gap.skill} skill.`
            });

        }

    });

});    

    return `

        <div class="page-heading">

            <h1>
                Welcome back, ${escapeHTML(learner.name)}! 👋
            </h1>

            <p>
                Keep learning and upgrading your skills.
            </p>

        </div>


        <div class="cards-grid">

            <div class="stat-card">

                <div class="stat-top">
                    <div class="stat-icon">
                        <i class="fa-solid fa-book"></i>
                    </div>
                </div>

                <h2>${enrolled}</h2>

                <p>Courses Started</p>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <div class="stat-icon">
                        <i class="fa-solid fa-check"></i>
                    </div>
                </div>

                <h2>${completed}</h2>

                <p>Courses Completed</p>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <div class="stat-icon">
                        <i class="fa-solid fa-chart-line"></i>
                    </div>
                </div>

                <h2>${avgScore}%</h2>

                <p>Quiz Score Average</p>

            </div>


            <div class="stat-card">

                <div class="stat-top">
                    <div class="stat-icon">
                        <i class="fa-solid fa-award"></i>
                    </div>
                </div>

                <h2>${learner.earnedBadges?.length || 0}</h2>

                <p>Badges Earned</p>

            </div>

        </div>


        <div class="dashboard-grid">

            <div class="panel">

                <div class="panel-header">
                

                    <h3>Progress Overview</h3>

                    <span>
                        ${overallProgress}%
                    </span>

                </div>


                ${
                    skillValues.length
                        ? `
                            <div class="progress-item">

                                <div class="progress-info">

                                    <span>
                                        Overall Skill Progress
                                    </span>

                                    <strong>
                                        ${overallProgress}%
                                    </strong>

                                </div>

                                <div class="progress-bar">

                                    <div
                                        class="progress-fill"
                                        style="width:${overallProgress}%"
                                    ></div>

                                </div>

                            </div>
                        `
                        :
                        `
                            <div class="empty-state">

                                <i class="fa-solid fa-chart-line"></i>

                                <h3>
                                    No skill assessment yet
                                </h3>

                                <p>
                                    Complete a course and quiz
                                    to start tracking your skills.
                                </p>

                            </div>
                        `
                }

            </div>


            <div class="panel">

                <div class="panel-header">

                    <h3>Recent Courses</h3>

                    <span
                        onclick="showPage('courses')"
                        style="cursor:pointer"
                    >
                        View All
                    </span>

                </div>


                ${
                    
    (learner.startedCourses || []).length
        ?
        (learner.startedCourses || []).slice(-3)
            .map(courseId => {

                                const course =
                                    courses.find(
                                        c =>
                                            c.id === courseId
                                    );

                                const completed =
                                   (learner.completedCourses || [])
                                     .includes(courseId);

                                return `

                                    <div class="progress-item">

                                        <div class="progress-info">

                                            <span>
                                                ${course.name}
                                            </span>

                                            <strong>
                                                ${
                                                    completed
                                                        ? "100%"
                                                        : "Started"
                                                }
                                            </strong>

                                        </div>

                                        <div class="progress-bar">

                                            <div
                                                class="progress-fill"
                                                style="width:${
                                                    completed
                                                        ? 100
                                                        : 10
                                                }%"
                                            ></div>

                                        </div>

                                    </div>

                                `;

                            })
                            .join("")

                        :

                        `
                            <div class="empty-state">

                                <i class="fa-solid fa-book-open"></i>

                                <h3>
                                    No courses started
                                </h3>

                                <p>
                                    Choose a course to begin.
                                </p>

                            </div>
                        `
                }

            </div>

        </div>
        <div class="panel">

    <div class="panel-header">

        <h3>📜 Certificates</h3>

        <span>
            ${certificates.length}
        </span>

    </div>

    ${
        certificates.length
            ?
            certificates.map(certificate => `

                <div class="progress-item">

                    <div class="progress-info">

                        <span>
                            ${escapeHTML(certificate.courseName)}
                        </span>

                        <strong>
                            ${certificate.percentage}%
                        </strong>

                    </div>

                    <p style="
                        color:#6b7280;
                        font-size:12px;
                        margin-top:6px;
                    ">
                        ${escapeHTML(certificate.title)}
                    </p>

                    <button
                        class="primary-btn"
                        style="margin-top:10px;"
                        onclick="alert('Certificate earned for ${escapeHTML(certificate.courseName)}')"
                    >
                        View Certificate
                    </button>

                </div>

            `).join("")
            :
            `
                <div class="empty-state">

                    <i class="fa-solid fa-certificate"></i>

                    <h3>
                        No certificates yet
                    </h3>

                    <p>
                        Complete a course with a passing score
                        to earn a certificate.
                    </p>

                </div>
            `
    }

</div>

<div class="panel">

    <div class="panel-header">

        <h3>⚠️ Skill Gaps</h3>

        <span>
            ${skillGaps.length}
        </span>

    </div>

    ${
        skillGaps.length
            ?
            skillGaps.map(gap => `

                <div class="progress-item">

                    <div class="progress-info">

                        <span>
                            ${escapeHTML(gap.skill)}
                        </span>

                        <strong>
                            ${gap.percentage}%
                        </strong>

                    </div>

                    <div class="progress-bar">

                        <div
                            class="progress-fill"
                            style="width:${gap.percentage}%"
                        ></div>

                    </div>

                    <p style="
                        color:#6b7280;
                        font-size:12px;
                        margin-top:6px;
                    ">
                        ${escapeHTML(gap.recommendation)}
                    </p>

                </div>

            `).join("")

            :

            `
                <div class="empty-state">

                    <i class="fa-solid fa-circle-check"></i>

                    <h3>
                        No skill gaps detected
                    </h3>

                    <p>
                        Keep completing quizzes to monitor
                        your skills.
                    </p>

                </div>
            `
    }

</div>
<div class="panel">

    <div class="panel-header">

        <h3>🎯 Recommended Learning</h3>

    </div>

    ${
        recommendations.length
            ?
            recommendations.map(rec => `

                <div class="progress-item">

                    <div class="progress-info">

                        <span>
                            ${escapeHTML(rec.courseName)}
                        </span>

                        <strong>
                            ${escapeHTML(rec.skill)}
                        </strong>

                    </div>

                    <p style="
                        color:#6b7280;
                        font-size:12px;
                        margin-top:6px;
                    ">
                        ${escapeHTML(rec.reason)}
                    </p>

                    <button
                        class="primary-btn"
                        style="margin-top:10px;"
                        onclick="showPage('courses')"
                    >
                        Start Learning
                    </button>

                </div>

            `).join("")

            :

            `
                <div class="empty-state">

                    <i class="fa-solid fa-lightbulb"></i>

                    <h3>
                        No recommendations yet
                    </h3>

                    <p>
                        Complete a quiz to get personalized
                        learning recommendations.
                    </p>

                </div>
            `
    }

</div>
        <div class="panel">

            <div class="panel-header">

                <h3>Quick Start</h3>

            </div>

            <p
                style="
                    color:#6b7280;
                    font-size:12px;
                    margin-bottom:15px;
                "
            >
                Choose a course to start learning and
                complete its quiz to update your skills.
            </p>

            <button
                class="primary-btn"
                onclick="showPage('courses')"
            >
                Explore Courses
            </button>

        </div>

    `;
        

    } catch (error) {
        console.error("Dashboard error:", error);
        return "";
    }

}




/* =====================================================
   COURSES PAGE
===================================================== */

async function renderCourses() {

    
        const token = localStorage.getItem("token");

const response = await fetch(
    "http://localhost:5000/api/learners/me",
    {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
);

const data = await response.json();

if (!response.ok) {
    alert(data.message);
    return "";
}

const learner = data.user;


    return `

        <div class="page-heading">

            <h1>My Courses</h1>

            <p>
                Learn engineering and professional skills.
            </p>

        </div>


        <div class="course-grid">

            ${courses.map(course => {

                const started =
                   (learner.startedCourses || [])
                       .includes(course.id);

                const completed =
                    (learner.completedCourses || [])
                        .includes(course.id);


                return `

                    <div class="course-card">

                        <div class="course-image">

                            <i class="fa-solid ${course.icon}"></i>

                        </div>


                        <div class="course-body">

                            <span class="
                                course-status
                                ${
                                    completed
                                        ? "status-completed"
                                        :
                                    started
                                        ? "status-progress"
                                        :
                                        "status-not-started"
                                }
                            ">

                                ${
                                    completed
                                        ? "Completed"
                                        :
                                    started
                                        ? "In Progress"
                                        :
                                        "Not Started"
                                }

                            </span>


                            <h3>
                                ${course.name}
                            </h3>


                            <p>
                                ${course.description}
                            </p>


                            <div class="course-meta">

                                <span>
                                    <i class="fa-regular fa-clock"></i>
                                    ${course.duration}
                                </span>

                                <span>
                                    ${course.level}
                                </span>

                            </div>


                            <button
                                class="primary-btn"
                                onclick="openCourse('${course.id}')"
                            >

                                ${
                                    completed
                                        ? "View Course"
                                        :
                                    started
                                        ? "Continue Course"
                                        :
                                        "Start Course"
                                }

                            </button>

                        </div>

                    </div>

                `;

            }).join("")}

        </div>

    `;

}


/* =====================================================
   OPEN COURSE
===================================================== */

async function openCourse(courseId) {

    const course =
        courses.find(
            c => c.id === courseId
        );

    if (!course) return;

    const token =
        localStorage.getItem("token");

    const response =
        await fetch(
            "http://localhost:5000/api/learners/start-course",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    courseId: courseId
                })
            }
        );

    const data =
        await response.json();

    if (!response.ok) {
        alert(data.message);
        return;
    }

    const learner = data.user;

    activeCourse = course;

    

    openModal(`

        <button
            class="modal-close"
            onclick="closeModal()"
        >
            <i class="fa-solid fa-xmark"></i>
        </button>


        <h2>
            ${course.name}
        </h2>

        <p
            style="
                color:#6b7280;
                font-size:12px;
                margin-top:5px;
            "
        >
            Start learning with this introductory video.
        </p>


        <div class="video-wrapper">

            <iframe
                src="${course.video}"
                title="${course.name}"
                allowfullscreen
            ></iframe>

        </div>


        <h3>
            Course Modules
        </h3>


        <div class="course-module-list">

            ${course.modules.map(
                (module, index) => `

                    <div class="module-item">

                        <i
                            class="fa-solid fa-circle-play"
                            style="color:#2563eb"
                        ></i>

                        Module ${index + 1}:
                        ${module}

                    </div>

                `
            ).join("")}

        </div>


        <div
            style="
                background:#eff6ff;
                padding:15px;
                border-radius:10px;
                margin-bottom:20px;
                font-size:12px;
                color:#1d4ed8;
            "
        >

            <strong>
                Important:
            </strong>

            Complete the quiz after learning.
            Your quiz score will update your
            ${course.skill} percentage and generate
            a Skill Gap if your performance is low.

        </div>


        <button
            class="primary-btn"
            onclick="openQuiz('${course.id}')"
        >

            <i class="fa-solid fa-clipboard-question"></i>

            Take Course Quiz

        </button>

    `);

}


/* =====================================================
   QUIZ
===================================================== */

function openQuiz(courseId) {

    const course =
        courses.find(
            c => c.id === courseId
        );

    if (!course) return;


    activeCourse = course;


    openModal(`

        <button
            class="modal-close"
            onclick="closeModal()"
        >
            <i class="fa-solid fa-xmark"></i>
        </button>


        <div class="quiz-header">

            <h2>
                ${course.name} Quiz
            </h2>

            <p
                style="
                    color:#6b7280;
                    font-size:12px;
                "
            >
                Answer all questions and submit
                to update your skill.
            </p>

        </div>


        <form id="quizForm">

            ${course.quiz.map(
                (question, index) => `

                    <div class="quiz-question">

                        <h3>
                            ${index + 1}.
                            ${question.question}
                        </h3>


                        ${question.options.map(
                            option => `

                                <label class="quiz-option">

                                    <input
                                        type="radio"
                                        name="question-${index}"
                                        value="${escapeHTML(option)}"
                                    >

                                    ${escapeHTML(option)}

                                </label>

                            `
                        ).join("")}

                    </div>

                `
            ).join("")}


            <button
                type="submit"
                class="primary-btn"
            >

                Submit Quiz

            </button>

        </form>

    `);


    document
        .getElementById("quizForm")
        .addEventListener(
            "submit",
            function(event) {

                event.preventDefault();

                submitQuiz(course);

            }
        );

}


/* =====================================================
   QUIZ SUBMISSION
   THIS IS THE IMPORTANT UPDATED LOGIC
===================================================== */

async function submitQuiz(course) {

    const questions = course.quiz;

    let score = 0;
    let unanswered = 0;

    questions.forEach((question, index) => {

        const selected =
            document.querySelector(
                `input[name="question-${index}"]:checked`
            );

        if (!selected) {
            unanswered++;
            return;
        }

        if (selected.value === question.answer) {
            score++;
        }
    });

    if (unanswered > 0) {
        alert(
            "Please answer all questions before submitting."
        );
        return;
    }

    /* CALCULATE SCORE */

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );

    /* GET JWT TOKEN */

    const token =
        localStorage.getItem("token");

    if (!token) {
        alert("Please login again.");
        return;
    }

    try {

        /* SEND QUIZ RESULT TO BACKEND */

        const response =
            await fetch(
                "http://localhost:5000/api/learners/submit-quiz",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",

                        "Authorization":
                            `Bearer ${token}`
                    },

                    body: JSON.stringify({

                        courseId:
                            course.id,

                        courseName:
                            course.name,

                        skill:
                            course.skill,

                        score:
                            score,

                        total:
                            questions.length,

                        percentage:
                            percentage
                    })
                }
            );

        const data =
            await response.json();

        if (!response.ok) {

            alert(
                data.message ||
                "Failed to submit quiz."
            );

            return;
        }

        /* UPDATE CURRENT USER
           WITH DATABASE DATA */

        currentUser =
            data.user;

        /* SHOW RESULT */

        showQuizResult(
            currentUser,
            course,
            score,
            questions.length,
            percentage
        );

    } catch (error) {

        console.error(
            "Quiz submission error:",
            error
        );

        alert(
            "Unable to connect to the backend."
        );
    }
}
/* =====================================================
   GENERATE SKILL GAPS
===================================================== */

function generateSkillGaps(learner) {

    /*
       IMPORTANT:

       We only look at skills that have
       actually been assessed.

       Therefore a new learner will NOT
       automatically receive fake skill gaps.
    */

    learner.skillGaps = [];


    Object.entries(
        learner.skills
    ).forEach(
        ([skill, percentage]) => {

            if (
                typeof percentage !==
                "number"
            ) return;


            /*
               Skill gap threshold = below 60%
            */

            if (percentage < 60) {

                learner.skillGaps.push({

                    skill:
                        skill,

                    percentage:
                        percentage,

                    message:
                        `${skill} Skill Gap Detected`,

                    recommendation:
                        `Your current performance is ${percentage}%. We recommend improving this competency.`

                });

            }

        }
    );

}


/* =====================================================
   GENERATE RECOMMENDATIONS
===================================================== */

function generateRecommendations(learner) {

    learner.recommendations = [];


    learner.skillGaps.forEach(
        gap => {

            const matchingCourses =
                courses.filter(
                    course =>
                        course.skill ===
                        gap.skill
                );


            matchingCourses.forEach(
                course => {

                    if (
                        !learner.completedCourses
                            .includes(course.id)
                    ) {

                        learner.recommendations
                            .push({

                                courseId:
                                    course.id,

                                reason:
                                    `${course.name} can help improve your ${gap.skill} skill.`

                            });

                    }

                }
            );

        }
    );

}


/* =====================================================
   QUIZ RESULT
===================================================== */

function showQuizResult(
    learner,
    course,
    score,
    total,
    percentage
) {

    const updatedSkill = Number(percentage);

    const gap = updatedSkill < 60;


    openModal(`

        <div class="quiz-result">

            <div
                style="
                    font-size:45px;
                    color:#16a34a;
                "
            >
                <i class="fa-solid fa-circle-check"></i>
            </div>


            <h2>
                Quiz Completed!
            </h2>


            <p
                style="
                    color:#6b7280;
                    font-size:12px;
                "
            >
                ${course.name}
            </p>


            <div class="score-circle">

                ${percentage}%

            </div>


            <p>

                You scored

                <strong>
                    ${score}/${total}
                </strong>

            </p>


            <div class="skill-update-box">

                <strong>
                    ${course.skill}
                </strong>

                skill updated to

                <strong>
                    ${updatedSkill}%
                </strong>

            </div>


            ${
                gap
                    ?
                    `
                        <div class="quiz-gap-box">

                            <strong>
                                ⚠️
                                ${course.skill}
                                Skill Gap Detected
                            </strong>

                            <p
                                style="
                                    margin-top:6px;
                                    font-size:11px;
                                "
                            >
                                Your current performance is
                                ${updatedSkill}%.
                                We recommend improving this competency.

                            </p>

                        </div>
                    `
                    :
                    `
                        <div class="skill-update-box">

                            <strong>
                                🎉 Good progress!
                            </strong>

                            <p
                                style="
                                    margin-top:6px;
                                    font-size:11px;
                                "
                            >
                                Your ${course.skill}
                                skill is currently
                                ${updatedSkill}%.
                            </p>

                        </div>
                    `
            }


            <div
                style="
                    display:flex;
                    gap:10px;
                    justify-content:center;
                    margin-top:20px;
                "
            >

                <button
                    class="primary-btn"
                    onclick="
                        closeModal();
                        showPage('skill-tracker');
                    "
                >
                    View Skill Tracker
                </button>


                <button
                    class="secondary-btn"
                    onclick="
                        closeModal();
                        showPage('skill-gap');
                    "
                >
                    View Skill Gap
                </button>

            </div>

        </div>

    `);

}
/* =====================================================
   SKILL TRACKER
===================================================== */

function renderSkillTracker() {

    const learner =
        getLearnerById(
            currentUser.learnerId
        );


    const icons = {

        "Communication":
            "fa-comments",

        "Digital Skills":
            "fa-laptop-code",

        "Leadership":
            "fa-users",

        "Problem Solving":
            "fa-lightbulb",

        "Teamwork":
            "fa-people-group",

        "Time Management":
            "fa-clock"

    };


    return `

        <div class="page-heading">

            <h1>Skill Tracker</h1>

            <p>
                Your skills are updated after completing
                course assessments.
            </p>

        </div>


        <div class="skills-grid">

            ${skillList.map(skill => {

                const percentage =
                    learner.skills[skill];


                if (
                    typeof percentage !==
                    "number"
                ) {

                    return `

                        <div class="skill-card">

                            <div class="skill-top">

                                <div class="skill-icon">

                                    <i
                                        class="fa-solid
                                        ${icons[skill]}"
                                    ></i>

                                </div>

                                <strong>
                                    ${skill}
                                </strong>

                            </div>


                            <div class="not-assessed">

                                <i class="fa-solid fa-lock"></i>

                                Not assessed yet

                                <br>

                                Complete a related
                                course quiz to assess this skill.

                            </div>

                        </div>

                    `;

                }


                let level =
                    percentage >= 80
                        ? "Advanced"
                        :
                    percentage >= 60
                        ? "Intermediate"
                        :
                        "Beginner";


                return `

                    <div class="skill-card">

                        <div class="skill-top">

                            <div class="skill-icon">

                                <i
                                    class="fa-solid
                                    ${icons[skill]}"
                                ></i>

                            </div>

                            <strong>
                                ${skill}
                            </strong>

                            <span class="skill-level">
                                ${level}
                            </span>

                        </div>


                        <div class="progress-info">

                            <span>
                                Current Level
                            </span>

                            <strong>
                                ${percentage}%
                            </strong>

                        </div>


                        <div class="progress-bar">

                            <div
                                class="
                                    progress-fill
                                    ${
                                        percentage < 60
                                            ? "danger"
                                            :
                                        percentage < 80
                                            ? "warning"
                                            :
                                            "success"
                                    }
                                "
                                style="
                                    width:${percentage}%
                                "
                            ></div>

                        </div>

                    </div>

                `;

            }).join("")}

        </div>

    `;

}


/* =====================================================
   SKILL GAP PAGE
===================================================== */

async function renderSkillTracker() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/learners/me",
            {
                headers: {
                    "Authorization":
                        `Bearer ${localStorage.getItem("token")}`
                }
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.message || "Failed to load skills"
            );
        }

        const learner = data.user;

        const icons = {

            "Communication":
                "fa-comments",

            "Digital Skills":
                "fa-laptop-code",

            "Leadership":
                "fa-users",

            "Problem Solving":
                "fa-lightbulb",

            "Teamwork":
                "fa-people-group",

            "Time Management":
                "fa-clock"

        };


        return `

            <div class="page-heading">

                <h1>Skill Tracker</h1>

                <p>
                    Your skills are updated after completing
                    course assessments.
                </p>

            </div>


            <div class="skills-grid">

                ${skillList.map(skill => {

                    const percentage =
                        learner.skills?.[skill];


                    if (
                        typeof percentage !== "number"
                    ) {

                        return `

                            <div class="skill-card">

                                <div class="skill-top">

                                    <div class="skill-icon">

                                        <i
                                            class="fa-solid
                                            ${icons[skill]}"
                                        ></i>

                                    </div>

                                    <strong>
                                        ${skill}
                                    </strong>

                                </div>


                                <div class="not-assessed">

                                    <i class="fa-solid fa-lock"></i>

                                    Not assessed yet

                                    <br>

                                    Complete a related
                                    course quiz to assess this skill.

                                </div>

                            </div>

                        `;

                    }


                    let level =
                        percentage >= 80
                            ? "Advanced"
                            :
                        percentage >= 60
                            ? "Intermediate"
                            :
                            "Beginner";


                    return `

                        <div class="skill-card">

                            <div class="skill-top">

                                <div class="skill-icon">

                                    <i
                                        class="fa-solid
                                        ${icons[skill]}"
                                    ></i>

                                </div>

                                <strong>
                                    ${skill}
                                </strong>

                                <span class="skill-level">
                                    ${level}
                                </span>

                            </div>


                            <div class="progress-info">

                                <span>
                                    Current Level
                                </span>

                                <strong>
                                    ${percentage}%
                                </strong>

                            </div>


                            <div class="progress-bar">

                                <div
                                    class="
                                        progress-fill
                                        ${
                                            percentage < 60
                                                ? "danger"
                                                :
                                            percentage < 80
                                                ? "warning"
                                                :
                                                "success"
                                        }
                                    "
                                    style="
                                        width:${percentage}%
                                    "
                                ></div>

                            </div>

                        </div>

                    `;

                }).join("")}

            </div>

        `;

    } catch (error) {

        console.error(
            "Error loading skill tracker:",
            error
        );

        return `

            <div class="page-heading">

                <h1>Skill Tracker</h1>

                <p>
                    Unable to load your skill data.
                </p>

            </div>

        `;

    }

}
/* =====================================================
   RECOMMENDATIONS
===================================================== */

function renderRecommendations() {

    const learner =
        getLearnerById(
            currentUser.learnerId
        );


    if (
        Object.keys(
            learner.skills
        ).length === 0
    ) {

        return `

            <div class="page-heading">

                <h1>
                    Personalized Training Recommendations
                </h1>

                <p>
                    Recommendations will be generated
                    from your actual skill performance.
                </p>

            </div>


            <div class="panel">

                <div class="empty-state">

                    <i class="fa-solid fa-lightbulb"></i>

                    <h3>
                        Complete a course first
                    </h3>

                    <p>
                        After your first assessment,
                        SkillUp will analyze your performance
                        and recommend suitable courses.
                    </p>

                </div>

            </div>

        `;

    }


    if (
        learner.recommendations.length === 0
    ) {

        return `

            <div class="page-heading">

                <h1>
                    Personalized Training Recommendations
                </h1>

                <p>
                    Recommendations based on your skill gaps.
                </p>

            </div>


            <div class="panel">

                <div class="empty-state">

                    <i
                        class="
                            fa-solid
                            fa-circle-check
                        "
                        style="color:#16a34a"
                    ></i>

                    <h3>
                        You are doing well!
                    </h3>

                    <p>
                        No additional training is required
                        based on your current assessments.
                    </p>

                </div>

            </div>

        `;

    }


    return `

        <div class="page-heading">

            <h1>
                Personalized Training Recommendations
            </h1>

            <p>
                Courses recommended based on your skill gaps.
            </p>

        </div>


        <div class="recommendation-grid">

            ${learner.recommendations.map(
                recommendation => {

                    const course =
                        courses.find(
                            c =>
                                c.id ===
                                recommendation.courseId
                        );

                    return `

                        <div class="recommendation-card">

                            <div class="rec-icon">

                                <i
                                    class="
                                        fa-solid
                                        ${course.icon}
                                    "
                                ></i>

                            </div>


                            <h3>
                                ${course.name}
                            </h3>


                            <p>
                                ${recommendation.reason}
                            </p>


                            <button
                                class="primary-btn"
                                onclick="
                                    openCourse('${course.id}')
                                "
                            >
                                Start Course
                            </button>

                        </div>

                    `;

                }
            ).join("")}

        </div>

    `;

}


/* =====================================================
   BADGES
===================================================== */

function updateBadges(learner) {

    learner.earnedBadges = [];


    badges.forEach(
        badge => {

            if (
                badge.condition(learner)
            ) {

                learner.earnedBadges
                    .push(badge.id);

            }

        }
    );

}


/* =====================================================
   BADGES PAGE
===================================================== */

function renderBadges() {

    const learner =
        getLearnerById(
            currentUser.learnerId
        );


    return `

        <div class="page-heading">

            <h1>
                Badges & Achievements
            </h1>

            <p>
                Earn badges by reaching learning milestones.
            </p>

        </div>


        <div class="badge-grid">

            ${badges.map(badge => {

                const earned =
                    learner.earnedBadges
                        .includes(badge.id);


                return `

                    <div class="
                        badge-card
                        ${earned ? "" : "locked"}
                    ">

                        <div class="badge-icon">

                            <i
                                class="
                                    fa-solid
                                    ${badge.icon}
                                "
                            ></i>

                        </div>


                        <h4>
                            ${badge.name}
                        </h4>


                        <p>
                            ${badge.description}
                        </p>

                    </div>

                `;

            }).join("")}

        </div>

    `;

}


/* =====================================================
   CERTIFICATE
===================================================== */

function createCertificate(
    learner,
    course
) {

    const existing =
        learner.certificates.find(
            certificate =>
                certificate.courseId ===
                course.id
        );


    if (existing) return;


    const certificate = {

        certificateId:
            "SKUP-" +
            new Date().getFullYear() +
            "-" +
            Math.floor(
                100000 +
                Math.random() * 900000
            ),

        courseId:
            course.id,

        courseName:
            course.name,

        completionDate:
            new Date().toLocaleDateString(
                "en-IN"
            )

    };


    learner.certificates.push(
        certificate
    );

}


/* =====================================================
   CERTIFICATES PAGE
===================================================== */

function renderCertificates() {

    const learner =
        getLearnerById(
            currentUser.learnerId
        );


    if (
        learner.certificates.length === 0
    ) {

        return `

            <div class="page-heading">

                <h1>Certificates</h1>

                <p>
                    Your course completion certificates.
                </p>

            </div>


            <div class="panel">

                <div class="empty-state">

                    <i
                        class="
                            fa-solid
                            fa-certificate
                        "
                    ></i>

                    <h3>
                        No certificates yet
                    </h3>

                    <p>
                        Complete a course and its quiz
                        to generate your certificate.
                    </p>

                </div>

            </div>

        `;

    }


    return `

        <div class="page-heading">

            <h1>Certificates</h1>

            <p>
                Download your completed course certificates.
            </p>

        </div>


        <div class="certificate-grid">

            ${learner.certificates.map(
                certificate => `

                    <div>

                        <div
                            class="certificate"
                            id="certificate-${certificate.certificateId}"
                        >

                            <p>
                                CERTIFICATE OF COMPLETION
                            </p>

                            <h1>
                                SkillUp
                            </h1>

                            <p>
                                This is to certify that
                            </p>

                            <h2>
                                ${escapeHTML(
                                    learner.name
                                )}
                            </h2>

                            <p>
                                has successfully completed
                            </p>

                            <h3>
                                ${certificate.courseName}
                            </h3>

                            <p>
                                Completion Date:
                                ${certificate.completionDate}
                            </p>

                            <p>
                                Certificate ID:
                                ${certificate.certificateId}
                            </p>

                            <div class="certificate-badge">

                                <i
                                    class="
                                        fa-solid
                                        fa-award
                                    "
                                ></i>

                            </div>

                        </div>


                        <br>

                        <button
                            class="primary-btn"
                            onclick="
                                downloadCertificate(
                                    '${certificate.certificateId}'
                                )
                            "
                        >

                            <i
                                class="
                                    fa-solid
                                    fa-download
                                "
                            ></i>

                            Download Certificate

                        </button>

                    </div>

                `
            ).join("")}

        </div>

    `;

}


/* =====================================================
   CERTIFICATE DOWNLOAD
===================================================== */

function downloadCertificate(
    certificateId
) {

    const certificate =
        document.getElementById(
            `certificate-${certificateId}`
        );


    if (!certificate) return;


    const printWindow =
        window.open(
            "",
            "_blank"
        );


    printWindow.document.write(`

        <html>

        <head>

            <title>
                SkillUp Certificate
            </title>

            <style>

                body {
                    font-family: Arial;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    min-height:100vh;
                }

                .certificate {
                    border:8px solid #dbeafe;
                    outline:1px solid #2563eb;
                    padding:60px;
                    text-align:center;
                    width:800px;
                }

                h1 {
                    font-family:Georgia;
                    font-size:40px;
                }

                h2 {
                    color:#2563eb;
                    font-size:32px;
                }

            </style>

        </head>

        <body>

            ${certificate.outerHTML}

        </body>

        </html>

    `);


    printWindow.document.close();

    printWindow.print();

}


/* =====================================================
   DISCUSSIONS
===================================================== */

function renderDiscussions() {

    return `

        <div class="page-heading">

            <h1>
                Discussion Forum
            </h1>

            <p>
                Ask questions, share knowledge and help
                other learners.
            </p>

        </div>


        <div class="discussion-layout">

            <div class="discussion-list">

                ${db.discussions.map(
                    discussion => `

                        <div class="discussion-card">

                            <h3>
                                ${escapeHTML(
                                    discussion.title
                                )}
                            </h3>

                            <p>
                                ${escapeHTML(
                                    discussion.description
                                )}
                            </p>

                            <div class="discussion-meta">

                                <span>
                                    Asked by
                                    ${discussion.author}
                                </span>

                                <span>
                                    ${discussion.replies}
                                    Replies
                                    •
                                    ${discussion.time}
                                </span>

                            </div>

                        </div>

                    `
                ).join("")}

            </div>


            <div class="ask-question">

                <h3>
                    Ask a Question
                </h3>

                <input
                    id="discussionTitle"
                    placeholder="Question title"
                >


                <textarea
                    id="discussionDescription"
                    rows="5"
                    placeholder="Explain your question..."
                ></textarea>


                <button
                    class="primary-btn"
                    onclick="postQuestion()"
                >
                    Post Question
                </button>

            </div>

        </div>

    `;

}


/* =====================================================
   POST QUESTION
===================================================== */

function postQuestion() {

    const title =
        document
            .getElementById(
                "discussionTitle"
            )
            .value
            .trim();

    const description =
        document
            .getElementById(
                "discussionDescription"
            )
            .value
            .trim();


    if (!title || !description) {

        alert(
            "Please enter both title and description."
        );

        return;

    }


    const learner =
        getLearnerById(
            currentUser.learnerId
        );


    db.discussions.unshift({

        title:
            title,

        description:
            description,

        author:
            learner.name,

        replies:
            0,

        time:
            "Just now"

    });


    learner.discussionsAsked++;

    updateBadges(learner);

    updateLearner(learner);


    showToast(
        "Question posted successfully!"
    );


    showPage("discussions");

}


/* =====================================================
   NOTIFICATIONS
===================================================== */

function renderNotifications() {

    const learner =
        getLearnerById(
            currentUser.learnerId
        );


    return `

        <div class="page-heading">

            <h1>
                Notifications
            </h1>

            <p>
                Stay updated with your learning activity.
            </p>

        </div>


        <div class="notification-list">

            ${
                learner.notifications.length
                    ?

                    learner.notifications.map(
                        notification => `

                            <div class="notification-card">

                                <div class="notification-icon">

                                    <i
                                        class="
                                            fa-solid
                                            fa-bell
                                        "
                                    ></i>

                                </div>


                                <div>

                                    <h3>
                                        ${escapeHTML(
                                            notification.title
                                        )}
                                    </h3>

                                    <p>
                                        ${escapeHTML(
                                            notification.message
                                        )}
                                    </p>

                                </div>

                            </div>

                        `
                    ).join("")

                    :

                    `
                        <div class="panel">

                            <div class="empty-state">

                                <i
                                    class="
                                        fa-solid
                                        fa-bell
                                    "
                                ></i>

                                <h3>
                                    No notifications
                                </h3>

                            </div>

                        </div>
                    `
            }

        </div>

    `;

}


/* =====================================================
   ADMIN DASHBOARD
===================================================== */

async function renderAdminDashboard() {
    try {
        const response = await fetch(
            "http://localhost:5000/api/learners/all"
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to load learners");
        }

        const learners = data.learners || [];

        const totalLearners = learners.length;

        let totalCompleted = 0;
        let totalQuizScores = 0;
        let quizCount = 0;

        learners.forEach(learner => {

            totalCompleted +=
                (learner.completedCourses || []).length;

            const quizResults =
                Object.values(learner.quizResults || {});

            quizResults.forEach(result => {
                totalQuizScores += Number(result.percentage || 0);
                quizCount++;
            });

        });

        const avgScore = quizCount
            ? Math.round(totalQuizScores / quizCount)
            : 0;

        const learnersWithGaps = learners.filter(
            learner =>
                (learner.skillGaps || []).length > 0
        );

        return `
            <div class="page-heading">
                <h1>
                    Admin Dashboard
                </h1>

                <p>
                    Platform performance overview.
                </p>
            </div>


            <div class="cards-grid">

                <div class="stat-card">
                    <div class="stat-top">
                        <div class="stat-icon">
                            <i class="fa-solid fa-users"></i>
                        </div>
                    </div>

                    <h2>
                        ${totalLearners}
                    </h2>

                    <p>
                        Total Learners
                    </p>
                </div>


                <div class="stat-card">
                    <div class="stat-top">
                        <div class="stat-icon">
                            <i class="fa-solid fa-book"></i>
                        </div>
                    </div>

                    <h2>
                        ${totalCompleted}
                    </h2>

                    <p>
                        Courses Completed
                    </p>
                </div>


                <div class="stat-card">
                    <div class="stat-top">
                        <div class="stat-icon">
                            <i class="fa-solid fa-chart-line"></i>
                        </div>
                    </div>

                    <h2>
                        ${avgScore}%
                    </h2>

                    <p>
                        Average Quiz Score
                    </p>
                </div>


                <div class="stat-card">
                    <div class="stat-top">
                        <div class="stat-icon">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                    </div>

                    <h2>
                        ${learnersWithGaps.length}
                    </h2>

                    <p>
                        Learners Needing Attention
                    </p>
                </div>

            </div>


            <br>


            <div class="admin-grid">

                <div class="panel">

                    <div class="panel-header">
                        <h3>
                            Learners Needing Attention
                        </h3>
                    </div>

                    ${
                        learnersWithGaps.length
                            ?

                        learnersWithGaps
                            .map(learner => `
                                <div
                                    style="
                                        padding:12px;
                                        border-bottom:1px solid #e5e7eb;
                                    "
                                >

                                    <strong
                                        style="font-size:12px;"
                                    >
                                        ${escapeHTML(learner.name)}
                                    </strong>

                                    <p
                                        style="
                                            color:#6b7280;
                                            font-size:10px;
                                            margin-top:4px;
                                        "
                                    >
                                        ${(learner.skillGaps || []).length}
                                        skill gap(s) detected
                                    </p>

                                </div>
                            `)
                            .join("")

                            :

                            `
                                <p
                                    style="
                                        font-size:12px;
                                        color:#6b7280;
                                    "
                                >
                                    No learners currently need attention.
                                </p>
                            `
                    }

                </div>


                <div class="panel">

                    <div class="panel-header">
                        <h3>
                            Learning Statistics
                        </h3>
                    </div>

                    <p
                        style="
                            font-size:12px;
                            line-height:2;
                            color:#6b7280;
                        "
                    >

                        Total learners:
                        <strong>
                            ${totalLearners}
                        </strong>

                        <br>

                        Courses available:
                        <strong>
                            ${courses.length}
                        </strong>

                        <br>

                        Total course completions:
                        <strong>
                            ${totalCompleted}
                        </strong>

                        <br>

                        Average quiz score:
                        <strong>
                            ${avgScore}%
                        </strong>

                    </p>

                </div>

            </div>
        `;

    } catch (error) {

        console.error(error);

        return `
            <div class="panel">

                <div class="empty-state">

                    <i class="fa-solid fa-triangle-exclamation"></i>

                    <h3>
                        Unable to load admin data
                    </h3>

                    <p>
                        Please make sure the backend server is running.
                    </p>

                </div>

            </div>
        `;
    }
}

/* =====================================================
   ADMIN LEARNERS
===================================================== */

async function renderAdminLearners() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/learners/all"
        );

        const data = await response.json();

        const learners = data.learners || [];

        return `

            <div class="page-heading">

                <h1>
                    Learners
                </h1>

                <p>
                    View learner IDs, progress and assessment data.
                </p>

            </div>


            <div class="panel">

                <div class="admin-table-wrapper">

                    <table class="admin-table">

                        <thead>

                            <tr>

                                <th>
                                    Learner ID
                                </th>

                                <th>
                                    Name
                                </th>

                                <th>
                                    Email
                                </th>

                                <th>
                                    Completed
                                </th>

                                <th>
                                    Avg Score
                                </th>

                                <th>
                                    Skill Gaps
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            ${
                                learners.length

                                ?

                                learners.map(learner => {

                                    const results =
                                        Object.values(
                                            learner.quizResults || {}
                                        );

                                    const average =
                                        results.length
                                            ?
                                            Math.round(
                                                results.reduce(
                                                    (sum, result) =>
                                                        sum +
                                                        Number(
                                                            result.percentage || 0
                                                        ),
                                                    0
                                                ) /
                                                results.length
                                            )
                                            :
                                            0;

                                    const skillGapCount =
                                        (learner.skillGaps || []).length;


                                    return `

                                        <tr>

                                            <td>
                                                <strong>
                                                    ${learner.uniqueId}
                                                </strong>
                                            </td>

                                            <td>
                                                ${escapeHTML(
                                                    learner.name
                                                )}
                                            </td>

                                            <td>
                                                ${escapeHTML(
                                                    learner.email
                                                )}
                                            </td>

                                            <td>
                                                ${
                                                    (learner.completedCourses || [])
                                                        .length
                                                }
                                            </td>

                                            <td>
                                                ${average}%
                                            </td>

                                            <td>
                                                ${skillGapCount}
                                            </td>

                                        </tr>

                                    `;

                                }).join("")

                                :

                                `

                                    <tr>

                                        <td
                                            colspan="6"
                                            style="
                                                text-align:center;
                                                color:#6b7280;
                                                padding:30px;
                                            "
                                        >

                                            No learners registered yet.

                                        </td>

                                    </tr>

                                `
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        `;

    } catch (error) {

        console.error(
            "Error loading learners:",
            error
        );

        return `

            <div class="page-heading">

                <h1>
                    Learners
                </h1>

                <p>
                    View learner IDs, progress and assessment data.
                </p>

            </div>

            <div class="panel">

                <p style="
                    color:#dc2626;
                    padding:20px;
                ">

                    Unable to load learner data.
                    Make sure the backend server is running.

                </p>

            </div>

        `;

    }

}
/* =====================================================
   ADMIN COURSES
===================================================== */

function renderAdminCourses() {

    return `

        <div class="page-heading">

            <h1>
                Course Management
            </h1>

            <p>
                Available courses on the platform.
            </p>

        </div>


        <div class="panel">

            <div class="admin-table-wrapper">

                <table class="admin-table">

                    <thead>

                        <tr>

                            <th>
                                Course
                            </th>

                            <th>
                                Skill
                            </th>

                            <th>
                                Level
                            </th>

                            <th>
                                Duration
                            </th>

                            <th>
                                Modules
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        ${courses.map(
                            course => `

                                <tr>

                                    <td>
                                        <strong>
                                            ${course.name}
                                        </strong>
                                    </td>

                                    <td>
                                        ${course.skill}
                                    </td>

                                    <td>
                                        ${course.level}
                                    </td>

                                    <td>
                                        ${course.duration}
                                    </td>

                                    <td>
                                        ${course.modules.length}
                                    </td>

                                </tr>

                            `
                        ).join("")}

                    </tbody>

                </table>

            </div>

        </div>

    `;

}


/* =====================================================
   ADMIN ANALYTICS
===================================================== */

async function renderAdminAnalytics() {

    try {
        const token = localStorage.getItem("token");

        const response = await fetch(
            "http://localhost:5000/api/learners/all"
        );

        const data = await response.json();

        const learners = data.learners || [];

        // Course completion counts
        const completedByCourse = courses.map(course => {

            let count = 0;

            learners.forEach(learner => {
                if (
                    learner.completedCourses &&
                    learner.completedCourses.includes(course.id)
                ) {
                    count++;
                }
            });

            return {
                course,
                count
            };
        });

        const max = Math.max(
            1,
            ...completedByCourse.map(item => item.count)
        );

        // Average quiz score
        let totalScore = 0;
        let totalQuizzes = 0;

        learners.forEach(learner => {

            const results =
                Object.values(learner.quizResults || {});

            results.forEach(result => {
                totalScore += Number(result.percentage || 0);
                totalQuizzes++;
            });
        });

        const averageQuizScore = totalQuizzes
            ? Math.round(totalScore / totalQuizzes)
            : 0;

        // Learners needing attention
        const attentionLearners = learners.filter(
            learner =>
                learner.skillGaps &&
                learner.skillGaps.length > 0
        );

        return `

            <div class="page-heading">

                <h1>Admin Analytics</h1>

                <p>
                    Monitor course completion, quiz performance
                    and learner progress.
                </p>

            </div>


            <div class="cards-grid">

                <div class="stat-card">

                    <div class="stat-top">
                        <div class="stat-icon">
                            <i class="fa-solid fa-users"></i>
                        </div>
                    </div>

                    <h2>${learners.length}</h2>

                    <p>Total Learners</p>

                </div>


                <div class="stat-card">

                    <div class="stat-top">
                        <div class="stat-icon">
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>

                    <h2>
                        ${learners.reduce(
                            (sum, learner) =>
                                sum +
                                (learner.completedCourses?.length || 0),
                            0
                        )}
                    </h2>

                    <p>Course Completions</p>

                </div>


                <div class="stat-card">

                    <div class="stat-top">
                        <div class="stat-icon">
                            <i class="fa-solid fa-chart-line"></i>
                        </div>
                    </div>

                    <h2>${averageQuizScore}%</h2>

                    <p>Average Quiz Score</p>

                </div>


                <div class="stat-card">

                    <div class="stat-top">
                        <div class="stat-icon">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                    </div>

                    <h2>${attentionLearners.length}</h2>

                    <p>Learners Needing Attention</p>

                </div>

            </div>


            <br>


            <div class="panel">

                <div class="panel-header">

                    <h3>Course Completion</h3>

                </div>


                <div class="analytics-bars">

                    ${completedByCourse.map(item => `

                        <div class="analytics-bar-item">

                            <strong
                                style="
                                    font-size:10px;
                                    margin-bottom:5px;
                                "
                            >
                                ${item.count}
                            </strong>


                            <div
                                class="analytics-bar"
                                style="
                                    height:${Math.max(
                                        10,
                                        (item.count / max) * 160
                                    )}px
                                "
                            ></div>


                            <div class="analytics-bar-label">
                                ${item.course.name}
                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>


            <br>


            <div class="admin-grid">


                <div class="panel">

                    <div class="panel-header">

                        <h3>
                            Learners Needing Attention
                        </h3>

                    </div>


                    ${
                        attentionLearners.length

                        ?

                        attentionLearners.map(learner => `

                            <div
                                style="
                                    padding:12px;
                                    border-bottom:
                                        1px solid #e5e7eb;
                                "
                            >

                                <strong>
                                    ${escapeHTML(learner.name)}
                                </strong>

                                <p
                                    style="
                                        color:#6b7280;
                                        font-size:10px;
                                        margin-top:4px;
                                    "
                                >
                                    ${learner.skillGaps.length}
                                    skill gap(s) detected
                                </p>

                            </div>

                        `).join("")

                        :

                        `
                            <p
                                style="
                                    font-size:12px;
                                    color:#6b7280;
                                "
                            >
                                No learners currently need attention.
                            </p>
                        `
                    }

                </div>


                <div class="panel">

                    <div class="panel-header">

                        <h3>Learning Statistics</h3>

                    </div>

                    <p
                        style="
                            font-size:12px;
                            line-height:2;
                            color:#6b7280;
                        "
                    >

                        Total learners:
                        <strong>${learners.length}</strong>
                        <br>

                        Courses available:
                        <strong>${courses.length}</strong>
                        <br>

                        Total course completions:
                        <strong>
                            ${learners.reduce(
                                (sum, learner) =>
                                    sum +
                                    (learner.completedCourses?.length || 0),
                                0
                            )}
                        </strong>
                        <br>

                        Average quiz score:
                        <strong>${averageQuizScore}%</strong>

                    </p>

                </div>

            </div>

        `;

    } catch (error) {

        console.error(error);

        return `
            <div class="panel">
                <h3>Analytics unavailable</h3>
                <p>
                    Could not load analytics from the server.
                </p>
            </div>
        `;
    }
}

/* =====================================================
   ADMIN DISCUSSIONS
===================================================== */

function renderAdminDiscussions() {

    return `

        <div class="page-heading">

            <h1>
                Discussion Management
            </h1>

            <p>
                Monitor learner knowledge-sharing activities.
            </p>

        </div>


        <div class="discussion-list">

            ${db.discussions.map(
                discussion => `

                    <div class="discussion-card">

                        <h3>
                            ${escapeHTML(
                                discussion.title
                            )}
                        </h3>

                        <p>
                            ${escapeHTML(
                                discussion.description
                            )}
                        </p>

                        <div class="discussion-meta">

                            <span>
                                ${discussion.author}
                            </span>

                            <span>
                                ${discussion.replies}
                                replies
                            </span>

                        </div>

                    </div>

                `
            ).join("")}

        </div>

    `;

}


/* =====================================================
   ADMIN NOTIFICATIONS
===================================================== */

function renderAdminNotifications() {

    return `

        <div class="page-heading">

            <h1>
                Admin Notifications
            </h1>

            <p>
                Platform-level notifications.
            </p>

        </div>


        <div class="notification-list">

            <div class="notification-card">

                <div class="notification-icon">

                    <i class="fa-solid fa-user-plus"></i>

                </div>

                <div>

                    <h3>
                        Learner Registration
                    </h3>

                    <p>
                        New learners are automatically
                        assigned unique learner IDs.
                    </p>

                </div>

            </div>


            <div class="notification-card">

                <div class="notification-icon">

                    <i class="fa-solid fa-chart-line"></i>

                </div>

                <div>

                    <h3>
                        Skill Analytics
                    </h3>

                    <p>
                        Quiz performance updates learner
                        skill percentages.
                    </p>

                </div>

            </div>


            <div class="notification-card">

                <div class="notification-icon">

                    <i class="fa-solid fa-triangle-exclamation"></i>

                </div>

                <div>

                    <h3>
                        Skill Gap Monitoring
                    </h3>

                    <p>
                        Learners below the skill threshold
                        are identified automatically.
                    </p>

                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   ADMIN SETTINGS
===================================================== */

function renderAdminSettings() {

    return `

        <div class="page-heading">

            <h1>
                Admin Settings
            </h1>

            <p>
                Platform configuration.
            </p>

        </div>


        <div class="panel">

            <div class="info-box">

                <label>
                    Platform Name
                </label>

                <strong>
                    SkillUp
                </strong>

            </div>


            <br>


            <div class="info-box">

                <label>
                    Skill Gap Threshold
                </label>

                <strong>
                    Below 60%
                </strong>

            </div>


            <br>


            <div class="info-box">

                <label>
                    Learner Identity
                </label>

                <strong>
                    Unique Learner ID
                </strong>

            </div>


            <br>


            <div class="info-box">

                <label>
                    Backend Status
                </label>

                <strong>
                    Frontend Prototype
                </strong>

            </div>

        </div>

    `;

}


/* =====================================================
   PROFILE
===================================================== */

document
    .getElementById("profileBtn")
    .addEventListener(
        "click",
        openProfile
    );


document
    .getElementById("topProfileBtn")
    .addEventListener(
        "click",
        openProfile
    );


function openProfile() {

    if (!currentUser) return;


    if (
        currentUser.role ===
        "admin"
    ) {

        openModal(`

            <button
                class="modal-close"
                onclick="closeModal()"
            >
                <i class="fa-solid fa-xmark"></i>
            </button>


            <div class="profile-header">

                <div class="large-avatar">

                    A

                </div>


                <div>

                    <h2>
                        Administrator
                    </h2>

                    <p
                        style="
                            color:#6b7280;
                            font-size:11px;
                        "
                    >
                        Admin Account
                    </p>

                </div>

            </div>


            <div class="profile-info">

                <div class="info-box">

                    <label>
                        Admin ID
                    </label>

                    <strong>
                        ADM-001
                    </strong>

                </div>


                <div class="info-box">

                    <label>
                        Name
                    </label>

                    <strong>
                        Administrator
                    </strong>

                </div>


                <div class="info-box">

                    <label>
                        Email
                    </label>

                    <strong>
                        admin@skillup.com
                    </strong>

                </div>


                <div class="info-box">

                    <label>
                        Role
                    </label>

                    <strong>
                        Administrator
                    </strong>

                </div>

            </div>

        `);

        return;
    }


    const learner =
        getLearnerById(
            currentUser.learnerId
        );


    openModal(`

        <button
            class="modal-close"
            onclick="closeModal()"
        >
            <i class="fa-solid fa-xmark"></i>
        </button>


        <div class="profile-header">

            <div class="large-avatar">

                ${escapeHTML(
                    learner.name
                        .charAt(0)
                        .toUpperCase()
                )}

            </div>


            <div>

                <h2>
                    ${escapeHTML(
                        learner.name
                    )}
                </h2>

                <p
                    style="
                        color:#6b7280;
                        font-size:11px;
                    "
                >
                    Learner Profile
                </p>

            </div>

        </div>


        <div class="profile-info">

            <div class="info-box">

                <label>
                    Unique Learner ID
                </label>

                <strong>
                    ${learner.learnerId}
                </strong>

            </div>


            <div class="info-box">

                <label>
                    Name
                </label>

                <strong>
                    ${escapeHTML(
                        learner.name
                    )}
                </strong>

            </div>


            <div class="info-box">

                <label>
                    Email
                </label>

                <strong>
                    ${escapeHTML(
                        learner.email
                    )}
                </strong>

            </div>


            <div class="info-box">

                <label>
                    Password
                </label>

                <strong>
                    ${escapeHTML(
                        learner.password
                    )}
                </strong>

            </div>


            <div class="info-box">

                <label>
                    Role
                </label>

                <strong>
                    Learner
                </strong>

            </div>


            <div class="info-box">

                <label>
                    Courses Completed
                </label>

                <strong>
                    ${learner.completedCourses.length}
                </strong>

            </div>

        </div>


        <div
            style="
                background:#fff7ed;
                color:#9a3412;
                padding:12px;
                border-radius:8px;
                margin-top:20px;
                font-size:10px;
            "
        >

            <strong>Prototype Note:</strong>

            Passwords are displayed here only because
            this is a frontend prototype.

            In the real Node.js/MongoDB version,
            passwords must be securely hashed and
            never displayed.

        </div>

    `);

}


/* =====================================================
   MODAL
===================================================== */

function openModal(html) {

    document
        .getElementById("modalContent")
        .innerHTML = html;

    document
        .getElementById("modalOverlay")
        .classList.remove("hidden");

}


function closeModal() {

    document
        .getElementById("modalOverlay")
        .classList.add("hidden");

    document
        .getElementById("modalContent")
        .innerHTML = "";

}


document
    .getElementById("modalOverlay")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                this
            ) {

                closeModal();

            }

        }
    );


/* =====================================================
   LOGOUT
===================================================== */

document
    .getElementById("logoutBtn")
    .addEventListener(
        "click",
        () => {

            currentUser = null;

            currentPage =
                "dashboard";

            document
                .getElementById("app")
                .classList.add("hidden");

            document
                .getElementById("loginPage")
                .classList.remove("hidden");

            document
                .getElementById("loginForm")
                .reset();

            document
                .querySelectorAll(".role-btn")
                .forEach(
                    button =>
                        button.classList.remove(
                            "active"
                        )
                );

            document
                .querySelector(
                    '.role-btn[data-role="learner"]'
                )
                .classList.add("active");

            selectedRole =
                "learner";

        }
    );


/* =====================================================
   NOTIFICATION BUTTON
===================================================== */

document
    .getElementById("topNotificationBtn")
    .addEventListener(
        "click",
        () => {

            if (
                currentUser.role ===
                "learner"
            ) {

                showPage("notifications");

            } else {

                showPage(
                    "admin-notifications"
                );

            }

        }
    );


/* =====================================================
   MOBILE MENU
===================================================== */

document
    .getElementById("mobileMenuBtn")
    .addEventListener(
        "click",
        () => {

            document
                .querySelector(".sidebar")
                .classList.toggle("open");

        }
    );