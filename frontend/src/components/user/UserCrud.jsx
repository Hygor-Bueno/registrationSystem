import React,{Component} from 'react';
import Main from '../templates/Main';
import axios from 'axios';

const headerProps ={
    icon:"users",
    title:"Usuários",
    subtitle:"Cadastro de usuários: Incluir,Listar,Alterar e Excluir!"
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user:{name:"",email:""},
    list:[]
}

export default class userCrud extends Component {
    state = {...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp =>{
            this.setState({list:resp.data})
        })
    }
 
    render(){
        console.log(this.state.list)
        return(
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
    clear(){
        this.setState({user:initialState.user})
    }
    save(){

        const user= this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}`:baseUrl;
      
        // fetch(url,{
        //     method: method,
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(user)
        // })
        // .then(response=> response.json())
        // .then(body =>{
        //     if(!body.name) throw new Error("Falha...")
        //     const list = this.getUpdatedList(body.user);
        //     this.setState({user:initialState.user,list})
        // }).catch(error => console.error(error))

        axios[method](url,user).then(response=>{
            console.log(response)
            const list = this.getUpdatedList(response.data);
            this.setState({user:initialState.user,list})
        })
    }
    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id);
        list.unshift(user);
        return list;
    }
    updateField(event){
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({user})
    }
    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label> Nome </label>
                            <input type="text" className="form-control" name="name" value={this.state.user.name} onChange={e=>this.updateField(e)} placeholder="Digite um nome..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label> E-mail </label>
                            <input type="text" className="form-control" name="email" value={this.state.user.email} onChange={e=>this.updateField(e)} placeholder="Digite um e-mail..."/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button onClick={()=> this.save()} className="btn btn-primary">salvar</button>
                        <button onClick={()=> this.clear()} className="btn btn-secundary ml-2">Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }
    
    renderTable(){

    }
    renderRow(){

    }
}
