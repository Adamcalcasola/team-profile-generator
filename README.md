# team-profile-generator

  ## Description: 
  A command line program that allows a user to generate a profile of team members on a web page after they enter detailed responses about the team members after being prompted a series of questions. The team they can produce will include one manager and as many engineers and interns as they wish to add.
  
  ## Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation: 
  Install the program locally and then install node.js to the file where the program is run from. Run the program by navigating to the program file in your terminal and typing node index.js to start the program.

  ## Usage:
  The user will initially be asked the name of the manager, the id number of the manager, the email of the manager, and then the manager's office number. After filling the prompts for the Manager the user will be asked if they want to add another employee. If they decline, the profile will be populated only be the the manager previously created. If they decide to add another employee they will be asked if they want to add an engineer or an intern. Then then will be asked to provide their name, employee id, and email but for the engineer they will provide their Github user name and for interns they will provide their school. After the creation of each employee, the user will be asked again whether they want to add another employee until the decline. 
  When the program ends, an HTML file and a CSS style sheet will be generated and saved to the dist folder. If the user opens the HTML file in the browser, their team will be desplayed by a series of cards with the information provided. The emails and Github account will link to send an email or bring the user to the Github page when click on them.

  link for tutorial that demonstrates how to use the application:
  https://watch.screencastify.com/v/vDlWanl6ATFL6KVU7ezs

  there is also an MP4 file saved in the media folder in the Github repo under the name tutorial.mp4

  ![team-profile-generator-screenshot](/media/team-profile-generator-screenshot.png?raw=true "screenshot")

  ## Contributing:
  Please go to the Github repository provided to contribute to this project.

  https://github.com/Adamcalcasola/team-profile-generator

  ## Tests:
  install jest to test the employee, manager, engineer, and intern object constructors. 
  
  ## Questions:
  If you have questions about this project, please contact:
  adam.calcasola@gmail.com
  