import './styles/styles.css';


function Volunteer() {
  return (
<>
<body>
    <div className = "wrapper">
        <form action="">
            <h1>Sign up for Event</h1>
            <div className="input-box">
                <input type="text" placeholder="Email" value="" id="email" required/>
                <box-icon type='solid' name='user-circle'></box-icon>
            </div>

            <div className="input-box">
                <input type="text" placeholder="Name" value="" id="name" required/>
                <box-icon type='solid' name='user-circle'></box-icon>
            </div>

            <div className="input-box">
                <input type="text" placeholder="Phone Number" value="" id="phoneNumber" required/>
                <box-icon type='solid' name='user-circle'></box-icon>
            </div>

            <input type="submit" className="sub" value="submit" id="submit"/>

        </form>
    </div>
</body>
</>
  );
}

export default Volunteer;