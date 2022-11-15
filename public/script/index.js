let index = 0;
let words = ['Welcome', 'to my', 'Website'];
setInterval(() => {
    if (index == 3) index = 0;
    document.title = words[index];  
    index++;
}, 500)