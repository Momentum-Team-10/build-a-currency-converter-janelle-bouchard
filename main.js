const root = document.getElementById('root')
const container = document.createElement("div")
container.id = 'container'

root.appendChild(container)


fetch('https://openexchangerates.org/api/currencies.json?app_id=ccf275bc250c4a0fb1badd383826d65b')
    // .then(response => console.log(response.json()))
    // Test that the data is connected by using a console.log (and then remove):
    .then(response => response.json())
    .then(data => {
        // create one dropdown element, and multiple option elements to populate that dropdown
        let dropdownDiv = document.createElement('div')
        let dropdown = document.createElement('select')

        // use a 'for loop' to get every currency name out of script.js and populate the options in the dropdown
        for (currency of currencies) {
            let option = document.createElement('option')
            // populate the dropdown options text with the name of the item you want to populate (cat breed)
            option.innerText = data.currency.name;
            // add a value to the option, and assign it to the id
            option.value = currency;
            dropdown.appendChild(option)
            // verify that the data is what you want it to be:
            console.log(option.value)
            }
                // Add the dropdown to the dropdowndiv and add the dropdown div to the container
        dropdownDiv.appendChild(dropdown)
        container.appendChild(dropdownDiv)
        // let conversionDiv = document.createElement('div')  

        // let inputDiv = document.createElement('div')    
        // let input = document.createElement('input')
        //     input.placeholder = '$'
        // let inputLabel = document.createElement('label')
        //     inputLabel.innerText = 'USD'
        //     // Add the input box and the input label to the input div
        //     inputDiv.appendChild(input)
        //     inputDiv.appendChild(inputLabel)
        
        // let outputDiv = document.createElement('div')    
        // let output = document.createElement('div')
        // let outputLabel = document.createElement('label')
        //     output.placeholder = ''
        //     // Add the output box and the output label to the output div
        //     outputDiv.appendChild(output)
        //     outputDiv.appendChild(outputLabel)
        
        // let button = document.createElement('button')
        //     button.innerText = 'Convert!'
        
        //     // add the input div, outputdiv, and button to the conversiondiv
        //     conversionDiv.appendChild(inputDiv)
        //     conversionDiv.appendChild(outputDiv)
        //     conversionDiv.appendChild(button)
        
        //     // add the conversion div to the container
        //     container.appendChild(conversionDiv)
    })  
// fetch('https://openexchangerates.org/api/latest.json?app_id=ccf275bc250c4a0fb1badd383826d65b')
// output = input.value * ${rate}
