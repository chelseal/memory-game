# Memory Game with OOP

This repository contains the **_Memory Game : JS Maths Static Methods_** application project code. This readme document contains the application design UI ideation to the implementation.

<p align="center">
<img src="./img/" alt="Desk photo" width="600" height = "350"/>
</p>

The application enables the user to add tasks, update and delete tasks.

- Deployed Site : [Memory game App]()

Contributor :

- [Chelsea](https://github.com/chelseal)
- [Su](https://github.com/ktSuW)

<hr>

## 1. Installation Instruction

- Copy the link below and clone the repository to your local computer.

  `git clone git@github.com:chelseal/memory-game.git`

2. Install http-server from npm and open it at port 8080

   ```
     npm i http-server
     npx http-server -p 8080 .
   ```

   - npx http-server it is an HTTP server itself and it serves static files to the browser
   - [port number](https://www.techtarget.com/searchnetworking/definition/port-number#:~:text=Port%20number%208080%20is%20usually,traffic%20to%20the%20web%20server.)

 <hr>

## 2. Application Development Plan

The app features/specifications outline is as follows.

### Features

- **Sprint 1** : Completed ✔

  - Sprint 1 UI ScreenShoots

<hr>

## 3. Object Oriented Design for To Do List App

The Memory Game is the application which users can flip the card one at a time and match the card.

```
Contents
    System Requirements
    Use Case Diagram
    Class Diagram
```

### 3.1 System Requirements

The followings are the set of requirements while designing the to do list.

- xxxx

### 3.2 Use Case Diagram

<img src="./img/.png" />

### 3.3 Class Diagram

Below diagram illustrates the class diagram for this project.

<img src="./img/.png" />

<hr>

## 4. Agile Project Management - Trello

### Spring 1

- Week 1
- Week 2

### Spring 2

### Spring 3

<hr>

## Lessons Learned

- 

<hr>

## References

- [Port](https://www.techtarget.com/searchnetworking/definition/port-number#:~:text=Port%20number%208080%20is%20usually,traffic%20to%20the%20web%20server.)
- [de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
- [Randomize arrays in JavaScript with the Fisher-Yates shuffle algorithm](http://sedition.com/perl/javascript-fy.html)
- [Destrucuring assigment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [classList](https://www.w3schools.com/jsref/prop_element_classlist.asp)

<hr>

### Git and GitHub Collaboration guide

- Go to main branch if you are on your branch and pull from remote repo

  ```
  git checkout main

  git pull origin main
  ```

  - You will see - Already up to date if your repo are in sync or see the changes

- Go back to your branch and pull from local main repo

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
  git push origin yourbranchName
  ```

- If you push your changes successfully, you will see **Compare & pull request**
  - You want to push it to main
  - Pull Request - Complete the form
  - Click **Create pull request**
