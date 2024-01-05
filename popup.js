document.addEventListener('DOMContentLoaded', function () {
    // Initialize the checkbox state based on the stored value
    chrome.storage.sync.get('extensionEnabled', function (result) {
      const extensionEnabled = result.extensionEnabled !== false; // Default to true if not set
      document.getElementById('toggleExtension').checked = extensionEnabled;
    });
  
    // Listen for checkbox changes
    document.getElementById('toggleExtension').addEventListener('change', function () {
      const extensionEnabled = this.checked;
  
      // Save the state to storage
      chrome.storage.sync.set({ 'extensionEnabled': extensionEnabled });
  
      // Send a message to content script to enable or disable highlighting
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { type: 'toggleExtension', enabled: extensionEnabled });
      });
    });
  
    // Close the popup when the button is clicked
    document.getElementById('closePopup').addEventListener('click', function () {
      window.close();
    });
  });
  