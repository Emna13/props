import React from "react";
import { Card } from "react-bootstrap";
import image from "../image.png";
import {Button} from "react-bootstrap"

const Profile = ({ profileList ={name:'Gomycode'} }) => {
    const handleClick=(name)=>(alert(`${name}`))
  return (
    <div>
      {profileList.map((el, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={image}
            style={{ width: "300px", height: "200px" }}
            alt="myImage"
          />
          <Card.Body>
            <Card.Title style={{ color: "red", textAlign: "center" }}>
              {el.name}
            </Card.Title>
            <Card.Title style={{ textAlign: "center" }}>
              {el.profession}
            </Card.Title>
            <Card.Text className='bio'>{el.bio}</Card.Text>
            <Button variant="link"onClick={()=>handleClick(el.name)} style={{paddingLeft:"34%"}}>Click Me</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Profile;
