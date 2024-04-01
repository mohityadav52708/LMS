let arr = [
  {
    dp:"https://images.unsplash.com/photo-1602442787305-decbd65be507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVufGVufDB8MXwwfHx8MA%3D%3D",
    story: "https://images.unsplash.com/photo-1515474477699-918a9df124dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
  },
  {
    dp:"https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVufGVufDB8MXwwfHx8MA%3D%3D",
    story: "https://images.unsplash.com/photo-1710848725219-c621ef0055f2?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    dp:"https://images.unsplash.com/photo-1620754430927-9cb95a5a585f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1aXR8ZW58MHx8MHx8fDA%3D",
    story: "https://images.unsplash.com/photo-1710961852937-58600c155012?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
{
    dp:"https://images.unsplash.com/photo-1571445556382-453d9e858ea9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1710880079523-70dd176d5877?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D"
  },
{
    dp:"https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnxlbnwwfDF8MHx8fDA%3D",
    story: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D"
  },
{
    dp:"https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1lbnxlbnwwfDF8MHx8fDA%3D",
    story: "https://images.unsplash.com/photo-1573152958734-1922c188fba3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D"
  },
{
    dp:"https://images.unsplash.com/photo-1531986733711-de47444e8cd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHdvbWVufGVufDB8MXwwfHx8MA%3D%3D",
    story: "https://images.unsplash.com/photo-1709238672317-9464e3d278e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
  }
]

let clutter = ""
arr.forEach(function(elem, idx){
  clutter += `<div class="story">
      <img id="${idx}" src="${elem.dp}">
    </div>`
})

let content = document.querySelector("#content")

content.innerHTML = clutter

content.addEventListener("click", function(details){
  let fullScreen = document.querySelector("#full-screen")
  fullScreen.style.display = "block"
  fullScreen.style.backgroundImage = `url(${arr[details.target.id].story})`
  
  setTimeout(function(){
    fullScreen.style.display = "none"
  }, 3000)
})