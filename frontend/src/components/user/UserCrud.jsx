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
    render(){
        return(
            <Main {...headerProps}>
                Cadastro de Usuários...
            </Main>
        )
    }
    clear(){
        this.setState({user:initialState.user})
    }save(){

        const user= this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}`:baseUrl;

        // fetch(url,{
        //     method: method,
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(this.state)
        // })
        // .then(response=>response.json())
        // .then(body =>{
        //     if(!body) throw new Error("Falha...")
        //     console.log(body);
        // }).catch(error => console.error(error))

        axios[method](url,user).then(response=>{
            const list = this.getUpdatedList(response.data);
            this.setState({user:initialState.user,list})
        })
    }
    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id);
        list.unshift(user);
        return list;
    }
}
