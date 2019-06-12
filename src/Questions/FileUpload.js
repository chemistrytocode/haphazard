import React from 'react'


const FileUpload = (props) => {
    return (<div class="field">
        <label>{props.label}</label>
        <input type="File" name={props.label} />
    </div>)
}

export default FileUpload


    // class UploadFile extends Component {
    //         state = { input: '' }
    
    //     render(props) {
    //         return (
    //             <div class="field">
    //                 <label>{props.label}</label>
    //                 <input 
    //                     type="file"
    //                     name={props.label}
    //                     placeholder={props.label}
    //                     value={this.state.input} 
    //                     onChange={e => this.setState({ term: e.target.value })}
    //                 />
    //             </div>)
    //     }
    // }