// Macan Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Filter button functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Compare functionality
    const compareCheckboxes = document.querySelectorAll('.compare-checkbox');
    const compareBtn = document.getElementById('compare-btn');
    const mobileCompareBtn = document.getElementById('mobile-compare-btn');
    
    function updateCompareButton() {
        const checkedCount = document.querySelectorAll('.compare-checkbox:checked').length;
        if (checkedCount > 0) {
            compareBtn.classList.remove('hidden');
            compareBtn.innerHTML = `<span>Compare (${checkedCount})</span><i class="fas fa-exchange-alt"></i>`;
            compareBtn.classList.add('compare-btn-animate');
            
            mobileCompareBtn.classList.add('bg-red-600');
            mobileCompareBtn.innerHTML = `
                <i class="fas fa-exchange-alt text-xl"></i>
                <span class="badge">${checkedCount}</span>
            `;
        } else {
            compareBtn.classList.add('hidden');
            compareBtn.classList.remove('compare-btn-animate');
            mobileCompareBtn.classList.remove('bg-red-600');
            mobileCompareBtn.innerHTML = `<i class="fas fa-exchange-alt text-xl"></i>`;
        }
    }

    compareCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCompareButton);
    });

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('header button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            // This would toggle a mobile menu in a real implementation
            alert('Mobile menu would open here');
        });
    }

    // Compare button click handlers
    if (compareBtn) {
        compareBtn.addEventListener('click', () => {
            const checkedModels = document.querySelectorAll('.compare-checkbox:checked');
            if (checkedModels.length > 0) {
                const modelNames = Array.from(checkedModels).map(checkbox => {
                    const modelCard = checkbox.nextElementSibling;
                    return modelCard.querySelector('h3').textContent;
                });
                alert(`Comparing: ${modelNames.join(', ')}`);
            }
        });
    }

    if (mobileCompareBtn) {
        mobileCompareBtn.addEventListener('click', () => {
            const checkedModels = document.querySelectorAll('.compare-checkbox:checked');
            if (checkedModels.length > 0) {
                const modelNames = Array.from(checkedModels).map(checkbox => {
                    const modelCard = checkbox.nextElementSibling;
                    return modelCard.querySelector('h3').textContent;
                });
                alert(`Comparing: ${modelNames.join(', ')}`);
            }
        });
    }

    // Model selection buttons
    const selectButtons = document.querySelectorAll('.model-card button');
    selectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const modelName = button.closest('.model-card').querySelector('h3').textContent;
            alert(`Selected model: ${modelName}`);
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
}); 