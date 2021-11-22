let inp = document.getElementById("inp");
let div = document.getElementById("div");
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2")


function table(){
let tbl = document.getElementById("table");
let tr = " ";
    for (let i = 1; i<=3; i++){
        tr += `<tr>`;
        for(let i = 1; i<=3; i++){
            tr += `<td> </td>`;
        }
        tr += `</tr>`;
    }   

    tbl.innerHTML = tr;

}
table();


function ElaveEt(){
    let list = " ";
    for (let i = 1; i<=inp.value; i++){
        list += `<input placeholder="musteri ${i}">`
    }

    inp.style.ddisplay = "none"
    button1.style.display = "none"
    button2.style.display = "inline-block"
    div.innerHTML = list;
}

function Yenile(){
    inp.style.display = "inline-block"
    button1.style.display = "inline-block"
    location.reload()
}



