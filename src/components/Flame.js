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

        switch((firstName.length + secondName.length) % 6){
            case 0:
                setAnswer("Siblings");
                break;
            case 1:
                setAnswer("Friends");
                break;
            case 2:
                setAnswer("Love");
                break;
            case 3:
                setAnswer("Affection");
                break;
            case 4:
                setAnswer("Marriage");
                break;
            case 5:
                setAnswer("Enemy");
                break;
            default:
                setAnswer("");
        }
    }

    function clear() {
        setFname('');
        setSname('');
        setOutput('');
    }


    return (
        <div>
            <input data-testid="input1" placeholder="Enter first name" name="name1" value={fname} onChange={(e) => { setFname(e.target.value.toLowerCase()) }}></input>
            <input data-testid="input2" placeholder="Enter second name" name="name2" value={sname} onChange={(e) => { setSname(e.target.value.toLowerCase()) }}></input>
            <button data-testid="calculate_relationship" onClick={match}>Calculate Relationship Future</button>
            <button data-testid="clear" onClick={clear}>Clear</button>

            <h3 data-testid="answer">{output}</h3>
            {/* { 
                 output &&
            } */}
        </div>
    )
}

export default Flames