# Humans Bitten By Dogs.

This website is for anyone that loves to see data.
The data is presented by three bar charts that are interactive and can be clicked on.

Githubpage: To got to the live page click this link: [Animal-bites](https://errepulify.github.io/Animal-bites/)


## UX

#### User Stories
- As a user I want to be able to see a total of the attacks by all dogs. 

- As a user I want to be able to see in which year how many dog bites were happening. 

- As a user I want to see which parts of the victims got attacked.(body, head, unknown). 

- As a user I want to be able to see how many dog bites were happening by country. 

- As a user I want to click on a dropdown menu breed selector to show from each dog breed a dataset 

- As a user I want to click on a button so the filter resets.


#### Design

The goal for the website was to make the design as clean as possible.
To give a difference between the charts, the use of three colors close to eacother was taken.
On desktop and ipad the design is used to have two bar charts at top and one at the bottom.
With an easy to use selector, to make it more understandable the text: "Choose a dog breed" is used

### Wireframes

- [Desktop Wireframe](static/libs/wireframe/desktop.png)<br> 
- [Mobile Wireframe](static/lib/wireframe/mobile.png)
 
## Features

- <u>Breed selector:</u> Allow users to click the box with a black down arrow next to it 'Choose a dog breed' and select a breed from the list.
- <u>Reset all:</u> Allow users to click on the blue button with the white text: 'Reset All' , This will reset all the chart bars to default setting.
- <u>Bar charts</u> Allow users to click on each bar chart. This will show the desired outcome picked by the user.

### Features Left to Implement

## Technologies Used

- [Bootstrap](https://www.bootstrapcdn.com/) 
    - The project uses **Bootstrap 3** to make it responsive.
- HTML
    -  standard markup language for this project.

- Cloud9 [Cloud9](https://c9.io) 
    -**Cloud9** used for their IDE while building and testing the website.
- CSS3
    - The project uses **CSS3** to style it.
- Javascript/Crossfilter/D3/DC and Queue
    - The project uses **Javascript/Crossfilter/D3/DC and Queue** to have data pulled from a csv file to a interactive clickable bar chart.
      And **Javascript** is used for the select all button to be able to function.
- [Font Awesome](https://fontawesome.com/)
    - The Navbar icon is created with **Font Awesome** to give the website a bit more styling.
- [Google Fonts](https://fonts.google.com/)
    - For the Headers **Google fonts** is used. The font used is Signika.
- [GitHub](https://github.com/)
    - The project uses **GitHub** to store and share all project code to the github site.

## Testing


##### 1. See a total of attacks by all dogs:

   1. Make sure you are on the mainpage of the website and it should show all the bar charts with the total of all the dogs(per year, per location) 
   2. If this fails. Reset the browser by clicking on the ![refresh button picture](https://i.imgur.com/1AIm3KO.png ) refresh icon.
   3. Website would load again and if it works you see the total of all the dogs.
   4. If not retry step 2 above here.
   5. hover with your mouse over the bar chart of choice. The year and total number shows up next to your cursor.

##### 2. See in which year how many dog bites were happening.

   1. Go to the mainpage where you can see in total three bar charts. two at the top and one at the bottom.
   2. If this fails. Reset the browser by clicking on the ![refresh button picture](https://i.imgur.com/1AIm3KO.png ) refresh icon.
   3. Website would load again and you can see the charts again.
   4. If not retry step 2 above here.
   2. Go with your mouse to the the first bar chart that say: "Dog bites per year".
   3. Click on one or more of the three bars with the text "2015", "2016" or "2017".
   4. The bar(s) you selected is in color while the other faded out in gray.
   5. To reset the charts back to the beginnging, click on the blue reset all button

##### 3. See which part of the body got attacked.

   1. Go to the mainpage where you can see in total three bar charts. two at the top and one at the bottom.
   2. If this fails. Reset the browser by clicking on the ![refresh button picture](https://i.imgur.com/1AIm3KO.png ) refresh icon.
   3. Website would load again and you can see the charts again.
   4. If not retry step 2 above here.
   5. Go with your mouse to the second bar chart that say: "Which parts of the body attacked by dogs"
   6. Click on one or more of the three bars with the text "Body", "Head", "Unknown".
   7. The bar(s) you selected is in color while the other faded out in gray.
   8. To reset the charts back to the beginnging, click on the blue reset all button

##### 4. See how many dog bites were happening by country.

   1. Go to the mainpage where you can see in total three bar charts. two at the top and one at the bottom.
   2. If this fails. Reset the browser by clicking on the ![refresh button picture](https://i.imgur.com/1AIm3KO.png ) refresh icon.
   3. Website would load again and you can see the charts again.
   4. If not retry step 2 above here.
   5. Go with your mouse to the bar chart at the bottom which say: "Dog bites per country".
   6. Click on one or more of the three bars with the country of your choice.
   7. The bar(s) you selected is in color while the other faded out in gray.
   8. To reset the charts back to the beginnging, click on the blue reset all button.

##### 1. Breed selector:

   1. Click with your mouse on the box with the text "Choose dog breed"
   2. A dropdown menu pops up and click the desired breed.
   3. The charts move up or down according to the data you picked.
   4. To reset the charts back to the beginning, click on the blue reset all button.

##### 3. Reset button:

   1. Click on one or more bars in the chart. For example: "2017", "Head", "Ireland".
   2. The chars move up or down according to your data you picked.
   3. To reset it back to default click on the blue button with the text: "Reset All".
   4. The bars are reset to its default value.
   

### automatic testing
For this project I haven't used any of Jasmine automatic testing.
   

### Responsive
I tested on different devices and screen sizes. The responsiveness in Internet explorer, Google Chrome, Mozilla Firefox and Blisk.

#### Bugs
Sometimes when the page is loaded the navbar and footer are out of border. Same with the size of the charts.
But after a refresh of the page it works as it should.

On mobile the website is sometimes zoomed in. You can undo this by tapping once or twice onto the screen or use your index and thumb on the screen to zoom out.

## Deployment
This project was developed using the [Cloud9 IDE](https://c9.io), committed to git and pushed to GitHub using the built in function within cloud9.

To deploy this project to GitHub Pages from its GitHub repository, the following steps were done:

1. Log into GitHub account.
2. From the list of repositories on the screen, select Errepulify/Repositories/Animal-bites
3. From the menu items near the top of the page, select Settings.
4. Scroll down to the GitHub Pages section.
5. Under Source click the drop-down menu labelled None and select Master Branch
6. On selecting Master Branch the page is automatically refreshed, the repository is now ready to be deployed.
7. Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.

### How to run this project locally

To clone this project from GitHub:
1. Follow this link to the [GitHub repository](https://github.com/Errepulify/Animal-bites).
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository. 
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type ```git clone```, and then paste the URL you copied in Step 3.
```console
git clone https://github.com/USERNAME/REPOSITORY
```
7. Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from GitHub [here](https://help.github.com/en/articles/cloning-a-repository).

## Credits

### Acknowledgements
- My mentor Juan Monetti for helping and guiding me in the right direction.
- Stackoverflow, Github, Slack, Bootstrap.
- Tim Nelson with guiding me with his webinairs and advice.

#### Disclaimer

The content of this website are for educational purposes only.