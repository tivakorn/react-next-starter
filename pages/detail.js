import React, { Component } from 'react'
import dateFormat from 'dateformat'
import axios from 'axios'

class Detail extends Component {

    static async getInitialProps({ query }) {

        const { id } = query

        const result = await axios.get(`http://localhost:3000/tissue/get_comment?id=${id}`)
        const data = result.data.data

        return {
            detail: data
        }
    }


    commentRender = detail => {
        return (
            detail.map((item, key) => {
                return (
                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-48x48">
                                <img src={item.member.avater} />
                            </p>
                        </figure>

                        <div class="media-content">
                            <div class="content">
                                <article class="message is-dark">
                                    <div class="message-header">
                                        {item.member.name_member}
                                    </div>
                                    <div class="message-body">
                                        <p>
                                            {item.detail}
                                            <br />
                                            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                        </p>
                                    </div>
                                </article>

                            </div>
                        </div>
                    </article>
                )
            })
        )
    }

    render() {
        const { detail } = this.props

        let date = dateFormat(detail[0].created_date, "dddd, mmmm dS, yyyy, h:MM:ss TT")

        return (
            <div className="column is-half is-offset-one-quarter">
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <span className="title is-3 is-spaced">{`${detail[0].title} #${detail[0].topic_id}`}</span>
                                <br />
                                {`${detail[0].member.name_member} ${detail[0].status} on ${date}`}
                                <br />
                            </p>
                        </div>

                        {
                            this.commentRender(detail)
                        }

                    </div>
                </article>

                <article class="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                            <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="field">
                            <p class="control">
                                <textarea class="textarea" placeholder="Add a comment..." />
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button">Post comment</button>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default Detail