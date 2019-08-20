import React, { Component } from 'react'

class Index extends Component {
    render() {
        return (
            <div>
                <div className="column is-half is-offset-one-quarter">
                    <nav className="panel">
                        <p className="panel-heading">
                            <div className="level">
                                <div className="level-left">
                                    <p>test</p>
                                </div>

                                <div className="level-right">
                                    <button className="button is-success">Success</button>
                                </div>
                            </div>
                        </p>
                        <a className="panel-block">
                            <i className="fas fa-book" aria-hidden="true"></i>
                            bulma
                        </a>
                        <a className="panel-block">
                            <i className="fas fa-book" aria-hidden="true"></i>
                            bulma
                        </a>
                        <a className="panel-block">
                            <i className="fas fa-book" aria-hidden="true"></i>
                            bulma
                        </a>
                        <a className="panel-block">
                            <i className="fas fa-book" aria-hidden="true"></i>
                            bulma
                        </a>
                        <a className="panel-block">
                            <i className="fas fa-book" aria-hidden="true"></i>
                            bulma
                        </a>
                    </nav>
                </div>

                <div className="column is-4 is-offset-1">
                    <article className="message is-dark">
                        <div className="message-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </div>
                    </article>
                </div>
            </div >
        )
    }
}

export default Index