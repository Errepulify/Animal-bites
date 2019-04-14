# Humans Bitten By Dogs.

This website is for anyone that loves to see data.
The data is presented by three bar charts that are interactive and can be clicked on.


## UX

- As a user I want to be able to see which dog gender attacked the most.

- As user I want to see which parts of the victims got attacked.(body, head, unknown).

- As a user I want to click on a button so everything resets.

- As a user I want to be able to see the website on different devices.

### Wireframes

 - <a href="https://imgur.com/8BjOyW4">Desktop wireframe</a>
 - <a href="https://imgur.com/DxaZS0B">Mobile wireframe</a>
 
## Features

- <u>Breed selector:</u> Allow users to click the box with a black down arrow next to it 'Choose a dog breed' and select a breed from the list.
- <u>Reset all:</u> Allow users to click on the blue button with the white text: 'Reset All' , This will reset all the chart bars to default setting.
- <u>Bar charts</u> Allow users to click on each bar chart. This will show the desired outcome picked by the user.

### Features Left to Implement

## Technologies Used

- [Bootstrap](https://jquery.com) 
    - The project uses **Bootstrap 3** to make it responsive.
- HTML
    -  standard markup language for this project.
- CSS3
    - The project uses **CSS3** to style it.
- Javascript/Crossfilter/D3/DC and Queue
    - The project uses **Javascript/Crossfilter/D3/DC and Queue** to have data pulled from a csv file to a interactive clickable bar chart.
      And **Javascript** is used for the select all button to be able to function.
- [Font Awesome](https://fontawesome.com/)
    - The Navbar icon is created with **Font Awesome** to give the website a bit more styling.
- Google Font
    - For the Headers **Font Awesome** is used. The font used is Signika.

## Testing
1. Breed selector:
   1. Click with your mouse on the box with the text "Choose dog breed"
   2. A dropdown menu pops up and click the desired breed.
   3. The charts move up or down according to the data you picked.

2. Click the charts bars:
   1. Go with your mouse to one of the three charts: "Dog Bites Per Year", "Dog Bite location" or Dog Bites Per Country.
   2. Click on one of the bars as example in the Dog Bites Per Year" on the bar "2017".
   3. The charts move up or down according to the data you picked

3. Reset button:
   1. Click on one or more bars in the chart. For example: "2017", "Head", "Ireland".
   2. The chars move up or down according to your data you picked.
   3. To reset it back to default click on the blue button with the text: "Reset All".
   4. The bars are reset to its default value.

### Responsive
I tested on different devices and screen sizes. The responsiveness in Internet explorer, Google Chrome, Mozilla Firefox and Blisk.

#### Bugs
Sometimes when the page is loaded the navbar and footer are out of border. Same with the size of the charts.
But after a refresh of the page it works as it should.

## Deployment
Used git to commit my repo and uploaded it to Github Pages.

## Credits

### Acknowledgements
- My mentor Juan Monetti
- Stackoverflow, Github, Slack, Bootstrap
