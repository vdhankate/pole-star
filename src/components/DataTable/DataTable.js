import React from "react";
import Moment from 'react-moment';
import { Table } from "react-bootstrap";


const DataTable = (props) => {
    // const setSort = (e) => {
    //     console.log(e)
    //     //props.setsortedField
    // };

    return (
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th className="sortable" onClick={props.sortByNameField}>Name</th>
                    <th className="sortable" onClick={props.sortByCreatedField}>Created</th>
                    <th className="sortable" onClick={props.sortByModifiedField}>Modified</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map((result) =>{
                    return (<tr key={result.id}>
                        <td>{result.name}</td>
                        <td><Moment date={result.created} format="YYYY/MM/DD" /></td>
                        <td><Moment date={result.modified} format="YYYY/MM/DD" /></td>
                    </tr>)
                })}
                
            </tbody>
        </Table>
    )

}

export default DataTable;