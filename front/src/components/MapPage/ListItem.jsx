import React, { Component } from 'react'
import { ListGroupItem } from 'react-bootstrap'

class ListItem extends Component {

    render() {
        const lists = this.props.lists
        
        return(
            lists.map((item)=>{
                return(
                    <div>
                        <ListGroupItem>
                            {item}
                        </ListGroupItem>
                    </div>
                )
            })
        )
    }
}

export default ListItem