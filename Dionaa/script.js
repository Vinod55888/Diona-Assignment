document.addEventListener("DOMContentLoaded", () => {
    // Get current date and time for display
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const timeString = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`
  
    // Update the time in the status bar
    const timeElement = document.querySelector(".time")
    if (timeElement) {
      timeElement.textContent = timeString
    }
  
    // Calculate battery percentage (just for demonstration)
    const batteryPercentage = Math.floor(Math.random() * 20) + 80 // Random between 80-100%
    const batteryElement = document.querySelector(".battery")
    if (batteryElement) {
      batteryElement.textContent = `${batteryPercentage}%`
    }
  
    // Add click event for back button
    const backButton = document.querySelector(".back-button")
    if (backButton) {
      backButton.addEventListener("click", () => {
        alert("Back button clicked")
      })
    }
  
    // Add click event for signature button
    const signatureButton = document.querySelector(".signature-icon")
    if (signatureButton) {
      signatureButton.addEventListener("click", () => {
        alert("Form submitted successfully!")
      })
    }
  
    // Add click event for privacy link
    const privacyLink = document.querySelector(".privacy-link")
    if (privacyLink) {
      privacyLink.addEventListener("click", (e) => {
        e.preventDefault()
        alert("Privacy Notice clicked")
      })
    }
  
    // Fix table layout issues
    function adjustTableLayout() {
      const tables = document.querySelectorAll(".expense-table")
      tables.forEach((table) => {
        // Ensure all cells in a row have the same height
        const rows = table.querySelectorAll("tr")
        rows.forEach((row) => {
          const cells = row.querySelectorAll("th, td")
          let maxHeight = 0
  
          // Find max height
          cells.forEach((cell) => {
            const height = cell.scrollHeight
            if (height > maxHeight) {
              maxHeight = height
            }
          })
  
          // Apply max height to all cells
          cells.forEach((cell) => {
            cell.style.height = `${maxHeight}px`
          })
        })
      })
    }
  
    // Run layout adjustments after page load
    window.addEventListener("load", adjustTableLayout)
    window.addEventListener("resize", adjustTableLayout)
  })