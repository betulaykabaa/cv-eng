/* =====================================
   BETÜLAY KABA - PROFESSIONAL PORTFOLIO
   JavaScript with Fixed Click Events - English Version
   ===================================== */

// === GLOBAL VARIABLES ===
let isScrolling = false;
let lastScrollTop = 0;

// === PROJECT DETAILS DATA (ENGLISH) ===
const projectDetails = {
    drone: {
        title: 'Autonomous Cargo Drone',
        year: '2022',
        description: `
            <h3><i class="fas fa-helicopter" style="color: #6366f1;"></i> Autonomous Cargo Transportation Project</h3>
            
            <h4><i class="fas fa-clipboard" style="color: #6366f1;"></i> Project Purpose:</h4>
            <p>The purpose of this project is to design and develop an autonomous drone capable of providing courier and cargo services in predefined urban areas. The project aims to innovate in the logistics sector by leveraging drone technology for efficient, timely, and cost-effective delivery services.</p>
            
            <h4><i class="fas fa-building" style="color: #6366f1;"></i> Drone Station:</h4>
            <p>The drone station serves as the central hub for drone operations, including charging, maintenance, and dispatch. It ensures drones are ready for instant deployment and manages the logistical aspects of the drone delivery system.</p>
            
            <h4><i class="fas fa-box" style="color: #6366f1;"></i> Payload Capacity:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Maximum payload capacity: 3000 grams</li>
            </ul>
            
            <h4><i class="fas fa-cogs" style="color: #6366f1;"></i> Drone Features:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Frame:</strong> Manufactured from high-strength materials such as carbon fiber and HDPE</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Battery compartment:</strong> Designed for summer and winter use, ensuring optimal performance in various weather conditions</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Safety features:</strong> Equipped with a parachute system to minimize impact in case of failure</li>
            </ul>
            
            <h4><i class="fas fa-laptop-code" style="color: #6366f1;"></i> Software Used:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>SolidWorks:</strong> For designing and simulating the mechanical components of the drone</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>MATLAB:</strong> For processing sensor data, performing calculations, and simulating flight dynamics</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>e-Calc:</strong> For validating flight performance and battery endurance calculations</li>
            </ul>
            
            <h4><i class="fas fa-robot" style="color: #6366f1;"></i> AI Algorithms Used:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Machine Learning:</strong> For optimizing flight paths and improving autonomous navigation</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Computer Vision:</strong> For real-time object detection and obstacle avoidance</li>
            </ul>
            
            <h4><i class="fas fa-user-tie" style="color: #6366f1;"></i> Project Manager Role:</h4>
            <p>As project manager, I was responsible for overseeing the entire project lifecycle from initial concept to final testing and deployment. This included coordinating design and development processes, ensuring timely progress, and managing the project team.</p>
        `
    },
    sleep: {
        title: 'Sleep Stage Classification',
        year: '2021',
        description: `
            <h3><i class="fas fa-bed" style="color: #6366f1;"></i> Graduation Project - Sleep Analysis</h3>
            
            <h4><i class="fas fa-bullseye" style="color: #6366f1;"></i> Project Purpose:</h4>
            <p>The purpose of this project is to classify sleep stages using EEG (Electroencephalography) and EMG (Electromyography) signals with artificial neural networks and evaluate the accuracy of this classification.</p>
            
            <h4><i class="fas fa-chart-line" style="color: #6366f1;"></i> Processing Steps:</h4>
            
            <h5>1. Data Collection:</h5>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Data from a 47-year-old female patient from the Physiobank ATM database was used</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Approximately 9 hours of EEG and EMG data was processed</li>
            </ul>
            
            <h5>2. Data Preprocessing:</h5>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> The collected raw data was processed and prepared for analysis</li>
            </ul>
            
            <h5>3. Epoch Segmentation:</h5>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Signals were divided into thirty-second epochs for sleep staging</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> A total of 1079 epochs were obtained</li>
            </ul>
            
            <h5>4. Feature Extraction:</h5>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Features were extracted using both time domain and time-frequency (hybrid) domain</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Calculated features: mean, standard deviation, variance, mean energy, mean curve length, and mean Teager energy</li>
            </ul>
            
            <h5>5. Classification:</h5>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Data was classified into wake (W), NREM (N1, N2, N3), and REM (R) stages using K-Nearest Neighbor (KNN) algorithm</li>
            </ul>
            
            <h5>6. Performance Evaluation:</h5>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Performance was evaluated by calculating accuracy, sensitivity, specificity, F-measure, and AUC (Area Under Curve)</li>
            </ul>
            
            <h4><i class="fas fa-signal" style="color: #6366f1;"></i> Signals Used:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>EEG Signals:</strong> Measures the electrical activity of the brain</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>EMG Signals:</strong> Measures the electrical activity of muscles</li>
            </ul>
            
            <h4><i class="fas fa-laptop-code" style="color: #6366f1;"></i> Software Used:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>MATLAB:</strong> For data processing, feature extraction, and classification tasks</li>
            </ul>
            
            <h4><i class="fas fa-robot" style="color: #6366f1;"></i> AI Algorithms Used:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Artificial Neural Networks (ANN):</strong> For classification of sleep stages</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>K-Nearest Neighbor (KNN) Algorithm:</strong> For data classification</li>
            </ul>
            
            <h4><i class="fas fa-chart-bar" style="color: #6366f1;"></i> Results:</h4>
            <p>The classification of sleep stages using EEG and EMG signals provided the best performance with the weighted KNN algorithm in the time domain. The results of this study show that sleep stages can be accurately classified. High performance was achieved with calculated values for accuracy, sensitivity, specificity, F-measure, and AUC. This demonstrates that artificial neural networks and KNN algorithms can be effectively used for sleep stage classification.</p>
        `
    },
    uav: {
        title: 'Multi-Purpose UAV Development',
        year: 'TEKNOFEST 2020',
        description: `
            <h3><i class="fas fa-helicopter" style="color: #6366f1;"></i> TÜBİTAK Supported UAV Project</h3>
            
            <h4><i class="fas fa-bullseye" style="color: #6366f1;"></i> Mission Definition:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Flight and maneuver capability in designated missions</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Autonomous flight</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Collecting 250 grams of water from a specified location, landing, and filling the container</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Transporting and emptying the collected water to the designated target location</li>
            </ul>
            
            <h4><i class="fas fa-map-marker-alt" style="color: #6366f1;"></i> Location - Date:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Competition:</strong> Gaziantep Alleben Lake (September 15-20, 2020)</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Award Ceremony:</strong> Gaziantep TEKNOFEST (September 26-27, 2020)</li>
            </ul>
            
            <h4><i class="fas fa-graduation-cap" style="color: #6366f1;"></i> University Drone Project:</h4>
            <p>A drone team was established at our university as part of the International Unmanned Aerial Vehicle (UAV) Competition organized by TÜBİTAK. I served as the team captain for this project.</p>
            
            <h4><i class="fas fa-cogs" style="color: #6366f1;"></i> Design and Production Process:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> The drone's design and production processes were carried out using SolidWorks</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> All parts were produced by our team using a 3D printer</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Engineering calculations for the drone's weight lifting capacity, wind resistance, flight time, and maneuverability were meticulously performed</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Electronic circuit design and software development were successfully completed by our team members</li>
            </ul>
            
            <h4><i class="fas fa-trophy" style="color: #6366f1;"></i> Achievement:</h4>
            <p>In this context, we developed a drone capable of efficiently performing all required missions. With our teamwork and technical competence, we delivered a successful performance at TEKNOFEST 2020.</p>
        `
    },
    sumo: {
        title: 'Sumo Competition Robot',
        year: '2018',
        description: `
            <h3><i class="fas fa-robot" style="color: #6366f1;"></i> Sumo Robot Project</h3>
            
            <h4><i class="fas fa-bullseye" style="color: #6366f1;"></i> Project Purpose and Function:</h4>
            <p>The purpose of this project was to build a sumo robot designed to compete in a sumo wrestling arena. The robot's goal is to push its opponent out of a circular ring marked with a white boundary line.</p>
            
            <h4><i class="fas fa-clipboard" style="color: #6366f1;"></i> Key Features:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> The robot must not exceed a certain weight and height limit</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> The project was built using an Arduino microcontroller</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> The robot's chassis was designed in SolidWorks and 3D printed</li>
            </ul>
            
            <h4><i class="fas fa-cogs" style="color: #6366f1;"></i> Main Components and Functions:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Arduino Microcontroller:</strong> Acts as the robot's brain, controlling all movements and sensors</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Motors and Wheels:</strong> Provide necessary movement and maneuverability</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Sensors:</strong> Detect the edge of the ring and the opponent's position</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Chassis:</strong> 3D printed to provide a sturdy and lightweight frame for the robot</li>
            </ul>
            
            <h4><i class="fas fa-gears" style="color: #6366f1;"></i> Working Principle:</h4>
            <p>The robot uses its sensors to detect the white boundary line and avoid crossing it. It also uses sensors to find the opponent and push them out of the ring. The Arduino microcontroller processes sensor inputs and controls the motors accordingly.</p>
            
            <h4><i class="fas fa-palette" style="color: #6366f1;"></i> Design and Manufacturing:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> The robot's design was created in SolidWorks and printed using a 3D printer</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Arduino code was written and tested to ensure the robot could effectively navigate the ring and compete with opponents</li>
            </ul>
            
            <h4><i class="fas fa-tasks" style="color: #6366f1;"></i> Project Execution:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Design:</strong> The robot's chassis was carefully designed to balance strength and weight to meet competition requirements</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>3D Printing:</strong> The designed parts were printed using a 3D printer</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Assembly:</strong> Components were assembled and the Arduino was programmed to control the robot's actions</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Testing:</strong> The robot was tested in various scenarios to improve performance and ensure successful competition</li>
            </ul>
        `
    },
    power: {
        title: 'VersaVolt - Adjustable Power Supply',
        year: '2017',
        description: `
            <h3><i class="fas fa-bolt" style="color: #6366f1;"></i> Adjustable Power Supply Project</h3>
            
            <h4><i class="fas fa-bullseye" style="color: #6366f1;"></i> Project Purpose and Function:</h4>
            <p>This project aims to develop an adjustable power supply capable of providing various voltage levels required for different electronic applications. The 0-30V adjustability range makes this power supply versatile for use in laboratories, research and development projects, and hobby electronics.</p>
            
            <h4><i class="fas fa-plug" style="color: #6366f1;"></i> Main Components and Functions:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Transformer (TR1):</strong> Converts high voltage from the electrical grid to a lower, safer level that the circuit can process</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Bridge Diode (BR1):</strong> Converts AC (Alternating Current) voltage to DC (Direct Current) voltage</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Capacitor (C1 - 2200uF):</strong> Smooths and filters the rippled DC voltage from the diode bridge</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Voltage Regulator (Q1, Q2, Q3, Q4):</strong> Provides an adjustable output voltage. Q2 and Q3 transistors increase voltage boosting and high current carrying capability, while Q1 controls voltage regulation</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Potentiometer (RV1 - 0.25k):</strong> Used to adjust the output voltage</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> <strong>Resistors and Other Components:</strong> Limit current and voltage to ensure proper circuit operation</li>
            </ul>
            
            <h4><i class="fas fa-gears" style="color: #6366f1;"></i> Working Principle:</h4>
            <p>The reduced voltage from the transformer is rectified by the bridge diode and then filtered by the capacitor. The potentiometer adjusts the current through the base transistor to control the output voltage. The adjustable voltage is applied to the load by the output transistors.</p>
            
            <h4><i class="fas fa-laptop-code" style="color: #6366f1;"></i> Design and Simulation:</h4>
            <p>The simulation using Proteus software checks whether circuit elements are properly assembled, verifies the circuit performs its expected function, and identifies and corrects errors at an early stage. Simulation plays a crucial role in validating theoretical designs before building an actual circuit.</p>
            
            <h4><i class="fas fa-star" style="color: #6366f1;"></i> Features:</h4>
            <ul>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> 0-30V adjustable output voltage</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Short circuit protection</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Overcurrent protection</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Less than 1% ripple rate</li>
                <li><i class="fas fa-check-circle" style="color: #6366f1;"></i> Reliable test environment for electronic circuits</li>
            </ul>
        `
    }
};

// === DOM CONTENT LOADED ===
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initPreloader();
    initNavigation();
    initTypewriter();
    initScrollEffects();
    initAnimations();
    initProjects();
    initSkills();
    initContactForm();
    initBackToTop();
    initAOS();
    
    console.log('✅ Portfolio initialized successfully!');
});

// === PRELOADER ===
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('hide');
                document.body.style.overflow = 'visible';
            }, 800);
        });
    }
}

// === NAVIGATION ===
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Hamburger menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

// === TYPEWRITER EFFECT ===
function initTypewriter() {
    const typedText = document.getElementById('typed-text');
    if (!typedText) return;
    
    const roles = [
        'AI Project Specialist',
        'Biomedical Engineer',
        'Multi-Agent Systems Developer',
        'Automation Engineer',
        'Generative AI Developer'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typedText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before new word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// === SCROLL EFFECTS ===
function initScrollEffects() {
    const progressBar = document.getElementById('progressBar');
    
    window.addEventListener('scroll', () => {
        // Update progress bar
        if (progressBar) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollProgress + '%';
        }
    });
}

// === ANIMATIONS ===
function initAnimations() {
    // Animate stats numbers
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-count'));
                    if (target) {
                        animateNumber(stat, target);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe stats section
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// === NUMBER ANIMATION ===
function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// === PROJECTS ===
function initProjects() {
    // Make project buttons work
    window.openProjectModal = function(projectId) {
        const modal = document.getElementById('projectModal');
        const modalContent = document.getElementById('modalContent');
        
        if (!modal || !modalContent) return;
        
        // Set modal content
        const project = projectDetails[projectId];
        if (project) {
            modalContent.innerHTML = `
                <h2>${project.title}</h2>
                <span class="project-year">${project.year}</span>
                ${project.description}
            `;
            
            // Show modal
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    };
    
    // Close modal function
    window.closeProjectModal = function() {
        const modal = document.getElementById('projectModal');
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'visible';
        }
    };
    
    // Close modal when clicking outside
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
}

// === SKILLS ANIMATION ===
function initSkills() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach((bar, index) => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, index * 100);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe skills section
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
}

// === CONTACT FORM ===
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const mailtoLink = `mailto:betulaykaba.work@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open mail client
            window.location.href = mailtoLink;
            
            // Reset form
            contactForm.reset();
            
            // Show success message (optional)
            showNotification('Thank you for your message! I will get back to you as soon as possible.');
        });
    }
}

// === NOTIFICATION ===
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideInRight 0.5s ease;
        z-index: 3000;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// === BACK TO TOP ===
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        // Show/hide button based on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        // Scroll to top when clicked
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// === AOS INITIALIZATION ===
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }
}

// === PARALLAX EFFECT ===
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.animated-shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const xPos = (x - 0.5) * speed;
        const yPos = (y - 0.5) * speed;
        
        shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// === SMOOTH REVEAL ON SCROLL ===
const revealElements = document.querySelectorAll('.fade-in-up');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
    revealObserver.observe(element);
});

// === KEYBOARD NAVIGATION ===
document.addEventListener('keydown', (e) => {
    // Press '1-6' to navigate sections
    const sections = ['#home', '#about', '#experience', '#projects', '#skills', '#contact'];
    const key = parseInt(e.key);
    
    if (key >= 1 && key <= 6) {
        const target = document.querySelector(sections[key - 1]);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// === PERFORMANCE OPTIMIZATION ===
// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// === EASTER EGG ===
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s linear infinite';
    showNotification('🎉 You found the hidden feature! Congratulations! 🎉');
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

// === RAINBOW ANIMATION FOR EASTER EGG ===
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    /* Modal Content Styles - Better Readability */
    .modal-body {
        font-size: 16px;
        line-height: 1.8;
        color: #2d3748;
    }
    
    .modal-body h2 {
        font-size: 2.5rem !important;
        color: #1a202c !important;
        margin-bottom: 20px !important;
        padding-bottom: 15px !important;
        border-bottom: 3px solid #6366f1 !important;
    }
    
    .modal-body h3 {
        font-size: 1.8rem !important;
        color: #2d3748 !important;
        margin-top: 35px !important;
        margin-bottom: 20px !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
        padding: 15px 20px !important;
        border-radius: 10px !important;
    }
    
    .modal-body h4 {
        font-size: 1.3rem !important;
        color: #4a5568 !important;
        margin-top: 25px !important;
        margin-bottom: 15px !important;
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
        padding: 10px 0 !important;
        border-left: 4px solid #6366f1 !important;
        padding-left: 15px !important;
    }
    
    .modal-body h5 {
        font-size: 1.1rem !important;
        color: #718096 !important;
        margin-top: 20px !important;
        margin-bottom: 12px !important;
        font-weight: 600 !important;
    }
    
    .modal-body p {
        font-size: 16px !important;
        line-height: 1.8 !important;
        color: #4a5568 !important;
        margin-bottom: 18px !important;
        text-align: justify !important;
    }
    
    .modal-body ul {
        margin: 15px 0 !important;
        padding-left: 0 !important;
        list-style: none !important;
    }
    
    .modal-body ul li {
        font-size: 15px !important;
        line-height: 1.8 !important;
        color: #4a5568 !important;
        margin-bottom: 12px !important;
        padding: 10px 15px !important;
        background: #f8f9fa !important;
        border-radius: 8px !important;
        display: flex !important;
        align-items: flex-start !important;
        gap: 12px !important;
        transition: all 0.3s ease !important;
    }
    
    .modal-body ul li:hover {
        background: #e9ecef !important;
        transform: translateX(5px) !important;
    }
    
    .modal-body ul li i {
        flex-shrink: 0 !important;
        margin-top: 3px !important;
    }
    
    .modal-body strong {
        color: #2d3748 !important;
        font-weight: 600 !important;
    }
    
    .modal-content {
        max-width: 1000px !important;
        width: 95% !important;
        max-height: 90vh !important;
        padding: 30px 40px !important;
    }
    
    .modal-body .project-year {
        display: inline-block !important;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
        color: white !important;
        padding: 8px 20px !important;
        border-radius: 25px !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        margin-bottom: 25px !important;
    }
    
    /* Scroll Bar Customization */
    .modal-content::-webkit-scrollbar {
        width: 8px;
    }
    
    .modal-content::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }
    
    .modal-content::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 10px;
    }
    
    .modal-content::-webkit-scrollbar-thumb:hover {
        background: #4f46e5;
    }
    
    /* Mobile Responsive */
    @media (max-width: 768px) {
        .modal-content {
            padding: 20px !important;
            width: 100% !important;
            height: 100vh !important;
            max-height: 100vh !important;
            border-radius: 0 !important;
        }
        
        .modal-body h2 {
            font-size: 1.8rem !important;
        }
        
        .modal-body h3 {
            font-size: 1.4rem !important;
        }
        
        .modal-body h4 {
            font-size: 1.1rem !important;
        }
        
        .modal-body p,
        .modal-body ul li {
            font-size: 14px !important;
        }
    }
`;
document.head.appendChild(style);

// === ERROR HANDLING ===
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// === PAGE VISIBILITY API ===
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = 'Come back! - Betulay Kaba';
    } else {
        document.title = 'Betulay Kaba | AI Project Specialist & Biomedical Engineer';
    }
});

console.log('🚀 Betulay Kaba Portfolio - v2.0 Professional');
console.log('💻 Developed with passion and precision');
console.log('📧 Contact: betulaykaba.work@gmail.com');