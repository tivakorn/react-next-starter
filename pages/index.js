import React, { Component } from 'react'
import Link from 'next/link'

class Index extends Component {
    static async getInitialProps() {

        const deta = {
            success: true,
            data: [
                {
                    titlt: 'a1',
                    comment: 'dkaldksa;lkdal;skdlaskdl;akdlakad',
                    date: new Date
                },
                {
                    titlt: 'a2',
                    comment: 'dkaldksa;lkdjkkljlkjkljkjkljlkkljlkjkljkljlkjlkjkljlkjkljlkjlkjkljlkjkljlkjlkjkljlkjlkjlkjlkjlkjlkljljljlal;skdlaskdl;akdlakad',
                    date: new Date
                },
                {
                    titlt: 'a3',
                    comment: 'dkaldksa;lkdal;skdlaskdl;akdlakad',
                    date: new Date
                },
                {
                    titlt: 'a4',
                    comment: 'dkaldksa;lkdal;skdlaskdl;akdlakad',
                    date: new Date
                },
                {
                    titlt: 'a4',
                    comment: 'dkaldksa;lkdal;skdlaskdl;akdlakad',
                    date: new Date
                },
            ]
        }

        return {
            res: deta.data
        }
    }

    render() {
        const { res } = this.props
        return (
            <div>
                <div className="column is-half is-offset-one-quarter">
                    <nav className="panel">
                        <div className="panel-heading">
                            <div className="level">
                                <div className="level-left">
                                    <p>test</p>
                                </div>

                                <div className="level-right">
                                    <Link href='/newTissue'><button className="button is-success">New tissue</button></Link>
                                </div>
                            </div>
                        </div>
                        {
                            res.map((item, key) => {
                                return (
                                    <a className="panel-block" key={key}>
                                        <i className="fas fa-book" aria-hidden="true" ></i>
                                        {item.titlt}
                                    </a>
                                )
                            })
                        }
                    </nav>
                </div>

                <div className="column is-4 is-offset-1">
                    {
                        res.map((item, key) => {
                            return (
                                <article className="message is-dark" key={key}>
                                    <div className="message-body" >
                                        {item.comment}
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}

export default Index