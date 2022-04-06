# Memory Game

This repository contains the **_Memory Game_** application project code. This README document contains the development plan, approach to managing the collaboration, lessons learned and a Git & GitHub collaboration guide.

<!-- <p align="center">
<img src="./img/" alt="Desk photo" width="600" height = "350"/>
</p> -->

The expected memory game logic applies for this application where the user tests their memory by seeing if they can match all identical images within a certain number of turns.

<!-- - Deployed Site: [Memory game App]() -->

Contributors: [Chelsea](https://github.com/chelseal) & [Su](https://github.com/ktSuW)
<hr>

## 1. Installation Instructions

- Copy the link below and clone the repository to your local computer.
  ```
  git clone git@github.com:chelseal/memory-game.git
  ```

- Install http-server from npm and open it at [port 8080](https://www.techtarget.com/searchnetworking/definition/port-number#:~:text=Port%20number%208080%20is%20usually,traffic%20to%20the%20web%20server.)

   ```
    npm i http-server
    npx http-server -p 8080 .
   ```
  _Note:_ npx http-server is an HTTP server itself and it serves static files to the browser

 <hr>

## 2. Application Development Plan

The app features/specifications outline is as follows.

### Features
- **Card toggle:** completed ✔
- **Game reset:** completed ✔
- **Lives counter:** completed ✔
- **Modal for win/loss**
- **Dark & light mode**
- **Responsive layout**

### Manual Testing
- **Bug fixes 🐛**
  - Last clicked card in win and lose situation didn’t flip to reveal itself
  - Images were back to front

<hr>

## 3. Agile Project Management in Notion (Kanban framework)

- Plan
  - Decided to collab and build a vanilla JS project
  - Chose application idea (original idea was complex so we changed to card images)
  - Researched build approaches
- Design
  - Discussed what elements and events were needed
- Develop
  - Built out game functionality
  - Got code working
  - Tweaked UI
- Test
  - Manual Testing

_In wanting to further personalise the app we..._

- Added some fun features and culled those that wouldn't add value _(todo)_
- Divided and built out new features _(todo)_
- Tweaked UI _(todo)_
- Did more manual testing _(todo)_
- Hosted the game _(todo)_

<hr>

## 4. Lessons Learned

#### Su
_... coming soon_

#### Chelsea

| Technical | Non-technical |
| --- | ----------- |
| <span style="background-color:mintcream">DOM manipulation, Git & GitHub GUI, debugging</span> | <span style="background-color:oldlace">Collaborating, making thoughtful decisions, staying organised</span> |
|   Grew my knowledge about manipulating the <span style="color:cadetblue">DOM</span>. |  Learnt that discussing tasks before dividing and coding them made coding quicker and a smoother experience.  |
|   Learnt more about how <span style="color:cadetblue">Git</span> works through collaborating, submitting and reviewing PRs. |  Considered the value of the feature and impact of the bug before we built or fixed it.  |
|   Learnt how to <span style="color:cadetblue">fix branch and pull request challenges</span> I ran into. |  Using Notion helped me to stay up-to-date with my coding tasks, would use it again.  |
|   Practiced <span style="color:cadetblue">debugging in the browser</span> to test issues with functions. |    |

<hr>

## References

- [Port](https://www.techtarget.com/searchnetworking/definition/port-number#:~:text=Port%20number%208080%20is%20usually,traffic%20to%20the%20web%20server.)
- [De-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
- [Randomize arrays in JavaScript with the Fisher-Yates shuffle algorithm](http://sedition.com/perl/javascript-fy.html)
- [Destrucuring assigment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [classList](https://www.w3schools.com/jsref/prop_element_classlist.asp)

<hr>

### Git and GitHub Collaboration Guide

- Go to main branch if you are on your branch and pull from remote repo
  ```
  git checkout main
  git pull origin main
  ```
  - You will see - Already up to date if your repo are in sync or see the changes
  <br>


- Need to make a new branch?
  ```
  git branch your-branch
  ```

- Go to your branch and pull from local main repo
  ```
  git checkout your-branch
  git pull
  ```

- To receive the changes from main branch
  ```
  git branch --set-upstream-to=origin/main su
  ```

- Submit the changes
  ```
  git add .
  git commit -m "write your comments"
  git push origin your-branch
  ```

- If you push your changes successfully, you will see **Compare & pull request**
  - You want to push it to main
  - Pull Request - Complete the form
  - Click **Create pull request**
