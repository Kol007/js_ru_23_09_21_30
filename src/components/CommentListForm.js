import React, {Component, PropTypes} from 'react';

class CommentListForm extends Component {
  static propTypes = {};

  submitNewComment = ev => {
    ev.preventDefault()
    //нет, мы же на уроке говорили, что лучше использовать state
    let author = ev.target.elements.author;
    let comment = ev.target.elements.comment;

    console.info(`${author.value}: ${comment.value}`);
    author.value = comment.value = ''
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

