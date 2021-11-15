import React, {Component} from 'react'
import axios from '../axios'

export default class users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`/users/?_limit=4'`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.map(u =>
                    <div className="card" >
                        <div className="status_parent">
                            <div className="pill trackstatus offtrack">Off Track</div>
                            <div className="pill impactstatus">High Impact</div>
                        </div>
                        <h2>Missed payments</h2>
                        <p>Missed payments on your accounts can damage your score</p>
                        <div className="pill impactstatus impactstatusmobile">High Impact</div>
                    </div>
                    )

                    this.setState({
                        users
                    })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    render() {

        return (
                <div className="row">
                    {this.state.users}
                </div>
        )
    }
}
