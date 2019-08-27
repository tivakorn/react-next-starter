import React, { Component } from 'react'
import axios from 'axios'

// Coponents 
import Topic from '../src/components/Topic'

class Index extends Component {

    static async getInitialProps() {

        const result = await axios.get('http://localhost:3000/tissue/get_topic')
        const data = result.data.data
        
        return {  
            topic: data
        }
    }

    render() {

        const { topic } = this.props

        return (
            <div>
                <Topic topic={topic}/>
            </div>
        )
    }
}

export default Index 