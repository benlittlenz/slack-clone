import React from 'react';
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react';
import firebase from '../../firebase';
import { sign } from 'crypto';

class UserPanel extends React.Component {
    dropDownOptions = () => [
        {
            key: "user",
            text: <span> Signed in as <strong>User</strong></span>,
            disabled: true
        },
        {
            key: "avatar",
            text: <span>Change Avatar</span>
        },
        {
            key: "user",
            text: <span onClick={this.handleSignout}>Sign out</span>
        }
    ]

    handleSignout = () => {
        // const signout = firebase.auth().signout
        // if(signout) console.log('signout')
        firebase
            .auth()
            .signOut()
            .then(() => console.log('signout'))
    }

    render() {
        return (
            <Grid style={{background: '#4c3c4c' }}>
                <Grid.Column>
                    <Grid.Row style={{pdding: '1.2em', margin: 0 }}>
                        <Header inverted floated="left" as="h2">
                        <Icon name="code" />
                            <Header.Content>
                                DevChat
                            </Header.Content>
                        </Header>
                    </Grid.Row>
                    <Header style={{ padding: '0.25em'}} as="h4" inverted>
                        <Dropdown trigger={<span>User</span>} options={this.dropDownOptions()} />
                    </Header>
                </Grid.Column>
            </Grid>
        )
    }
}

export default UserPanel;