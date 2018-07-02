import React, {Component} from 'react'

class Comments extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <a className="article-link" href="#">
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
          </a>
        )
    }
}

export default Comments;