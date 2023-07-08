
let add = document.getElementById('add')
let tlist = document.getElementById('tasklist')
let inp = document.getElementById('inp')
let spisokx=document.getElementsByTagName('img')
let boxx = document.getElementsByClassName('box')
let chek=document.getElementsByClassName('checkbox')

add.onclick = fadd
let k=0
const zadachi=[]

function  fadd(){
    let newz='<div class="box"><div class="checkbox"></div><p>'+
    inp.value
    +'</p> <img src="cross.jpg" alt="" id='+k+'> </div>'
    k+=1
    zadachi.push(newz)
    tlist.innerHTML += newz
    fcross()
}

function fcross(){
    for (x of spisokx){
        x.onclick=fdel
    }
    for (c of chek){
        c.onclick = fchek
    }
}

function fdel(){
    console.log(this.id)
    for (z in zadachi){
        if (zadachi[z].includes('id='+this.id)){
            console.log('zadacha',z)
            zadachi.splice(z,1)
            let m=Number(this.id)
            boxx[m].style.display='none'
        }
    }
    fcross()
}

function fchek() {
    if (this.style.backgroundColor === 'violet') {
        this.style.backgroundColor = 'white'
    }
    else {
        this.style.backgroundColor = 'violet'
    }
}