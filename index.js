
    const wishes = [
      "Ayy happy bithday queen 👑 been a few months but your vibe still unforgettable.Keep being real, the world needs more souls like you.",
      "Big birthday energy to the one who's been nothing but genuine since day one. Stay shining, shorty💫.",
      "Happy cake day! You got that rare mix beauty, brains & big heart. Stay you, don't switch up🖤",
      "Hope your day's as dope as your spirit homie🎉✨.",
      "Happy birthday to the realest! You came in quiet, but your energy loud. Much love always💯🎂.",
      "May your mornings be soft and your victories sweet, dear🌞🎈.",
      "Not everyone got that soft soul & strong mind combo, you do my main one🎁🌱. ",
      "Wishing you love, peace, and a whole lotta good vibes today. You deserve it all fr💌.",
      "It's your day, so move like it. Smile big, laugh loud, and don't let nobody dim that light🕯️💃.",
      "HAPPY BIRTHDAY ANCHI YE QOQ MEREQ🌍❤️."
    ];

    const bgs = [
      'var(--bg-1)','var(--bg-2)','var(--bg-3)','var(--bg-4)','var(--bg-5)',
      'var(--bg-6)','var(--bg-7)','var(--bg-8)','var(--bg-9)','var(--bg-10)'
    ];

    let order = [...wishes.keys()];
    let i = 0;

    const quote = document.getElementById('quote');
    const slide = document.getElementById('slide');
    const counter = document.getElementById('counter');
    const bar = document.getElementById('bar');

    function setCard(idx){
      const pos = order[idx];
      quote.textContent = wishes[pos];
      slide.style.background = bgs[pos % bgs.length];
      counter.textContent = `Card ${idx+1} / ${wishes.length}`;
      const progress = Math.round(((idx+1)/wishes.length)*100);
      bar.style.width = progress + '%';
    }

    function next(){
      i = Math.min(i+1, wishes.length-1);
      setCard(i);
    }
    function prev(){
      i = Math.max(i-1, 0);
      setCard(i);
    }

    function shuffle(){
      for(let j = order.length -1; j>0; j--){
        const r = Math.floor(Math.random()*(j+1));
        [order[j], order[r]] = [order[r], order[j]];
      }
      i = 0;
      setCard(i);
    }

    document.getElementById('next').addEventListener('click', next);
    document.getElementById('prev').addEventListener('click', prev);
    document.getElementById('shuffle').addEventListener('click', shuffle);

    window.addEventListener('keydown', (e)=>{
      if(e.key==='ArrowRight') next();
      if(e.key==='ArrowLeft') prev();
    });

    setCard(0);
