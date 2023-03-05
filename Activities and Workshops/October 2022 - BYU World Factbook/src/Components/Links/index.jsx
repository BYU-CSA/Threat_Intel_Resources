import { useEffect, useState } from 'react';
import './styles.css'

import countries from '../../data/countries.json'
import flags from '../../data/flags.json'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import { emojify } from '../../common/common'

const Links = props => {

    const [flagArray, setFlagArray] = useState([])
    useEffect(() => {
        setFlagArray(Object.entries(flags))
        for(let i in Object.entries(countries)) {
            localStorage.setItem(
                `${Object.values(countries)[i].name}`, 
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.`)
        }
    }, [])

    return (
        <Accordion>
            <Accordion.Item>
                <Accordion.Header>Countries</Accordion.Header>
                    <Accordion.Body>
                        <div className='wrapper'>
                            {
                                countries.map((country, index) => {
                                    return (
                                        <>
                                            <Button className='buttons' href={`/${country.code}`} variant="outline-primary" key={index}>
                                                <span>
                                                    {country.name}
                                                    {flagArray.filter(flag => flag[0] === country.code).map((flag, index) => {
                                                        return <span className='flags'>{` `}{emojify(flag)}</span>
                                                    })}
                                                </span>
                                            </Button>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
    )
}

export default Links;
