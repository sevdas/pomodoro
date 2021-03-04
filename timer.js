const focusButton = document.querySelector('.focus')

let sound = new Audio("birds-voice.mp3")
let roundCounter = 0

function startFocus(){
    minutes = 24
    seconds = 59

    document.querySelector('.minutes').textContent = minutes
    document.querySelector('.seconds').textContent = seconds


    let minutesInterval = setInterval(minutesTimer,600) /* 1minute is equal to 60000 miliseconds */
    let secondsInterval = setInterval(secondsTimer, 10)
    

    function minutesTimer(){
        minutes = ('0' + (minutes - 1)).slice(-2)
        document.querySelector('.minutes').textContent = minutes
       
    }
        function secondsTimer(){
            seconds = ('0' + (seconds - 1)).slice(-2)
            document.querySelector('.seconds').textContent = seconds

            /*to prevent infinity*/
            if(seconds <= 0){
               if(minutes <= 0){
                  /* stop interval */
                  clearInterval(minutesInterval)
                  clearInterval(secondsInterval)

                  document.querySelector('.message').textContent = 'Take a short break'
                  document.querySelector('.message').classList.add('show-message') /*to make an element visible*/
            
                
                  sound.play()
                  roundCounter++
                  updateCount()
               }
               seconds = 60

            }   
        }
    }

focusButton.addEventListener('click', startFocus)

const targetData = document.querySelector('.target')
console.log(targetData)

const updateCount = () => {
    const target = +targetData.getAttribute('data-target') //convert data type from string to number by adding + sign to the front of the variable targetData
    const count = roundCounter

    if(count < target){
      targetData.textContent = roundCounter
      setTimeout(updateCount, 1) // update the count after 1 milisecond.
    } else {
        targetData.textContent = target
        document.querySelector('.message').textContent = 'Welldone! You hit the max level of productivity!'
        document.querySelector('.message').style.backgroundColor = ' #20bf6b'
    }
}
