document.addEventListener("DOMContentLoaded",function(){
    prodiv=document.getElementById("prodiv");
    procontent=document.getElementById("procontent");
    prodiv2=document.getElementById("prodiv2");
    procontent2=document.getElementById("procontent2");
    prodiv3=document.getElementById("prodiv3");
    procontent3=document.getElementById("procontent3");
    prodiv4=document.getElementById("prodiv4");
    procontent4=document.getElementById("procontent4");
    prodiv.addEventListener('mouseout',function(event){
        procontent.style.display="none";
    });
    prodiv.addEventListener('mouseover',function(event){
        procontent.style.display="flex";
    });
    prodiv2.addEventListener('mouseout',function(event){
        procontent2.style.display="none";
    });
    prodiv2.addEventListener('mouseover',function(event){
        procontent2.style.display="flex";
    });
    prodiv3.addEventListener('mouseout',function(event){
        procontent3.style.display="none";
    });
    prodiv3.addEventListener('mouseover',function(event){
        procontent3.style.display="flex";
    });
    prodiv4.addEventListener('mouseout',function(event){
        procontent4.style.display="none";
    });
    prodiv4.addEventListener('mouseover',function(event){
        procontent4.style.display="flex";
    });
});
document.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbztEd2XKhmYtHpeGZ51PFkTEdmAI3S9RnZ4HOz45YHeTFTceoigBnkVE7q2LWRKWllA/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('successmsg');

    form.addEventListener('submit', e => {
        e.preventDefault();

        // Clear previous message and remove shake class
        msg.textContent = '';
        msg.className = '';

        // If all validations pass, show loading message
        msg.textContent = 'Sending message....';
        msg.className = 'loading';

        // Submit form
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.textContent = 'Sent successfully!';
                msg.className = 'success';
                setTimeout(function () {
                    msg.textContent = '';
                    msg.className = '';
                }, 4000);
                form.reset();
            })
            .catch(error => {
                msg.textContent = 'Error!';
                msg.className = 'error';
                console.error('Error!', error.message);
            });
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;
    
    // Load the initial mode from localStorage if available
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        body.classList.add(savedMode);
    }

    modeToggle.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (body.classList.contains('red-theme')) {
            body.classList.remove('red-theme');
            body.classList.add('violet-theme');
            localStorage.setItem('mode', 'violet-theme');
        }else if (body.classList.contains('violet-theme')) {
            body.classList.remove('violet-theme');
            body.classList.add('green-theme');
            localStorage.setItem('mode', 'green-theme');
        }else if (body.classList.contains('green-theme')) {
            body.classList.remove('green-theme');
            body.classList.add('yellow-theme');
            localStorage.setItem('mode', 'yellow-theme');
        }else if (body.classList.contains('yellow-theme')) {
            body.classList.remove('yellow-theme');
            body.classList.add('orange-theme');
            localStorage.setItem('mode', 'orange-theme');
        }else if (body.classList.contains('orange-theme')) {
            body.classList.remove('orange-theme');
            body.classList.add('pink-theme');
            localStorage.setItem('mode', 'pink-theme');
        }else if (body.classList.contains('pink-theme')) {
            body.classList.remove('pink-theme');
            body.classList.add('skyblue-theme');
            localStorage.setItem('mode', 'skyblue-theme');
        } else if (body.classList.contains('skyblue-theme')) {
            body.classList.remove('skyblue-theme');
            localStorage.removeItem('mode');
        } else {
            body.classList.add('red-theme');
            localStorage.setItem('mode', 'red-theme');
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const modeToggles = document.getElementById('modeToggles');
    const body = document.body;
    
    // Load the initial mode from localStorage if available
    if (localStorage.getItem('modes') === 'dark') {
      body.classList.add('dark-mode');
      modeToggles.innerHTML = '<i class="fas fa-sun"></i>';
    }

    modeToggles.addEventListener('click', function(event) {
      event.preventDefault();
      body.classList.toggle('dark-mode');
      
      if (body.classList.contains('dark-mode')) {
        modeToggles.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('modes', 'dark');
      } else {
        modeToggles.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('modes', 'light');
      }
    });
  });
  document.addEventListener("DOMContentLoaded",function(){
    togglediv2=document.getElementById("togglediv2");
    optionsdiv=document.getElementById("optionsdiv");
    togglediv2.onclick=function(){
        if(optionsdiv.style.right=="0%"){
            optionsdiv.style.right="-100%";
            optionsdiv.style.transition=".4s ease";
            togglediv2.innerHTML='<i class="fa-solid fa-bars"></i>';
        }
        else{
            optionsdiv.style.right="0%";
            optionsdiv.style.transition=".4s ease";
            togglediv2.innerHTML='<i class="fa-solid fa-xmark"></i>';
        }
    }
  });
  document.addEventListener("DOMContentLoaded",function(){
    morecontents=document.getElementById("morecontents");
    detailcontents=document.getElementById("detailcontents");
    cut=document.getElementById("cut");
    morecontents.onclick=function(){
        if(detailcontents.style.left="100%"){
            detailcontents.style.left="0%";
        }
    }
    cut.onclick=function(){
        if(detailcontents.style.left="0%"){
            detailcontents.style.left="100%";
        }
    }
  });