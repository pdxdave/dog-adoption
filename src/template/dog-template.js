import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import Image from 'gatsby-image'
import {Button} from 'react-bootstrap'
import './dog.css'



const ComponentName = ({ 
        data: {
            dog: {
                    name,
                    breed,
                    gender,
                    size,
                    age,
                    image: {fixed},
                    description: {description}
                },
            },
        }) => {

    return (
        <div >
        <Layout />
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
                    <p>{description}</p>
                    <Link to="/available" style={{textDecoration: 'none'}}>
                        <Button variant="outline-primary">Return</Button>
                    </Link>
                </div>
            </div>{/* end of flex*/}
            
            </div>{/* end of wrapper*/}
        </div>
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