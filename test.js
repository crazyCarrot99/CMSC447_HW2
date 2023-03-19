//CMSC 447- HW 2
//Spring 2023- Rajat Shetty
//Professor Nick Allgood & TA Nancy Tyagi

//const user = {
    /*name: 'Rajat',
    imageUrl: 'https://imgur.com/dGUhNQC',
    imageSize: 90,
  };*/
  
  //export default function JsSpace() {
    //return (
      //<>
        /*<h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Displaying pic of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
    return (
      <button>
        Access database here!
      </button>
    );
    return (
      <div>
        <h1>CURD (Create, Update, Read, Delete) app</h1>
        <JsSpace />    
      </div>
    );
      </>
    );
  }

    return (
    <div className="React App">
      <header className="App-header">
        <h1>University admitted:</h1>

        <div>
          <form method="post" id="addform">
            <label for="name">Add names:</label>
            <input type="text" id="name" name="name"></input>
            
            <label for="id">Add unique ID:</label>
            <input type="text" id="id" name="id"></input>

            <label for="score">Ad Points:</label>
            <input type="text" id="score" name="score"></input>
          </form>

          <button onClick={addStudent} style={{
            textAlign: 'center',
            width: '75px',
            border: '1px solid black',
            borderRadius: '5px'
          }}>Add Student To Database</button>
        </div>

        <div>
          <form>
            <label for="id">Remove ID:</label>
            <input type="text" id="id" name="id"></input>
          </form>

          <button onClick={delStudent} style={{
            textAlign: 'center',
            width: '75px',
            border: '1px solid black',
            borderRadius: '5px'
          }}>Delte Student From Database</button>
        </div>

        <div>
          <table style={{border:"1px solid black"}}>
            <tr>
              <th style={{width:"10em",border:"1px solid black"}}>Name</th>
              <th style={{width:"3em", border:"1px solid black"}}>Id</th>
              <th style={{width:"5em", border:"1px solid black"}}>Points</th>
            </tr>
            </table>
        </div>
      </header>
    </div>
    );
  }*/

function JsClick() {
    return (
      <button>
        Access database here!
      </button>
    );
  }

  export default function JsHi() {
    return (
      <div>
        <h1>CURD (Create, Update, Read, Delete) app</h1>
        <JsClick />    
      </div>
    );
  }