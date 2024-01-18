import './App.css';

function Button({color,size,name, click}){

    return(
        <>
            <button onClick={()=>click()} style={{backgroundColor:color, fontSize:size}}>{name}</button>
        </>
    )
}



export default Button 