import React, {Component, PropTypes} from 'react';

class CommentListForm extends Component {
  static propTypes = {};

  state = {
    author: '',
    comment: ''
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    // console.info(`${this.state.author}: ${this.state.comment}`);
  }


  submitNewComment = ev => {
    ev.preventDefault()
    this.setState({
      author: ev.target.elements.author.value,
      comment: ev.target.elements.comment.value
    })

    ev.target.elements.author.value = ev.target.elements.comment.value = ''
  }

  render() {
    return (
      <div>
        <form action="#" onSubmit={this.submitNewComment}>
          <strong>add Comment:</strong> { `  ` }
          <label htmlFor="author">author</label> <input id="author" name="author" type = "text" /> { `  ` }
          <label htmlFor="comment">text</label> <input id="comment" name="comment" type = "text" /> { `  ` }
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default CommentListForm;

