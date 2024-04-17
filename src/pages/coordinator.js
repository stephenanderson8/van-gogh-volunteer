import './styles/styles.css';

function coordinator() {
    return (
  <>
    <body>
        <div className = "wrapper">
            <form action="">
                <h1>Welcome Event Coordinator</h1>
                <h2>Submit an Event:</h2>
                <div className="input-box">
                    <input type="text" placeholder="Event Name" value="" id="ename" required/>
                    <box-icon type='solid' name='user-circle'></box-icon>
                </div>

                <div className="input-box">
                    <input type="date" placeholder="Date" value="" id="edate" required/>
                    <box-icon type='solid' name='user-circle'></box-icon>
                </div>

                <input type="submit" className="sub" value="submit" id="submit"/>
                <h2>See volunteers:</h2>
                <input type="button" className="sub" value="Get Volunteers" id="getVolunteer"/>
            </form>
        </div>
    </body>
  </>
    );
  }
  
  export default coordinator;