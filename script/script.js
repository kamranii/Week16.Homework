//#region Task-1

//get the button to show employees
const showEmployeesButton = document.getElementById('showEmployees');
//get the section
const jsonSection = document.getElementById('parsingJSON');

//get ordered list
const orderedEmployeeList = document.getElementById('employeeList');
orderedEmployeeList.style.padding = '2vh';
//getting json files
function getJson(path, callback){
    //initalize the object
    //organize the request
    const request = new XMLHttpRequest();
    request.open('GET', path, true);
    request.send();
    //track the request
    request.onprogress = ()=>{
        //get response
        const result = request.response;
        //parse it to object    
        const employee = JSON.parse(result);
        //callback
        callback(employee, orderedEmployeeList);        
    }
}
//set a counter
let counter = 1;
//adding to the list, the callback function
function addToHtml(employee, orderedList){
    
    //create an unordered list for properties
    const properties = document.createElement('ul');
    properties.style.padding = '1vh';
    //create a list element for ordered list
    const orderedElement = document.createElement('li');

    //style the ordered element
    orderedElement.style.display = 'inline-block';
    orderedElement.style.marginLeft = '3vw';
    orderedElement.style.padding = '1vh';

    orderedElement.style.fontFamily ='sans-serif';
    //append to the ordered list element
    orderedElement.append(`${counter}. Employee: `)
    orderedElement.append(properties);
    //append to the ordered list
    orderedList.append(orderedElement);
    
    //loop through the object
    for (const key in employee) 
    {
        //add the field to the list element
        const listElement = document.createElement('li');
        listElement.style.padding = '.2vh'
        //create the text
        let textField = `${key}: ${employee[key]}`;
        //append to the list element
        listElement.append(textField);
        //append to the each unordered list
        properties.append(listElement);
    }
    counter++;
}
//get each employee
getJson('/json/employee1.json', addToHtml);
getJson('/json/employee2.json', addToHtml);
getJson('/json/employee3.json', addToHtml);
getJson('/json/employee4.json', addToHtml);

showEmployeesButton.onclick = ()=>{
    jsonSection.classList.toggle('hide');
}

//#endregion

//#region Task-2

//get the dropdown button
const dropButton = document.getElementById('dropDownButton');
//get the dropdown content
const dropItems = document.getElementById('dropdownItems');
//get arrows
const arrows = document.getElementsByClassName('arrow');
//handle the click event
dropButton.onclick = ()=>{
    //handle arrows
    for (const arrow of arrows) 
    {
        arrow.classList.toggle('deactive');
    }
    //handle dropdown items
    dropItems.classList.toggle('hide');
}

//#endregion

//#region Task-3

//get the button
const fetchButton = document.getElementById('fetchUserDatas');
fetchButton.onclick = ()=>{
    console.log('Users: ');
    //initialize the request
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhttp.send();
    //track the request
    xhttp.onprogress = () =>{
        // //create an object array
        // const users = JSON.parse(xhttp.response);
        // users.forEach(element => {
        //     console.log(element);
        // });
        console.log(xhttp.response);
    }
}
//#endregion