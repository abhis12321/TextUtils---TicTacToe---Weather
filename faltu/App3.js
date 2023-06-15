const data = [
    {id:'01', name:'Abhay'},
    {id:'02', name:'Avinav Omer'},
    {id:'03' , name: 'Avinav Verma'},
    {id:'04' , name:'Abhishek'}
]
let info = data.map(user => 
        <li key = {user.id} style = {{
            color: user.isFruit ? 'magenta' : 'blue'
          
        }}>{user.name}</li> 
    );


export default function App(){
    return(
        <ul>{info}</ul>
    )
}