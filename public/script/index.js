let index = 0;
let words = ['This', 'is', 'Home🏠'];
setInterval(() => {
    if (index == 3) index = 0;
    document.title = words[index];  
    index++;
}, 500)