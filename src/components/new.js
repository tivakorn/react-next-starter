import React, { Component } from 'react'

class New extends Component {
    render() {
        return (
            <div className="column is-5 is-offset-3">
                <div className="panel">
                    <p className="panel-block">
                        <input className="input" type="text" placeholder="Text input" />
                    </p>
                    <p className="panel-block">
                        <textarea className="textarea has-fixed-size" placeholder="Fixed size textarea" type='text' />
                    </p>
                    <p className="panel-block">
                        <div>
                            <button className="button is-success ">Success</button>
                        </div>
                    </p>
                </div>
            </div>
        )
    }
}

export default New