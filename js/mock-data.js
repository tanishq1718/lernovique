/**
 * Lernovique - University Online Learning Platform
 * Mock Data Repository & Multi-User Isolated Storage Engine
 * Exclusively for Computer Science & Engineering (CSE)
 */

const LERNOVIQUE_BASE_COURSES = [
  {
    id: "cse-201",
    code: "CSE-201",
    title: "Data Structures & Algorithms",
    category: "Core CS",
    instructor: "Prof. Rajesh Ramanathan",
    instructorId: "fac_2",
    credits: 4,
    level: "Intermediate",
    rating: 4.9,
    enrolledCount: 240,
    thumbnailGradient: "linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)",
    badge: "Core",
    progress: 68,
    completedLectures: 8,
    totalLectures: 12,
    description: "Master foundational abstract data types: Linked Lists, Stacks, Queues, Binary Trees, Heaps, Hashing, and asymptotic runtime complexities.",
    overview: "This foundational course equips undergraduate CS students with rigorous data organization principles, recursive tree traversals, and complexity analysis with Big-O notation.",
    materials: [
      { id: "mat-1", name: "Syllabus & Lecture Schedule - Autumn 2026.pdf", size: "1.4 MB", date: "Aug 12, 2026", type: "pdf" },
      { id: "mat-2", name: "Tree & Heap Algorithms Implementation Guide.pdf", size: "2.8 MB", date: "Aug 20, 2026", type: "pdf" },
      { id: "mat-3", name: "Data Structures Benchmark Suite.cpp", size: "38 KB", date: "Sep 05, 2026", type: "code" },
      { id: "mat-4", name: "Asymptotic Analysis Problem Set.docx", size: "520 KB", date: "Sep 18, 2026", type: "doc" }
    ],
    lectures: [
      { id: "lec-1", title: "1. Introduction to Asymptotic Complexity & Memory Models", duration: "42 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { id: "lec-2", title: "2. Singly & Doubly Linked Lists with Sentinel Nodes", duration: "55 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
      { id: "lec-3", title: "3. Stacks, Queues & Monotonic Deque Architectures", duration: "38 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
      { id: "lec-4", title: "4. Binary Search Trees & Balanced AVL Rotations", duration: "48 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
      { id: "lec-5", title: "5. Red-Black Trees & B-Tree Indexing Principles", duration: "50 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
      { id: "lec-6", title: "6. Binary Heaps, Priority Queues & HeapSort", duration: "44 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4" },
      { id: "lec-7", title: "7. Hash Tables, Collision Resolution & Robin Hood Hashing", duration: "62 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
      { id: "lec-8", title: "8. Graph Representations: Adjacency Lists vs Matrices", duration: "49 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
      { id: "lec-9", title: "9. Breadth-First Search & Depth-First Search Traversal", duration: "58 min", completed: false, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4" },
      { id: "lec-10", title: "10. Topological Sorting & Strongly Connected Components", duration: "45 min", completed: false, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
      { id: "lec-11", title: "11. Greedy Heuristics: Huffman Coding & Interval Scheduling", duration: "40 min", completed: false, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" },
      { id: "lec-12", title: "12. Divide and Conquer Master Theorem Benchmarks", duration: "65 min", completed: false, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" }
    ],
    discussions: [
      { id: "disc-1", author: "Student Learner", role: "Student", avatar: "SL", date: "2 days ago", comment: "For the AVL tree balance factor calculation in Assignment 3, should we rotate immediately upon insertion backtracking?", upvotes: 7, replies: 2 },
      { id: "disc-2", author: "Prof. Rajesh Ramanathan", role: "Instructor", avatar: "RR", date: "1 day ago", comment: "Yes, precisely! Check balance factor height(left) - height(right) on each ancestor node during unwinding and perform single or double rotation accordingly.", upvotes: 14, replies: 0 }
    ]
  },
  {
    id: "cse-301",
    code: "CSE-301",
    title: "Advanced Algorithms & Complexity",
    category: "Core CS",
    instructor: "Prof. Rajesh Ramanathan",
    instructorId: "fac_2",
    credits: 4,
    level: "Advanced",
    rating: 4.8,
    enrolledCount: 220,
    thumbnailGradient: "linear-gradient(135deg, #1E1B4B 0%, #4338CA 100%)",
    badge: "Core",
    progress: 80,
    completedLectures: 12,
    totalLectures: 15,
    description: "In-depth exploration of graph algorithms, dynamic programming, Segment Trees, Trie structures, and NP-hard problem reductions.",
    overview: "Standard core curriculum for CS juniors covering rigorous algorithmic thinking and asymptotic analysis using C++ and Python.",
    materials: [
      { id: "mat-5", name: "Dynamic Programming Patterns CheatSheet.pdf", size: "3.2 MB", date: "Sep 01, 2026", type: "pdf" },
      { id: "mat-6", name: "Graph Traversal & Shortest Path Codebase.zip", size: "8.5 MB", date: "Sep 15, 2026", type: "code" }
    ],
    lectures: [
      { id: "lec-13", title: "1. Asymptotic Notations & Recurrence Relations", duration: "50 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { id: "lec-14", title: "2. Disjoint Set Union & Kruskal Algorithm", duration: "55 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
      { id: "lec-15", title: "3. Dijkstra, Bellman-Ford & Floyd Warshall", duration: "60 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
      { id: "lec-16", title: "4. Network Flow & Ford-Fulkerson Algorithm", duration: "52 min", completed: false, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" }
    ],
    discussions: []
  },
  {
    id: "cse-302",
    code: "CSE-302",
    title: "Database Management Systems & SQL",
    category: "Core CS",
    instructor: "Dr. Ananya Sen",
    instructorId: "fac_3",
    credits: 4,
    level: "Intermediate",
    rating: 4.7,
    enrolledCount: 195,
    thumbnailGradient: "linear-gradient(135deg, #0284C7 0%, #0D9488 100%)",
    badge: "Core",
    progress: 55,
    completedLectures: 6,
    totalLectures: 11,
    description: "Relational algebra, normal forms (1NF to BCNF), indexing, concurrency control, ACID properties, and distributed NoSQL systems.",
    overview: "Comprehensive study of database engine architectures and query optimization techniques.",
    materials: [
      { id: "mat-7", name: "Normalization Exercises & Solutions.pdf", size: "2.1 MB", date: "Aug 28, 2026", type: "pdf" }
    ],
    lectures: [
      { id: "lec-17", title: "1. ER Modeling and Relational Schemas", duration: "45 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { id: "lec-18", title: "2. SQL Joins, Subqueries and CTEs", duration: "52 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" }
    ],
    discussions: []
  },
  {
    id: "cse-304",
    code: "CSE-304",
    title: "Python Programming & Data Analytics",
    category: "Programming",
    instructor: "Prof. Vikram Malhotra",
    instructorId: "fac_4",
    credits: 3,
    level: "Beginner",
    rating: 4.9,
    enrolledCount: 310,
    thumbnailGradient: "linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)",
    badge: "Popular",
    progress: 92,
    completedLectures: 11,
    totalLectures: 12,
    description: "Python 3 OOP, NumPy arrays, Pandas DataFrames, Matplotlib data visualization, and exploratory statistical analysis.",
    overview: "Hands-on data science track emphasizing clean code and pandas vectorization.",
    materials: [
      { id: "mat-8", name: "Pandas Data Wrangling Handbook.ipynb", size: "4.5 MB", date: "Sep 10, 2026", type: "code" }
    ],
    lectures: [
      { id: "lec-19", title: "1. Python Idioms, Generators and Decorators", duration: "48 min", completed: true, videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }
    ],
    discussions: []
  },
  {
    id: "cse-305",
    code: "CSE-305",
    title: "Computer Networks & Protocols",
    category: "Systems & Networks",
    instructor: "Dr. Sneha Deshmukh",
    instructorId: "fac_5",
    credits: 3,
    level: "Intermediate",
    rating: 4.6,
    enrolledCount: 160,
    thumbnailGradient: "linear-gradient(135deg, #4338CA 0%, #6D28D9 100%)",
    badge: "Core",
    progress: 0,
    completedLectures: 0,
    totalLectures: 10,
    description: "OSI and TCP/IP stack, Socket programming, sliding window protocols, BGP routing, congestion management, and TLS 1.3 security.",
    overview: "Understand how packets traverse the global internet and configure virtual network topologies.",
    materials: [
      { id: "mat-9", name: "Wireshark Packet Analysis Lab Guide.pdf", size: "3.5 MB", date: "Oct 01, 2026", type: "pdf" }
    ],
    lectures: [],
    discussions: []
  },
  {
    id: "cse-306",
    code: "CSE-306",
    title: "Operating Systems & Concurrency",
    category: "Systems & Networks",
    instructor: "Prof. Rajesh Ramanathan",
    instructorId: "fac_2",
    credits: 4,
    level: "Advanced",
    rating: 4.8,
    enrolledCount: 175,
    thumbnailGradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
    badge: "Core",
    progress: 0,
    completedLectures: 0,
    totalLectures: 14,
    description: "Process scheduling, thread synchronization, deadlocks, virtual memory management, page replacement, and Linux kernel modules.",
    overview: "Deep dive into kernel engineering and system call tracing.",
    materials: [],
    lectures: [],
    discussions: []
  },
  {
    id: "cse-202",
    code: "CSE-202",
    title: "Object-Oriented Programming with Java",
    category: "Programming",
    instructor: "Dr. Priya Kulkarni",
    instructorId: "fac_1",
    credits: 3,
    level: "Intermediate",
    rating: 4.9,
    enrolledCount: 185,
    thumbnailGradient: "linear-gradient(135deg, #DB2777 0%, #9333EA 100%)",
    badge: "Core",
    progress: 0,
    completedLectures: 0,
    totalLectures: 10,
    description: "Encapsulation, inheritance, polymorphism, abstract classes, Java Generics, Multithreading, JVM internals, and clean design patterns.",
    overview: "Comprehensive study of object-oriented architecture and enterprise Java application development.",
    materials: [],
    lectures: [],
    discussions: []
  },
  {
    id: "cse-308",
    code: "CSE-308",
    title: "Web Technologies & Full-Stack Development",
    category: "Web & Software",
    instructor: "Dr. Priya Kulkarni",
    instructorId: "fac_1",
    credits: 4,
    level: "Intermediate",
    rating: 4.8,
    enrolledCount: 210,
    thumbnailGradient: "linear-gradient(135deg, #0284C7 0%, #2563EB 100%)",
    badge: "Popular",
    progress: 0,
    completedLectures: 0,
    totalLectures: 12,
    description: "Modern JavaScript (ES6+), DOM manipulation, REST APIs, asynchronous client-server communication, Node.js backend services, and web security.",
    overview: "Build scalable full-stack web applications with responsive user interfaces and robust server endpoints.",
    materials: [],
    lectures: [],
    discussions: []
  },
  {
    id: "cse-401",
    code: "CSE-401",
    title: "Artificial Intelligence & Heuristic Search",
    category: "AI & ML",
    instructor: "Dr. Sneha Deshmukh",
    instructorId: "fac_5",
    credits: 4,
    level: "Advanced",
    rating: 4.7,
    enrolledCount: 205,
    thumbnailGradient: "linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)",
    badge: "Trending",
    progress: 0,
    completedLectures: 0,
    totalLectures: 12,
    description: "State space representation, A* search, adversarial Minimax with Alpha-Beta pruning, constraint satisfaction, and Markov Decision Processes.",
    overview: "Foundational AI paradigms, heuristic search optimizations, and probabilistic reasoning.",
    materials: [],
    lectures: [],
    discussions: []
  },
  {
    id: "cse-402",
    code: "CSE-402",
    title: "Machine Learning & Neural Networks",
    category: "AI & ML",
    instructor: "Dr. Sneha Deshmukh",
    instructorId: "fac_5",
    credits: 4,
    level: "Advanced",
    rating: 4.9,
    enrolledCount: 230,
    thumbnailGradient: "linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)",
    badge: "Elective",
    progress: 0,
    completedLectures: 0,
    totalLectures: 14,
    description: "Supervised and unsupervised learning, gradient descent, logistic regression, backpropagation, convolutional networks, and transformer fundamentals.",
    overview: "Practical model training, evaluation metrics, overfitting mitigation, and PyTorch deep learning pipelines.",
    materials: [],
    lectures: [],
    discussions: []
  },
  {
    id: "cse-307",
    code: "CSE-307",
    title: "Software Engineering & Agile Methodologies",
    category: "Web & Software",
    instructor: "Prof. Vikram Malhotra",
    instructorId: "fac_4",
    credits: 3,
    level: "Intermediate",
    rating: 4.6,
    enrolledCount: 170,
    thumbnailGradient: "linear-gradient(135deg, #0D9488 0%, #10B981 100%)",
    badge: "Core",
    progress: 0,
    completedLectures: 0,
    totalLectures: 10,
    description: "SDLC lifecycles, Agile/Scrum sprints, CI/CD pipelines, automated unit testing, architectural patterns, and code maintainability.",
    overview: "Enterprise software development workflows, version control protocols, and software quality assurance.",
    materials: [],
    lectures: [],
    discussions: []
  },
  {
    id: "cse-309",
    code: "CSE-309",
    title: "Theory of Computation & Automata",
    category: "Core CS",
    instructor: "Prof. Rajesh Ramanathan",
    instructorId: "fac_2",
    credits: 4,
    level: "Advanced",
    rating: 4.7,
    enrolledCount: 155,
    thumbnailGradient: "linear-gradient(135deg, #475569 0%, #1E293B 100%)",
    badge: "Core",
    progress: 0,
    completedLectures: 0,
    totalLectures: 12,
    description: "Deterministic & Nondeterministic Finite Automata, Regular Expressions, Context-Free Grammars, Pushdown Automata, and Turing Machines.",
    overview: "Formal mathematical foundations of computation, language decidability, and the Chomsky hierarchy.",
    materials: [],
    lectures: [],
    discussions: []
  },
  {
    id: "cse-203",
    code: "CSE-203",
    title: "Computer Organization & Architecture",
    category: "Systems & Networks",
    instructor: "Dr. Ananya Sen",
    instructorId: "fac_3",
    credits: 4,
    level: "Intermediate",
    rating: 4.7,
    enrolledCount: 180,
    thumbnailGradient: "linear-gradient(135deg, #B45309 0%, #F59E0B 100%)",
    badge: "Core",
    progress: 0,
    completedLectures: 0,
    totalLectures: 12,
    description: "Instruction set architecture (RISC/CISC), CPU pipelining, hazards, cache memory hierarchy, virtual memory, and I/O bus systems.",
    overview: "Hardware-software boundary, assembly language, datapath control units, and microarchitectural performance.",
    materials: [],
    lectures: [],
    discussions: []
  }
];

function createDefaultAssignmentsForUser(user) {
  const firstName = (user && user.firstName) ? user.firstName : "Student";
  return [
    {
      id: "asg-1",
      courseId: "cse-201",
      courseTitle: "Data Structures & Algorithms",
      courseCode: "CSE-201",
      title: "Assignment 3: Balanced AVL Trees & Priority Heap Benchmarks",
      description: "Implement a self-balancing AVL search tree and benchmark priority queue operations against standard binary min-heaps.",
      dueDate: "2026-10-25T23:59:00",
      maxMarks: 100,
      status: "Pending",
      submittedDate: null,
      submittedFile: null,
      grade: null,
      feedback: null
    },
    {
      id: "asg-2",
      courseId: "cse-201",
      courseTitle: "Data Structures & Algorithms",
      courseCode: "CSE-201",
      title: "Assignment 2: Graph Cycle Detection & Topological Sort",
      description: "Construct directed graph representations using adjacency lists and detect dependency deadlocks using Kahn algorithm.",
      dueDate: "2026-10-10T23:59:00",
      maxMarks: 100,
      status: "Graded",
      submittedDate: "2026-10-09T18:30:00",
      submittedFile: `${firstName}_Graph_TopologicalSort.zip`,
      grade: 94,
      feedback: "Exceptional cycle detection logic. Clear asymptotic analysis."
    },
    {
      id: "asg-3",
      courseId: "cse-201",
      courseTitle: "Data Structures & Algorithms",
      courseCode: "CSE-201",
      title: "Assignment 1: Linked List Inversion & Monotonic Deque",
      description: "Implement in-place singly linked list reversal and sliding window maximum with O(N) monotonic double-ended queue.",
      dueDate: "2026-09-22T23:59:00",
      maxMarks: 100,
      status: "Graded",
      submittedDate: "2026-09-21T14:15:00",
      submittedFile: `CSE201_LinkedList_${firstName}.cpp`,
      grade: 96,
      feedback: "Accurate memory pointer manipulation without memory leaks."
    },
    {
      id: "asg-4",
      courseId: "cse-301",
      courseTitle: "Advanced Algorithms & Complexity",
      courseCode: "CSE-301",
      title: "Assignment 4: Dynamic Programming & Bellman-Ford Optimization",
      description: "Implement 0/1 Knapsack variations and Bellman-Ford negative cycle detection with O(V*E) complexity benchmarks.",
      dueDate: "2026-10-28T23:59:00",
      maxMarks: 100,
      status: "Pending",
      submittedDate: null,
      submittedFile: null,
      grade: null,
      feedback: null
    },
    {
      id: "asg-5",
      courseId: "cse-301",
      courseTitle: "Advanced Algorithms & Complexity",
      courseCode: "CSE-301",
      title: "Assignment 3: Disjoint Set Union & Minimum Spanning Trees",
      description: "Benchmark Kruskal vs Prim on sparse vs dense graphs with 100,000 vertices using Union-By-Rank and Path Compression.",
      dueDate: "2026-10-04T23:59:00",
      maxMarks: 100,
      status: "Graded",
      submittedDate: "2026-10-03T20:45:00",
      submittedFile: `CSE301_DSU_Kruskal_${firstName}.zip`,
      grade: 91,
      feedback: "Well documented test cases. Space complexity analysis was succinct."
    },
    {
      id: "asg-6",
      courseId: "cse-302",
      courseTitle: "Database Management Systems & SQL",
      courseCode: "CSE-302",
      title: "Assignment 3: Complex SQL Analytical Queries & Window Functions",
      description: "Write queries using RANK(), DENSE_RANK(), CTEs and partitioning for university enrollment metrics.",
      dueDate: "2026-10-24T23:59:00",
      maxMarks: 100,
      status: "Submitted",
      submittedDate: "2026-10-18T16:20:00",
      submittedFile: `CSE302_Window_Functions_${firstName}.sql`,
      grade: null,
      feedback: "Under faculty evaluation."
    },
    {
      id: "asg-7",
      courseId: "cse-302",
      courseTitle: "Database Management Systems & SQL",
      courseCode: "CSE-302",
      title: "Assignment 2: Schema Normalization & BCNF Decomposition",
      description: "Normalize university clinic records from unnormalized form to Boyce-Codd Normal Form with dependency preservation proofs.",
      dueDate: "2026-09-28T23:59:00",
      maxMarks: 100,
      status: "Graded",
      submittedDate: "2026-09-27T19:10:00",
      submittedFile: `DBMS_BCNF_${firstName}.pdf`,
      grade: 88,
      feedback: "Good functional dependency deduction. Lossless join verification was clear."
    },
    {
      id: "asg-8",
      courseId: "cse-304",
      courseTitle: "Python Programming & Data Analytics",
      courseCode: "CSE-304",
      title: "Assignment 4: Exploratory Data Analysis & Seaborn Visualizations",
      description: "Clean real-world climate dataset, handle missing imputation, and plot correlation heatmaps with violin distributions.",
      dueDate: "2026-10-22T23:59:00",
      maxMarks: 100,
      status: "Submitted",
      submittedDate: "2026-10-17T21:00:00",
      submittedFile: `Python_EDA_ClimateTrends_${firstName}.ipynb`,
      grade: null,
      feedback: "Under faculty review."
    },
    {
      id: "asg-9",
      courseId: "cse-304",
      courseTitle: "Python Programming & Data Analytics",
      courseCode: "CSE-304",
      title: "Assignment 3: NumPy Array Vectorization & Performance Profiling",
      description: "Optimize nested matrix manipulation loops into broadcasted vector operations, benchmarking cProfile speedups.",
      dueDate: "2026-09-30T23:59:00",
      maxMarks: 100,
      status: "Graded",
      submittedDate: "2026-09-29T22:15:00",
      submittedFile: `NumPy_Profiling_${firstName}.ipynb`,
      grade: 98,
      feedback: "Remarkable speedup achieved with clean vectorization."
    },
    {
      id: "asg-10",
      courseId: "cse-301",
      courseTitle: "Advanced Algorithms & Complexity",
      courseCode: "CSE-301",
      title: "Assignment 2: Trie Implementation with Autocomplete Search",
      description: "Implement a memory-efficient prefix Trie supporting insert, search, prefix count, and Levenshtein fuzzy distance matching.",
      dueDate: "2026-09-15T23:59:00",
      maxMarks: 100,
      status: "Graded",
      submittedDate: "2026-09-14T11:00:00",
      submittedFile: `Trie_Autocomplete_${firstName}.cpp`,
      grade: 95,
      feedback: "Clean memory handling without memory leaks."
    }
  ];
}

function createDefaultMessagesForUser(user) {
  const firstName = (user && user.firstName) ? user.firstName : "Student";
  return [
    {
      id: "msg-thread-1",
      facultyId: "fac_1",
      facultyName: "Dr. Priya Kulkarni",
      facultyRole: "Professor, Dept. of CSE",
      avatar: "PK",
      unread: false,
      chat: [
        { sender: "faculty", text: `Good afternoon ${firstName}. I reviewed your lab implementation for CSE-201. Your balanced tree logic is commendable.`, time: "Oct 18, 2:15 PM" },
        { sender: "student", text: "Thank you so much Professor Kulkarni! I spent extra time refining the AVL rotation edge cases.", time: "Oct 18, 2:20 PM" },
        { sender: "faculty", text: "Remember to ensure time complexity remains strictly O(log N) for height adjustments during deletions.", time: "Oct 18, 2:24 PM" },
        { sender: "student", text: "Noted ma'am! I have verified all benchmark cases against randomized test inputs.", time: "Oct 18, 2:30 PM" }
      ]
    },
    {
      id: "msg-thread-2",
      facultyId: "fac_2",
      facultyName: "Prof. Rajesh Ramanathan",
      facultyRole: "Professor & Head, Dept. of CSE",
      avatar: "RR",
      unread: true,
      chat: [
        { sender: "student", text: "Respected Professor Ramanathan, in problem 3 of DP assignment, can we apply memoization using std::unordered_map or is 2D vector required for cache locality?", time: "Oct 17, 6:10 PM" },
        { sender: "faculty", text: "2D contiguous vector is strictly preferred for benchmark tests to avoid hashing overhead and cache thrashing.", time: "Oct 18, 9:05 AM" },
        { sender: "student", text: "Understood sir, I will allocate std::vector<std::vector<long long>> upfront.", time: "Oct 18, 9:15 AM" }
      ]
    },
    {
      id: "msg-thread-3",
      facultyId: "fac_4",
      facultyName: "Prof. Vikram Malhotra",
      facultyRole: "Visiting Lead Architect, Cloud Systems",
      avatar: "VM",
      unread: false,
      chat: [
        { sender: "faculty", text: `${firstName}, your Python EDA notebook demonstrated exemplary vectorization. Keep up the high standard.`, time: "Oct 16, 4:40 PM" },
        { sender: "student", text: "Thank you Prof. Malhotra! Excited for the deployment lab session this week.", time: "Oct 16, 4:45 PM" }
      ]
    }
  ];
}

const LERNOVIQUE_DEFAULT_DATA = {
  currentUser: {
    id: "usr_stu_1",
    name: "Aarav Sharma",
    firstName: "Aarav",
    lastName: "Sharma",
    email: "student@edu.com",
    role: "student",
    rollNo: "CS2023-084",
    phone: "+91 98230 44102",
    avatar: "AS",
    department: "Computer Science & Engineering",
    semester: "Semester 5 (Fall 2026)",
    university: "Apex Institute of Technology, Pune",
    gpa: 8.84,
    enrolledCourses: ["cse-201", "cse-301", "cse-302", "cse-304"]
  },

  facultyUser: {
    id: "usr_fac_1",
    name: "Dr. Priya Kulkarni",
    firstName: "Priya",
    lastName: "Kulkarni",
    email: "faculty@edu.com",
    role: "faculty",
    designation: "Professor, Dept. of CSE",
    employeeId: "FAC-EMP-104",
    phone: "+91 94220 18834",
    avatar: "PK",
    department: "Computer Science & Engineering",
    university: "Apex Institute of Technology, Pune",
    coursesTaught: ["cse-201", "cse-202"]
  },

  faculties: [
    {
      id: "fac_1",
      name: "Dr. Priya Kulkarni",
      title: "Professor, Dept. of CSE",
      email: "priya.kulkarni@edu.com",
      avatar: "PK",
      rating: 4.9,
      reviewsCount: 142,
      office: "Block B, Room 304"
    },
    {
      id: "fac_2",
      name: "Prof. Rajesh Ramanathan",
      title: "Professor & Head, Dept. of CSE",
      email: "rajesh.r@edu.com",
      avatar: "RR",
      rating: 4.8,
      reviewsCount: 189,
      office: "Block A, Room 112"
    },
    {
      id: "fac_3",
      name: "Dr. Ananya Sen",
      title: "Associate Professor, Database Systems (CSE)",
      email: "ananya.sen@edu.com",
      avatar: "AS",
      rating: 4.7,
      reviewsCount: 110,
      office: "Block C, Room 205"
    },
    {
      id: "fac_4",
      name: "Prof. Vikram Malhotra",
      title: "Visiting Lead Architect, Cloud Systems (CSE)",
      email: "vikram.m@edu.com",
      avatar: "VM",
      rating: 4.9,
      reviewsCount: 220,
      office: "Innovation Lab 2"
    },
    {
      id: "fac_5",
      name: "Dr. Sneha Deshmukh",
      title: "Professor, AI & Computer Networks (CSE)",
      email: "sneha.d@edu.com",
      avatar: "SD",
      rating: 4.6,
      reviewsCount: 95,
      office: "Block B, Room 410"
    }
  ],

  courses: LERNOVIQUE_BASE_COURSES,

  grades: [
    {
      subjectCode: "CSE-201",
      subjectName: "Data Structures & Algorithms",
      credits: 4,
      instructor: "Prof. Rajesh Ramanathan",
      midTerm: 48,
      assignments: 95,
      labPracticals: 49,
      finalGrade: "A+",
      gradePoint: 10.0,
      percentage: 96.2,
      status: "Completed"
    },
    {
      subjectCode: "CSE-301",
      subjectName: "Advanced Algorithms & Complexity",
      credits: 4,
      instructor: "Prof. Rajesh Ramanathan",
      midTerm: 44,
      assignments: 93,
      labPracticals: 46,
      finalGrade: "A",
      gradePoint: 9.0,
      percentage: 91.0,
      status: "Completed"
    },
    {
      subjectCode: "CSE-302",
      subjectName: "Database Management Systems (DBMS)",
      credits: 4,
      instructor: "Dr. Ananya Sen",
      midTerm: 42,
      assignments: 88,
      labPracticals: 44,
      finalGrade: "B+",
      gradePoint: 8.0,
      percentage: 84.5,
      status: "In Progress"
    },
    {
      subjectCode: "CSE-304",
      subjectName: "Python Programming & Data Analytics",
      credits: 3,
      instructor: "Prof. Vikram Malhotra",
      midTerm: 49,
      assignments: 98,
      labPracticals: 48,
      finalGrade: "A+",
      gradePoint: 10.0,
      percentage: 97.4,
      status: "Completed"
    },
    {
      subjectCode: "CSE-305",
      subjectName: "Computer Networks & Protocols",
      credits: 3,
      instructor: "Dr. Sneha Deshmukh",
      midTerm: 44,
      assignments: 90,
      labPracticals: 45,
      finalGrade: "A",
      gradePoint: 9.0,
      percentage: 89.0,
      status: "Completed"
    }
  ],

  liveLectures: [
    {
      id: "live-1",
      courseId: "cse-201",
      courseCode: "CSE-201",
      courseTitle: "Data Structures & Algorithms",
      title: "Live Problem Solving: Balanced Binary Search Trees & AVL Rotations",
      instructor: "Dr. Priya Kulkarni",
      date: "Today, 4:00 PM - 5:30 PM",
      timestamp: "2026-10-19T16:00:00",
      status: "upcoming",
      platform: "Lernovique Live Classroom",
      meetingId: "LRN-CSE-2010",
      attendeesCount: 78
    },
    {
      id: "live-2",
      courseId: "cse-301",
      courseTitle: "Advanced Algorithms & Complexity",
      courseCode: "CSE-301",
      title: "Interactive Doubt Clearing: Dynamic Programming on Trees",
      instructor: "Prof. Rajesh Ramanathan",
      date: "Tomorrow, 10:30 AM - 12:00 PM",
      timestamp: "2026-10-20T10:30:00",
      status: "upcoming",
      platform: "Lernovique Live Classroom",
      meetingId: "LRN-CSE-3102",
      attendeesCount: 112
    },
    {
      id: "live-3",
      courseId: "cse-304",
      courseTitle: "Python Programming",
      courseCode: "CSE-304",
      title: "Hands-on Lab: Real-time Data Streaming with Pandas & FastAPIs",
      instructor: "Prof. Vikram Malhotra",
      date: "Wednesday, 2:00 PM - 3:30 PM",
      timestamp: "2026-10-21T14:00:00",
      status: "upcoming",
      platform: "Lernovique Live Classroom",
      meetingId: "LRN-PY-9921",
      attendeesCount: 94
    },
    {
      id: "live-4",
      courseId: "cse-201",
      courseTitle: "Data Structures & Algorithms",
      courseCode: "CSE-201",
      title: "Workshop: Building High-Performance Hash Tables & Benchmarking",
      instructor: "Dr. Priya Kulkarni",
      date: "Oct 15, 2026, 4:00 PM",
      timestamp: "2026-10-15T16:00:00",
      status: "past",
      recordingUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      platform: "Lernovique Live Classroom",
      meetingId: "LRN-CSE-2011",
      attendeesCount: 142
    },
    {
      id: "live-5",
      courseId: "cse-302",
      courseTitle: "Database Management Systems",
      courseCode: "CSE-302",
      title: "Lab Session: Query Optimization & EXPLAIN Query Plan in PostgreSQL",
      instructor: "Dr. Ananya Sen",
      date: "Oct 12, 2026, 11:00 AM",
      timestamp: "2026-10-12T11:00:00",
      status: "past",
      recordingUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      platform: "Lernovique Live Classroom",
      meetingId: "LRN-DB-4011",
      attendeesCount: 120
    }
  ],

  announcements: [
    {
      id: "ann-1",
      title: "Mid-Semester Examination Schedule Autumn 2026 Released",
      author: "Department of Computer Science & Engineering",
      date: "Oct 18, 2026",
      urgent: true,
      content: "Mid-semester exams will commence on November 10, 2026. Hall tickets will be downloadable via the Lernovique portal from November 1st. Please review conflict schedules by this Friday."
    },
    {
      id: "ann-2",
      title: "CSE Technical Colloquium: 'Distributed Systems & Microservices Architecture'",
      author: "Dept. of Computer Science & Engineering",
      date: "Oct 17, 2026",
      urgent: false,
      content: "Join us in the CSE Seminar Hall or on Lernovique Live this Thursday at 5:00 PM IST for an exclusive session on Building Distributed Event-Driven Systems."
    },
    {
      id: "ann-3",
      title: "Campus Wi-Fi Maintenance Window - Oct 20th Midnight",
      author: "Central IT & Network Operations",
      date: "Oct 15, 2026",
      urgent: false,
      content: "Scheduled core switch maintenance on Tuesday from 1:00 AM to 4:00 AM. Cloud services and Lernovique portal access outside campus remains fully operational."
    }
  ],

  students: [
    { id: "stu-1", name: "Kavya Nair", roll: "CS2023-085", gpa: 9.12, attendance: "98%" },
    { id: "stu-2", name: "Rohan Varma", roll: "CS2023-086", gpa: 8.45, attendance: "89%" },
    { id: "stu-3", name: "Sneha Patel", roll: "CS2023-087", gpa: 9.40, attendance: "97%" },
    { id: "stu-4", name: "Arjun Reddy", roll: "CS2023-088", gpa: 7.95, attendance: "86%" },
    { id: "stu-5", name: "Ananya Iyer", roll: "CS2023-089", gpa: 9.25, attendance: "95%" }
  ],

  facultySubmissions: [
    {
      id: "sub-101",
      assignmentId: "asg-1",
      courseCode: "CSE-201",
      assignmentTitle: "Assignment 3: Balanced AVL Trees & Priority Heap Benchmarks",
      studentName: "Kavya Nair",
      rollNo: "CS2023-085",
      submittedDate: "2026-10-18 14:30",
      file: "Kavya_CSE201_AVL_Benchmarks.zip",
      grade: null,
      status: "Needs Grading"
    },
    {
      id: "sub-102",
      assignmentId: "asg-1",
      courseCode: "CSE-201",
      assignmentTitle: "Assignment 3: Balanced AVL Trees & Priority Heap Benchmarks",
      studentName: "Sneha Patel",
      rollNo: "CS2023-087",
      submittedDate: "2026-10-18 19:20",
      file: "SnehaPatel_Tree_Benchmarking.pdf",
      grade: null,
      status: "Needs Grading"
    },
    {
      id: "sub-103",
      assignmentId: "asg-1",
      courseCode: "CSE-201",
      assignmentTitle: "Assignment 3: Balanced AVL Trees & Priority Heap Benchmarks",
      studentName: "Rohan Varma",
      rollNo: "CS2023-086",
      submittedDate: "2026-10-17 11:15",
      file: "Rohan_Varma_CSE201_Sub.cpp",
      grade: 89,
      status: "Graded"
    }
  ]
};

// Storage Version Key for Part A and Part B migration
const STORAGE_DATA_VERSION_KEY = "lernovique_data_v3_cse";

// Initialize localStorage if not present or if migrated
function initializeLernoviqueStorage() {
  if (!localStorage.getItem(STORAGE_DATA_VERSION_KEY)) {
    // Overwrite default data with fresh CSE structure
    localStorage.setItem("lernovique_data", JSON.stringify(LERNOVIQUE_DEFAULT_DATA));
    localStorage.setItem(STORAGE_DATA_VERSION_KEY, "true");
    localStorage.setItem("lernovique_initialized", "true");
    // Ensure clean guest session migration
    localStorage.setItem("lernovique_session_v2", "true");
    localStorage.removeItem("lernovique_user");
    localStorage.setItem("lernovique_auth", JSON.stringify({ isLoggedIn: false, user: null }));
  }
}

// User-Specific Storage Key Helper
function getUserDataKey(email, domain) {
  const safeEmail = (email || "default").toLowerCase().replace(/[^a-z0-9]/g, "_");
  return `lernovique_${safeEmail}_${domain}`;
}

// Get user-specific data slice (assignments, messages, courses)
function getUserDataSlice(email, domain, defaultGenerator) {
  const key = getUserDataKey(email, domain);
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Error reading slice", key, e);
  }

  // Generate initial personalized slice for this user
  const user = getCurrentUser();
  const initial = defaultGenerator ? defaultGenerator(user) : [];
  try {
    localStorage.setItem(key, JSON.stringify(initial));
  } catch (e) {}
  return initial;
}

function saveUserDataSlice(email, domain, sliceData) {
  const key = getUserDataKey(email, domain);
  try {
    localStorage.setItem(key, JSON.stringify(sliceData));
  } catch (e) {
    console.error("Error saving slice", key, e);
  }
}

// Helper to get fresh data
function getLernoviqueData() {
  initializeLernoviqueStorage();
  try {
    const raw = localStorage.getItem("lernovique_data");
    return raw ? JSON.parse(raw) : LERNOVIQUE_DEFAULT_DATA;
  } catch (e) {
    console.error("Error reading localStorage", e);
    return LERNOVIQUE_DEFAULT_DATA;
  }
}

// Helper to save data
function saveLernoviqueData(data) {
  try {
    localStorage.setItem("lernovique_data", JSON.stringify(data));
  } catch (e) {
    console.error("Error saving localStorage", e);
  }
}

// Helper for Auth session & Current User - STRICT GUEST RULE: return null when not logged in
function getCurrentUser() {
  initializeLernoviqueStorage();
  try {
    const rawAuth = localStorage.getItem("lernovique_auth");
    if (rawAuth) {
      const auth = JSON.parse(rawAuth);
      if (!auth || !auth.isLoggedIn) {
        return null;
      }
    } else {
      return null;
    }

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
  } catch (e) {
    console.error("Error getting current user", e);
  }
  return null;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem("lernovique_user", JSON.stringify(user));
    localStorage.setItem("lernovique_auth", JSON.stringify({ isLoggedIn: true, user }));
  } else {
    localStorage.removeItem("lernovique_user");
    localStorage.setItem("lernovique_auth", JSON.stringify({ isLoggedIn: false, user: null }));
  }
}

function getAuthSession() {
  initializeLernoviqueStorage();
  try {
    const raw = localStorage.getItem("lernovique_auth");
    if (!raw) return { isLoggedIn: false, user: null };
    const auth = JSON.parse(raw);
    if (!auth || !auth.isLoggedIn) {
      return { isLoggedIn: false, user: null };
    }
    const user = getCurrentUser();
    auth.user = user;
    return auth;
  } catch (e) {
    return { isLoggedIn: false, user: null };
  }
}

function setAuthSession(isLoggedIn, user) {
  if (isLoggedIn && user) {
    setCurrentUser(user);
  } else {
    setCurrentUser(null);
  }
}
