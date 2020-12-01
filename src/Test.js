import React,{useState} from 'react'

export const Test = () => {
 const [visible, setVisible] = useState(true)
    return (
        <div>
            <div class="nav">
                <label for="toggle">&#9776;</label>
                <input type="checkbox" id="toggle"/>
                <div class="menu"style={{visibility:visible?'visible':'hidden'}}>
                    <button onClick={()=>setVisible(false)}>hide</button>
                    <a href="#">Business</a>
                    <a href="#">Services</a>
                </div>
            </div>
        </div>
    )
}
