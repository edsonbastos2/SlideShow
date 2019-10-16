window.onload = slide(1);
let bgNumber = 1;

function slide(n){
    let allimg = 4
    document.getElementById('imageBg').style.backgroundImage = `url(img/${n}.jpg)`;
    botoes(n, allimg)
}

function anterior(){
    if(bgNumber > 1){
        bgNumber--
        slide(bgNumber)
    }
}
function proximo(){
    if(bgNumber < 3){
        bgNumber++
        slide(bgNumber)
    }
}

function botoes(n, m){
    document.getElementById('botoes').innerHTML = "";
    for(a=1; a<m; a++){
        if(a==n){
            document.getElementById('botoes').innerHTML += "<li class='selected' onclick='slide("+a+")'></li>";
        }else{
            document.getElementById('botoes').innerHTML += "<li onclick='slide("+a+")'></li>";
        }
    }
}

/*Consumir API rest*/
const url = 'https://dt11.pepblast.com/pzAlbums_php03/PSO/PSOApi.php?client=HTML&app=PLUGIN&m=pso.remix.getRemixPars&args={"rid":"x85in000149b85wn0lamsj","av":"v1","esort":0,"easc":0,"getappelements":1,"getinputusers":1,"getpropsjs":1,"getisfollower":1,"usecreatoresort":1,"enmax":120}';
//const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then( (response) => response.json())
    .then(function(data){ 
        console.log(data)
        
        return data.map(function(obj){
            let li = document.createElement('li');
            li.innerHTML = `${obj} ${obj}`
            ul.appendChild(li)
        })
    })
    .catch(err => console.log(err))
