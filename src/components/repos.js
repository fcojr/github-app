import React from 'react';
import PropTypes from 'prop-types';

const Repos = ({className, title, repos}) => (
    <div className={className}> 
        <h1>{title}</h1>
        <ul>
            {repos.map((repo, index) => (
                <li key={index}>
                    <a href={repo.link}>{repo.name}</a>
                </li>
            ))}        
        </ul>
    </div>
)

Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    repos: PropTypes.array 
}

export default Repos