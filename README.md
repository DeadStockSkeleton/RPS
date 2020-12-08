# RPS: Rock Paper Scissors
*A nice game of Rock Paper Scissors*

RPS is a simple game of an old classic; **Rock Paper Scissors**

[Play Now](https://deadstockskeleton.github.io/RPS/)

## How to play
  1. click **Lets Play**
  2. choose **one** of the *three* options: **Rock Paper or Scissors**
  3. give the computer some time to lock in its answers
  4. watch the results!
  
  ![](/assets/res/operation.gif)
  
## How it works
  *RPS takes advantage of Bootstrap and Jquery!*
   1. First I coded the **Lets Play** button to fade away once clicked and displaying the option window
   
   2. I have one button for submitting your choice and it's first disable till you click an option. I then made it where the label tag is containing the input, so when clicking the icon of the three options, it'll select. I gave the inputs **values** of the name of selected option and displayed the text with ```.text();```, then I stored the value in a **varaible** to use later. 
   
   3. After clicking the **choose** button, the options will lock and you will no longer be able to change your choice, *it will disable all options* and the screen will fade into a loading screen.
   
   4.As the screen is loading, I made an array of the 3 options for the computer to select one out of three **randomly** with the ```Array[Math.floor(Math.random()*Array.length)];``` then stored that **value** into an ```const``` **variable**. 
   
   5. Then I used **Bootstrap**'s card feature to display selected option on a card div, and many if statements to comapre my two **variables** to find coresponding icons for the card to dislpay. I also used the two **variables** to display on the card to help the user know who picked what!
   
   6. I used another many if states such as ``` if (userSelection === comSelection){...}``` to compare the two options and set them with wins and loses.
   
   7. I then used **css** and **jquery**'s effects feature to animate the cards to simulate them hitting each other and displaying who won
   
   8. The results screen will automatically display within 2 seconds and I used if statements to say **YOU WIN, YOU LOSS** or **TIE**. Then I used the two **variables** to display who picked what. A **Restart** button was also added, so when clicked it'll reload everything and set everything to square **one**
   
   
   
   



