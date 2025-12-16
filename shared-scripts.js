// Shared Navigation Scripts

function toggleAccordion(button) {
  const accordion = button.parentElement
  const content = accordion.querySelector('.accordion-content')
  const isOpen = content.classList.contains('open')

  // Close all accordions
  document.querySelectorAll('.accordion-content').forEach((item) => {
    item.classList.remove('open')
  })
  document.querySelectorAll('.accordion-header').forEach((item) => {
    item.classList.remove('active')
  })

  // Toggle current accordion
  if (!isOpen) {
    content.classList.add('open')
    button.classList.add('active')
  }
}

// Set active link based on current page
function setActiveNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html'
  const links = document.querySelectorAll('.accordion-link')

  links.forEach((link) => {
    const linkPage = link.getAttribute('href').split('/').pop()
    if (linkPage === currentPage) {
      link.classList.add('active')
      // Open parent accordion
      const accordion = link.closest('.accordion')
      if (accordion) {
        const header = accordion.querySelector('.accordion-header')
        const content = accordion.querySelector('.accordion-content')
        header.classList.add('active')
        content.classList.add('open')
      }
    }
  })
}

// Load navigation into page
function loadNavigation() {
  fetch('shared-navigation.html')
    .then((response) => response.text())
    .then((html) => {
      // Insert navigation at the beginning of body
      const body = document.body
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = html
      const sidebar = tempDiv.querySelector('.sidebar')
      
      if (sidebar) {
        body.insertBefore(sidebar, body.firstChild)
        
        // Wrap existing content in main-content-wrapper if it doesn't exist
        if (!document.querySelector('.main-content-wrapper')) {
          const wrapper = document.createElement('div')
          wrapper.className = 'main-content-wrapper'
          
          // Move all children except sidebar into wrapper
          const children = Array.from(body.children)
          children.forEach((child) => {
            if (!child.classList.contains('sidebar')) {
              wrapper.appendChild(child)
            }
          })
          
          body.appendChild(wrapper)
        }
        
        // Set active navigation after a short delay
        setTimeout(setActiveNavigation, 100)
      }
    })
    .catch((error) => {
      console.error('Error loading navigation:', error)
    })
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNavigation)
} else {
  loadNavigation()
}

