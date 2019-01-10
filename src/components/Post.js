import React from 'react';
import Comment from './Comment';
import { comment } from 'postcss-selector-parser';

export default class Post extends  React.Component {
   //interface
   //o método constructor será executado
   // toda vez que um post for criado
    constructor(props){
        //classe pai do React
        super(props);
        //este estado
        //aqui ficaram gravadas todas
        //variaveis que forem utilizadas no post
        this.state = {
            comments: [ ],
            newComentText: ''
        };
       //quando o formulario for enviado
       //o estado será mudado
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleTextChange= this.handleTextChange.bind(this);
    }
    //função para renderizar quando houver um submit
    handleSubmit(e){
       //alterar o estado da aplicação
       //baseado no novo comentario
       this.setState({
           comments:[
               ...this.state.comments,{text: this.state.newComentText}
           ]
       });
       //lipar o input do comentário
       this.setState({ newComentText:''});

        //garantir recarregamento da página
        e.preventDefault();

    }
    handleTextChange(e){

        this.setState({newComentText: e.target.value});
    }

    render(){
    return(
    <div>
     <h2>{this.props.title}</h2>
       
       <form onSubmit={this.handleSubmit}>
         <input value={this.state.newComentText} 
         onChange={this.handleTextChange}
         />

        <button type="submit">Comentar</button>
       </form>
        {this.state.comments.map((comment,index)=>{
        return <Comment key={index} text={comment.text}/>
        })}
    </div>
        );

    }
}

