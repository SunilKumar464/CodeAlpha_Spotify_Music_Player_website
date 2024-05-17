document.addEventListener("DOMContentLoaded", function () {
    const createPlaylistBtn = document.querySelector(".create-playlist button");
    const playlistNameInput = document.querySelector(".create-playlist input");
  
    createPlaylistBtn.addEventListener("click", function () {
      const playlistName = playlistNameInput.value.trim();
  
      if (playlistName === "") {
        alert("Please enter a playlist name.");
        return;
      }
  
      alert(`Playlist "${playlistName}" created successfully!`);
    });
  });