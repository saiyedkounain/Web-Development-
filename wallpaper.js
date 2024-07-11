let btn = document.getElementById('toggleBtn');
let prevBtn = document.getElementById('prevBtn');
let image = document.getElementById('image');
let desktopWall = document.getElementById('desktop');
let select = document.getElementById('selector');

btn.addEventListener('click', changeWallpaper)


/**function changeWallpaper(e){
    let nextCount = 0;

    if (btn.textContent == 'Change Wallpaper'){
        image.src ='HD\ wallpaper_\ Windows\ 10\,\ macOS\,\ colorful.jpg';
        btn.textContent = 'Next';
        nextCount++;
        colorPrev();
        
    }
    else if (btn.textContent == 'Next'){
        image.src = '3D\ Wallpaper\ Untuk\ Desktop_.jpg';
        btn.textContent = 'Next Again';
        nextCount++;
        colorPrev();
        
    }
    else if (btn.textContent == 'Next Again'){
        image.src = 'Steam\ Workshop__WINDOWS\ 10_11\ 3840\ x\ 2160px\ 4K\ [PULSE].jpg';
        btn.textContent = 'Next Come On';
        nextCount++;
        colorPrev();
    }
    else if (btn.textContent == 'Next Come On'){
        image.src = '50\ Minimalist\ Desktop\ Wallpapers\ and\ Backgrounds\ \(2022\ Edition\).png';
        btn.textContent = 'Select';
        nextCount++;
        colorPrev();
    }
    else if (btn.textContent == 'Select'){
        btn.textContent = 'Selected!';
        nextCount++;
        colorPrev();
        
    }
    if (btn.textContent == 'Selected!'){
        selectWallpaper(image.src);
    }
   
}

**/
let nextCount = 0;
function changeWallpaper(e){
    nextCount++;
    if (nextCount == 1){
        image.src ='HD\ wallpaper_\ Windows\ 10\,\ macOS\,\ colorful.jpg';
        btn.textContent = 'Next';
        colorPrev();
    }
    if (nextCount == 2){
        image.src = '3D\ Wallpaper\ Untuk\ Desktop_.jpg';
        colorPrev();
    }
    if (nextCount == 3){
        image.src = 'Steam\ Workshop__WINDOWS\ 10_11\ 3840\ x\ 2160px\ 4K\ [PULSE].jpg';
        colorPrev();
    }
    if (nextCount == 4){
        image.src = '50\ Minimalist\ Desktop\ Wallpapers\ and\ Backgrounds\ \(2022\ Edition\).png';
        colorPrev();
        dimmNext();
    }
}

select.addEventListener('click', selectWallpaper);
function selectWallpaper (){
    desktop.src = image.src;
}
if (nextCount == 0){
    dimmPrev();
}

function dimmPrev (){
    prevBtn.style.backgroundColor = 'white';
    prevBtn.style.color = 'black';
    prevBtn.style.opacity = '50%';
    prevBtn.style.cursor = 'not-allowed';
}
function colorNext (){
    btn.style.backgroundColor = 'yellow';
    btn.style.color = 'darkred';
    btn.style.opacity = '100%';
    btn.style.cursor = 'pointer';
}
function colorPrev (){
    prevBtn.style.backgroundColor = 'yellow';
    prevBtn.style.color = 'darkred';
    prevBtn.style.opacity = '100%';
    prevBtn.style.cursor = 'pointer';
}
function dimmNext (){
    btn.style.backgroundColor = 'white';
    btn.style.color = 'black';
    btn.style.opacity = '50%';
    btn.style.cursor = 'not-allowed';
}


prevBtn.addEventListener('click', changeBack)
function changeBack(e){
    nextCount--;
    if (nextCount == 3){
        image.src = 'Steam\ Workshop__WINDOWS\ 10_11\ 3840\ x\ 2160px\ 4K\ [PULSE].jpg';
        colorNext();
    }
    if (nextCount == 2){
        image.src = '3D\ Wallpaper\ Untuk\ Desktop_.jpg'
        colorNext();
    }
    if (nextCount == 1){
        image.src='HD\ wallpaper_\ Windows\ 10\,\ macOS\,\ colorful.jpg';
        colorNext()
    }
    if (nextCount == 0){
        image.src ='HD\ wallpaper_\ Windows\ 10\,\ abstract\,\ landscape.jpg';
        dimmPrev();
    }

}

