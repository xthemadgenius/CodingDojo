import React, {useState, useEffect} from 'react';
import {navigate, Link} from '@reach/router';
import DeleteButton from './DeleteButton';
import axios from 'axios';

export default props => {
    const [authors, setAuthors] =useState([]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(authors => authors._id !== authorId))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authors.sort((auth,index) => (auth.name.toLowerCase() > index.name.toLowerCase()) ? 1 : -1).map((author, idx) => {
                        return (
                        <tr key={idx}>
                            <td><Link to={`/${author._id}`}>{author.name}</Link></td>
                            <td>
                                <button onClick={(e) => navigate(`/${author._id}/edit`)}>Edit</button>
                                <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}