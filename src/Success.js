
import Button from './Button'


function Success({gotoLogin}) {



    return(
        <div className="ID">
            <Button color="orange" name={"Back"} click={gotoLogin}/>
  
        </div>
    )
}

export default Success