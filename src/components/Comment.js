import React, { PropTypes } from 'react'

function Comment(props) {
    const { text, user, id } = props.comment
    return (
        <p>
            {text} <strong>by {user} [{id}]</strong>
        </p>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

export default Comment