// use fetch() to make api requests with js.  the argument is the url you want to get data from
// 2 parts to a fetch: Promises (like .then())
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

// request url goes in a string
// this fetches the list of cat breeds because it lives on the server that the api connects us to
fetch('https://api.thecatapi.com/v1/breeds')
//console log to see what response looks like:
    // .then(response => console.log(response.json()))
//in the console, you can click on the promise result to see all of the data that you can use
    .then(response => response.json())
    .then(data => {
        // console.log(data)
    // Test that the data is connected (then remove):
        // let id = document.createElement('p')
        // id.innerText = data[0].id
        // container.appendChild(id)
        
        // create one dropdown element, and multiple option elements to populate that dropdown
        let dropDown = document.createElement('select')
        let input = document.createElement('input')
        // create a button to enter input
        let button = document.createElement('button')
        //you don't need to give an id to the button, because it's already in a variable
        button.innerText = 'Search'

        container.appendChild(dropDown)
        container.appendChild(button)

        // grab the value of the input once you click the search button
        button.addEventListener('click', (event) => {
            console.log(input.value)
            //create a for loop to 
            for (tem of data) {
                if(input.value === item.name ) {
                    fetch(`https://api.thecatapi.com/v1/breeds/search?q=${item.id}`)
                    .then(response => response.json())
                    .then(data => console.log(data))        
                }
            }
        })

        // use a for loop to get every breed name out of the data
        for (item of data) {
            let option = document.createElement('option')
            // populate the dropdown options text with the name of the item you want to populate (cat breed)
            option.innerText = item.name
            // add a value to the option, and assign it to the id
            option.value = option.id
            dropDown.appendChild(option)
            // verify that the data is what you want it to be:
            console.log(option.value)
        }
        container.appendChild(input)


       // listen for a change in the selection
       // make sure to look for a specific event.  Anytime you make a change, a new event object is created. 
        dropDown.addEventListener('change', (event) => {
            // grab the value that is selected in the dropdown
            // console.log(event.target.value)
            
            //Replace the end of the url (CAT_BREED_CODE) in fetch(`https://api.thecatapi.com/v1/breeds/search?q=CAT_BREED_CODE')
            // with a template literal to grab the cat breed data from the api
            // this asks for the info about the catbreed
            fetch(`https://api.thecatapi.com/v1/breeds/search?q=${event.target.value}`)
            .then(response => response.json())
            .then(data => console.log(data))
        })
        // make sure to look for a specific event 
    })

//we will only have ONE dropdown in our homework (not 2), because we can only connvert from USD (because of the free api restrictions vs. the paid version)