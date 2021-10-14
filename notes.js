// use fetch() to make api requests with js.  the argument is the url you want to get data from
// request url goes in a string
// 2 parts to a fetch, called "promises" .then())
// 1st promise is a response, and the second promise is what you're going to do wih the data


// Example:
// fetch('http://example.com/things.json')
//  .then(response => response.json())      - this returns the response to you in json
//  .then(data => console.log(data));       - this is what you're going to do with the response


// Class Example code:
const root = document.getElementById('root')
const container = document.createElement("div")
container.id = 'container'

root.appendChild(container)

// Api request to get a list of cat breeds that the user can search by
// this fetches the list of cat breeds because it the list lives on the server that the api connects us to (as opposed to on a separate .js file that is part of our own directory)
fetch('https://api.thecatapi.com/v1/breeds')
    //console log to see what response looks like:
    // .then(response => console.log(response.json()))
    //in the console, you can click on the promise result to see all of the data that you can use
    .then(response => response.json())
    .then(data => {
    // Test that the data is connected by using a console.log (and then remove):
        // console.log(data)
        // let id = document.createElement('p')
        // id.innerText = data[0].id
        // container.appendChild(id)
        
        // create one dropdown element, and multiple option elements to populate that dropdown
        let dropdown = document.createElement('select')
        let dropdownLabel = document.createElement('label')
        dropdownLabel.innerText = 'Select Cat Breed'

        // Create a search input box
        let input = document.createElement('input')
        input.placeholder = 'Search by breed name'
        // create a button to enter input
        //you don't need to give an id to the button, because it's already in a variable
        let button = document.createElement('button')
        button.innerText = 'Search'
        // Create a new div and put the input box and the button inside it
        let inputDiv = document.createElement('div')
        inputDiv.id = 'search-input'
        inputDiv.appendChild(input)
        inputDiv.appendChild(button)

        // Add input div to the container
        container.appendChild(inputDiv)

        // Add an event listener to the butto to grab the value of the input once you click it
        button.addEventListener('click', (event) => {
            console.log(input.value)
            //create a for loop to 
            for (item of data) {
                if(input.value.toLowerCase() === item.name.toLowerCase()) {
                    fetch(`https://api.thecatapi.com/v1/breeds/search?q=${item.id}`)
                    .then(response => response.json())
                    .then(data => console.log(data))        
                }
            }
        })

        // use a 'for loop' to get every breed name out of the data
        for (item of data) {
            let option = document.createElement('option')
            // populate the dropdown options text with the name of the item you want to populate (cat breed)
            option.innerText = item.name
            // add a value to the option, and assign it to the id
            option.value = item.id
            dropdown.appendChild(option)
            // verify that the data is what you want it to be:
            // console.log(option.value)
        }

        // Add the dropdown menu to the page
        container.appendChild(dropdownLabel)
        container.appendChild(dropdown)


       // Add event listener to the dropdown menu to listen for a change in the selection and grab the value that is selected in the dropdown
       // make sure to look for a specific event.  Anytime you make a change, a new event object is created. 
        dropdown.addEventListener('change', (event) => {
            // verify that you are able to grab the value in the dropdown menu upon the target event (meaning 'change' ie: when a new option is selected)
            // console.log(event.target.value)
            
            //Replace the end of the url (CAT_BREED_CODE) in fetch(`https://api.thecatapi.com/v1/breeds/search?q=CAT_BREED_CODE')
            // with a template literal to grab the cat breed data from the api
            // this asks for the info about the catbreed
            fetch(`https://api.thecatapi.com/v1/breeds/search?q=${event.target.value}`)
                .then(response => response.json())
                .then(data => console.log(data))
        })
    })

//we will only have ONE dropdown in our homework (not 2), because we can only connvert from USD (because of the free api restrictions vs. the paid version)