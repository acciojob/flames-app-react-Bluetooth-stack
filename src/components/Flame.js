import React, { useState } from "react";


const Flames = () => {
    let [fname, setFname] = useState('');
    let [sname, setSname] = useState('');
    let [output, setOutput] = useState('');

    function match() {
        if (fname === '' || sname === '') {
            setOutput("Please Enter valid input");
            return;
        }
        let firstName = fname;
        let secondName = sname;

        for (let i = 0; i < firstName.length; i++) {
            for (let j = 0; j < secondName.length; j++) {
                if (firstName.charAt(i) == secondName.charAt(j)) {
                    firstName = firstName.replace(firstName.charAt(i), "");
                    secondName = secondName.replace(secondName.charAt(j), "");
                    i--;
                }
            }
        }

        let remainsum = (firstName.length + secondName.length) % 6;

        switch (remainsum) {
            case 1:
                setOutput('Friends');
                break;
            case 2:
                setOutput('Love');
                break;
            case 3:
                setOutput('Affection');
                break;
            case 4:
                setOutput('Marriage');
                break;
            case 5:
                setOutput('Enemy');
                break;
            case 0:
                setOutput('Siblings');
                break;
            default:
                console.log("out of range");
        }
    }

    function clear() {
        setFname('');
        setSname('');
        setOutput('');
    }


    return (
        <div>
            <input data-testid="input1" placeholder="Enter first name" name="First Name" value={fname} onChange={(e) => { setFname(e.target.value.toLowerCase()) }}></input>
            <input data-testid="input2" placeholder="Enter second name" name="Second Name" value={sname} onChange={(e) => { setSname(e.target.value.toLowerCase()) }}></input>
            <button data-testid="calculate_relationship" onClick={match}>Calculate Relationship Future</button>
            <button data-testid="clear" onClick={clear}>Clear</button>

            {
                output &&
                <h3 data-testid="answer">{output}</h3>
            }
        </div>
    )
}

export default Flames