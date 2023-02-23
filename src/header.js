import React from 'react'

const header = ({title,number}) => {
    // internal CSS style
    let headerStyles = {
        fontWeight: 900,
        textTransform: 'uppercase'
    };
    return (
        // inline styles can be rendered as JS object
        <header >
            {/* <h1 style={{

                backgroundColor: '#ff0000',
                color: '#fff',

            }}>Groceries List</h1> */}
            <h1>{title}</h1>
            <p>{number}</p>
            {/* <h2 style={headerStyles}>Hello Thomas !</h2> */}
        </header>
    )
}
// Setting default props
header.defaultProps={
    title:"Default TItle",
    number:23
}
export default header