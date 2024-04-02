const item = document.querySelectorAll('.gallery-collection li')
const close = document.querySelector('button')
const popup = document.querySelector('.popup')


//foreach문 
item.forEach((el, index)=> {
    el.addEventListener('mouseenter', ()=>{
        el.querySelector('video').play()
    })
    el.onmouseleave = () => {
        el.querySelector('video').pause()
        el.querySelector('video').currentTime = '0'
    }
    el.addEventListener('click', ()=>{
        let title = el.querySelector('h3').innerText
        let text = el.querySelector('p').innerText
        let videosrc = el.querySelector('video').getAttribute('src')

        popup.querySelector('.txt h2').innerText = title
        popup.querySelector('.txt p').innerText = text
        popup.querySelector('video').setAttribute('src', videosrc)

        popup.classList.add('on')
        popup.querySelector('video').play()
    })
})

close.addEventListener('click', ()=>{
    popup.classList.remove('on')
    popup.querySelector('video').pause()
})