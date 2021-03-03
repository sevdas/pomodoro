const focusButton = document.querySelector('.focus')

let sound = new Audio("birds-voice.mp3")

function startFocus(){
    minutes = 24
    seconds = 59

    document.querySelector('.minutes').textContent = minutes
    document.querySelector('.seconds').textContent = seconds


    let minutesInterval = setInterval(minutesTimer,6000) /* 1minute is equal to 60000 miliseconds */
    let secondsInterval = setInterval(secondsTimer, 100)
    

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
                  document.querySelector('.counter')
                

                  sound.play()
               }
               seconds = 60
            }   
        }
    }

focusButton.addEventListener('click', startFocus)

