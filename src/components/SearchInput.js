import React from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap'

const SearchInput = () => {
    return (
        <InputGroup className="mb-3 mt-5" size='md'>
            <FormControl
                placeholder="Search user"
                aria-label="Search user"
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
                Search
            </Button>
        </InputGroup>
    )
}

export default SearchInput