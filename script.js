function showSection(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Update navigation
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
        }

        // Smooth scrolling effect when switching sections
        document.addEventListener('DOMContentLoaded', function() {
            showSection('home');
        });
