import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status  : this.props.status
    };
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };
    
    /*localStateStatus = () => {
        let sSstatus = (!this.state.status) ? this.state.status = '----' : this.state.status;
        return sSstatus;
    };*/
    
    render() {
        return <div>
            {!this.state.editMode &&
            <div>
                <span
                    onDoubleClick={this.activateEditMode}>
                    {this.props.status || '-no status-'}</span>
            </div>}
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                       value={this.state.status}/>
            </div>}
        </div>;
    }
}
;

export default ProfileStatus;