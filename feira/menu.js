const btn = document.getElementById('openMenu');
    const menu = document.getElementById('popupMenu');
    document.addEventListener('click', function(e){
      if(btn.contains(e.target)){
        menu.classList.toggle('show');
      } else if(!menu.contains(e.target)){
        menu.classList.remove('show');
      }
    });