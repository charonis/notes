update()
setInterval(alertItem,1)
function time(){
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()
    if(hour < 10 ){
        hour = "0" + hour
    }
    if(minutes < 10 ){
        minutes = "0" + minutes
    }
    if(second < 10 ){
        second = "0" + second
    }
    let clock = document.querySelector(".clock").textContent = `
    ${hour}:${minutes}:${second}
    `
}
setInterval(time,1000)
document.querySelector(".green").onclick = function(){
    document.querySelector(".green").classList.add("imgKeyframes")
    setTimeout(()=> document.querySelector(".green").classList.remove("imgKeyframes"),2000)

    // кнопка открытия 
    setTimeout(function(){
        document.querySelector(".modal").style.opacity = "1"
        document.querySelector(".modal").style.visibility = "visible"

    },2100)

}
document.querySelector(".red").onclick = function(){
    document.querySelector(".red").classList.add("imgKeyframes")
    setTimeout(()=> document.querySelector(".red").classList.remove("imgKeyframes"),2000)

     // кнопка открытия 
     setTimeout(function(){
        document.querySelector(".modal").style.opacity = "1"
        document.querySelector(".modal").style.visibility = "visible"

    },2100)
}



 // кнопка удаления
 document.querySelector(".botton_close_2").onclick = function(){
    document.querySelector(".modal").style.opacity = "0"
    document.querySelector(".modal").style.visibility = "hidden"
   
}



// добавления заметок в окно 
document.querySelector(".set_items").onclick = function(){
    let text_3 = document.getElementById("hello33")
    let clock_3 = document.getElementById("hello333")
    let count_word = text_3.value.length
    if(text_3.value == "" || clock_3.value == ""){
        return 
    }
    if(count_word < 5){
        text_3.value = ""
        setTimeout(() => alert("Введите время полностью"),50)
        return
    }

    // сохранение в локальном хранилице 
    localStorage.setItem(text_3.value,clock_3.value);
    //
    // создание заметки
    document.querySelector(".test_container_list").insertAdjacentHTML("beforeend",`<div data-value="${text_3.value}" class="container_items animation_create">
        <div class="container_item_text" id="test_text">${clock_3.value}</div>
        <div class="container_item_clock" id="test_clock">${text_3.value}</div>
        </div>`)
    // 

    // очистка полей
    text_3.value = ""
    clock_3.value = ""
}

// после обновления страницы все сахраняется 
function update(){
   for(key of Object.keys(localStorage)){
    document.querySelector(".test_container_list").insertAdjacentHTML("beforeend",`<div  <div data-value="${key}" class="container_items animation_create">
        <div class="container_item_text" id="test_text">${localStorage.getItem(key)}</div>
        <div class="container_item_clock" id="test_clock">${key}</div>
        </div>`)
    }
}
// 

// форма времени 
var cleave_one = new Cleave('.input-element-two', {
     time: true,
     timePattern: ['h', 'm']
    });
// 

// отвечает за удаление элементов
document.querySelector(".test_container_list").addEventListener("click", event =>{
    if(event.target.className == "container_items animation_create" || event.target.className == "container_items animation_create animation_signal"){
        let audio = document.querySelector(".hello55")
        let item = event.target
        let key = item.getAttribute("data-value")
        localStorage.removeItem(key)
        event.target.classList.add("animation_remove")
        event.target.classList.remove("animation_signal")
        setTimeout(() => {
            item.remove()
        },1500)
        setTimeout(()=>{
            audio.pause()
        },1)

    }
    
} )

function alertItem(){
    let audio = document.querySelector(".hello55")
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()
    if(hour < 10 ){
        hour = "0" + hour
    }
    if(minutes < 10 ){
        minutes = "0" + minutes
    }
    if(second < 10 ){
        second = "0" + second
    }
    let clock = `${hour}:${minutes}`
    let clock_2 = `${minutes}}`
    for(let key of Object.keys(localStorage)){
        if( key == clock ||( key.split(":")[0] == clock.split(":")[0] && clock_2 > key.split(":")[1] && !document.querySelector("[data-alert='alert']"))){
            let animation = document.querySelector(`[data-value="${key}"]`)
            animation.setAttribute("data-alert","alert") 
            animation.classList.add("animation_signal")
            audio.play()
            return
        }    
    }
    if(document.querySelector("[data-alert='alert']")){
        audio.play()
    }
    if(!document.querySelector("[data-alert='alert']")){
        audio.pause()
    }
}