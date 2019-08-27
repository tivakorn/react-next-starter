import React, { Component } from 'react'
import dateFormat from 'dateformat'

class Topic extends Component {

    renderTopic = topic => {
        return (
            topic.map((item, key) => {
                let date = dateFormat(item.created_date, "dddd, mmmm dS, yyyy, h:MM:ss TT")
                let map = `#${item._id.toString().slice(-4)} ${item.status} on ${date} by ${item.member.name_member}`
                return (
                    <a className="panel-block" href={`/detail/${item._id.toString().slice(-4)}`} key={key}>
                        <i className="fas fa-book" aria-hidden="true" ></i>
                        {item.title}
                        <br />
                        {map}
                    </a >
                )
            })
        )
    }

    render() {

        const { topic } = this.props

        return (
            <div className="column is-half is-offset-one-quarter">
                <nav className="panel">
                    <div className="panel-heading">
                        <div className="level">
                            <div className="level-left">
                                <p>test</p>
                            </div>
                            <div className="level-right">
                                <a href='/newTissue'><button className="button is-success">New tissue</button></a>
                            </div>
                        </div>
                    </div>
                    {
                        this.renderTopic(topic)
                    }
                </nav>
            </div>
        )
    }
}

export default Topic