import React from 'react';
 
export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.onNombreChange = this.onNombreChange.bind(this);
        this.onNotaChange = this.onNotaChange.bind(this);
        this.onAsignaturaChange = this.onAsignaturaChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
 
        this.state = {
            Nombre: props.Post ? props.Post.Nombre : '',
            Nota: props.Post ? props.Post.Nota : '',
            Asignatura: props.Post ? props.Post.Asignatura : '',
 
            error: ''
        };
    }
 
    onNombreChange(e) {
        const Nombre = e.target.value;
        this.setState(() => ({ Nombre: Nombre }));
    }
 
    onNotaChange(e) {
        const Nota = e.target.value;
        this.setState(() => ({ Nota: Nota }));
    }
 
    onAsignaturaChange(e) {
        const Asignatura = e.target.value;
        this.setState(() => ({ Asignatura: Asignatura }));
    }
 
 
    onSubmit(e) {
        e.preventDefault();
 
        if (!this.state.Nombre || !this.state.Nota || !this.state.published) {
            this.setState(() => ({ error: 'Please set Nombre & Nota & Asignatura' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitPost(
                {
                    Nombre: this.state.Nombre,
                    Nota: this.state.Nota,
                    Asignatura: this.state.Asignatura
                }
            );
        }
    }
 
    render() {
        return (
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className='add-Post-form'>
 
                    <input type="text" placeholder="Nombre" autoFocus
                        value={this.state.Nombre}
                        onChange={this.onNombreChange} />
                    <br />
 
                    <input type="text" placeholder="Nota"
                        value={this.state.Nota}
                        onChange={this.onNotaChange} />
                    <br />
 
                    <textarea placeholder="Asignatura"
                        value={this.state.Asignatura}
                        onChange={this.onAsignaturaChange} />
                    <br />
 
                    <button>Add Post</button>
                </form>
            </div>
        );
    }
}