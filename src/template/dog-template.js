import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import Image from 'gatsby-image'
import {Button} from 'react-bootstrap'
import './dog.css'

import logo from '../images/logo.svg'

const ComponentName = ({ 
        data: {
            dog: {
                    name,
                    breed,
                    gender,
                    size,
                    age,
                    fee,
                    image: {fixed},
                    description: {description}
                },
            },
        }) => {

    return (
        <Layout >
        <div >
        
            <div >
            <div className="flex" >
                <div className="image-wrapper">
                    <Image fixed={fixed} alt={name}  style={{maxWidth: "100%"}}/>
                </div>

                <div className="content-wrapper">
                    <h3>{name}</h3>
                    <p>Age: {age} years old</p>
                    <p>Breed: {breed}</p>
                    <p>Gender: {gender}</p>
                    <p>Size: {size}</p>
                    <p>Adoption fee: ${fee}</p>
                    <p>{description}</p>
                    <Link to="/available" style={{textDecoration: 'none'}}>
                        <Button variant="outline-primary" style={{marginBottom: "30px"}}>Return</Button>
                    </Link>
                </div>
            </div>{/* end of flex*/}
            </div>{/* end of wrapper*/}
            <footer className="py-4" style={{textAlign: "center", borderTop: "1px solid gray", backgroundColor: "#f2f2f2"}}>
                <span>Willow</span><img src={logo} alt="logo" style={{height: "100px", width: "100px"}}/><span>Creek</span>
                <p>2436 Westbrook Drive, Monhagen, ME | Ph: 207-669-0325 | &copy; 2020</p>
            </footer>
        </div>
        </Layout>
    )
}

export const query = graphql`
query GetSingleDog($slug:String) {
    dog: contentfulDogProfile(slug: {eq: $slug}) {
        name
        breed
        gender
        size
        age
        fee
        image {
            fixed(width: 600, quality: 80) {
            ...GatsbyContentfulFixed
            }
        }
        description {
            description
        }
        }
    }
`

export default ComponentName