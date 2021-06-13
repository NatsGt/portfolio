import React from 'react'

function MainTitle(props) {
    return <h1 className={props.classElement} >{props.title}</h1>
}

function TitleSection(props) {
    return (
        <h2 className={props.classElement} >{props.title}</h2>
    )
}

function SubTitle(props) {
    return <h5 className={props.classElement}>{props.title}</h5>
}

export default MainTitle;
export { TitleSection, SubTitle }