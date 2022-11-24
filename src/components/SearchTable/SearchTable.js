import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const SearchTable = (props) => {

    return (
        <Form>
        <Row className="align-items-center">
            <Col xs={8}>
                <Form.Control onChange={props.onNameChange} placeholder="Search by name" />
            </Col>
            <Col xs={4}>
                <Form.Select  onChange={props.onSeverityChange} placeholder="Search by country severity">
                    <option value="">Search by country severity</option>
                    <option value="CRITICAL">Critical</option>
                    <option value="WARNING">Warning</option>
                    <option value="UNKNOWN">Unknow</option>
                    <option value="OK">Ok</option>
                </Form.Select>
            </Col>
           
        </Row>
        </Form>
    )

}

export default SearchTable;