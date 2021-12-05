const generateEmployees = employeeData => {
    return `
    <div id="card">
        <div id="head">
            <div id="name">
                ${employeeData.name}
            </div>
            <div id="role">
                ${employeeData.role}
            </div>
        </div>
        <div id="info">
            <div id="idNum">
                ID: ${employeeData.id}
            </div>
            <div id="email">
                <a src="${employeeData.email}">${employeeData.email}</a>
            </div>
            <div id="special">
            ${employeeData.members
            .filter(({Manager}) => Manager)
            .map(({name, id, email, office}) => {
                return `
                    Office Number: ${office}
                `;
            })
            .join('')}

        ${employeeData.members
            .filter(({Engineer}) => Engineer)
            .map(({name, id, email, github}) => {
                return `
                    Github User: ${github}
                `;
            })
            .join('')}

        ${employeeData.members
            .filter(({Intern}) => Intern)
            .map(({name, id, email, school}) => {
                return `
                    School: ${school}
                `;
            })
            .join('')}
        
            
        </div>
    </div>
</div>
    `
}

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profiles</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" >
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header>
        <h1>My Team</h1>
    </header>
    <main id="main">
    ${generateEmployees(templateData)}
    </main>
    </body>
    </html>
    `
}