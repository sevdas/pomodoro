//Return button elements from the document
const focusButton = document.querySelector('.focus')
const shortBreakButton = document.querySelector('.break-short')
const longBreakButton = document.querySelector('.break-long')
const resetButton = document.querySelector('.reset')

//Global Vartiables
let sound = new Audio("birds-voice.mp3")
let roundCounter = 0 //Focus counter
let countShortbreaks = 0 //Short break counter
let minutesInterval;
let secondsInterval
let minutes
let seconds


'use strict'
/* FOCUS EVENT ---------------------------------------------------------------------------------------------------------- */
function startFocus(){

    //Reset
    clearIntervals()

    minutes = '24'
    seconds = '59'
    document.querySelector('.minutes').textContent = minutes
    document.querySelector('.seconds').textContent = seconds
    
    minutesInterval = setInterval(minutesTimer,60000) /* 1minute is equal to 60000 miliseconds */
    secondsInterval = setInterval(secondsTimer, 1000)

    //Reset the display message
    document.querySelector('.message').textContent = ''
    document.querySelector('.message').classList.remove('show-message') /*to make an element visible*/
    
   //Minutes timer when user clicks on FOCUS button
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


//Set daily target of 12 sets for every 25 min of interval. 
const targetData = document.querySelector('.target')
const updateCount = () => {
    const target = +targetData.getAttribute('data-target') //convert data type from string to number by adding + sign to the front of the variable targetData
    const count = roundCounter

    if(count < target){
      targetData.textContent = roundCounter
      setTimeout(updateCount, 1) // update the count after 1 milisecond.
    } else {
        targetData.textContent = target
        document.querySelector('.message').textContent = 'Welldone! You Hit the Max Level of Productivity!'
        document.querySelector('.message').style.backgroundColor = '#20bf6b'

    }
}



/* SHORT BREAK EVENT -------------------------------------------------------------------------------------------------------------- */
function shortBreak(){
    //Reset
    clearIntervals()

   minutes = '05'
   seconds = '59'
   document.querySelector('.minutes').textContent = minutes
   document.querySelector('.seconds').textContent = seconds

   minutes = ('0' + (minutes - 1)).slice(-2)
   document.querySelector('.minutes').textContent = minutes
    
    minutesInterval = setInterval(minutesTimer,60000) /* 1minute is equal to 60000 miliseconds */
    secondsInterval = setInterval(secondsTimer, 1000)

    //Reset the display message
    document.querySelector('.message').textContent = ''
    document.querySelector('.message').classList.remove('show-message') /*to make an element visible*/
    
//    Minutes timer when user clicks on 'SHORT BREAK' button
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

                  //After the third round, display message directing to LONG BREAK.
                  countShortbreaks++

                  if(countShortbreaks === 3){
                    document.querySelector('.message').textContent = 'Time for Long Break!'
                    document.querySelector('.message').classList.add('show-message') /*to make an element visible*/
                  } else {
                    document.querySelector('.message').textContent = 'Time to Focus!'
                    document.querySelector('.message').classList.add('show-message') /*to make an element visible*/
                  }

                  sound.play()
               }
               seconds = 60
            }
        }
    }
               shortBreakButton.addEventListener('click', shortBreak)




/* LONG BREAK EVENT -------------------------------------------------------------------------------------------------------------- */
function longBreak(){

   //Reset
   clearIntervals()

   minutes = '15'
   seconds = '59'
   document.querySelector('.minutes').textContent = minutes
   document.querySelector('.seconds').textContent = seconds

   minutes = ('0' + (minutes - 1)).slice(-2)
   document.querySelector('.minutes').textContent = minutes
    
    minutesInterval = setInterval(minutesTimer,60000) /* 1minute is equal to 60000 miliseconds */
    secondsInterval = setInterval(secondsTimer, 1000)

    //Reset the display message
    document.querySelector('.message').textContent = ''
    document.querySelector('.message').classList.remove('show-message') /*to make an element visible*/
    
//    Minutes timer when user clicks on 'SHORT BREAK' button
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

                    document.querySelector('.message').textContent = 'Time to Focus!'
                    document.querySelector('.message').classList.add('show-message') /*to make an element visible*/
  

                  sound.play()
               }
               seconds = 60
            }
        }
    }
    longBreakButton.addEventListener('click', longBreak)


    /* RESET EVENT -------------------------------------------------------------------------------------------------------------- */
    function resetTimer(){
        minutes = '00'
        seconds = '00'
        clearIntervals()  
        document.querySelector('.minutes').textContent = minutes
        document.querySelector('.seconds').textContent = seconds  
    }

    function clearIntervals(){
        clearInterval(minutesInterval)
        clearInterval(secondsInterval)    
    }
    resetButton.addEventListener('click', resetTimer)

    function clickPrimaryButton(e){
        let target = e.target
        console.log(target)
        console.log('you clicked the secondary button');
      }

  
//to do:
//add fade out feature
//display - You better not play with buttons! -  if user clicks to another button duting the session!

      