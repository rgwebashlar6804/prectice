// Function to handle image upload
function handleImageUpload(event) {
    const files = event.target.files;
  
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const imageSrc = e.target.result;
        const imageItem = document.createElement('img');
        imageItem.src = imageSrc;
        document.getElementById('imagePreview').appendChild(imageItem);
  
        // Store image path in localStorage
        const imagePath = `images/image${i}.png`;
        localStorage.setItem(`image${i}`, imagePath);
        
        // Simulate saving image to image folder (client-side only)
        saveImageToFolder(imageSrc, imagePath);
      };
  
      reader.readAsDataURL(files[i]);
    }
  }
  
  // Function to simulate saving image to image folder
  function saveImageToFolder(imageSrc, imagePath) {
    // In a real application, you would send this data to the server
    // and save the image to the server's filesystem
    
    // Here we'll just log the action
    console.log(`Saving image to folder: ${imagePath}`);
  }
  
  // Add event listener to input element
  document.getElementById('imageInput').addEventListener('change', handleImageUpload);
  