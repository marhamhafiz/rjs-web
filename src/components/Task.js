import React from 'react';
import { Table } from 'react-bootstrap';

function Task() {
    return (
        <div className="container">
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>/</th>
                    <th>Name</th>
                    <th>Hobby</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Task
