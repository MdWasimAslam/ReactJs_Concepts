import React from 'react'

function ComponentsAndProps() {
  return (
    <>

        <User name={'Md Wasim Aslam'} role={'Javascript Developer'}/>
        <User name={'John Paul'} role={'Java Developer'}/>
        <User name={'Harold Kinsley'} role={'Salesforce Developer'}/>
        
        {/* Exercise */}

        <JobPost company={'Google'} position={'Javascript Developer'} salary={'$50,300'}/>
        <JobPost company={'Amazon'} position={'Java Developer'} salary={'$40,500'}/>
        <JobPost company={'Facebook'} position={'Salesforce Developer'} salary={'$10,000'}/>
    </>
  )
}

// Basic difference between a function and a component is that a component will return something ui but function will return primitive datas usually


// Creating a component called users and storing the value inside props
const User =(props)=>{
    return (
        <>
            <h4>{props.name}</h4>
            <p>{props.role}</p>
        </>
    );
}

const JobPost =(props)=>{
    return (
        <>
            <h4>{props.company}</h4>
            <p>{props.position}</p>
            <p>{props.salary}</p>
        </>
    );
}

export default ComponentsAndProps