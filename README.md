# Pre-course 4 Mini-project - POMODORO TIMER

This week we are building Pomodoro which is a time management technique made out of spaced repetition system. Do the work, take a break.

## Click [here](https://sevdas.github.io/pomodoro-timer/) to get started!

Every 3 repetitions will create a set. After each set we will take a long break.
We will also set a daily goal of 12 repetitions to hit the maximum productivity level!
The timer will count down to zero and once it hits zero the bell feature will ring to notify the user either to take a break or to get focused.

---

### User Story:

- A “work” timer that counts down from 25 to zero minutes.
- A second “break” timer that counts down from 5 to zero minutes.
- Buttons to start a session, pause the timer, or cancel the session and restart.
- Play an alarm sound to make it obvious the time is up.

### How I approached it;

- I've start styling my timer with universal selector (\*) to reset default browser settings.
- I used viewport units to set the color to the full browser height and width so the size is based on the users entire viewport.
- To display / manipulate inner texts I used `.textContent` property after watched [this video](https://www.youtube.com/watch?v=1UsllDMhvN4) explaining how does it allows user input on the webpage.
- This challenge helped me to visualize the async functions in real life scenario.
- Aside from manipulating data of hours, minutes and seconds, I also had a chance of making use of clearInterval and setInterval.

      <blockquote>
        If you can not explain it simply, then you don't understand it well enough.
        <cite>by <q>Albert Einstein</q></cite>
      </blockquote>
